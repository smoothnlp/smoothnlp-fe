import React, {
  Component
} from 'react';

import './App.css';

class Canvas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }
  componentWillReceiveProps(nextProps) {
    this.init(nextProps.data);
  }
  init(data) {
    let tokens = data.tokens;
    let entities = data.entities;

    let c = document.getElementById("myCanvas");
    let ctx = c.getContext("2d");
    // 设置画布宽高
    let clength = 10;
    for (let i = 0; i < tokens.length; i++) {
      let thisLen = tokens[i].token.length * 25 + 10;
      for (let j = 0; j < entities.length; j++) {
        if (entities[j].text === tokens[i].token) {
          let nerTagLen = entities[j].nerTag.length * 10 + 10;
          thisLen = nerTagLen > thisLen ? nerTagLen : thisLen;
        }
      }
      clength = clength + thisLen;
    }

    c.width = clength;
    c.height = 100;

    // 清除画布
    ctx.clearRect(0, 0, c.width, c.height);
    // 词法分析
    let len = 10;
    for (let i = 0; i < tokens.length; i++) {
      let thisLen = 0;
      // console.log(tokens[i].token.length);
      // console.log(tokens[i].token.length * 25);
      // console.log(len);
      thisLen = tokens[i].token.length * 25;

      ctx.fillStyle = "#132c42";
      ctx.font = "16px 微软雅黑";
      ctx.fillText(tokens[i].token, len, 20);

      ctx.fillStyle = "#66879c";
      ctx.font = "12px 微软雅黑";
      ctx.fillText(tokens[i].postag, len, 50);


      for (let j = 0; j < entities.length; j++) {
        if (entities[j].text === tokens[i].token) {
          ctx.fillStyle = "#42d2cd";
          ctx.font = "12px 微软雅黑";
          ctx.fillText(entities[j].nerTag, len, 70);
          let nerTagLen = entities[j].nerTag.length * 9 + 5;
          console.log(thisLen);

          console.log(nerTagLen);

          thisLen = nerTagLen > thisLen ? nerTagLen : thisLen;

          console.log(thisLen);

        }
      }

      console.log("thisLen: ", thisLen);


      len = len + thisLen;
      console.log("len: ", len);

      // console.log(tokens[i].token.length);
    }

  }
  render() {
    return (
      <div className="Canvas">
        <div>
          <div className="title">词法分析</div>
          <div className="canvas-area">
            <canvas id="myCanvas">
             你的浏览器不支持canvas,请升级你的浏览器
             </canvas>
          </div>
        </div>
      </div>
    );
  }
}

export default Canvas;