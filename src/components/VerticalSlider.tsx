import React, { Component } from 'react';
import { Title } from '../styles/components/Title';

import { VerticalSliderItem } from './VerticalSliderItem';

import styled, { css, keyframes } from 'styled-components';
import theme from '../styles/theme';

import { HowItWorks } from '../constants/HomePageConstants';
// import coffeeShop from '../../public/coffeeShop.jpg';
// import payAhead from '../../public/payAhead.jpg';


interface VerticalSliderItemContainerProps {
  position: number;
}

export interface State {
  foregroundItemIndex: number;
}

export const VerticalSliderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  height: 100%;
  min-height: 300px;

  /* Microsoft IE10 and up */
  @media all and (-ms-high-contrast: none) {
    display: block;
  }

  ${theme.mediaQueries.xs} {
      min-height: 500px;
      padding-left: 0.5rem;
  }

 ${theme.mediaQueries.medium} {
    align-items: flex-end;
    justify-content: center;
    min-height: 400px;
    margin-right: 0;
  };
`;

export const VerticalSliderItemContainer = styled.div <VerticalSliderItemContainerProps>`
  position: absolute;

  ${theme.mediaQueries.xs} {
    
    width: 300px;
    transform-origin: center;

    animation: ${p =>
    getMobileKeyFrameAnimation(p.position)} .5s ease-out forwards;
  };

  ${theme.mediaQueries.large} {
    width: 700px;


    ${p => css`
      animation: ${FromDesktopPosition[p.position]} 0.75s ease-in-out forwards;
    `}
  };
`;

/*
 * MOBILE ANIMATION
 */
const MOBILE_SCALE_OFFSET = 0.2;
const MOBILE_BOTTOM_BASE = 42;
const MOBILE_BOTTOM_OFFSET = 24;

const getMobileKeyFrameAnimation = (position: number) => {
  const oldPosition = position === 2 ? 0 : position + 1;

  return keyframes`
    0% { ${getMobilePositionStyles(oldPosition)} }
    10% { z-index: ${3 - oldPosition}; }
    100% { ${getMobilePositionStyles(position)} }
  `;
};

const getMobilePositionStyles = (position: number) => css`
  transform: translateY(
      -${MOBILE_BOTTOM_BASE - MOBILE_BOTTOM_OFFSET * position}px
    )
    scale(${1 - MOBILE_SCALE_OFFSET * position});
    z-index: ${3 - position};
`;

/*
 * DESKTOP ANIMATION
 */

const fromDesktopPositionStyles = {
  0: css`
    z-index: 3;
    filter: blur(0);
    transform: translateX(0) scale(1);
  `,
  1: css`
    z-index: 2;
    filter: blur(1px);
    transform: translateX(100px) scale(0.8);
  `,
  2: css`
    z-index: 1;
    filter: blur(2px);
    transform: translateX(250px) scale(0.4);
  `
};

const FromDesktopPosition: any = {
  0: keyframes`
    0% { ${fromDesktopPositionStyles[ 1 ]} }
    35% { ${fromDesktopPositionStyles[ 1 ]} }
    100% { ${fromDesktopPositionStyles[ 0 ]} }
  `,
  1: keyframes`
    0% { ${fromDesktopPositionStyles[ 2 ]} }
    35% { ${fromDesktopPositionStyles[ 2 ]} }
    100% { ${fromDesktopPositionStyles[ 1 ]} }
  `,
  2: keyframes`
    0% { ${fromDesktopPositionStyles[ 0 ]} }
    50% {
      z-index: 1;
      filter: blur(2px);
      transform: translateX(-123px) scale(.4);
    }
    100% { ${fromDesktopPositionStyles[ 2 ]} }
  `
};

const ButtonList = styled.ul < {} > `
    position: absolute;
    left: 80%;
    top: 50%;
    display: block;
    list-style: none;
`;

export const activeListItem = 'activeListItem';
export const inactiveListItem = 'inactiveListItem';

const ButtonListItem = styled.li < {} > `
    text-transform: uppercase;
    margin-bottom: 0.5rem;
    &::before {
      content: '';
      display: inline-block;
      width: 10px;
      height: 10px;
      border-radius: 10px;
      border: 1px solid ${theme.colors.black}
      margin-right: .5rem;
    }
    
    &:hover {
      cursor: pointer;
    }
    
   &.${activeListItem} {
      font-weight: ${theme.typography.fontWeightBlack}
    &::before {
      content: '';
      display: inline-block;
      width: 10px;
      height: 10px;
      border-radius: 10px;
      border: 1px solid ${theme.colors.black}
      background: ${theme.colors.black}
      margin-right: .5rem;
    }
   }
   
    &.${inactiveListItem} {
        font-weight: ${theme.typography.fontWeightLight}
    &::before {
        border: 1px solid ${theme.colors.black}
        background: ${theme.colors.white}
    }}
`;

export default class VerticalSlider extends Component<State> {

  state = {
    foregroundItemIndex: 0,
    activeListItem1: true,
    activeListItem2: false,
    activeListItem3: false
  };

  updateToNextItem = () => {
    this.setState({
      foregroundItemIndex: this.getNextItemIndex(1),
    });
  };

  getNextItemIndex = (increment: number): number => {
    const {foregroundItemIndex, activeListItem1, activeListItem2, activeListItem3} = this.state;
    const sliderItem = [ 'preorder', 'pay', 'pickup' ];
    let itemIndex = foregroundItemIndex + increment;

    if (itemIndex >= sliderItem.length) {
      itemIndex = itemIndex === sliderItem.length ? 0 : increment - 1;
    }

    return itemIndex;
  };


  getPosition = (itemIndex: number,
                 foregroundItemIndex: number): number => {
    const sliderItem = [ 'preorder', 'pay', 'pickup' ];

    if (foregroundItemIndex === 0) {
      return itemIndex;
    }

    if (itemIndex === foregroundItemIndex) {
      return 0;
    }

    const nrOfItems = sliderItem.length;
    const newIndex = itemIndex - foregroundItemIndex;

    return newIndex < 0 ? newIndex + nrOfItems : newIndex;
  };

  // getGif = (gif: string) => {
  //   switch (gif) {
  //     case coffeeShop:
  //       return coffeeShop;
  //       break;
  //     case payAhead:
  //       return payAhead;
  //       break;
  //     case coffeeShop:
  //       return coffeeShop;
  //       break;
  //   }
  // };

  handleActiveListItemChange2 = () => {
    this.setState({
      activeListItem1: false,
      activeListItem2: true,
      activeListItem3: false
    })
  };

  handleActiveListItemChange3 = () => {
    this.setState({
      activeListItem1: false,
      activeListItem2: false,
      activeListItem3: true
    })
  };


  render() {
    const {foregroundItemIndex} = this.state;

    return HowItWorks.length ? (
      <React.Fragment>
        <Title p={3}>How it works?</Title>
        <VerticalSliderContainer
          onClick={this.updateToNextItem}
        >
          {HowItWorks.map((item, index) => (
            <VerticalSliderItemContainer
              key={index}
              position={this.getPosition(index, foregroundItemIndex)}
            >
              <VerticalSliderItem
                step={item.STEP}
                title={item.TITLE}
                src={item.ICON}
              />
            </VerticalSliderItemContainer>
          ))}
          {/*<ButtonList>*/}
            {/*<ButtonListItem className={this.state.activeListItem1 ? 'activeListItem' : 'inactiveListItem'}*/}
              {/*>Step 1</ButtonListItem>*/}
            {/*<ButtonListItem className={this.state.activeListItem2 ? 'activeListItem' : 'inactiveListItem'}>Step 2</ButtonListItem>*/}
            {/*<ButtonListItem className={this.state.activeListItem3 ? 'activeListItem' : 'inactiveListItem'}>Step 3</ButtonListItem>*/}
          {/*</ButtonList>*/}
        </VerticalSliderContainer>
      </React.Fragment>
    ) : null;
  }
}
