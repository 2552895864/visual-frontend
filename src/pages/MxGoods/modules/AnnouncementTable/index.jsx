import React from "react";
import styles from "./index.module.less";

const XingGangTable = () => (
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
            8-14天/CNY85/20' 170/40'&nbsp;&nbsp;&nbsp; 15-21天/CNY170/20'
            340/40'&nbsp; 22天（含）以上 CNY340/20' 680/40'
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
);

const TianHeTable = () => (
  <table cellpadding="0" cellspacing="0">
    <tbody>
      <tr>
        <td height="40" width="52">
          <span>
            <strong>序号</strong>
          </span>
        </td>
        <td width="81">
          <span>
            <strong>收费主体</strong>
          </span>
        </td>
        <td colspan="2" width="220">
          <span>
            <strong>项目名称</strong>
          </span>
        </td>
        <td width="100">
          <span>
            <strong>收费标准</strong>
          </span>
        </td>
        <td width="105">
          <span>
            <strong>计价单位</strong>
          </span>
        </td>
        <td width="179">
          <span>
            <strong>服务内容</strong>
          </span>
        </td>
        <td width="234">
          <span>
            <strong>备注</strong>
          </span>
        </td>
      </tr>
      <tr>
        <td height="52" width="52">
          <span>1</span>
        </td>
        <td rowspan="23" width="81">
          <span>湖北机场航空物流公司国际货站</span>
          <br />
        </td>
        <td rowspan="3" width="71">
          <span>货物过站处理费</span>
        </td>
        <td width="149">
          <span>进港普通货物</span>
        </td>
        <td width="100">
          <span>0.5</span>
        </td>
        <td width="105">
          <span>元/公斤</span>
        </td>
        <td rowspan="3" width="179">
          <span>为进出港货物提供进出仓库、理货等服务。</span>
        </td>
        <td width="234">
          <span>最低收费5/票/天</span>
        </td>
      </tr>
      <tr>
        <td height="59" width="52">
          <span>2</span>
        </td>
        <td width="149">
          <span>出港普通货物</span>
        </td>
        <td width="100">
          <span>0.5</span>
        </td>
        <td width="105">
          <span>元/公斤</span>
        </td>
        <td width="234">
          <span>最低收费5/票/天</span>
        </td>
      </tr>
      <tr>
        <td height="136" width="52">
          <span>3</span>
        </td>
        <td width="149">
          <span>
            进出港特种货物（含危险品、鲜活易腐货物、贵重物品、快件类货物、私人物品等）
          </span>
        </td>
        <td width="100">
          <span>0.5</span>
        </td>
        <td width="105">
          <span>元/公斤</span>
        </td>
        <td width="234">
          <span>最低收费50元/票/天</span>
        </td>
      </tr>
      <tr>
        <td height="179" width="52">
          <span>4</span>
        </td>
        <td rowspan="3" width="71">
          <span>货物保管费</span>
        </td>
        <td width="149">
          <span>普通货物</span>
        </td>
        <td width="100">
          <span>0.3</span>
        </td>
        <td width="105">
          <span>元/公斤/天</span>
        </td>
        <td rowspan="3" width="179">
          <span>为到达货物提供机场货站仓储保管服务。</span>
        </td>
        <td width="234">
          <span>
            自货物入库次日0:00起免费保管72小时，超过免费保管期时，不足24小时按1天计。最低收费5元/票
          </span>
        </td>
      </tr>
      <tr>
        <td height="133" width="52">
          <span>5</span>
        </td>
        <td width="149">
          <div>
            <span>特种货物</span>
          </div>
          <span>
            <div>
              <span>（含危险品、贵重物品、快件类货物、私人物品等）</span>
            </div>
          </span>
        </td>
        <td width="100">
          <span>1.00</span>
          <br />
        </td>
        <td width="105">
          <span>元/公斤/天</span>
        </td>
        <td width="234">
          <span>
            到达货物自入库起免费保管6小时，超过免费保管期时，不足24小时按1天计算；出发货物自入库次日00：00起免费保管72小时，超过免费保管期时，不足24小时按1天计。最低收费50.00元/票/天
          </span>
        </td>
      </tr>
      <tr>
        <td height="177" width="52">
          <span>6</span>
        </td>
        <td width="149">
          <span>冷冻冷藏货物</span>
        </td>
        <td width="100">
          <span>0.5</span>
        </td>
        <td width="105">
          <span>元/公斤/天</span>
        </td>
        <td width="234">
          <span>
            出发/到达货物从入库当日起收取，不足24小时按1天计算，最低收费280.00元/票/天
          </span>
        </td>
      </tr>
      <tr>
        <td height="38" width="52">
          <span>7</span>
        </td>
        <td colspan="2" width="220">
          <span>复磅费</span>
        </td>
        <td width="100">
          <span>0.2</span>
        </td>
        <td width="105">
          <span>元/公斤</span>
        </td>
        <td width="179">
          <span>按货主要求对货物重量重新进行复核。</span>
        </td>
        <td width="234"></td>
      </tr>
      <tr>
        <td height="130" width="52">
          <span>8</span>
        </td>
        <td width="71">
          <span>特种货物收运检查费</span>
        </td>
        <td width="149">
          <span>危险品</span>
        </td>
        <td width="100">
          <span>300</span>
        </td>
        <td width="105">
          <span>元/票</span>
        </td>
        <td width="179">
          <span>
            根据《民用航空危险品运输管理办法》及其他相关法律法规的要求对危险品货物及其运输文件进行检查。
          </span>
        </td>
        <td width="234"></td>
      </tr>
      <tr>
        <td height="68" width="52">
          <span>9</span>
        </td>
        <td colspan="2" width="220">
          <span>特种车辆服务费</span>
        </td>
        <td width="100">
          <span>0.2</span>
        </td>
        <td width="105">
          <span>元/公斤</span>
        </td>
        <td width="179">
          <span>提供叉车等特种车辆服务。</span>
        </td>
        <td width="234"></td>
      </tr>
      <tr>
        <td height="172" width="52">
          <span>10</span>
        </td>
        <td colspan="2" width="220">
          <span>鲜活易腐销毁服务费</span>
        </td>
        <td width="100">
          <span>450</span>
        </td>
        <td width="105">
          <span>元/次</span>
        </td>
        <td width="179">
          <span>提供符合检疫标准的无害化销毁处理的服务。</span>
        </td>
        <td width="234">
          <span>
            重量不超过1吨，450元/次；重量大于1吨，每超过1吨增加焚烧费80元/吨，不足1吨按1吨计（每车最大容量为5吨，超过5吨时将重新安排车辆并计费
          </span>
        </td>
      </tr>
      <tr>
        <td height="76" width="52">
          <span>11</span>
        </td>
        <td colspan="2" width="220">
          <span>舱单信息传输费</span>
        </td>
        <td width="100">
          <span>13.5</span>
        </td>
        <td width="105">
          <span>元/单</span>
        </td>
        <td width="179">
          <span>向海关传输货物舱单信息。</span>
        </td>
        <td width="234"></td>
      </tr>
      <tr>
        <td height="57" width="52">
          <span>12</span>
        </td>
        <td colspan="2" width="220">
          <span>货物查验费</span>
        </td>
        <td width="100">
          <span>0.2</span>
        </td>
        <td width="105">
          <span>元/公斤</span>
        </td>
        <td width="179">
          <span>协助货主办理海关现场货物查验。</span>
        </td>
        <td width="234">
          <span>最低收费20元/票</span>
        </td>
      </tr>
      <tr>
        <td rowspan="3" height="133" width="52">
          <span>13</span>
        </td>
        <td rowspan="3" width="71">
          <span>货物包装加固费</span>
        </td>
        <td width="149">
          <span>长宽高之和小于等于1.5米</span>
        </td>
        <td width="100">
          <span>3</span>
        </td>
        <td width="105">
          <span>元/件</span>
        </td>
        <td rowspan="3" width="179">
          <span>货物包装符合航空运输要求的不收费。</span>
        </td>
        <td rowspan="3" width="234"></td>
      </tr>
      <tr>
        <td height="38" width="149">
          <span>长宽高之和大于1.5米</span>
        </td>
        <td width="100">
          <span>5</span>
        </td>
        <td width="105">
          <span>元/件</span>
        </td>
      </tr>
      <tr>
        <td height="38" width="149">
          <span>长宽高之和大于3米</span>
        </td>
        <td width="100">
          <span>10</span>
        </td>
        <td width="105">
          <span>元/件</span>
        </td>
      </tr>
      <tr>
        <td rowspan="3" height="142" width="52">
          <span>14</span>
        </td>
        <td rowspan="3" width="71">
          <span>综合加固费</span>
        </td>
        <td width="149">
          <span>长宽高之和小于等于0.4米</span>
        </td>
        <td width="100">
          <span>20</span>
        </td>
        <td width="105">
          <span>元/件</span>
        </td>
        <td rowspan="3" width="179">
          <span>
            对不符合航空运输要求货物包装，应货主要求提供包装箱、防水薄膜、打包带等包装材料，对货物进行包装、加固。
          </span>
        </td>
        <td rowspan="3" width="234"></td>
      </tr>
      <tr>
        <td height="38" width="149">
          <span>长宽高之和大于0.4米</span>
        </td>
        <td width="100">
          <span>30</span>
        </td>
        <td width="105">
          <span>元/件</span>
        </td>
      </tr>
      <tr>
        <td height="56" width="149">
          <span>长宽高之和大于3米</span>
        </td>
        <td width="100">
          <span>40</span>
        </td>
        <td width="105">
          <span>元/件</span>
        </td>
      </tr>
      <tr>
        <td height="76" width="52">
          <span>15</span>
        </td>
        <td colspan="2" width="220">
          <span>SITA电报费</span>
        </td>
        <td width="100">
          <span>30</span>
        </td>
        <td width="105">
          <span>元/份</span>
        </td>
        <td width="179">
          <span>为货主提供拍发民航SITA电报。</span>
        </td>
        <td width="234"></td>
      </tr>
      <tr>
        <td height="64" width="52">
          <span>16</span>
        </td>
        <td colspan="2" width="220">
          <span>货物短驳费</span>
        </td>
        <td width="100">
          <span>0.4</span>
        </td>
        <td width="105">
          <span>元/公斤</span>
        </td>
        <td width="179">
          <span>提供机场内不同区域间的货物短驳运输服务。</span>
        </td>
        <td width="234"></td>
      </tr>
      <tr>
        <td height="64" width="52">
          <span>17</span>
        </td>
        <td rowspan="3" width="71">
          <span>送货服务费</span>
        </td>
        <td width="149">
          <span>汉口</span>
        </td>
        <td width="100">
          <span>0.5</span>
        </td>
        <td width="105">
          <span>元/公斤</span>
        </td>
        <td rowspan="3" width="179">
          <span>提供市区和机场之间的货物转运服务</span>
        </td>
        <td width="234"></td>
      </tr>
      <tr>
        <td height="64" width="52">
          <span>18</span>
        </td>
        <td width="149">
          <span>汉阳</span>
        </td>
        <td width="100">
          <span>0.6</span>
        </td>
        <td width="105">
          <span>元/公斤</span>
        </td>
        <td width="234"></td>
      </tr>
      <tr>
        <td height="64" width="52">
          <span>19</span>
        </td>
        <td width="149">
          <span>武昌</span>
        </td>
        <td width="100">
          <span>0.7</span>
        </td>
        <td width="105">
          <span>元/公斤</span>
        </td>
        <td width="234"></td>
      </tr>
      <tr>
        <td height="36" width="52">
          <span>20</span>
        </td>
        <td rowspan="8" width="81">
          <span>检验检疫企业单位</span>
        </td>
        <td rowspan="3" width="71">
          <span>熏蒸费</span>
        </td>
        <td width="149">
          <span>20英尺箱</span>
        </td>
        <td width="100">
          <span>180</span>
        </td>
        <td width="105">
          <span>元/箱</span>
        </td>
        <td rowspan="3" width="179">
          <span>
            依据双方委托检疫处理协议，提供商业性自愿委托检疫处理服务，出具检疫处理结果
          </span>
        </td>
        <td rowspan="3" width="234"></td>
      </tr>
      <tr>
        <td height="39" width="52">
          <span>21</span>
        </td>
        <td width="149">
          <span>40英尺箱</span>
        </td>
        <td width="100">
          <span>360</span>
        </td>
        <td width="105">
          <span>元/箱</span>
        </td>
      </tr>
      <tr>
        <td height="36" width="52">
          <span>22</span>
        </td>
        <td width="149">
          <span>熏蒸检疫处理帐幕式</span>
        </td>
        <td width="100">
          <span>10.8</span>
        </td>
        <td width="105">
          <span>元/立方米</span>
        </td>
      </tr>
      <tr>
        <td height="39" width="52">
          <span>23</span>
        </td>
        <td rowspan="5" width="71">
          <span>消毒费</span>
        </td>
        <td width="149">
          <span>20英尺箱</span>
        </td>
        <td width="100">
          <span>18</span>
        </td>
        <td width="105">
          <span>元/箱</span>
        </td>
        <td rowspan="5" width="179">
          <span>
            依据双方委托检疫处理协议，提供商业性自愿委托检疫处理服务，出具检疫处理结果
          </span>
        </td>
        <td rowspan="5" width="234"></td>
      </tr>
      <tr>
        <td height="36" width="52">
          <span>24</span>
        </td>
        <td width="149">
          <span>40英尺箱</span>
        </td>
        <td width="100">
          <span>36</span>
        </td>
        <td width="105">
          <span>元/箱</span>
        </td>
      </tr>
      <tr>
        <td height="35" width="52">
          <span>25</span>
        </td>
        <td width="149">
          <span>51-100吨入境飞机</span>
        </td>
        <td width="100">
          <span>180</span>
        </td>
        <td width="105">
          <span>元/架次</span>
        </td>
      </tr>
      <tr>
        <td height="33" width="52">
          <span>26</span>
        </td>
        <td width="149">
          <span>101-200吨入境飞机</span>
        </td>
        <td width="100">
          <span>270</span>
        </td>
        <td width="105">
          <span>元/架次</span>
        </td>
      </tr>
      <tr>
        <td height="38" width="52">
          <span>27</span>
        </td>
        <td width="149">
          <span>运输动物的专机、包机</span>
        </td>
        <td width="100">
          <span>9000</span>
        </td>
        <td width="105">
          <span>元/架次</span>
        </td>
      </tr>
    </tbody>
  </table>
);

const HuangShiTable = () => (
  <table cellpadding="0" cellspacing="0">
    <tbody>
      <tr>
        <td height="42" width="44">
          <span>
            <strong>序号</strong>
          </span>
        </td>
        <td width="68">
          <span>
            <strong>收费主体</strong>
          </span>
        </td>
        <td colspan="2" width="169">
          <span>
            <strong>项目名称</strong>
          </span>
        </td>
        <td width="63">
          <span>
            <strong>收费标准</strong>
          </span>
        </td>
        <td width="95">
          <span>
            <strong>计价单位</strong>
          </span>
        </td>
        <td width="341">
          <span>
            <strong>服务内容</strong>
          </span>
        </td>
        <td width="130">
          <span>
            <strong>备注</strong>
          </span>
        </td>
      </tr>
      <tr>
        <td rowspan="2" height="52" width="44">
          <span>1</span>
        </td>
        <td rowspan="2" width="68">
          <span>交通部门</span>
        </td>
        <td rowspan="2" width="92">
          <span>港口设施保安费</span>
        </td>
        <td width="77">
          <span>20</span>
          <span>英尺箱</span>
        </td>
        <td>
          <span>20</span>
        </td>
        <td rowspan="2" width="95">
          <span>元/箱</span>
        </td>
        <td rowspan="2" width="341">
          <span>
            专项用于为履行SOLAS公约和ISPS规则所进行的港口保安设施的建设、维护和管理
          </span>
        </td>
        <td rowspan="2"></td>
      </tr>
      <tr>
        <td height="28" width="77">
          <span>40</span>
          <span>英尺箱</span>
        </td>
        <td width="63">
          <span>30</span>
        </td>
      </tr>
      <tr>
        <td rowspan="2" height="50" width="44">
          <span>2</span>
        </td>
        <td rowspan="4" width="68">
          <span>理货公司</span>
        </td>
        <td rowspan="2" width="92">
          <span>理货费</span>
        </td>
        <td width="77">
          <span>20</span>
          <span>英尺箱</span>
        </td>
        <td width="63">
          <span>40</span>
        </td>
        <td rowspan="2" width="95">
          <span>元/箱</span>
        </td>
        <td rowspan="2" width="341">
          <span>货物清点</span>
        </td>
        <td rowspan="2" width="130"></td>
      </tr>
      <tr>
        <td height="25" width="77">
          <span>40</span>
          <span>英尺箱</span>
        </td>
        <td width="63">
          <span>80</span>
        </td>
      </tr>
      <tr>
        <td rowspan="2" height="50" width="44">
          <span>3</span>
        </td>
        <td rowspan="2" width="92">
          <span>理箱费</span>
        </td>
        <td width="77">
          <span>20</span>
          <span>英尺箱</span>
        </td>
        <td width="63">
          <span>20</span>
        </td>
        <td rowspan="2" width="95">
          <span>元/箱</span>
        </td>
        <td rowspan="2" width="341">
          <span>集装箱清点</span>
        </td>
        <td rowspan="2" width="130"></td>
      </tr>
      <tr>
        <td height="25" width="77">
          <span>40</span>
          <span>英尺箱</span>
        </td>
        <td width="63">
          <span>30</span>
        </td>
      </tr>
      <tr>
        <td height="25" width="44">
          <span>4</span>
        </td>
        <td rowspan="2" width="68">
          <span>货代</span>
        </td>
        <td colspan="2" width="169">
          <span>报关费</span>
        </td>
        <td width="63">
          <span>150-200</span>
        </td>
        <td width="95">
          <span>元/票</span>
        </td>
        <td width="341">
          <span>代办清关手续</span>
        </td>
        <td rowspan="2" width="130"></td>
      </tr>
      <tr>
        <td height="25" width="44">
          <span>5</span>
        </td>
        <td colspan="2" width="169">
          <span>报检费</span>
        </td>
        <td width="63">
          <span>150-200</span>
        </td>
        <td width="95">
          <span>元/票</span>
        </td>
        <td width="341">
          <span>代办清关手续</span>
        </td>
      </tr>
      <tr>
        <td height="25" width="44">
          <span>6</span>
        </td>
        <td rowspan="6" width="68">
          <span>船公司</span>
        </td>
        <td colspan="2" width="169">
          <span>换单费</span>
        </td>
        <td width="63">
          <span>300-500</span>
        </td>
        <td width="95">
          <span>元/箱</span>
        </td>
        <td width="341">
          <span>纸质资料衔接</span>
        </td>
        <td width="130"></td>
      </tr>
      <tr>
        <td height="25" width="44">
          <span>7</span>
        </td>
        <td rowspan="2" width="92">
          <span>订舱费</span>
        </td>
        <td width="77">
          <span>20</span>
          <span>英尺箱</span>
        </td>
        <td width="63">
          <span>200-300</span>
        </td>
        <td width="95">
          <span>元/箱</span>
        </td>
        <td rowspan="2" width="341">
          <span>信息录入及平台对接</span>
        </td>
        <td rowspan="2" width="130"></td>
      </tr>
      <tr>
        <td height="25" width="44">
          <span>8</span>
        </td>
        <td width="77">
          <span>40</span>
          <span>英尺箱</span>
        </td>
        <td width="63">
          <span>300-520</span>
        </td>
        <td width="95">
          <span>元/箱</span>
        </td>
      </tr>
      <tr>
        <td height="25" width="44">
          <span>9</span>
        </td>
        <td colspan="2" width="169">
          <span>设备交接单</span>
        </td>
        <td width="63">
          <span>30</span>
        </td>
        <td width="95">
          <span>元/箱</span>
        </td>
        <td width="341">
          <span>信息录入及平台对接</span>
        </td>
        <td width="130"></td>
      </tr>
      <tr>
        <td height="25" width="44">
          <span>10</span>
        </td>
        <td colspan="2" width="169">
          <span>单证费</span>
        </td>
        <td width="63">
          <span>500</span>
        </td>
        <td width="95">
          <span>元/票</span>
        </td>
        <td width="341">
          <span>单证交接</span>
        </td>
        <td width="130"></td>
      </tr>
      <tr>
        <td height="25" width="44">
          <span>11</span>
        </td>
        <td colspan="2" width="169">
          <span>封锁费</span>
        </td>
        <td width="63">
          <span>60</span>
        </td>
        <td width="95">
          <span>元/箱</span>
        </td>
        <td width="341">
          <span>集装箱装封锁</span>
        </td>
        <td width="130"></td>
      </tr>
      <tr>
        <td height="57" width="44">
          <span>12</span>
        </td>
        <td width="68">
          <span>港口</span>
        </td>
        <td colspan="2" width="169">
          <span>港口作业费</span>
        </td>
        <td width="63">
          <span>详见附件</span>
        </td>
        <td width="95">
          <span>详见附件</span>
        </td>
        <td width="341">
          <span>
            集装箱装卸船作业、查验、熏蒸、捆绑、平移、装拆箱及集装箱货物进出库、货物堆存、仓储等
          </span>
        </td>
        <td width="130"></td>
      </tr>
      <tr>
        <td rowspan="3" height="111" width="44">
          <span>13</span>
        </td>
        <td rowspan="5" width="68">
          <span>检验检疫企业单位</span>
        </td>
        <td rowspan="3" width="92">
          <span>熏蒸费</span>
        </td>
        <td width="77">
          <span>20英尺箱</span>
        </td>
        <td width="63">
          <span>180</span>
        </td>
        <td width="95">
          <span>元/箱</span>
        </td>
        <td rowspan="3" width="341">
          <span>
            依据双方委托检疫处理协议，提供商业性自愿委托检疫处理服务，出具检疫处理结果
          </span>
        </td>
        <td width="130"></td>
      </tr>
      <tr>
        <td height="39" width="77">
          <span>40英尺箱</span>
        </td>
        <td width="63">
          <span>360</span>
        </td>
        <td width="95">
          <span>元/箱</span>
        </td>
        <td width="130"></td>
      </tr>
      <tr>
        <td height="36" width="77">
          <span>熏蒸检疫处理帐幕式</span>
        </td>
        <td width="63">
          <span>10.8</span>
        </td>
        <td width="95">
          <span>元/立方米</span>
        </td>
        <td width="130"></td>
      </tr>
      <tr>
        <td rowspan="2" height="75" width="44">
          <span>14</span>
        </td>
        <td rowspan="2" width="92">
          <span>消毒费</span>
        </td>
        <td width="77">
          <span>20英尺箱</span>
        </td>
        <td width="63">
          <span>18</span>
        </td>
        <td width="95">
          <span>元/箱</span>
        </td>
        <td rowspan="2" width="341">
          <span>
            依据双方委托检疫处理协议，提供商业性自愿委托检疫处理服务，出具检疫处理结果
          </span>
        </td>
        <td width="130"></td>
      </tr>
      <tr>
        <td height="36" width="77">
          <span>40英尺箱</span>
        </td>
        <td width="63">
          <span>36</span>
        </td>
        <td width="95">
          <span>元/箱</span>
        </td>
        <td width="130"></td>
      </tr>
    </tbody>
  </table>
);

const TieLuTable = () => (
  <table cellpadding="0" cellspacing="0">
    <tbody>
      <tr>
        <td height="44" width="58">
          <span>
            <strong>序号</strong>
          </span>
        </td>
        <td width="97">
          <span>
            <strong>收费主体</strong>
          </span>
        </td>
        <td colspan="2" width="227">
          <span>
            <strong>收费项目</strong>
          </span>
        </td>
        <td width="93">
          <span>
            <strong>收费标准</strong>
          </span>
        </td>
        <td width="87">
          <span>
            <strong>计价单位</strong>
          </span>
        </td>
        <td width="336">
          <span>
            <strong>服务内容</strong>
          </span>
        </td>
        <td width="146">
          <span>
            <strong>备注</strong>
          </span>
        </td>
      </tr>
      <tr>
        <td rowspan="2" height="60" width="58">
          <span>1</span>
        </td>
        <td rowspan="10" width="97">
          <div>
            <span>中铁联集</span>
          </div>
          <div>
            <span>武汉中心站</span>
          </div>
        </td>
        <td rowspan="2" width="127">
          <span>监管场所作业综合服务费</span>
        </td>
        <td width="100">
          <span>空箱</span>
        </td>
        <td width="93">
          <span>200</span>
        </td>
        <td rowspan="2" width="87">
          <span>元/标箱</span>
        </td>
        <td rowspan="2" width="336">
          <span>机械装卸、集卡搬移作业，场内免费堆存期20天。</span>
        </td>
        <td rowspan="2" width="146"></td>
      </tr>
      <tr>
        <td height="30" width="100">
          <span>重箱</span>
        </td>
        <td width="93">
          <span>400</span>
        </td>
      </tr>
      <tr>
        <td rowspan="2" height="60" width="58">
          <span>2</span>
        </td>
        <td rowspan="2" width="127">
          <span>监管场所仓储费</span>
        </td>
        <td width="100">
          <span>空箱</span>
        </td>
        <td width="93">
          <span>10</span>
        </td>
        <td rowspan="2" width="87">
          <span>元/标箱日</span>
        </td>
        <td rowspan="2" width="336">
          <span>超过免费堆存期20天后堆存，按超过天数收费。</span>
        </td>
        <td rowspan="2" width="146"></td>
      </tr>
      <tr>
        <td height="30" width="100">
          <span>重箱</span>
        </td>
        <td width="93">
          <span>20</span>
        </td>
      </tr>
      <tr>
        <td rowspan="2" height="60" width="58">
          <span>3</span>
        </td>
        <td rowspan="2" width="127">
          <div>
            <span>监管场所查验服务</span>
          </div>
          <div>
            <span>（掏装箱作业）</span>
          </div>
        </td>
        <td width="100">
          <span>20英尺箱</span>
        </td>
        <td width="93">
          <span>450</span>
        </td>
        <td rowspan="2" width="87">
          <span>元/箱</span>
        </td>
        <td rowspan="2" width="336">
          <span>
            机械装卸、集卡搬移作业，按海关、国检要求对集装箱进行掏箱作业和装箱作业。
          </span>
        </td>
        <td rowspan="2" width="146"></td>
      </tr>
      <tr>
        <td height="30" width="100">
          <span>40英尺箱</span>
        </td>
        <td width="93">
          <span>850</span>
        </td>
      </tr>
      <tr>
        <td rowspan="2" height="60" width="58">
          <span>4</span>
        </td>
        <td rowspan="2" width="127">
          <span>监管场所开箱门费</span>
        </td>
        <td width="100">
          <span>20英尺箱</span>
        </td>
        <td width="93">
          <span>50</span>
        </td>
        <td rowspan="2" width="87">
          <span>元/箱</span>
        </td>
        <td rowspan="2" width="336">
          <span>
            机械装卸作业，按海关、国检要求对集装箱进行人工开箱门作业。
          </span>
        </td>
        <td rowspan="2" width="146"></td>
      </tr>
      <tr>
        <td height="30" width="100">
          <span>40英尺箱</span>
        </td>
        <td width="93">
          <span>75</span>
        </td>
      </tr>
      <tr>
        <td rowspan="2" height="60" width="58">
          <span>5</span>
        </td>
        <td rowspan="2" width="127">
          <div>
            <span>监管场所开箱门费</span>
          </div>
          <div>
            <span>（叉车简易作业）</span>
          </div>
        </td>
        <td width="100">
          <span>20英尺箱</span>
        </td>
        <td width="93">
          <span>75</span>
        </td>
        <td rowspan="2" width="87">
          <span>元/箱</span>
        </td>
        <td rowspan="2" width="336">
          <span>
            机械装卸作业，按海关、国检要求对集装箱进行开箱门、动用叉车简易作业。
          </span>
        </td>
        <td rowspan="2" width="146"></td>
      </tr>
      <tr>
        <td height="30" width="100">
          <span>40英尺箱</span>
        </td>
        <td width="93">
          <span>100</span>
        </td>
      </tr>
      <tr>
        <td height="57" width="58">
          <span>7</span>
        </td>
        <td width="97">
          <span>武汉汉欧国际物流有限公司</span>
        </td>
        <td width="127">
          <span>报关费</span>
        </td>
        <td width="100">
          <span>4</span>
          <span>0英尺箱</span>
        </td>
        <td width="93">
          <span>362</span>
        </td>
        <td width="87">
          <span>元/票</span>
        </td>
        <td width="336">
          <span>负责进出口柜子的报关报检</span>
        </td>
        <td width="146">
          <span>未查验情况下包干费,支付给报关行</span>
        </td>
      </tr>
      <tr>
        <td rowspan="3" height="122" width="58">
          <span>8</span>
        </td>
        <td rowspan="5" width="97">
          <span>检验检疫企业单位</span>
        </td>
        <td rowspan="3" width="127">
          <span>熏蒸费</span>
        </td>
        <td width="100">
          <span>20英尺箱</span>
        </td>
        <td width="93">
          <span>180</span>
        </td>
        <td width="87">
          <span>元/箱</span>
        </td>
        <td rowspan="3" width="336">
          <span>
            依据双方委托检疫处理协议，提供商业性自愿委托检疫处理服务，出具检疫处理结果
          </span>
        </td>
        <td rowspan="3" width="146"></td>
      </tr>
      <tr>
        <td height="39" width="100">
          <span>40英尺箱</span>
        </td>
        <td width="93">
          <span>360</span>
        </td>
        <td width="87">
          <span>元/箱</span>
        </td>
      </tr>
      <tr>
        <td height="47" width="100">
          <span>熏蒸检疫处理帐幕式</span>
        </td>
        <td width="93">
          <span>10.8</span>
        </td>
        <td width="87">
          <span>元/立方米</span>
        </td>
      </tr>
      <tr>
        <td rowspan="2" height="75" width="58">
          <span>9</span>
        </td>
        <td rowspan="2" width="127">
          <span>消毒费</span>
        </td>
        <td width="100">
          <span>20英尺箱</span>
        </td>
        <td width="93">
          <span>18</span>
        </td>
        <td width="87">
          <span>元/箱</span>
        </td>
        <td rowspan="2" width="336">
          <span>
            依据双方委托检疫处理协议，提供商业性自愿委托检疫处理服务，出具检疫处理结果
          </span>
        </td>
        <td rowspan="2" width="146"></td>
      </tr>
      <tr>
        <td height="36" width="100">
          <span>40英尺箱</span>
        </td>
        <td width="93">
          <span>36</span>
        </td>
        <td width="87">
          <span>元/箱</span>
        </td>
      </tr>
      <tr>
        <td rowspan="2" height="108" width="58">
          <span>10</span>
        </td>
        <td rowspan="6" width="97">
          <span>理货公司</span>
        </td>
        <td rowspan="2" width="127">
          <span>理箱</span>
        </td>
        <td width="100">
          <span>20英尺箱</span>
        </td>
        <td width="93">
          <span>14</span>
        </td>
        <td width="87">
          <span>元/箱</span>
        </td>
        <td rowspan="2" width="336">
          <span>
            根据装卸车信息，核对集装箱箱号、箱型、尺寸；检查铅封、箱体状况；指导和监督集装箱装卸车；办理集装箱交接签证；及时发送相关装卸车理货电子报文；及时准确发送理货报告、提供理货报告发送回执实时查询。
          </span>
        </td>
        <td width="146"></td>
      </tr>
      <tr>
        <td height="56" width="100">
          <span>40英尺箱</span>
        </td>
        <td width="93">
          <span>28</span>
        </td>
        <td width="87">
          <span>元/箱</span>
        </td>
        <td width="146"></td>
      </tr>
      <tr>
        <td rowspan="4" height="139" width="58">
          <span>11</span>
        </td>
        <td rowspan="4" width="127">
          <span>装箱</span>
        </td>
        <td width="100">
          <span>20英尺箱</span>
        </td>
        <td width="93">
          <span>38</span>
        </td>
        <td width="87">
          <span>元/箱</span>
        </td>
        <td rowspan="4" width="336">
          <span>
            理清装入集装箱内货物的数量、包装、残损，装箱完毕后施加理货铅封，填制装箱理货单，出具装箱理货单证。
          </span>
        </td>
        <td width="146"></td>
      </tr>
      <tr>
        <td height="43" width="100">
          <span>40英尺箱</span>
        </td>
        <td width="93">
          <span>76</span>
        </td>
        <td width="87">
          <span>元/箱</span>
        </td>
        <td width="146"></td>
      </tr>
      <tr>
        <td height="25" width="100">
          <span>铅封费</span>
        </td>
        <td width="93">
          <span>5</span>
        </td>
        <td width="87">
          <span>元/箱</span>
        </td>
        <td width="146"></td>
      </tr>
      <tr>
        <td height="27" width="100">
          <span>单证费</span>
        </td>
        <td width="93">
          <span>1</span>
        </td>
        <td width="87">
          <span>元</span>/箱
        </td>
        <td width="146"></td>
      </tr>
    </tbody>
  </table>
);

const XingZhengTable = () => (
  <table cellspacing="0" cellpadding="0">
    <tbody>
      <tr>
        <td width="100%" colspan="8">
          <p>
            <span>
              湖北省集装箱进出口环节收费项目表（港口行政事业性收费和政府性基金收费情况）
            </span>
            <span></span>
          </p>
        </td>
        <td width="0" height="45"></td>
      </tr>
      <tr>
        <td width="4%">
          <p>
            <b>
              <span>
                序号<span></span>
              </span>
            </b>
          </p>
        </td>
        <td width="7%">
          <p>
            <b>
              <span>
                收费主体<span></span>
              </span>
            </b>
          </p>
        </td>
        <td width="11%">
          <p>
            <b>
              <span>
                收费项目<span></span>
              </span>
            </b>
          </p>
        </td>
        <td width="22%">
          <p>
            <b>
              <span>
                收费标准<span></span>
              </span>
            </b>
          </p>
        </td>
        <td width="11%">
          <p>
            <b>
              <span>
                计价单位<span></span>
              </span>
            </b>
          </p>
        </td>
        <td width="19%">
          <p>
            <b>
              <span>
                服务内容<span></span>
              </span>
            </b>
          </p>
        </td>
        <td width="16%">
          <p>
            <b>
              <span>
                收费形式及依据<span></span>
              </span>
            </b>
          </p>
        </td>
        <td width="6%">
          <p>
            <b>
              <span>
                备注<span></span>
              </span>
            </b>
          </p>
        </td>
        <td width="0" height="44"></td>
      </tr>
      <tr>
        <td width="4%" rowspan="10">
          <p>
            <span>1</span>
          </p>
        </td>
        <td width="7%" rowspan="10">
          <p>
            <span>
              交通运输部负责港口建设费的征收管理工作。港口所在地海事管理机构具体负责本港口辖区内港口建设费的征收工作。
              <span></span>
            </span>
          </p>
        </td>
        <td width="11%" rowspan="10">
          <p>
            <span>
              港口建设费<span></span>
            </span>
          </p>
        </td>
        <td width="22%" rowspan="10">
          <p>
            <span>
              （一）国内出口货物每重量吨（或换算吨）<span>4</span>
              元；国外进出口货物每重量吨（或换算吨）<span>5.6</span>
              元。货物重量吨和换算吨的计算方法，按照国务院交通运输主管部门现行有关规定执行。（二）国内出口集装箱和内支线集装箱
              <span>20</span>英尺每箱<span>32</span>元，<span>40</span>英尺每箱
              <span>48</span>元；国外进出口集装箱<span>20</span>英尺每箱
              <span>64</span>元，<span>40</span>英尺每箱<span>96</span>元。
              <span>20</span>英尺和<span>40</span>
              英尺以外的其他非标准集装箱按照相近箱型的收费标准征收。对
              <span>30</span>英尺以下的非标准集装箱，按<span>20</span>
              英尺集装箱的征收标准征收港口建设费。对<span>30</span>英尺（含
              <span>30</span>英尺）以上的非标准集装箱，按<span>40</span>
              英尺集装箱的征收标准征收港口建设费。<span></span>
            </span>
          </p>
        </td>
        <td width="11%" rowspan="10">
          <p>
            <span>
              箱次、吨等<span></span>
            </span>
          </p>
        </td>
        <td width="19%" rowspan="10">
          <p>
            <span>1.</span>
            <span>
              收费对象为经对外开放口岸港口辖区范围内所有码头、浮筒、锚地、水域装卸（含过驳）货物的托运人（或其代理人）或收货人（或其代理人）。减、免、缓征货物征收按照财综〔
              <span>2011</span>〕<span>29</span>号及相关规定执行。
              <span>
                <br />
                2.
              </span>
              自<span>2016</span>年<span>4</span>月<span>1</span>
              日起，对水运进港货物中属于船过船作业以及卸船未提离港口库场又直接办理转船转运的，无论收货人（或其代理人）是否发生变更，在水运全过程只征收一次港口建设费。
              <span></span>
            </span>
          </p>
        </td>
        <td width="16%" rowspan="10">
          <p>
            <span>
              财政部、交通运输部关于印发《港口建设费征收使用管理办法》的通知（财综
              <span>[2011]29</span>
              号）财政部、交通运输部关于免征客滚运输港口建设费的通知（财综
              <span>[2011]100</span>
              号）财政部、交通运输部关于同意南京港长江大桥以上港区减半征收港口建设费的批复（财综
              <span>[2012]40</span>号）财政部
              交通运输部关于完善港口建设费征收政策有关问题的通知（财税
              <span>[2015]131</span>号）<span></span>
            </span>
          </p>
        </td>
        <td width="6%" rowspan="10">
          <p>
            <span>
              {" "}
              <span></span>
            </span>
          </p>
        </td>
        <td width="0" height="31"></td>
      </tr>
      <tr>
        <td width="0" height="31"></td>
      </tr>
      <tr>
        <td width="0" height="31"></td>
      </tr>
      <tr>
        <td width="0" height="31"></td>
      </tr>
      <tr>
        <td width="0" height="31"></td>
      </tr>
      <tr>
        <td width="0" height="31"></td>
      </tr>
      <tr>
        <td width="0" height="31"></td>
      </tr>
      <tr>
        <td width="0" height="31"></td>
      </tr>
      <tr>
        <td width="0" height="31"></td>
      </tr>
      <tr>
        <td width="0" height="31"></td>
      </tr>
    </tbody>
  </table>
);

const AnnouncementTable = ({ tableName = "XingGang" }) => {
  const tableMapping = {
    XingGang: XingGangTable,
    TianHe: TianHeTable,
    HuangShi: HuangShiTable,
    TieLu: TieLuTable,
    XingZheng: XingZhengTable,
  };
  return tableMapping[tableName]();
};

export default AnnouncementTable;
