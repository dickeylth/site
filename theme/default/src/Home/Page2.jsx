import React from 'react';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

export default function Page2() {
  return (<OverPack component="section" className="page-wrapper page2">
    <QueueAnim
      type="bottom"
      className="page description container text-center"
      leaveReverse
      key="page"
    >
      <h2 key="title">AntV可视化解决方案</h2>
      <span key="line" className="separator"></span>
      <QueueAnim type="bottom" className="info-content" key="content">
        <p className="main-info" key="1">已全面全新升级，主要包含G2、G6、F2 以及一套完整的图表使用和设计规范。</p>
        <p className="main-info" key="2">得益于丰富的业务场景和用户需求挑战，AntV经历多年积累与不断打磨，已支撑整个阿里集团内外2000+业务系统，通过了百万级UV产品的严苛考验后方敢与君见。</p>
      </QueueAnim>
    </QueueAnim>
  </OverPack>);
}