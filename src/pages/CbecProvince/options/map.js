import Pubsub from "pubsub-js";
import provinceGeometry from "./map.json";

const THREE = require("three");

const rotationX = -0.9;
const rotationY = -0.02;
const rotationZ = 0.15;
// 渲染器
let renderer = null;
// 相机
let camera = null;
// 场景
let scene = null;
// 包裹画布dom
let dom;
// 地图正面颜色
const faceColor = 0x122b4d;
// 地图侧边颜色
const sideColor = 0x265b97; //265A96
// 地图描边颜色
const borderColor = 0x1b80e3; // 004e75
//点击浮动起来的表面颜色
const activeFaceColor = 0x1b4473;
//点击浮动起来的侧面颜色
const activeBorderColor = 0xab7f1e;
// 地图缩放比例
const shapeScaleSize = 0.7;
// 计算平均每格占比
let average = 0;

const averageX = 112.23167861914164;
const averageY = 31.887365866279985;
let lastActiveArea;

// 绘制地图函数
const drawShape = function (pos, shapeScaleSize) {
  const shape = new THREE.Shape();
  shape.moveTo(
    ((pos[0][0] - averageX) * average) / shapeScaleSize,
    ((pos[0][1] - averageY) * average) / shapeScaleSize
  );
  pos.forEach(function (item) {
    shape.lineTo(
      ((item[0] - averageX) * average) / shapeScaleSize,
      ((item[1] - averageY) * average) / shapeScaleSize
    );
  });
  return shape;
};
// ExturdeGeometry配置参数
const options = {
  depth: 2, // 定义图形拉伸的深度，默认100
  steps: 0, // 拉伸面方向分为多少级，默认为1
  bevelEnabled: true, // 表示是否有斜角，默认为true
  bevelThickness: 0, // 斜角的深度，默认为6
  bevelSize: 0, // 表示斜角的高度，高度会叠加到正常高度
  bebelSegments: 0, // 斜角的分段数，分段数越高越平滑，默认为1
  curveSegments: 0, // 拉伸体沿深度方向分为多少段，默认为1
};
const group = new THREE.Group();
const group1 = new THREE.Group();
const lineGroup = new THREE.Group();

// 计算绘制地图参数函数
const drawShapeOptionFun = function () {
  provinceGeometry.features.forEach((geo) => {
    geo.geometry.coordinates.forEach((item) => {
      item.forEach((city) => {
        // console.log('citu:',geo.properties.name);
        drawLine(city);
        drawExtrude(
          drawShape(city, shapeScaleSize),
          group,
          faceColor,
          sideColor,
          geo.properties.name
        );
        drawExtrude(
          drawShape(city, shapeScaleSize),
          group1,
          activeFaceColor,
          activeBorderColor,
          geo.properties.name
        );
      });
    });
  });
};
const drawExtrude = function (shapeObj, group, faceColor, sideColor, city) {
  const geometry = new THREE.ExtrudeGeometry(shapeObj, options);
  const material1 = new THREE.MeshPhongMaterial({
    color: faceColor,
  });
  let material2;
  if (faceColor === window.faceColor) {
    material2 = new THREE.MeshPhongMaterial({
      color: sideColor,
    });
  } else {
    material2 = new THREE.MeshPhongMaterial({
      color: sideColor,
      polygonOffset: true,
      polygonOffsetFactor: 1.0,
      polygonOffsetUnits: 4.0,
    });
  }

  let shapeGeometryObj = new THREE.Mesh(geometry, [material1, material2]);
  shapeGeometryObj.name = city;
  group.add(shapeGeometryObj);
};
const drawLine = function (posArr) {
  let geometry1 = new THREE.Geometry();
  let geometry2 = new THREE.Geometry();
  posArr.forEach((item) => {
    geometry1.vertices.push(
      new THREE.Vector3(
        ((item[0] - averageX) * average) / shapeScaleSize,
        ((item[1] - averageY) * average) / shapeScaleSize,
        options.depth + 0.01
      )
    );
    geometry2.vertices.push(
      new THREE.Vector3(
        ((item[0] - averageX) * average) / shapeScaleSize,
        ((item[1] - averageY) * average) / shapeScaleSize,
        -1
      )
    );
  });
  let lineMaterial = new THREE.LineBasicMaterial({ color: borderColor });
  let lineMaterial2 = new THREE.LineBasicMaterial({ color: activeBorderColor });
  let line1 = new THREE.Line(geometry1, lineMaterial);
  let line2 = new THREE.Line(geometry2, lineMaterial2);
  lineGroup.add(line1);
  lineGroup.add(line2);
};

// 执行函数
const render = function (active) {
  renderer.render(scene, camera);
  requestAnimationFrame(render);
};
// let lastClick = null;

function handleClick(e) {
  // lastClick = e;
  const mouse = {};
  // console.dir(dom.clientWidth);
  //将鼠标点击位置的屏幕坐标转成threejs中的标准坐标,具体解释见代码释义
  mouse.x = (e.offsetX / dom.clientWidth) * 2 - 1;
  mouse.y = -(e.offsetY / dom.clientHeight) * 2 + 1;
  //新建一个三维单位向量 假设z方向就是0.5
  //根据照相机，把这个向量转换到视点坐标系
  const vector = new THREE.Vector3(mouse.x, mouse.y, 0.5).unproject(camera);

  //在视点坐标系中形成射线,射线的起点向量是照相机， 射线的方向向量是照相机到点击的点，这个向量应该归一标准化。
  const raycaster = new THREE.Raycaster(
    camera.position,
    vector.sub(camera.position).normalize()
  );

  //射线和模型求交，选中一系列直线
  const intersects = raycaster.intersectObjects(group1.children);
  if (intersects.length > 0) {
    //选中第一个射线相交的物体
    let SELECTED = intersects[0].object;
    // console.log(SELECTED);
    const move = function () {
      if (SELECTED === lastActiveArea) {
        if (SELECTED.position.z >= 0) {
          SELECTED.position.z -= 0.05;
          requestAnimationFrame(move);
        } else {
          lastActiveArea = null;
        }
      } else {
        if (SELECTED.position.z <= options.depth - 0.5) {
          SELECTED.position.z += 0.05;
          if (lastActiveArea && lastActiveArea.position.z > 0) {
            lastActiveArea.position.z -= 0.05;
          }
          requestAnimationFrame(move);
        } else {
          lastActiveArea = SELECTED;
        }
      }
    };
    move();
    Pubsub.publish("MapClick", {
      city: SELECTED.name,
      show: SELECTED.position.z < 1,
    });
  }
}

// 初始化函数
export default function initMap(targetDom) {
  dom = targetDom;
  if (dom.clientWidth > dom.clientHeight) {
    average = dom.clientHeight / 180;
  } else {
    average = dom.clientWidth / 360;
  }
  // 初始化场景
  scene = new THREE.Scene();
  // 初始化相机
  camera = new THREE.PerspectiveCamera(
    20,
    dom.clientWidth / dom.clientHeight,
    1,
    1000
  );
  // 设置相机位置
  camera.position.set(0, 0, 135);
  renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
  });
  const point = new THREE.PointLight(0xffffff);
  point.position.set(0, 0, 100);
  point.intensity = 2;
  point.power = 22;
  scene.add(point);
  // var ambient = new THREE.AmbientLight(0xffffff);
  // scene.add(ambient);
  // 设置窗口尺寸
  renderer.setSize(dom.clientWidth, dom.clientHeight);
  // 初始化控制器
  dom.appendChild(renderer.domElement);
  // 绘制地图
  drawShapeOptionFun();

  group.rotation.x = group1.rotation.x = lineGroup.rotation.x = rotationX;
  group.rotation.y = group1.rotation.y = lineGroup.rotation.y = rotationY;
  group.rotation.z = group1.rotation.z = lineGroup.rotation.z = rotationZ;
  group1.position.z = -0.05;
  scene.add(group);
  scene.add(group1);
  scene.add(lineGroup);
  // 渲染
  render();
  dom.addEventListener("click", handleClick);
}
