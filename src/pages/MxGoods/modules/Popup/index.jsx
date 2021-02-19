import React from "react";
import classnames from "classnames";
import styles from "./index.module.less";

const options = [
  {
    title: "武汉新港",
    className: styles.newPort,
  },
  {
    title: "天河机场",
    className: styles.tianhe,
  },
  {
    title: "黄石新港",
    className: styles.huangshi,
  },
  {
    title: "铁路口岸",
    className: styles.railway,
  },
  {
    title: "行政事业和政府性基金",
    className: styles.administration,
  },
];

function Popup({ className }) {
  const containerClass = classnames({
    [styles.container]: true,
    [className]: className,
  });

  return (
    <div className={containerClass}>
      <div className={styles.border}></div>
      <div className={styles.background}></div>
      <div className={styles.content}>
        <div className={styles.options}>
          {options.map(({ title, className }, index) => (
            <div className={styles.option} key={index}>
              <div className={styles.title}>{title}</div>
              <div className={classnames(className, styles.image)}></div>
            </div>
          ))}
        </div>
        <div className={styles.table}>
          <table cellPadding="0" cellSpacing="0">
            <tbody>
              <tr>
                <td height="40" width="44">
                  <span>
                    <strong>序号</strong>
                  </span>
                </td>
                <td width="77">
                  <span>
                    <strong>收费主体</strong>
                  </span>
                </td>
                <td colSpan="4" width="307">
                  <span>
                    <strong>收费项目</strong>
                  </span>
                </td>
                <td width="98">
                  <span>
                    <strong>收费标准</strong>
                  </span>
                </td>
                <td width="94">
                  <span>
                    <strong>计价单位</strong>
                  </span>
                </td>
                <td width="231">
                  <span>
                    <strong>服务内容</strong>
                  </span>
                </td>
                <td width="116">
                  <span>
                    <strong>备注</strong>
                  </span>
                </td>
              </tr>
              <tr>
                <td height="67" width="44">
                  <span>1</span>
                </td>
                <td width="77">
                  <span>港口</span>
                </td>
                <td colSpan="4" width="307">
                  <span>港口作业包干费</span>
                </td>
                <td width="98">
                  <span>详见附件</span>
                </td>
                <td width="94">
                  <span>详见附件</span>
                </td>
                <td width="231">
                  <span>
                    集装箱装卸船作业、查验、熏蒸、捆绑、平移、装拆箱及集装箱货物进出库等
                  </span>
                </td>
                <td width="116"></td>
              </tr>
              <tr>
                <td height="51" width="44">
                  <span>2</span>
                </td>
                <td width="77">
                  <span>港口</span>
                </td>
                <td colSpan="4" width="307">
                  <span>集装箱堆存保管费</span>
                </td>
                <td width="98">
                  <span>详见附件</span>
                </td>
                <td width="94">
                  <span>详见附件</span>
                </td>
                <td width="231">
                  <span>集装箱及货物堆存、仓储</span>
                </td>
                <td width="116"></td>
              </tr>
              <tr>
                <td rowSpan="3" height="111" width="44">
                  <span>3</span>
                </td>
                <td rowSpan="5" width="77">
                  <span>检验检疫企业单位</span>
                </td>
                <td rowSpan="3" width="58">
                  <span>熏蒸费</span>
                </td>
                <td colSpan="3" width="249">
                  <span>20英尺箱</span>
                </td>
                <td width="98">
                  <span>180</span>
                </td>
                <td width="94">
                  <span>元/箱</span>
                </td>
                <td rowSpan="3" width="231">
                  <span>
                    依据双方委托检疫处理协议，提供商业性自愿委托检疫处理服务，出具检疫处理结果
                  </span>
                </td>
                <td width="116"></td>
              </tr>
              <tr>
                <td colSpan="3" height="39" width="249">
                  <span>40英尺箱</span>
                </td>
                <td width="98">
                  <span>360</span>
                </td>
                <td width="94">
                  <span>元/箱</span>
                </td>
                <td width="116"></td>
              </tr>
              <tr>
                <td colSpan="3" height="36" width="249">
                  <span>熏蒸检疫处理帐幕式</span>
                </td>
                <td width="98">
                  <span>10.8</span>
                </td>
                <td width="94">
                  <span>元/立方米</span>
                </td>
                <td width="116"></td>
              </tr>
              <tr>
                <td rowSpan="2" height="75" width="44">
                  <span>4</span>
                </td>
                <td rowSpan="2" width="58">
                  <span>消毒费</span>
                </td>
                <td colSpan="3" width="249">
                  <span>20英尺箱</span>
                </td>
                <td width="98">
                  <span>18</span>
                </td>
                <td width="94">
                  <span>元/箱</span>
                </td>
                <td rowSpan="2" width="231">
                  <span>
                    依据双方委托检疫处理协议，提供商业性自愿委托检疫处理服务，出具检疫处理结果
                  </span>
                </td>
                <td width="116"></td>
              </tr>
              <tr>
                <td colSpan="3" height="36" width="249">
                  <span>40英尺箱</span>
                </td>
                <td width="98">
                  <span>36</span>
                </td>
                <td width="94">
                  <span>元/箱</span>
                </td>
                <td width="116"></td>
              </tr>
              <tr>
                <td rowSpan="13" height="520">
                  <span>5</span>
                </td>
                <td rowSpan="28" width="77">
                  <span>理货服务费</span>
                </td>
                <td rowSpan="13">
                  <span>理箱</span>
                </td>
                <td rowSpan="4" width="83">
                  <span>外贸</span>
                </td>
                <td rowSpan="2" width="83">
                  <span>20英尺集装箱</span>
                </td>
                <td width="83">
                  <span>空箱</span>
                </td>
                <td rowSpan="2">
                  <span>14</span>
                </td>
                <td rowSpan="2" width="94">
                  <span>元/箱</span>
                </td>
                <td rowSpan="13" width="231">
                  <span>
                    理箱：根据舱单/预配/海关放行信息，核对集装箱箱号、箱型、尺寸；检查铅封、箱体状况；指导和监督集装箱装卸船；协助船方做好配积载工作；记录和绘制本港实际集装箱积载图；办理集装箱交接签证；及时发送相关装卸船理货电子报文；及时准确发送理货报告、提供理货报告发送回执实时查询。
                  </span>
                </td>
                <td rowSpan="28" width="116"></td>
              </tr>
              <tr>
                <td height="40" width="83">
                  <span>重箱</span>
                </td>
              </tr>
              <tr>
                <td rowSpan="2" height="80" width="83">
                  <span>40英尺集装箱</span>
                </td>
                <td width="83">
                  <span>空箱</span>
                </td>
                <td rowSpan="2">
                  <span>28</span>
                </td>
                <td rowSpan="2" width="94">
                  <span>元/箱</span>
                </td>
              </tr>
              <tr>
                <td height="40" width="83">
                  <span>重箱</span>
                </td>
              </tr>
              <tr>
                <td rowSpan="4" height="160" width="83">
                  <span>内贸</span>
                </td>
                <td rowSpan="2" width="83">
                  <span>20英尺集装箱</span>
                </td>
                <td width="83">
                  <span>空箱</span>
                </td>
                <td rowSpan="2">
                  <span>10</span>
                </td>
                <td rowSpan="2" width="94">
                  <span>元/箱</span>
                </td>
              </tr>
              <tr>
                <td height="40" width="83">
                  <span>重箱</span>
                </td>
              </tr>
              <tr>
                <td rowSpan="2" height="80" width="83">
                  <span>40英尺集装箱</span>
                </td>
                <td width="83">
                  <span>空箱</span>
                </td>
                <td rowSpan="2">
                  <span>20</span>
                </td>
                <td rowSpan="2" width="94">
                  <span>元/箱</span>
                </td>
              </tr>
              <tr>
                <td height="40" width="83">
                  <span>重箱</span>
                </td>
              </tr>
              <tr>
                <td rowSpan="4" height="160" width="83">
                  <span>中转</span>
                </td>
                <td rowSpan="2" width="83">
                  <span>20英尺集装箱</span>
                </td>
                <td width="83">
                  <span>空箱</span>
                </td>
                <td rowSpan="2">
                  <span>7</span>
                </td>
                <td rowSpan="2" width="94">
                  <span>元/箱</span>
                </td>
              </tr>
              <tr>
                <td height="40" width="83">
                  <span>重箱</span>
                </td>
              </tr>
              <tr>
                <td rowSpan="2" height="80" width="83">
                  <span>40英尺集装箱</span>
                </td>
                <td width="83">
                  <span>空箱</span>
                </td>
                <td rowSpan="2">
                  <span>14</span>
                </td>
                <td rowSpan="2" width="94">
                  <span>元/箱</span>
                </td>
              </tr>
              <tr>
                <td height="40" width="83">
                  <span>重箱</span>
                </td>
              </tr>
              <tr>
                <td colSpan="3" height="40" width="249">
                  <span>单证费</span>
                </td>
                <td>
                  <span>193</span>
                </td>
                <td width="94">
                  <span>元/航次</span>
                </td>
              </tr>
              <tr>
                <td rowSpan="10" height="400">
                  <span>6</span>
                </td>
                <td rowSpan="10">
                  <span>装箱</span>
                </td>
                <td rowSpan="4" width="83">
                  <span>外贸</span>
                </td>
                <td rowSpan="2" width="83">
                  <span>20英尺集装箱</span>
                </td>
                <td width="83">
                  <span>现场箱</span>
                </td>
                <td>
                  <span>38</span>
                </td>
                <td width="94">
                  <span>元/箱</span>
                </td>
                <td rowSpan="10" width="231">
                  <span>
                    装箱：理清装入集装箱内货物的数量、包装、残损，装箱完毕后施加理货铅封，填制装箱理货单，出具装箱理货单证。
                  </span>
                </td>
              </tr>
              <tr>
                <td height="40" width="83">
                  <span>直场箱</span>
                </td>
                <td>
                  <span>28</span>
                </td>
                <td width="94">
                  <span>元/箱</span>
                </td>
              </tr>
              <tr>
                <td rowSpan="2" height="80" width="83">
                  <span>40英尺集装箱</span>
                </td>
                <td width="83">
                  <span>现场箱</span>
                </td>
                <td>
                  <span>76</span>
                </td>
                <td width="94">
                  <span>元/箱</span>
                </td>
              </tr>
              <tr>
                <td height="40" width="83">
                  <span>直场箱</span>
                </td>
                <td>
                  <span>56</span>
                </td>
                <td width="94">
                  <span>元/箱</span>
                </td>
              </tr>
              <tr>
                <td rowSpan="4" height="160" width="83">
                  <span>内贸</span>
                </td>
                <td rowSpan="2" width="83">
                  <span>20英尺集装箱</span>
                </td>
                <td width="83">
                  <span>现场箱</span>
                </td>
                <td>
                  <span>28</span>
                </td>
                <td width="94">
                  <span>元/箱</span>
                </td>
              </tr>
              <tr>
                <td height="40" width="83">
                  <span>直场箱</span>
                </td>
                <td>
                  <span>0</span>
                </td>
                <td width="94">
                  <span>元/箱</span>
                </td>
              </tr>
              <tr>
                <td rowSpan="2" height="80" width="83">
                  <span>40英尺集装箱</span>
                </td>
                <td width="83">
                  <span>现场箱</span>
                </td>
                <td>
                  <span>56</span>
                </td>
                <td width="94">
                  <span>元/箱</span>
                </td>
              </tr>
              <tr>
                <td height="40" width="83">
                  <span>直场箱</span>
                </td>
                <td>
                  <span>0</span>
                </td>
                <td width="94">
                  <span>元/箱</span>
                </td>
              </tr>
              <tr>
                <td colSpan="3" height="40" width="249">
                  <span>铅封费</span>
                </td>
                <td>
                  <span>5</span>
                </td>
                <td width="94">
                  <span>元/枚</span>
                </td>
              </tr>
              <tr>
                <td colSpan="3" height="40" width="249">
                  <span>单证费</span>
                </td>
                <td>
                  <span>1</span>
                </td>
                <td width="94">
                  <span>元/箱</span>
                </td>
              </tr>
              <tr>
                <td rowSpan="4" height="160">
                  <span>7</span>
                </td>
                <td rowSpan="4">
                  <span>拆箱</span>
                </td>
                <td rowSpan="2" width="83">
                  <span>外贸</span>
                </td>
                <td width="83">
                  <span>20英尺集装箱</span>
                </td>
                <td rowSpan="2" width="83">
                  <span>现场箱</span>
                </td>
                <td>
                  <span>55</span>
                </td>
                <td width="94">
                  <span>元/箱</span>
                </td>
                <td rowSpan="4" width="231">
                  <span>
                    拆箱：根据货代掏箱信息，核对集装箱箱号、箱型、尺寸、封号；检查铅封和箱体状况；核对货物标志，按票理清箱内货物件数，检查货物包装或外表状况；与收货人或代理人办理交接手续；及时填制拆箱理货单，出具拆箱理货单证。
                  </span>
                </td>
              </tr>
              <tr>
                <td height="40" width="83">
                  <span>40英尺集装箱</span>
                </td>
                <td>
                  <span>110</span>
                </td>
                <td width="94">
                  <span>元/箱</span>
                </td>
              </tr>
              <tr>
                <td rowSpan="2" height="80" width="83">
                  <span>内贸</span>
                </td>
                <td width="83">
                  <span>20英尺集装箱</span>
                </td>
                <td rowSpan="2" width="83">
                  <span>现场箱</span>
                </td>
                <td>
                  <span>45</span>
                </td>
                <td width="94">
                  <span>元/箱</span>
                </td>
              </tr>
              <tr>
                <td height="40" width="83">
                  <span>40英尺集装箱</span>
                </td>
                <td>
                  <span>90</span>
                </td>
                <td width="94">
                  <span>元/箱</span>
                </td>
              </tr>
              <tr>
                <td height="231">
                  <span>8</span>
                </td>
                <td>
                  <span>件杂货</span>
                </td>
                <td colSpan="3" width="249">
                  <span>内、外贸</span>
                </td>
                <td width="98">
                  <span>2</span>
                </td>
                <td width="94">
                  <span>按吨位、体积择大计算</span>
                </td>
                <td width="231">
                  <span>
                    件杂货：根据舱单/装货单信息，核对货物标志；按票理清货物数量、分清货物种类；检查货物包装或外表状况；指导和监督货物装卸船；协助船方做好配积载工作；记录货物实际积载状况并编制本港货物积载图；办理件杂货单证交接签证；及时准确发送理货报告、提供理货报告发送回执实时查询。
                  </span>
                </td>
              </tr>
              <tr>
                <td height="40" width="44">
                  <span>9</span>
                </td>
                <td rowSpan="6" width="77">
                  <span>货代报关</span>
                </td>
                <td colSpan="4" width="307">
                  <span>报关服务费</span>
                </td>
                <td width="98">
                  <span>出口190，进口200</span>
                </td>
                <td width="94">
                  <span>元/票</span>
                </td>
                <td>
                  <span>代理报关</span>
                </td>
                <td></td>
              </tr>
              <tr>
                <td height="40">
                  <span>10</span>
                </td>
                <td colSpan="4" width="307">
                  <span>报检服务费</span>
                </td>
                <td width="98">
                  <span>50-90</span>
                </td>
                <td width="94">
                  <span>元/票</span>
                </td>
                <td>
                  <span>代理报检</span>
                </td>
                <td></td>
              </tr>
              <tr>
                <td height="40" width="44">
                  <span>11</span>
                </td>
                <td colSpan="4" width="307">
                  <span>海关查验代理费</span>
                </td>
                <td width="98">
                  <span>50-200</span>
                </td>
                <td width="94">
                  <span>元/票</span>
                </td>
                <td>
                  <span>代理海关查验</span>
                </td>
                <td></td>
              </tr>
              <tr>
                <td height="40">
                  <span>12</span>
                </td>
                <td colSpan="4" width="307">
                  <span>商检代理费</span>
                </td>
                <td width="98">
                  <span>50-100</span>
                </td>
                <td width="94">
                  <span>出口190，进口200</span>
                </td>
                <td>
                  <span>代理商检</span>
                </td>
                <td></td>
              </tr>
              <tr>
                <td height="40" width="44">
                  <span>13</span>
                </td>
                <td colSpan="4" width="307">
                  <span>关封费</span>
                </td>
                <td width="98">
                  <span>70</span>
                </td>
                <td width="94">
                  <span>元/票</span>
                </td>
                <td>
                  <span>海关关封费用</span>
                </td>
                <td></td>
              </tr>
              <tr>
                <td height="40">
                  <span>14</span>
                </td>
                <td colSpan="4" width="307">
                  <span>转关费</span>
                </td>
                <td width="98">
                  <span>70</span>
                </td>
                <td width="94">
                  <span>元/票</span>
                </td>
                <td>
                  <span>给客服提供代理转关服务</span>
                </td>
                <td></td>
              </tr>
              <tr>
                <td rowSpan="2" height="80" width="44">
                  <span>15</span>
                </td>
                <td rowSpan="5" width="77">
                  <span>货代公司</span>
                </td>
                <td rowSpan="2" width="58">
                  <span>订舱服务费</span>
                </td>
                <td colSpan="3" width="249">
                  <span>20英寸箱</span>
                </td>
                <td width="98">
                  <span>200</span>
                </td>
                <td rowSpan="2" width="94">
                  <span>元/箱</span>
                </td>
                <td rowSpan="2" width="231">
                  <span>给客户提供订舱服务</span>
                </td>
                <td width="116"></td>
              </tr>
              <tr>
                <td colSpan="3" height="40" width="249">
                  <span>40英寸箱</span>
                </td>
                <td width="98">
                  <span>400</span>
                </td>
                <td width="116"></td>
              </tr>
              <tr>
                <td rowSpan="2" height="80" width="44">
                  <span>16</span>
                </td>
                <td rowSpan="2" width="58">
                  <span>换单费</span>
                </td>
                <td colSpan="3" width="249">
                  <span>20英寸箱</span>
                </td>
                <td width="98">
                  <span>200</span>
                </td>
                <td rowSpan="2" width="94">
                  <span>元/箱</span>
                </td>
                <td rowSpan="2" width="231">
                  <span>给客户提供换单服务</span>
                </td>
                <td width="116"></td>
              </tr>
              <tr>
                <td colSpan="3" height="40" width="249">
                  <span>40英寸箱</span>
                </td>
                <td width="98">
                  <span>400</span>
                </td>
                <td width="116"></td>
              </tr>
              <tr>
                <td height="40" width="44">
                  <span>17</span>
                </td>
                <td colSpan="4" width="307">
                  <span>操作费</span>
                </td>
                <td width="98">
                  <span>200</span>
                </td>
                <td width="94">
                  <span>元/票</span>
                </td>
                <td width="231">
                  <span>给客户提供其他操作服务</span>
                </td>
                <td width="116"></td>
              </tr>
              <tr>
                <td rowSpan="2" height="80" width="44">
                  <span>18</span>
                </td>
                <td rowSpan="2" width="77">
                  <span>驳船公司</span>
                </td>
                <td rowSpan="2" width="58">
                  <span>驳船燃油附加费</span>
                </td>
                <td colSpan="3" width="249">
                  <span>20英寸箱</span>
                </td>
                <td width="98">
                  <span>60</span>
                </td>
                <td rowSpan="2" width="94">
                  <span>元/箱</span>
                </td>
                <td rowSpan="2" width="231">
                  <span>燃油价格变化费用</span>
                </td>
                <td width="116"></td>
              </tr>
              <tr>
                <td colSpan="3" height="40" width="249">
                  <span>40英寸箱</span>
                </td>
                <td width="98">
                  <span>100</span>
                </td>
                <td width="116"></td>
              </tr>
              <tr>
                <td height="40" width="44">
                  <span>19</span>
                </td>
                <td rowSpan="14" width="77">
                  <span>船公司</span>
                </td>
                <td colSpan="4" width="307">
                  <span>文件费</span>
                </td>
                <td width="98">
                  <span>400-500</span>
                </td>
                <td width="94">
                  <span>元/票</span>
                </td>
                <td width="231">
                  <span>所有打单的费用</span>
                </td>
                <td width="116"></td>
              </tr>
              <tr>
                <td height="40" width="44">
                  <span>20</span>
                </td>
                <td colSpan="4" width="307">
                  <span>铅封费</span>
                </td>
                <td width="98">
                  <span>30</span>
                </td>
                <td width="94">
                  <span>元/柜</span>
                </td>
                <td width="231">
                  <span>为集装箱配备防盗铅封的费用</span>
                </td>
                <td width="116"></td>
              </tr>
              <tr>
                <td height="40" width="44">
                  <span>21</span>
                </td>
                <td colSpan="4" width="307">
                  <span>设备单费</span>
                </td>
                <td width="98">
                  <span>30</span>
                </td>
                <td width="94">
                  <span>元/UNIT</span>
                </td>
                <td width="231">
                  <span>给客户提供代理集装箱设备交接服务</span>
                </td>
                <td width="116"></td>
              </tr>
              <tr>
                <td height="40" width="44">
                  <span>22</span>
                </td>
                <td colSpan="4" width="307">
                  <span>重出提单费</span>
                </td>
                <td width="98">
                  <span>200</span>
                </td>
                <td width="94">
                  <span>元/票</span>
                </td>
                <td width="231">
                  <span>给客户提供重出提单服务</span>
                </td>
                <td width="116"></td>
              </tr>
              <tr>
                <td height="40" width="44">
                  <span>23</span>
                </td>
                <td colSpan="4" width="307">
                  <span>分并单费</span>
                </td>
                <td width="98">
                  <span>150</span>
                </td>
                <td width="94">
                  <span>元/票</span>
                </td>
                <td width="231">
                  <span>给客户提供分、并单服务</span>
                </td>
                <td width="116"></td>
              </tr>
              <tr>
                <td height="40" width="44">
                  <span>24</span>
                </td>
                <td colSpan="4" width="307">
                  <span>异地签（换）单费</span>
                </td>
                <td width="98">
                  <span>200</span>
                </td>
                <td width="94">
                  <span>元/票</span>
                </td>
                <td width="231">
                  <span>给客户提供异地签（换）单服务</span>
                </td>
                <td width="116"></td>
              </tr>
              <tr>
                <td height="40" width="44">
                  <span>25</span>
                </td>
                <td colSpan="4" width="307">
                  <span>船证费</span>
                </td>
                <td width="98">
                  <span>100</span>
                </td>
                <td width="94">
                  <span>元/票</span>
                </td>
                <td width="231">
                  <span>给客户提供出船证服务</span>
                </td>
                <td width="116"></td>
              </tr>
              <tr>
                <td height="40" width="44">
                  <span>26</span>
                </td>
                <td colSpan="4" width="307">
                  <span>改单费</span>
                </td>
                <td width="98">
                  <span>200</span>
                </td>
                <td width="94">
                  <span>元/票</span>
                </td>
                <td width="231">
                  <span>给客户提供改单服务</span>
                </td>
                <td width="116"></td>
              </tr>
              <tr>
                <td height="40" width="44">
                  <span>27</span>
                </td>
                <td colSpan="4" width="307">
                  <span>滞单费</span>
                </td>
                <td width="98">
                  <span>400</span>
                </td>
                <td width="94">
                  <span>元/票</span>
                </td>
                <td>
                  <span>客户欠费超过15天收取</span>
                </td>
                <td></td>
              </tr>
              <tr>
                <td rowSpan="2" height="280" width="44">
                  <span>28</span>
                </td>
                <td colSpan="4" rowSpan="2">
                  <span>滞箱费</span>
                </td>
                <td colSpan="2" width="192">
                  <span>
                    GP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    1-7天/免费&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    8-14天/CNY85/20' 170/40'&nbsp;&nbsp;&nbsp;
                    15-21天/CNY170/20' 340/40'&nbsp; 22天（含）以上 CNY340/20'
                    680/40'
                  </span>
                </td>
                <td rowSpan="2" width="231">
                  <span>
                    客户使用集装箱超出免费天数收取，特种箱根据船公司的用箱成本执行
                  </span>
                </td>
                <td></td>
              </tr>
              <tr>
                <td colSpan="2" height="135" width="192">
                  <span>
                    40HQ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    1-7天/免费&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    8-14天/CNY190&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    15-21天/CNY380&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    22天（含）以上 CNY760
                  </span>
                </td>
                <td></td>
              </tr>
              <tr>
                <td height="40" width="44">
                  <span>29</span>
                </td>
                <td colSpan="4">
                  <span>电放费</span>
                </td>
                <td width="98">
                  <span>200-450</span>
                </td>
                <td width="94">
                  <span>元/票</span>
                </td>
                <td>
                  <span>给客户提供电放服务</span>
                </td>
                <td></td>
              </tr>
              <tr>
                <td height="40" width="44">
                  <span>30</span>
                </td>
                <td colSpan="4">
                  <span>码头操作费</span>
                </td>
                <td>
                  <span>680-2133</span>
                </td>
                <td>
                  <span>元/柜</span>
                </td>
                <td>
                  <span>DHC</span>
                </td>
                <td rowSpan="2" width="116">
                  <span>由进出境口岸收取</span>
                </td>
              </tr>
              <tr>
                <td height="39" width="44">
                  <span>31</span>
                </td>
                <td colSpan="4">
                  <span>安保费</span>
                </td>
                <td>
                  <span>10-100</span>
                </td>
                <td>
                  <span>元/箱</span>
                </td>
                <td>
                  <span>给客户提供安保服务</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Popup;
