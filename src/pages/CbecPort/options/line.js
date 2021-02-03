import { Chart, registerShape } from "@antv/g2";
const barColor = ["l(90) 0:#2adbf5 1:#476df4", "l(90) 0:#f1cb34 1:#c5a113"];

export default function initChart({ containerId: container, data, duration }) {
  function getFillAttrs(cfg) {
    return {
      ...cfg.defaultStyle,
      ...cfg.style,
      fill: cfg.color,
      fillOpacity: cfg.opacity,
    };
  }
  function getRectPath(points) {
    const path = [];
    for (let i = 0; i < points.length; i++) {
      const point = points[i];
      if (point) {
        const action = i === 0 ? "M" : "L";
        path.push([action, point.x, point.y]);
      }
    }
    const first = points[0];
    path.push(["L", first.x, first.y]);
    path.push(["z"]);
    return path;
  }

  registerShape("interval", "top", {
    draw(cfg, container) {
      const attrs = getFillAttrs(cfg);
      let path = getRectPath(cfg.points);
      path = this.parsePath(path); // 将 0 - 1 的值转换为画布坐标
      const radius = (path[2][1] - path[1][1]) / 2;
      const temp = [];
      temp.push(["M", path[0][1], path[0][2]]);
      temp.push(["L", path[1][1], path[1][2] + radius]);
      temp.push([
        "A",
        radius,
        radius,
        90,
        0,
        1,
        path[1][1] + radius,
        path[1][2],
      ]);
      temp.push(["L", path[2][1] - radius, path[2][2]]);
      temp.push([
        "A",
        radius,
        radius,
        90,
        0,
        1,
        path[2][1],
        path[2][2] + radius,
      ]);
      temp.push(["L", path[3][1], path[3][2]]);
      temp.push(["Z"]);

      const group = container.addGroup();
      group.addShape("path", {
        attrs: {
          ...attrs,
          path: temp,
        },
      });

      return group;
    },
  });

  const chart = new Chart({
    container,
    autoFit: true,
  });
  chart.data(data);
  chart.scale({
    counts: {
      min: 150,
      max: 400,
      nice: true,
      alias: "单量",
    },
    value: {
      min: 15000,
      max: 40000,
      alias: "货值",
    },
    time: {
      type: "cat",
    },
  });
  chart.axis("counts", {
    grid: null,
    line: {
      style: {
        fill: "rgba(255,242,233,0.6)",
        lineWidth: 2,
      },
    },
    label: {
      style: {
        fontSize: 24,
        fontFamily: "SourceHanSansCN-Normal",
        fill: "#d9fcff",
        fillOpacity: 0.5,
      },
    },
  });
  chart.axis("value", {
    grid: {
      line: {
        style: {
          fill: "#ffffff",
          fillOpacity: 0.2,
          lineWidth: 1,
          lineDash: [1, 5],
        },
      },
    },
    line: {
      style: {
        fill: "rgba(255,242,233,0.6)",
        lineWidth: 2,
      },
    },
    label: {
      style: {
        fontSize: 24,
        fontFamily: "SourceHanSansCN-Normal",
        fill: "#d9fcff",
        fillOpacity: 0.5,
      },
    },
  });
  chart.axis("time", {
    grid: null,
    line: {
      style: {
        fill: "rgba(255,242,233,0.6)",
        lineWidth: 2,
      },
    },
    label: {
      offset: 30,
      style: {
        fontSize: 24,
        fontFamily: "SourceHanSansCN-Normal",
        fill: "#d9fcff",
        fillOpacity: 0.5,
      },
    },
  });
  chart.tooltip({
    shared: true,
  });
  chart
    .interval()
    .position("time*value")
    .color("time", (xVal) => {
      const index = data.findIndex((i) => i.time === xVal);
      return barColor[index % 2];
    })
    .size(20)
    .shape("top")
    .animate({
      appear: {
        easing: "easeQuadIn",
        animation: "scale-in-y",
        duration,
      },
    });
  chart
    .area()
    .position("time*counts")
    .color("#1adcff")
    .shape("smooth")
    .animate({
      appear: {
        easing: "easeQuadIn",
        animation: "fade-in",
        duration,
      },
    });
  chart
    .line()
    .position("time*counts")
    .color("#1adcff")
    .size(3)
    .shape("smooth")
    .animate({
      appear: {
        easing: "easeQuadIn",
        animation: "path-in",
        duration,
      },
    });

  chart.interaction("active-region");
  chart.legend(false);
  chart.render();
  return chart;
}
