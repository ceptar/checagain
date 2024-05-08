import React from 'react'
import styled, { css } from 'styled-components'

const Logo = ({ projectName }) => {
  return (
    <Icon isLogin={projectName}>
      <svg width="275" height="74" viewBox="0 0 275 74" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M33.3011 56.6201C33.3011 50.9471 30.7374 46.5561 25.6099 43.4469C24.7372 42.9014 22.0098 41.5923 17.4278 39.5195C13.5004 37.7194 11.1004 35.8376 10.2276 33.8738C9.79123 33.0011 9.57304 32.0465 9.57304 31.0101C9.57304 27.5191 11.0731 25.1463 14.0732 23.8917C15.1641 23.4008 16.3369 23.1553 17.5915 23.1553C21.1916 23.1553 24.0008 24.6281 26.019 27.5736C26.2372 27.9009 26.4281 28.2282 26.5918 28.5555L33.1375 25.0372C31.3919 20.6734 28.01 17.8097 22.9917 16.446C21.3007 16.0096 19.6097 15.7914 17.9188 15.7914C12.7368 15.7914 8.45483 17.4551 5.0729 20.7825C2.23644 23.7281 0.818209 27.3009 0.818209 31.501C0.818209 37.2831 3.32738 41.7014 8.34573 44.756C9.21849 45.3015 11.9731 46.6379 16.6096 48.7653C20.4825 50.5653 22.8826 52.4745 23.8099 54.4927C24.2463 55.42 24.4644 56.4291 24.4644 57.5201C24.4644 61.0657 22.9644 63.493 19.9643 64.8021C18.7643 65.2931 17.5097 65.5385 16.2005 65.5385C11.7277 65.484 7.47297 64.1476 3.43648 61.5293L0 67.7477C5.0729 71.3478 10.4185 73.1479 16.0369 73.1479C21.9825 73.1479 26.5645 71.1569 29.7828 67.1749C32.1283 64.2839 33.3011 60.7656 33.3011 56.6201Z" fill="white"/>
        <path d="M34.9375 16.8551V24.1372H47.047V72.0842H55.72V24.1372H68.1568V16.8551H34.9375Z" fill="white"/>
        <path d="M81.9027 72.0842V50.0744H87.8756H88.9393L97.1214 67.0931C99.0305 71.0205 101.812 73.0115 105.467 73.0661C106.831 73.0661 108.113 72.9024 109.313 72.5751L108.904 66.2749H108.004C106.585 66.1658 105.522 65.4294 104.813 64.0658L97.0396 48.438C102.494 46.2015 105.794 42.1923 106.94 36.4103C107.213 35.1012 107.349 33.7648 107.349 32.4011C107.349 24.0008 103.04 18.9279 94.4213 17.1824C92.4031 16.8006 90.1666 16.6096 87.712 16.6096C82.4209 16.6096 77.5935 16.6915 73.2297 16.8551V72.0842H81.9027ZM87.7938 23.8099C93.6304 23.8099 97.0396 25.8281 98.0214 29.8646C98.2942 30.901 98.4305 32.0738 98.4305 33.3829C98.4305 37.9649 96.4396 40.9104 92.4576 42.2196C91.203 42.6014 89.8121 42.7923 88.2847 42.7923H81.9027V23.9735C84.4119 23.8644 86.3756 23.8099 87.7938 23.8099Z" fill="white"/>
        <path d="M119.459 72.0842L123.059 59.8929H142.532L146.05 72.0842H155.051L138.523 17.1824C141.141 15.3823 142.477 12.7095 142.532 9.16394C142.532 5.18199 140.896 2.42735 137.623 0.90003C136.314 0.30001 134.95 0 133.532 0C130.204 0 127.641 1.28186 125.841 3.84558C124.804 5.42745 124.286 7.25479 124.286 9.32758C124.34 12.655 125.459 15.1641 127.641 16.8551L110.704 72.0842H119.459ZM129.441 38.0467C129.768 36.9012 130.395 34.4193 131.323 30.601C132.032 27.7646 132.55 25.7463 132.877 24.5463C134.786 32.2374 135.877 36.6012 136.15 37.6376L140.65 53.2654H124.94L129.441 38.0467ZM129.522 9.32758C129.522 7.09114 130.423 5.67291 132.223 5.0729C132.604 4.9638 132.986 4.90925 133.368 4.90925C135.168 4.90925 136.368 5.75474 136.968 7.4457C137.186 8.04572 137.295 8.67301 137.295 9.32758C137.295 11.564 136.368 12.9822 134.514 13.5823C134.132 13.6914 133.75 13.7459 133.368 13.7459C131.623 13.7459 130.45 12.9004 129.85 11.2095C129.632 10.6094 129.522 9.98215 129.522 9.32758Z" fill="white"/>
        <path d="M187.779 72.0842V64.8021H169.042V16.8551H160.369V72.0842H187.779Z" fill="white"/>
        <path d="M197.434 72.0842L201.034 59.8929H220.507L224.026 72.0842H233.026L216.416 16.8551H205.616L188.679 72.0842H197.434ZM207.416 38.0467C207.743 36.9012 208.371 34.4193 209.298 30.601C210.007 27.7646 210.525 25.7463 210.852 24.5463C212.762 32.2374 213.853 36.6012 214.125 37.6376L218.625 53.2654H202.916L207.416 38.0467Z" fill="white"/>
        <path d="M247.59 72.0842V50.0744H253.563H254.627L262.809 67.0931C264.718 71.0205 267.5 73.0115 271.154 73.0661C272.518 73.0661 273.8 72.9024 275 72.5751L274.591 66.2749H273.691C272.273 66.1658 271.209 65.4294 270.5 64.0658L262.727 48.438C268.182 46.2015 271.482 42.1923 272.627 36.4103C272.9 35.1012 273.036 33.7648 273.036 32.4011C273.036 24.0008 268.727 18.9279 260.109 17.1824C258.09 16.8006 255.854 16.6096 253.399 16.6096C248.108 16.6096 243.281 16.6915 238.917 16.8551V72.0842H247.59ZM253.481 23.8099C259.318 23.8099 262.727 25.8281 263.709 29.8646C263.981 30.901 264.118 32.0738 264.118 33.3829C264.118 37.9649 262.127 40.9104 258.145 42.2196C256.89 42.6014 255.499 42.7923 253.972 42.7923H247.59V23.9735C250.099 23.8644 252.063 23.8099 253.481 23.8099Z" fill="white"/>
      </svg>
    </Icon>
  )
}

const Icon = styled.div`
  display: block;
  width: auto;
  height: 2em;
  max-width: 100%;
  margin: -1em auto;
  color: white;

  ${props =>
    props.isLogin &&
    css`
      display: block;
      margin: 0 auto;
      height: 4em;
      color: white;
    `}

  svg {
    display: block;
    margin: 0 auto;
    height: 100%;
    width: auto;
    fill: currentColor;
  }
`

export default Logo