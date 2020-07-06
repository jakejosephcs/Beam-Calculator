import React, { useRef, useEffect } from 'react';
import { func } from 'prop-types';

const FreeBodyDiagram = ({ length, lengthUnit, forceUnit, typeOfSupport }) => {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 841;
    canvas.height = 140;
    const ctx = canvas.getContext('2d');

    const beamStartX = (canvas.width / 34) * 2;
    const beamStartY = (canvas.height / 12) * 5;
    const beamLength = (canvas.width / 34) * 30;
    const beamWidth = canvas.height / 12;

    const axisStartX = beamStartX;
    const axisStarty = (canvas.height / 12) * 10;
    const axisLength = beamLength;
    const axisWidth = 1;

    const drawPinSupport = (x, y) => {
      ctx.fillStyle = '#C4C4C4';
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x - 10, y + 20);
      ctx.lineTo(x + 10, y + 20);
      ctx.fill();
      ctx.fillStyle = 'black';
      ctx.beginPath();
      ctx.moveTo(x - 20, 90);
      ctx.lineTo(x + 20, 90);
      ctx.stroke();
      ctx.moveTo(x - 15, 90);
      ctx.lineTo(x - 17.5, 95);
      ctx.stroke();
      ctx.moveTo(x - 10, 90);
      ctx.lineTo(x - 12.5, 95);
      ctx.stroke();
      ctx.moveTo(x - 5, 90);
      ctx.lineTo(x - 7.5, 95);
      ctx.stroke();
      ctx.moveTo(x, 90);
      ctx.lineTo(x - 2.5, 95);
      ctx.stroke();
      ctx.moveTo(x + 5, 90);
      ctx.lineTo(x + 2.5, 95);
      ctx.stroke();
      ctx.moveTo(x + 10, 90);
      ctx.lineTo(x + 7.5, 95);
      ctx.stroke();
      ctx.moveTo(x + 15, 90);
      ctx.lineTo(x + 12.5, 95);
      ctx.stroke();
    };

    const drawRollerSupport = (x, y) => {
      ctx.fillStyle = '#C4C4C4';
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x - 10, y + 20);
      ctx.lineTo(x + 10, y + 20);
      ctx.fill();
      ctx.fillStyle = 'black';
      ctx.beginPath();
      ctx.moveTo(x - 20, 95);
      ctx.lineTo(x + 20, 95);
      ctx.stroke();
      ctx.moveTo(x - 15, 95);
      ctx.lineTo(x - 17.5, 100);
      ctx.stroke();
      ctx.moveTo(x - 10, 95);
      ctx.lineTo(x - 12.5, 100);
      ctx.stroke();
      ctx.moveTo(x - 5, 95);
      ctx.lineTo(x - 7.5, 100);
      ctx.stroke();
      ctx.moveTo(x, 95);
      ctx.lineTo(x - 2.5, 100);
      ctx.stroke();
      ctx.moveTo(x + 5, 95);
      ctx.lineTo(x + 2.5, 100);
      ctx.stroke();
      ctx.moveTo(x + 10, 95);
      ctx.lineTo(x + 7.5, 100);
      ctx.stroke();
      ctx.moveTo(x + 15, 95);
      ctx.lineTo(x + 12.5, 100);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(x, 92.5, 2.5, 0, 2 * Math.PI);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(x + 8, 92.5, 2.5, 0, 2 * Math.PI);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(x - 8, 92.5, 2.5, 0, 2 * Math.PI);
      ctx.fill();
    };

    const drawFixedSupport = (side, y) => {
      ctx.fillStyle = '#C4C4C4';
      ctx.beginPath();
      if (side === 'left') {
        ctx.fillRect(beamStartX - 10, beamStartY - 20, 10, 50);
        ctx.beginPath();
        ctx.moveTo(beamStartX - 10, beamStartY - 30);
        ctx.lineTo(beamStartX - 10, beamStartY + 40);
        ctx.stroke();
        ctx.moveTo(beamStartX - 10, beamStartY - 30);
        ctx.lineTo(beamStartX - 15, beamStartY - 25);
        ctx.stroke();
        ctx.moveTo(beamStartX - 10, beamStartY - 25);
        ctx.lineTo(beamStartX - 15, beamStartY - 20);
        ctx.stroke();
        ctx.moveTo(beamStartX - 10, beamStartY - 20);
        ctx.lineTo(beamStartX - 15, beamStartY - 15);
        ctx.stroke();
        ctx.moveTo(beamStartX - 10, beamStartY - 15);
        ctx.lineTo(beamStartX - 15, beamStartY - 10);
        ctx.stroke();
        ctx.moveTo(beamStartX - 10, beamStartY - 10);
        ctx.lineTo(beamStartX - 15, beamStartY - 5);
        ctx.stroke();
        ctx.moveTo(beamStartX - 10, beamStartY - 5);
        ctx.lineTo(beamStartX - 15, beamStartY);
        ctx.stroke();
        ctx.moveTo(beamStartX - 10, beamStartY);
        ctx.lineTo(beamStartX - 15, beamStartY + 5);
        ctx.stroke();
        ctx.moveTo(beamStartX - 10, beamStartY + 5);
        ctx.lineTo(beamStartX - 15, beamStartY + 10);
        ctx.stroke();
        ctx.moveTo(beamStartX - 10, beamStartY + 10);
        ctx.lineTo(beamStartX - 15, beamStartY + 15);
        ctx.stroke();
        ctx.moveTo(beamStartX - 10, beamStartY + 15);
        ctx.lineTo(beamStartX - 15, beamStartY + 20);
        ctx.stroke();
        ctx.moveTo(beamStartX - 10, beamStartY + 20);
        ctx.lineTo(beamStartX - 15, beamStartY + 25);
        ctx.stroke();
        ctx.moveTo(beamStartX - 10, beamStartY + 25);
        ctx.lineTo(beamStartX - 15, beamStartY + 30);
        ctx.stroke();
        ctx.moveTo(beamStartX - 10, beamStartY + 30);
        ctx.lineTo(beamStartX - 15, beamStartY + 35);
        ctx.stroke();
        ctx.moveTo(beamStartX - 10, beamStartY + 35);
        ctx.lineTo(beamStartX - 15, beamStartY + 40);
        ctx.stroke();
      } else if (side === 'right') {
        ctx.fillRect(beamStartX + beamLength, beamStartY - 20, 10, 50);
        ctx.beginPath();
        ctx.moveTo(beamStartX + beamLength + 10, beamStartY - 30);
        ctx.lineTo(beamStartX + beamLength + 10, beamStartY + 40);
        ctx.stroke();
        ctx.moveTo(beamStartX + beamLength + 10, beamStartY - 30);
        ctx.lineTo(beamStartX + beamLength + 15, beamStartY - 25);
        ctx.stroke();
        ctx.moveTo(beamStartX + beamLength + 10, beamStartY - 25);
        ctx.lineTo(beamStartX + beamLength + 15, beamStartY - 20);
        ctx.stroke();
        ctx.moveTo(beamStartX + beamLength + 10, beamStartY - 20);
        ctx.lineTo(beamStartX + beamLength + 15, beamStartY - 15);
        ctx.stroke();
        ctx.moveTo(beamStartX + beamLength + 10, beamStartY - 15);
        ctx.lineTo(beamStartX + beamLength + 15, beamStartY - 10);
        ctx.stroke();
        ctx.moveTo(beamStartX + beamLength + 10, beamStartY - 10);
        ctx.lineTo(beamStartX + beamLength + 15, beamStartY - 5);
        ctx.stroke();
        ctx.moveTo(beamStartX + beamLength + 10, beamStartY - 5);
        ctx.lineTo(beamStartX + beamLength + 15, beamStartY);
        ctx.stroke();
        ctx.moveTo(beamStartX + beamLength + 10, beamStartY);
        ctx.lineTo(beamStartX + beamLength + 15, beamStartY + 5);
        ctx.stroke();
        ctx.moveTo(beamStartX + beamLength + 10, beamStartY + 5);
        ctx.lineTo(beamStartX + beamLength + 15, beamStartY + 10);
        ctx.stroke();
        ctx.moveTo(beamStartX + beamLength + 10, beamStartY + 10);
        ctx.lineTo(beamStartX + beamLength + 15, beamStartY + 15);
        ctx.stroke();
        ctx.moveTo(beamStartX + beamLength + 10, beamStartY + 15);
        ctx.lineTo(beamStartX + beamLength + 15, beamStartY + 20);
        ctx.stroke();
        ctx.moveTo(beamStartX + beamLength + 10, beamStartY + 20);
        ctx.lineTo(beamStartX + beamLength + 15, beamStartY + 25);
        ctx.stroke();
        ctx.moveTo(beamStartX + beamLength + 10, beamStartY + 25);
        ctx.lineTo(beamStartX + beamLength + 15, beamStartY + 30);
        ctx.stroke();
        ctx.moveTo(beamStartX + beamLength + 10, beamStartY + 30);
        ctx.lineTo(beamStartX + beamLength + 15, beamStartY + 35);
        ctx.stroke();
        ctx.moveTo(beamStartX + beamLength + 10, beamStartY + 35);
        ctx.lineTo(beamStartX + beamLength + 15, beamStartY + 40);
        ctx.stroke();
      }
    };

    for (let i = 0; i < typeOfSupport.length; i++) {
      const locationOfSupport =
        ((typeOfSupport[i].location * 30) / length) * (canvas.width / 34);
      const locationOfSupportRounded = Math.round(locationOfSupport * 10) / 10;
      console.log(locationOfSupport);
      if (typeOfSupport[i].type === 'pin') {
        drawPinSupport(locationOfSupport, 70);
      } else if (typeOfSupport[i].type === 'roller') {
        drawRollerSupport(locationOfSupport, 70);
      } else if (typeOfSupport[i].type === 'fixed') {
        drawFixedSupport(typeOfSupport[i].location, 70);
      }
      ctx.font = '14px serif';
      ctx.fillText(
        `${typeOfSupport[i].location}`,
        locationOfSupport - 8,
        axisStarty + 15
      );
    }

    ctx.fillStyle = 'black';
    ctx.fillRect(beamStartX, beamStartY, beamLength, beamWidth);
    ctx.fillStyle = 'blue';
    ctx.fillRect(axisStartX, axisStarty, axisLength, axisWidth);

    ctx.font = '18px serif';
    ctx.fillText(
      `${length}${lengthUnit}`,
      axisStartX + axisLength - 15,
      axisStarty + 15
    );
    ctx.fillText(0, axisStartX, axisStarty + 15);

    ctxRef.current = ctx;
  });

  return (
    <div>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default FreeBodyDiagram;
