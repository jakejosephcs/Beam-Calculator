import React, { useRef, useEffect } from 'react';
import { func } from 'prop-types';

const FreeBodyDiagram = ({
  length,
  lengthUnit,
  forceUnit,
  typeOfSupport,
  pointLoad,
}) => {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = 841;
    canvas.height = 140;

    const TOTAL_SQUARES_X = 34;
    const TOTAL_SQUARES_Y = 12;

    const SQUARES_TO_BEAM_START_X = 2;
    const SQUARES_TO_BEAM_START_Y = 5;
    const SQUARES_TAKEN_BY_BEAM_X = 30;
    const SQUARES_TAKEN_BY_BEAM_Y = 1;

    const SQUARES_TO_AXIS_START_Y = 10;
    const SQUARES_TAKEN_BY_AXIS_Y = 1;

    const beamStartX =
      (canvas.width / TOTAL_SQUARES_X) * SQUARES_TO_BEAM_START_X;
    const beamStartY =
      (canvas.height / TOTAL_SQUARES_Y) * SQUARES_TO_BEAM_START_Y;
    const beamLength =
      (canvas.width / TOTAL_SQUARES_X) * SQUARES_TAKEN_BY_BEAM_X;
    const beamWidth =
      (canvas.height / TOTAL_SQUARES_Y) * SQUARES_TAKEN_BY_BEAM_Y;

    const axisStartX = beamStartX;
    const axisStarty =
      (canvas.height / TOTAL_SQUARES_Y) * SQUARES_TO_AXIS_START_Y;
    const axisLength = beamLength;
    const axisWidth = SQUARES_TAKEN_BY_AXIS_Y;

    ctx.fillStyle = 'black';
    ctx.fillRect(beamStartX, beamStartY, beamLength, beamWidth);
    ctx.fillStyle = 'blue';
    ctx.fillRect(axisStartX, axisStarty, axisLength, axisWidth);

    const drawNumberAndUnitOnScale = (
      valueToShow,
      locationX,
      locationY,
      pixels = 18,
      unit = null
    ) => {
      ctx.font = `${pixels}px serif`;
      ctx.fillText(
        unit ? `${valueToShow}${unit}` : `${valueToShow}`,
        locationX,
        locationY
      );
    };

    drawNumberAndUnitOnScale(
      length,
      axisStartX + axisLength - 15,
      axisStarty + 15,
      18,
      lengthUnit
    );

    drawNumberAndUnitOnScale(0, axisStartX, axisStarty + 15);

    const SUPPORT_HEIGHT = 20;

    const drawPinSupport = (x) => {
      ctx.fillStyle = '#C4C4C4';
      ctx.beginPath();
      ctx.moveTo(x, beamStartY + beamWidth);
      ctx.lineTo(x - 10, beamStartY + beamWidth + SUPPORT_HEIGHT);
      ctx.lineTo(x + 10, beamStartY + beamWidth + SUPPORT_HEIGHT);
      ctx.fill();
      ctx.fillStyle = 'black';
      ctx.beginPath();
      ctx.moveTo(x - 20, beamStartY + beamWidth + SUPPORT_HEIGHT);
      ctx.lineTo(x + 20, beamStartY + beamWidth + SUPPORT_HEIGHT);
      ctx.stroke();
      ctx.moveTo(x - 15, beamStartY + beamWidth + SUPPORT_HEIGHT);
      ctx.lineTo(x - 17.5, 95);
      ctx.stroke();
      ctx.moveTo(x - 10, beamStartY + beamWidth + SUPPORT_HEIGHT);
      ctx.lineTo(x - 12.5, 95);
      ctx.stroke();
      ctx.moveTo(x - 5, beamStartY + beamWidth + SUPPORT_HEIGHT);
      ctx.lineTo(x - 7.5, 95);
      ctx.stroke();
      ctx.moveTo(x, beamStartY + beamWidth + SUPPORT_HEIGHT);
      ctx.lineTo(x - 2.5, 95);
      ctx.stroke();
      ctx.moveTo(x + 5, beamStartY + beamWidth + SUPPORT_HEIGHT);
      ctx.lineTo(x + 2.5, 95);
      ctx.stroke();
      ctx.moveTo(x + 10, beamStartY + beamWidth + SUPPORT_HEIGHT);
      ctx.lineTo(x + 7.5, 95);
      ctx.stroke();
      ctx.moveTo(x + 15, beamStartY + beamWidth + SUPPORT_HEIGHT);
      ctx.lineTo(x + 12.5, 95);
      ctx.stroke();
    };

    const drawRollerSupport = (x) => {
      ctx.fillStyle = '#C4C4C4';
      ctx.beginPath();
      ctx.moveTo(x, beamStartY + beamWidth);
      ctx.lineTo(x - 10, beamStartY + beamWidth + SUPPORT_HEIGHT);
      ctx.lineTo(x + 10, beamStartY + beamWidth + SUPPORT_HEIGHT);
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

    const drawFixedSupport = (side) => {
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
        (axisLength / length) * typeOfSupport[i].location + axisStartX;
      if (typeOfSupport[i].type === 'pin') {
        drawPinSupport(locationOfSupport);
      } else if (typeOfSupport[i].type === 'roller') {
        drawRollerSupport(locationOfSupport);
      } else if (typeOfSupport[i].type === 'fixed') {
        drawFixedSupport(typeOfSupport[i].location);
      }
      drawNumberAndUnitOnScale(
        typeOfSupport[i].location,
        locationOfSupport - 8,
        axisStarty + 15,
        14
      );
    }

    const drawPointLoad = (direction, location, magnitde) => {};

    for (let i = 0; i < pointLoad.length; i++) {}

    ctxRef.current = ctx;
  });

  return (
    <div>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default FreeBodyDiagram;