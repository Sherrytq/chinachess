import React, { Component } from "react";
import "./index.less";

class RankItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const rankItemIofo = this.props.rankItemIofo;
    const title = this.props.title;
    return (
      <div className="RankItem">
        <div className="RankItmeHeader">
          <i className="iconfont icon-computer" />
          <span>{title}</span>
          <span style={{ float: "right" }}> ></span>
        </div>
        {rankItemIofo.map((item,index) => (
          <div className="RankItmeInfo">
            <span>#{index}</span>
            <img src="" alt=" " width="10" height="10" />
            <span>{item.playResource}</span>
            <span>
              {item.playName}({item.playRankNum})
            </span>
          </div>
        ))}
      </div>
    );
  }
}

export default RankItem;
