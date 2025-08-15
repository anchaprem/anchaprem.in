import React, { useState, useEffect } from 'react';


const animationStyles = `

  .container {
    position: relative;
    width: 100vw;
    height: 56.25vw; /* 16:9 aspect ratio */
  }

  .container div {
    background: black;
    position: absolute;
    transform-origin: 0 50%;
  }

  .container .lcd-light {
    border-radius: 0;
    left: 18.23vw;
    top: 19.79vw;
    width: 10.42vw;
    height: 18.75vw;
    background: radial-gradient(at center left, white, transparent 75%);
    transform: rotate(-10deg);
    animation: monitorFlash 0.08s steps(2) infinite alternate;
  }

  .container .lcd-light::before, .container .lcd-light::after {
    border: 0;
    content: "";
    display: block;
    position: absolute;
  }

  .container .lcd-light::before {
    border-bottom: 6.25vw solid transparent;
  }

  .container .lcd-light::after {
    border-top: 3.65vw solid transparent;
    bottom: 0;
  }

  .container .monitor {
    border-radius: 1.04vw;
    left: 16.67vw;
    top: 23.96vw;
    width: 11.46vw;
    height: 2.08vw;
    transform: rotate(80deg);
  }

  .container .monitor-neck {
    border-radius: 0;
    left: 14.58vw;
    top: 35.42vw;
    width: 3.65vw;
    height: 1.04vw;
    transform: rotate(-40deg);
  }

  .container .monitor-base {
    border-radius: 3.13vw 3.13vw 0 0;
    left: 11.46vw;
    top: 35.42vw;
    width: 6.25vw;
    height: 3.13vw;
  }

  .container .desk {
    border-radius: 2.08vw;
    left: 8.33vw;
    top: 38.02vw;
    width: 18.23vw;
    height: 3.13vw;
  }

  .container .tower {
    border-radius: 1.04vw;
    left: 8.33vw;
    top: 42.19vw;
    width: 15.63vw;
    height: 9.9vw;
  }

  .container .tower::before {
    background-color: white;
    background-image: repeating-linear-gradient(transparent, transparent 0.52vw, black 0.52vw, black 1.04vw), repeating-linear-gradient(90deg, transparent, transparent 0.52vw, black 0.52vw, black 1.04vw);
    content: "";
    display: block;
    position: absolute;
    top: 2.08vw;
    right: 2.08vw;
    width: 3.65vw;
    height: 2.6vw;
  }

  .container .chair-back {
    border-radius: 2.08vw;
    left: 38.54vw;
    top: 40.63vw;
    width: 9.9vw;
    height: 3.13vw;
    transform: rotate(-80deg);
  }

  .container .chair-bottom {
    border-radius: 2.08vw;
    left: 29.69vw;
    top: 43.23vw;
    width: 9.9vw;
    height: 3.13vw;
  }

  .container .clock {
    border-radius: 50%;
    left: 44.79vw;
    top: 6.25vw;
    width: 8.85vw;
    height: 8.85vw;
    background: white;
    border: 1.82vw solid black;
  }

  .container .hour, .container .minute {
    will-change: transform;
  }

  .container .hour {
    border-radius: 1.04vw;
    left: 2.15vw;
    top: 0.10vw;
    width: 1.56vw;
    height: 3.65vw;
    transform-origin: 0.78vw 2.86vw;
    transform: rotate(135deg);
    animation: hrHand 4s linear infinite;
  }

  .container .minute {
    border-radius: 1.04vw;
    left: 2.15vw;
    top: -0.4vw;
    width: 1.56vw;
    height: 4.43vw;
    transform-origin: 0.78vw 3.65vw;
    animation: minHand 0.3333333333s linear infinite;
  }

  .container .pillow {
    border-radius: 2.08vw;
    left: 85.94vw;
    top: 40.63vw;
    width: 8.33vw;
    height: 3.13vw;
    transform: rotate(-35deg);
  }

  .container .bed {
    border-radius: 2.08vw 2.08vw 0.52vw 0.52vw;
    left: 54.69vw;
    top: 43.23vw;
    width: 29.69vw;
    height: 5.21vw;
    background: transparent;
    border-top: 3.13vw solid black;
    border-right: 3.13vw solid black;
    border-left: 3.13vw solid black;
  }

  .container .human-wrapper {
    transform: translate(68.75vw, 23.44vw);
    will-change: transform;
    animation: bodyMove 8s linear infinite;
  }

  .container .human {
    background: transparent;
    border-radius: 0;
    left: 0;
    top: 0;
    width: 6.25vw;
    height: 20.31vw;
    transform-origin: 3.13vw 17.71vw;
    transform: rotate(90deg);
    animation: bodyRotate 8s linear infinite;
  }

  .container .human div {
    will-change: transform;
  }

  .container .head {
    border-radius: 50%;
    left: 0;
    top: 0;
    width: 6.25vw;
    height: 6.25vw;
    transform: translate(-2.86vw, 0.78vw);
    animation: headMove 8s linear infinite;
  }

  .container .eyes {
    background: transparent;
    width: 3.13vw;
    height: 1.04vw;
    top: 2.08vw;
    left: 2.34vw;
    transform-origin: 50% 50%;
    transform: rotate(-55deg);
    animation: eyesMove 8s linear infinite;
  }

  .container .eyes::before, .container .eyes::after {
    background: #dc1e1e;
    border-radius: 50%;
    content: "";
    display: inline-block;
    position: absolute;
    width: 1.04vw;
    height: 1.04vw;
  }

  .container .eyes::before {
    right: 0.52vw;
  }

  .container .torso {
    border-radius: 3.13vw;
    left: 1.04vw;
    top: 6.77vw;
    width: 4.17vw;
    height: 12.5vw;
  }

  .container .r-upper-arm,
  .container .r-lower-arm,
  .container .l-upper-arm,
  .container .l-lower-arm {
    transform-origin: 1.82vw 1.82vw;
  }

  .container .l-thigh,
  .container .r-thigh,
  .container .l-lower-leg,
  .container .r-lower-leg {
    transform-origin: 2.08vw 2.08vw;
  }

  .container .r-upper-arm {
    border-radius: 3.13vw;
    left: 0.26vw;
    top: 0;
    width: 3.65vw;
    height: 8.33vw;
    transform: rotate(-40deg);
    animation: RUpArmMove 8s linear infinite;
  }

  .container .r-lower-arm {
    border-radius: 3.13vw;
    left: 0;
    top: 4.95vw;
    width: 3.65vw;
    height: 8.33vw;
    transform: rotate(-25deg);
    animation: RLowArmMove 8s linear infinite;
  }

  .container .l-upper-arm {
    border-radius: 3.13vw;
    left: 0.26vw;
    top: 0;
    width: 3.65vw;
    height: 8.33vw;
    transform: rotate(-40deg);
    animation: LUpArmMove 8s linear infinite;
  }

  .container .l-lower-arm {
    border-radius: 3.13vw;
    left: 0;
    top: 4.95vw;
    width: 3.65vw;
    height: 8.33vw;
    transform: rotate(-25deg);
    animation: LLowArmMove 8s linear infinite;
  }

  .container .l-thigh,
  .container .r-thigh {
    border-radius: 3.13vw;
    left: 0;
    top: 8.33vw;
    width: 4.17vw;
    height: 10.94vw;
    transform: rotate(-5deg);
  }

  .container .l-thigh {
    animation: LThighMove 8s linear infinite;
  }

  .container .r-thigh {
    animation: RThighMove 8s linear infinite;
  }

  .container .l-lower-leg,
  .container .r-lower-leg {
    border-radius: 3.13vw;
    left: 0;
    top: 6.77vw;
    width: 4.17vw;
    height: 10.94vw;
    transform: rotate(5deg);
  }

  .container .l-lower-leg {
    animation: LLowerLegMove 8s linear infinite;
  }

  .container .r-lower-leg {
    animation: RLowerLegMove 8s linear infinite;
  }

  .container .reset-anim {
    animation: none;
  }

  @keyframes monitorFlash { from { opacity: 1; } to { opacity: 0.75; } }
  @keyframes bodyMove { from { transform: translate(68.75vw, 23.44vw); } 6.9444444444% { transform: translate(68.75vw, 23.44vw); } 8.3333333333% { transform: translate(68.75vw, 19.53vw); } 15.2777777778% { transform: translate(68.75vw, 19.53vw); } 22.2222222222% { transform: translate(35.16vw, 19.53vw); } 23.6111111111% { transform: translate(33.85vw, 20.31vw); } 25% { transform: translate(32.81vw, 23.96vw); } 52.7777777778% { transform: translate(32.81vw, 23.96vw); } 54.1666666667% { transform: translate(33.33vw, 23.96vw); } 55.5555555556% { transform: translate(34.38vw, 23.96vw); } 56.9444444444% { transform: translate(34.38vw, 23.96vw); } 58.3333333333% { transform: translate(36.46vw, 23.96vw); } 59.7222222222% { transform: translate(46.88vw, 19.79vw); } 61.1111111111% { transform: translate(48.18vw, 19.79vw); } 62.5% { transform: translate(55.99vw, 19.79vw); } 63.8888888889% { transform: translate(61.2vw, 21.35vw); } 65.2777777778% { transform: translate(68.75vw, 23.44vw); } to { transform: translate(68.75vw, 23.44vw); } }
  @keyframes bodyRotate { from { transform: rotate(90deg); } 6.9444444444% { transform: rotate(90deg); } 8.3333333333% { transform: rotate(80deg); } 9.7222222222% { transform: rotate(70deg); } 11.1111111111% { transform: rotate(35deg); } 12.5% { transform: rotate(0deg); } 15.2777777778% { transform: rotate(0deg); } 16.6666666667% { transform: rotate(-3deg); } 22.2222222222% { transform: rotate(-3deg); } 23.6111111111% { transform: rotate(-30deg); } 25% { transform: rotate(-15deg); } 48.6111111111% { transform: rotate(-15deg); } 50% { transform: rotate(0deg); } 51.3888888889% { transform: rotate(0deg); } 52.7777777778% { transform: rotate(7deg); } 54.1666666667% { transform: rotate(15deg); } 55.5555555556% { transform: rotate(25deg); } 56.9444444444% { transform: rotate(35deg); } 58.3333333333% { transform: rotate(40deg); } 59.7222222222% { transform: rotate(70deg); } 61.1111111111% { transform: rotate(85deg); } 62.5% { transform: rotate(85deg); } 63.8888888889% { transform: rotate(88deg); } 65.2777777778% { transform: rotate(90deg); } to { transform: rotate(90deg); } }
  @keyframes headMove { from { transform: translate(-2.86vw, 0.78vw); } 6.9444444444% { transform: translate(-2.86vw, 0.78vw); } 8.3333333333% { transform: translate(-1.3vw, 1.82vw); } 9.7222222222% { transform: translate(0vw, 0vw); } 48.6111111111% { transform: translate(0vw, 0vw); } 50% { transform: translate(-0.52vw, 0vw); } 51.3888888889% { transform: translate(0.52vw, 0vw); } 56.9444444444% { transform: translate(1.04vw, 0vw); } 58.3333333333% { transform: translate(0.52vw, 0vw); } 59.7222222222% { transform: translate(0vw, 0vw); } 61.1111111111% { transform: translate(-0.52vw, 0.26vw); } 62.5% { transform: translate(-0.78vw, 0.26vw); } 63.8888888889% { transform: translate(-1.3vw, 0.52vw); } 65.2777777778% { transform: translate(-2.86vw, 0.78vw); } to { transform: translate(-2.86vw, 0.78vw); } }
  @keyframes eyesMove { from { transform: rotate(-55deg) scale(1, 0); } 4.1666666667% { transform: rotate(-55deg) scale(1, 1); } 6.9444444444% { transform: rotate(-55deg) scale(1, 1); } 12.5% { transform: rotate(0deg) translate(0vw, 1.04vw); } 13.8888888889% { transform: rotate(0deg) translate(-1.04vw, 1.04vw); } 15.2777777778% { transform: rotate(0deg) translate(-1.82vw, 1.04vw); } 48.6111111111% { transform: rotate(0deg) translate(-1.82vw, 1.04vw); } 50% { transform: rotate(30deg) translate(-1.82vw, 1.04vw); } 51.3888888889% { transform: rotate(30deg) translate(1.04vw, 1.04vw); } 58.3333333333% { transform: rotate(0deg) translate(0.5vw, 1.04vw); } 63.8888888889% { transform: rotate(-25deg) translate(0vw, 0vw) scale(1, 1); } 65.2777777778% { transform: rotate(-55deg) translate(0vw, 0vw) scale(1, 0); } to { transform: rotate(-55deg) translate(0vw, 0vw) scale(1, 0); } }
  @keyframes RUpArmMove { from { transform: rotate(-40deg); } 6.9444444444% { transform: rotate(-40deg); } 8.3333333333% { transform: rotate(-30deg); } 9.7222222222% { transform: rotate(-45deg); } 11.1111111111% { transform: rotate(0deg); } 12.5% { transform: rotate(15deg); } 13.8888888889% { transform: rotate(0deg); } 15.2777777778% { transform: rotate(0deg); } 16.6666666667% { transform: rotate(-35deg); } 18.0555555556% { transform: rotate(-5deg); } 19.4444444444% { transform: rotate(25deg); } 20.8333333333% { transform: rotate(-5deg); } 22.2222222222% { transform: rotate(-35deg); } 23.6111111111% { transform: rotate(-15deg); } 25% { transform: rotate(65deg); } 48.6111111111% { transform: rotate(65deg); } 50% { transform: rotate(75deg); } 51.3888888889% { transform: rotate(50deg); } 52.7777777778% { transform: rotate(40deg); } 54.1666666667% { transform: rotate(10deg); } 55.5555555556% { transform: rotate(45deg); } 56.9444444444% { transform: rotate(-30deg); } 58.3333333333% { transform: rotate(-60deg); } 59.7222222222% { transform: rotate(-120deg); } 61.1111111111% { transform: rotate(-100deg); } 62.5% { transform: rotate(-100deg); } 63.8888888889% { transform: rotate(-60deg); } 65.2777777778% { transform: rotate(-20deg); } 68.0555555556% { transform: rotate(-40deg); } to { transform: rotate(-40deg); } }
  @keyframes RLowArmMove { from { transform: rotate(-25deg); } 6.9444444444% { transform: rotate(-25deg); } 8.3333333333% { transform: rotate(-60deg); } 9.7222222222% { transform: rotate(-15deg); } 12.5% { transform: rotate(-15deg); } 13.8888888889% { transform: rotate(0deg); } 15.2777777778% { transform: rotate(0deg); } 16.6666666667% { transform: rotate(30deg); } 22.2222222222% { transform: rotate(30deg); } 23.6111111111% { transform: rotate(80deg); } 25% { transform: rotate(40deg); } 26.3888888889% { transform: rotate(50deg); } 27.7777777778% { transform: rotate(80deg); } 29.1666666667% { transform: rotate(50deg); } 30.5555555556% { transform: rotate(20deg); } 31.9444444444% { transform: rotate(50deg); } 33.3333333333% { transform: rotate(80deg); } 34.7222222222% { transform: rotate(50deg); } 36.1111111111% { transform: rotate(20deg); } 37.5% { transform: rotate(50deg); } 38.8888888889% { transform: rotate(80deg); } 40.2777777778% { transform: rotate(50deg); } 41.6666666667% { transform: rotate(20deg); } 43.0555555556% { transform: rotate(50deg); } 44.4444444444% { transform: rotate(80deg); } 45.8333333333% { transform: rotate(50deg); } 47.2222222222% { transform: rotate(20deg); } 48.6111111111% { transform: rotate(50deg); } 50% { transform: rotate(25deg); } 51.3888888889% { transform: rotate(20deg); } 52.7777777778% { transform: rotate(20deg); } 54.1666666667% { transform: rotate(10deg); } 55.5555555556% { transform: rotate(-30deg); } 56.9444444444% { transform: rotate(-30deg); } 58.3333333333% { transform: rotate(-40deg); } 59.7222222222% { transform: rotate(-30deg); } 63.8888888889% { transform: rotate(-45deg); } 65.2777777778% { transform: rotate(-30deg); } 66.6666666667% { transform: rotate(-30deg); } 69.4444444444% { transform: rotate(-25deg); } to { transform: rotate(-25deg); } }
  @keyframes LUpArmMove { from { transform: rotate(-40deg); } 6.9444444444% { transform: rotate(-40deg); } 6.9444444444% { transform: rotate(-40deg); } 8.3333333333% { transform: rotate(-60deg); } 9.7222222222% { transform: rotate(-80deg); } 11.1111111111% { transform: rotate(-60deg); } 12.5% { transform: rotate(-30deg); } 13.8888888889% { transform: rotate(0deg); } 15.2777777778% { transform: rotate(0deg); } 16.6666666667% { transform: rotate(35deg); } 18.0555555556% { transform: rotate(-5deg); } 19.4444444444% { transform: rotate(-25deg); } 20.8333333333% { transform: rotate(-5deg); } 22.2222222222% { transform: rotate(35deg); } 23.6111111111% { transform: rotate(60deg); } 25% { transform: rotate(65deg); } 48.6111111111% { transform: rotate(65deg); } 50% { transform: rotate(15deg); } 51.3888888889% { transform: rotate(5deg); } 52.7777777778% { transform: rotate(0deg); } 58.3333333333% { transform: rotate(-80deg); } 59.7222222222% { transform: rotate(-45deg); } 65.2777777778% { transform: rotate(30deg); } 68.0555555556% { transform: rotate(-40deg); } to { transform: rotate(-40deg); } }
  @keyframes LLowArmMove { from { transform: rotate(-25deg); } 6.9444444444% { transform: rotate(-25deg); } 8.3333333333% { transform: rotate(-60deg); } 9.7222222222% { transform: rotate(-15deg); } 12.5% { transform: rotate(-15deg); } 13.8888888889% { transform: rotate(0deg); } 15.2777777778% { transform: rotate(0deg); } 16.6666666667% { transform: rotate(30deg); } 23.6111111111% { transform: rotate(30deg); } 25% { transform: rotate(40deg); } 26.3888888889% { transform: rotate(50deg); } 27.7777777778% { transform: rotate(20deg); } 29.1666666667% { transform: rotate(50deg); } 30.5555555556% { transform: rotate(80deg); } 31.9444444444% { transform: rotate(50deg); } 33.3333333333% { transform: rotate(20deg); } 34.7222222222% { transform: rotate(50deg); } 36.1111111111% { transform: rotate(80deg); } 37.5% { transform: rotate(50deg); } 38.8888888889% { transform: rotate(20deg); } 40.2777777778% { transform: rotate(50deg); } 41.6666666667% { transform: rotate(80deg); } 43.0555555556% { transform: rotate(50deg); } 44.4444444444% { transform: rotate(20deg); } 45.8333333333% { transform: rotate(50deg); } 47.2222222222% { transform: rotate(70deg); } 48.6111111111% { transform: rotate(75deg); } 50% { transform: rotate(70deg); } 52.7777777778% { transform: rotate(-15deg); } 58.3333333333% { transform: rotate(-85deg); } 59.7222222222% { transform: rotate(-90deg); } 66.6666666667% { transform: rotate(-25deg); } to { transform: rotate(-25deg); } }
  @keyframes RThighMove { from { transform: rotate(-5deg); } 6.9444444444% { transform: rotate(-5deg); } 8.3333333333% { transform: rotate(-30deg); } 9.7222222222% { transform: rotate(-80deg); } 11.1111111111% { transform: rotate(-30deg); } 12.5% { transform: rotate(0deg); } 15.2777777778% { transform: rotate(0deg); } 16.6666666667% { transform: rotate(-15deg); } 18.0555555556% { transform: rotate(15deg); } 19.4444444444% { transform: rotate(30deg); } 20.8333333333% { transform: rotate(15deg); } 22.2222222222% { transform: rotate(30deg); } 23.6111111111% { transform: rotate(70deg); } 25% { transform: rotate(90deg); } 52.7777777778% { transform: rotate(90deg); height: 10.94vw; } 54.1666666667% { transform: rotate(0deg); height: 7.29vw; } 58.3333333333% { transform: rotate(0deg); height: 7.29vw; } 59.7222222222% { transform: rotate(-50deg); height: 10.94vw; } 61.1111111111% { transform: rotate(-90deg); } 62.5% { transform: rotate(-60deg); } 63.8888888889% { transform: rotate(-30deg); } 65.2777777778% { transform: rotate(-5deg); } to { transform: rotate(-5deg); } }
  @keyframes RLowerLegMove { from { transform: rotate(5deg); } 6.9444444444% { transform: rotate(5deg); } 8.3333333333% { transform: rotate(30deg); } 9.7222222222% { transform: rotate(15deg); } 11.1111111111% { transform: rotate(0deg); } 15.2777777778% { transform: rotate(0deg); } 16.6666666667% { transform: rotate(-15deg); } 22.2222222222% { transform: rotate(-15deg); } 23.6111111111% { transform: rotate(-25deg); } 25% { transform: rotate(-70deg); } 50% { transform: rotate(-70deg); } 51.3888888889% { transform: rotate(-80deg); } 52.7777777778% { transform: rotate(-70deg) translateY(0); } 54.1666666667% { transform: rotate(-30deg) translateY(-3.65vw); } 55.5555555556% { transform: rotate(0deg) translateY(-3.65vw); } 56.9444444444% { transform: rotate(5deg) translateY(-3.65vw); } 58.3333333333% { transform: rotate(10deg) translateY(-3.65vw); } 59.7222222222% { transform: rotate(60deg) translateY(0); } 61.1111111111% { transform: rotate(30deg); } 62.5% { transform: rotate(60deg); } 63.8888888889% { transform: rotate(30deg); } 65.2777777778% { transform: rotate(5deg); } to { transform: rotate(5deg); } }
  @keyframes LThighMove { from { transform: rotate(-5deg); } 6.9444444444% { transform: rotate(-5deg); } 8.3333333333% { transform: rotate(-30deg); } 13.8888888889% { transform: rotate(0deg); } 15.2777777778% { transform: rotate(0deg); } 16.6666666667% { transform: rotate(30deg); } 18.0555555556% { transform: rotate(15deg); } 19.4444444444% { transform: rotate(-15deg); } 20.8333333333% { transform: rotate(15deg); } 22.2222222222% { transform: rotate(-15deg); } 23.6111111111% { transform: rotate(50deg); } 25% { transform: rotate(90deg); } 48.6111111111% { transform: rotate(90deg); height: 10.94vw; } 50% { transform: rotate(0deg); height: 6.77vw; } 51.3888888889% { transform: rotate(-5deg); height: 6.77vw; } 52.7777777778% { transform: rotate(-10deg); height: 6.77vw; } 54.1666666667% { transform: rotate(-70deg); height: 6.77vw; } 58.3333333333% { transform: rotate(-40deg); height: 6.77vw; } 59.7222222222% { transform: rotate(-110deg); height: 10.94vw; } 61.1111111111% { transform: rotate(-190deg); } 62.5% { transform: rotate(-50deg); } 63.8888888889% { transform: rotate(-5deg); } to { transform: rotate(-5deg); } }
  @keyframes LLowerLegMove { from { transform: rotate(5deg); } 6.9444444444% { transform: rotate(5deg); } 8.3333333333% { transform: rotate(30deg); } 12.5% { transform: rotate(30deg); } 13.8888888889% { transform: rotate(0deg); } 15.2777777778% { transform: rotate(0deg); } 16.6666666667% { transform: rotate(-30deg); } 18.0555555556% { transform: rotate(-15deg); } 22.2222222222% { transform: rotate(-15deg); } 23.6111111111% { transform: rotate(-50deg); } 25% { transform: rotate(-90deg); } 48.6111111111% { transform: rotate(-90deg) translateY(0); } 50% { transform: rotate(0deg) translateY(-4.95vw); } 51.3888888889% { transform: rotate(0deg) translateY(-4.95vw); } 52.7777777778% { transform: rotate(30deg) translateY(-4.95vw); } 54.1666666667% { transform: rotate(35deg) translateY(-4.95vw); } 55.5555555556% { transform: rotate(30deg) translateY(-4.95vw); } 56.9444444444% { transform: rotate(0deg) translateY(-4.95vw); } 58.3333333333% { transform: rotate(5deg) translateY(-4.17vw); } 59.7222222222% { transform: rotate(45deg) translateY(0); } 61.1111111111% { transform: rotate(145deg); } 62.5% { transform: rotate(55deg); } 63.8888888889% { transform: rotate(25deg); } 65.2777777778% { transform: rotate(5deg); } to { transform: rotate(5deg); } }
  @keyframes hrHand { from { transform: rotate(135deg); } to { transform: rotate(495deg); } }
  @keyframes minHand { from { transform: rotate(0deg); } to { transform: rotate(1turn); } }
`;


const Intro = () => {
  return (
    <div className="container">
      <div className="lcd-light"></div>
      <div className="monitor"></div>
      <div className="monitor-neck"></div>
      <div className="monitor-base"></div>
      <div className="desk"></div>
      <div className="tower"></div>
      <div className="chair-back"></div>
      <div className="chair-bottom"></div>
      <div className="clock">
        <div className="hour"></div>
        <div className="minute"></div>
      </div>
      <div className="pillow"></div>
      <div className="bed"></div>
      <div className="human-wrapper">
        <div className="human">
          <div className="head">
            <div className="eyes"></div>
          </div>
          <div className="torso">
            <div className="l-thigh"><div className="l-lower-leg"></div></div>
            <div className="r-thigh"><div className="r-lower-leg"></div></div>
            <div className="r-upper-arm"><div className="r-lower-arm"></div></div>
            <div className="l-upper-arm"><div className="l-lower-arm"></div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

function IntroApp() {
  const [displayText, setDisplayText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    // Typewriter effect that runs only once
    const fullText = "Premchand here";
    let charIndex = 0;
    
    const typeInterval = setInterval(() => {
      if (charIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setIsTypingComplete(true);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, []);

  // Blinking cursor effect - always active
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <>
      <style>{animationStyles}</style>
      {/* Main container for the page.
        - Uses flexbox to center the content both vertically and horizontally.
        - Sets the background color and ensures it takes up the full screen height.
        - `overflow-hidden` on the body and `overflow-auto` here prevents weird scrollbars.
        - Added pt-20 to account for fixed header height
      */}
      <main className="min-h-screen w-full bg-[#0b1220] flex items-center justify-center overflow-auto p-4 pt-20">
        
        {/* Centering wrapper for all content */}
        <div className="-mt-4 sm:mt-2 md:-mt-10 lg:-mt-38 xl:-mt-40 flex flex-col items-center justify-center text-center w-full max-w-6xl">

          {/* Animation container with responsive scaling */}
          <div className=" w-full flex justify-center ">
            <div className="transform scale-[0.7] sm:scale-[0.6] lg:scale-[0.4]" 
                 style={{ transformOrigin: 'center center' }}>
              <Intro />
            </div>
          </div>

          {/* Text Content Section positioned directly below animation */}
          <div className="text-white md:-mt-10 lg:-mt-26 xl:-mt-52">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              hi, <span className="text-teal-400">{displayText}{showCursor && '|'}</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-3xl text-gray-300">
              I create stuff sometimes.
            </p>

            
            <div className="pt-2 sm:pt-3 space-y-2 sm:space-y-3 animate-fade-in">
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-sm sm:max-w-md md:max-w-lg mx-auto">
              I'm a Python & MERN Stack developer passionate about building high-performance apps, from full-stack solutions to AI tools, with experience in secure, real-time, and scalable systems.
              </p>
              
              {/* Resume Button */}
              <a 
                 href="#resume" // Replace with a link to your resume PDF
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-flex items-center gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-teal-500/10 text-teal-300 rounded-lg border border-teal-500/30 hover:bg-teal-500/20 hover:border-teal-500/50 transition-all duration-300 shadow-lg shadow-teal-500/5 text-sm sm:text-base">
                {/* Download Icon SVG */}
                <span>👋</span>
                <span>Say Hi</span>
              </a>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}

export default IntroApp;
