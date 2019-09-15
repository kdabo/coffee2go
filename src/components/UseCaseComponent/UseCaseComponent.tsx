import React from 'react';

import { Title } from '../../styles/components/Title';
import {
  activeButtonClassName,
  IframeHolder, IframeWhyCoffee2go, inactiveButtonClassName, WhyCoffe2go, WhyCoffe2goInnerWrapper, WhyCoffe2goListItem,
  WhyCoffe2goListItemSubtitle,
  WhyCoffe2goListItemTitle, WhyCoffe2goWrapper,
  WhyList
} from './UseCaseComponent.styled';
import pollution from '../../assets/pollution.gif';
import waiting from '../../assets/waiting.gif';
import trust from '../../assets/trust.gif';

interface IProps {
}

interface IState {
  defaultGif: string
  addClass1: boolean
  addClass2: boolean
  addClass3: boolean
}

class UseCaseComponent extends React.Component<IProps, IState> {
  public constructor(props: IProps) {
    super(props);
    this.state = {
      defaultGif: waiting,
      addClass1: true,
      addClass2: false,
      addClass3: false
    }
  }
  
  getGif = (gif: string) => {
    switch (gif) {
      case waiting:
        return waiting;
      case pollution:
        return pollution;
      case trust:
        return trust;
      default:
        return waiting;
    }
  };
  
  handleGifChange1(gif: string) {
    this.setState({
      defaultGif: this.getGif(gif),
      addClass1: true,
      addClass2: false,
      addClass3: false
    })
  };
  
  handleGifChange2(gif: string) {
    this.setState({
      defaultGif: this.getGif(gif),
      addClass1: false,
      addClass2: true,
      addClass3: false
    })
  };
  
  handleGifChange3(gif: string) {
    this.setState({
      defaultGif: this.getGif(gif),
      addClass1: false,
      addClass2: false,
      addClass3: true
    })
  };
  
  render() {
    return (
      <React.Fragment>
        <WhyCoffe2goWrapper>
           <Title p={3}>Why use coffee2go?</Title>
          <WhyCoffe2go>
            <WhyCoffe2goInnerWrapper>
              <IframeHolder>
                <IframeWhyCoffee2go src={this.state.defaultGif}/>
              </IframeHolder>
              <WhyList>
                
                <WhyCoffe2goListItem
                  className={this.state.addClass1 ? activeButtonClassName : inactiveButtonClassName}
                  onClick={() => this.handleGifChange1(waiting)}>
                  <WhyCoffe2goListItemTitle>
                    Skip the line
                  </WhyCoffe2goListItemTitle>
                  <WhyCoffe2goListItemSubtitle>
                    <b>Save</b> your time, everyday!
                  </WhyCoffe2goListItemSubtitle>
                </WhyCoffe2goListItem>
                
                <WhyCoffe2goListItem
                  className={this.state.addClass2 ? activeButtonClassName : inactiveButtonClassName}
                  onClick={() => this.handleGifChange2(pollution)}>
                  <WhyCoffe2goListItemTitle>
                    Go green
                  </WhyCoffe2goListItemTitle>
                  <WhyCoffe2goListItemSubtitle>
                    <b>Reduce waste</b> by using reusable cup!
                  </WhyCoffe2goListItemSubtitle>
                </WhyCoffe2goListItem>
                
                <WhyCoffe2goListItem
                  className={this.state.addClass3 ? activeButtonClassName : inactiveButtonClassName}
                  onClick={() => this.handleGifChange3(trust)}>
                  <WhyCoffe2goListItemTitle>
                    Reward your trust
                  </WhyCoffe2goListItemTitle>
                  <WhyCoffe2goListItemSubtitle>
                    <b>Earn points</b> with each purchase!
                  </WhyCoffe2goListItemSubtitle>
                </WhyCoffe2goListItem>
                
              </WhyList>
            </WhyCoffe2goInnerWrapper>
          </WhyCoffe2go>
        </WhyCoffe2goWrapper>
      </React.Fragment>
    )
  }
}

export default UseCaseComponent;
