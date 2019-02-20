import React, { Component } from "react";
import icon from "../../images/envelope.png";

export default class Canvas extends Component {
  componentDidMount() {
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");

    canvas.height = 320;

    let envelope = new Image();
    envelope.src = icon;

    let envelopeX = 0;
    let envelopeY = 0;

    let envelope2X = 50;
    let envelope2Y = 20;

    let envelopeDx = 2;
    let envelope2Dx = 2;

    //Rotates the image 90 degrees
    function drawEnvelope() {
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate((-70 * Math.PI) / 180);
      ctx.drawImage(envelope, envelopeX, envelopeY);
      ctx.drawImage(envelope, envelope2X, envelope2Y);
      ctx.restore();
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawEnvelope();

      envelopeX += envelopeDx;
      envelope2X += envelope2Dx;

      if (envelopeX > 170) {
        envelopeDx = -envelopeDx;
      } else if (envelopeX < -170) {
        envelopeDx = -envelopeDx;
      }

      if (envelope2X > 170) {
        envelope2Dx = -envelope2Dx;
      } else if (envelope2X < -170) {
        envelope2Dx = -envelopeDx;
      }

      requestAnimationFrame(draw);
    }

    draw();
  }
  render() {
    return <canvas id="myCanvas" />;
  }
}
