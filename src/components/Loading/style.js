import styled, { keyframes } from 'styled-components';

const $color = '#5C8DF6';
const $colorRight = "darken('#5C8DF6', '15%')";
const $colorLeft = 'darken(#5C8DF6, 5%)';
const $shadow = '#DBE3F4';

const box1 = keyframes`
    0%,
    50% {
        transform: translate(100%, 0);
    }
    100% {
        transform: translate(200%, 0);
    }
`;

const box2 = keyframes`
    0%{
        transform: translate(0, 100%);
    }
    50% {
        transform: translate(0, 0);
    }
    100% {  
        transform: translate(100%, 0);
    }
`;

const box3 = keyframes`
    0%,
    50% {
        transform: translate(100%, 100%);
    }
    100% {
        transform: translate(0, 100%);
    }
`;

const box4 = keyframes`
    0%{
        transform: translate(200%, 0);
    }
    50% {
        transform: translate(200%, 100%);
    }
    100% {
        transform: translate(100%, 100%);
    }
`;

const cssAnimation = keyframes`
  to {
      width:0;
      height:0;
      overflow:hidden;
  }
`;

export const Boxes = styled.div`
  position: fixed;
  top: 20%;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  display:flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  overflow: hidden;

  -moz-animation: ${cssAnimation} 0s ease-in 5s forwards;
  -webkit-animation: ${cssAnimation} 0s ease-in 5s forwards;
  -o-animation: ${cssAnimation} 0s ease-in 5s forwards;
  animation: ${cssAnimation} 0s ease-in 5s forwards;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;

  --size: 32px;
  --duration: 800ms;
  height: calc(var(--size) * 2);
  width: calc(var(--size) * 3);
  transform-style: preserve-3d;
  transform-origin: 50% 50%;
  margin-top: calc(var(--size) * 1.5 * -1);
  transform: rotateX(60deg) rotateZ(45deg) rotateY(0deg) translateZ(0px);
  .box {
      width: var(--size);
      height: var(--size);
      top: 0;
      left: 0;
      position: absolute;
      transform-style: preserve-3d;
      &:nth-child(1) {
          transform: translate(100%, 0);
          animation: ${box1} var(--duration) linear infinite;
      }
      &:nth-child(2) {
          transform: translate(0, 100%);
          animation: ${box2} var(--duration) linear infinite;
      }
      &:nth-child(3) {
          transform: translate(100%, 100%);
          animation: ${box3} var(--duration) linear infinite;
      }
      &:nth-child(4) {
          transform: translate(200%, 0);
          animation: ${box4} var(--duration) linear infinite;
      }
      & > div {
          --background: #${$color};
          --top: auto;
          --right: auto;
          --bottom: auto;
          --left: auto;
          --translateZ: calc(var(--size) / 2);
          --rotateY: 0deg;
          --rotateX: 0deg;
          position: absolute;
          width: 100%;
          height: 100%;
          background: var(--background);
          top: var(--top);
          right: var(--right);
          bottom: var(--bottom);
          left: var(--left);
          transform: rotateY(var(--rotateY)) rotateX(var(--rotateX)) translateZ(var(--translateZ));
          &:nth-child(1) {
              --top: 0;
              --left: 0;
          }
          &:nth-child(2) {
              --background: #${$colorRight};
              --right: 0;
              --rotateY: 90deg;
          }
          &:nth-child(3) {
              --background: #${$colorLeft};
              --rotateX: -90deg;
          }
          &:nth-child(4) {
              --background: #${$shadow};
              --top: 0;
              --left: 0;
              --translateZ: calc(var(--size) * 3 * -1);
          }
      }
  }

`;
