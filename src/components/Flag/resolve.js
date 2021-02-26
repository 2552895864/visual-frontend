import get from "lodash/get";
export default function resolve(originData) {
  const data = get(originData, "result.result", []);
  if (data.length) {
    const base = Math.ceil(data.length / 2);
    const arrs = new Array(base).fill({});
    const results = data.reduce((p, c) => {
      p.push({
        countryName: c.area,
        countryNameAbbr: c.countryCode,
        value: c.goodsCount,
        rate: `${c.goodsCountRate}%`,
      });
      return p;
    }, []);
    for (let i = 0; i < arrs.length; i++) {
      arrs[i] = {
        front: results[i + base],
        back: results[i],
      };
    }
    return arrs;
  }
  return data;
}
