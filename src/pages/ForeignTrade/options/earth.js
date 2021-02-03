import MapSkin from "@/assets/foreignTrade/map.png";

let THREE = require("three");
export default function initEarth (earthRef) {
  const colorList = [0xbcc1cf, 0xe19455, 0x2ba8eb];
  const scene = new THREE.Scene();
  const radius = 60;
  let global, camera, renderer;
  const globalLineBalls = new THREE.Object3D();
  createBascMap();
  createLines();
  animate();

  function createBascMap() {
    var point = new THREE.PointLight(0xffffff);
    point.position.set(400, 200, 300);
    scene.add(point);

    var ambient = new THREE.AmbientLight(0x444444);
    scene.add(ambient);

    var width = earthRef.current.clientWidth;
    var height = earthRef.current.clientHeight;
    var k = width / height;

    camera = new THREE.PerspectiveCamera(45, k, 1, 1000);
    camera.position.set(0, 0, 175);
    camera.lookAt(scene.position);

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0xeeeeee, 0.0);

    earthRef.current.appendChild(renderer.domElement);

    var geometry = new THREE.SphereGeometry(radius, radius, radius);
    var loader = new THREE.TextureLoader();
    loader.load(MapSkin, function (texture) {
      var material = new THREE.MeshLambertMaterial({ map: texture });
      global = new THREE.Mesh(geometry, material);
      scene.add(global);
    });
  }
  function getSplinePoints(positions) {
    const [start, end] = positions;
    const points = [];
    points[0] = new THREE.Vector3(start.x, start.y, start.z);

    points[8] = new THREE.Vector3(end.x, end.y, end.z);
    const getPoint = (point1, point2) => {
      const tempMiddle = new THREE.Vector3(
        0.5 * (point1.x + point2.x),
        0.5 * (point1.y + point2.y),
        0.5 * (point1.z + point2.z)
      );
      const tempMiddleLength = Math.sqrt(
        tempMiddle.x ** 2 + tempMiddle.y ** 2 + tempMiddle.z ** 2
      );
      const rate = (radius + 10) / tempMiddleLength;
      const middle = new THREE.Vector3(
        rate * tempMiddle.x,
        rate * tempMiddle.y,
        rate * tempMiddle.z
      );
      return middle;
    };

    points[4] = getPoint(points[0], points[8]);
    points[2] = getPoint(points[0], points[4]);
    points[1] = getPoint(points[0], points[2]);
    points[3] = getPoint(points[2], points[4]);
    points[6] = getPoint(points[4], points[8]);
    points[5] = getPoint(points[4], points[6]);
    points[7] = getPoint(points[6], points[8]);

    return points;
  }
  function createLine(positions, color) {
    const lineBallList = new THREE.Object3D();
    const lineCurve = new THREE.CatmullRomCurve3(
      getSplinePoints(positions),
      false
    );
    const lineGeometry = new THREE.BufferGeometry();
    const points = lineCurve.getPoints(50);
    lineGeometry.setFromPoints(points);
    const matericalLine = new THREE.LineBasicMaterial({ color });
    const line = new THREE.Line(lineGeometry, matericalLine);

    for (let ballIndex = 0; ballIndex < 100; ballIndex += 1) {
      const ballGeomtry = new THREE.SphereGeometry(0.3);
      const materialBall = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 1 - ballIndex / (100 + 10),
      });
      const lineBall = new THREE.Mesh(ballGeomtry, materialBall);
      lineBall.originOpacity = 1 - ballIndex / (100 + 10);
      lineBallList.add(lineBall);
    }

    lineBallList.curve = lineCurve;
    lineBallList.pos = Math.random();
    return {
      line,
      lineBallList,
    };
  }
  function randomLine(lineNum) {
    const randomPos = () => [
      Math.random() * 360 - 180,
      Math.random() * 180 - 90,
    ];
    const mockData = [];
    Array.from({ length: lineNum }, (v, k) => {
      mockData.push({
        line: [randomPos(), randomPos()],
      });
      return mockData;
    });
    return mockData;
  }
  function createLines() {
    const mockData = randomLine(15);
    mockData.forEach((line, index) => {
      const attackLine = createLine(
        line.line.map((item) => ({
          ...createPosition(item),
        })),
        new THREE.Color(colorList[index % 3])
      );
      globalLineBalls.add(attackLine.lineBallList);
    });
    scene.add(globalLineBalls);
  }

  function createPosition(lnglat) {
    const spherical = new THREE.Spherical();
    spherical.radius = 60;
    const lng = lnglat[0];
    const lat = lnglat[1];
    const theta = (lng + 90) * (Math.PI / 180);
    const phi = (90 - lat) * (Math.PI / 180);
    spherical.phi = phi;
    spherical.theta = theta;
    const position = new THREE.Vector3();
    position.setFromSpherical(spherical);
    return position;
  }

  function animate() {
    requestAnimationFrame(animate);
    const lineBalls = globalLineBalls.children;
    lineBalls.forEach((balls) => {
      const ballCurve = balls.curve;
      const ballList = balls.children;
      const ballPos = balls.pos;
      if (ballPos < 1.2) {
        ballList.forEach((ball, index) => {
          const newPos =
            ballPos - index * 0.002 > 0 ? ballPos - index * 0.002 : 0;
          if (newPos >= 1) {
            ball.opacity = 0;
          } else {
            ball.opacity = ball.originOpacity;
            const ballPosition = ballCurve.getPointAt(newPos);
            ball.position.x = ballPosition.x;
            ball.position.y = ballPosition.y;
            ball.position.z = ballPosition.z;
          }
          ball.neepsUpdate = true;
        });
        balls.pos = ballPos + 0.008;
      } else {
        balls.pos = 0;
      }
    });
    if (global) {
      // global.rotation.x  = - 0.1;
      global.rotation.y += 0.005;
      globalLineBalls.rotation.y += 0.005;
    }

    renderer.render(scene, camera);
  }
};