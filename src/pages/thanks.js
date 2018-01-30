import React, { Component } from 'react';
import styled from 'react-emotion';
import { css } from 'emotion';
import Card from '../components/Card';
import Button from '../components/Button';

const ThanksContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.complementaryLight};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardWrapper = styled.div`
  ${props => props.theme.margins};
  display: flex;
  justify-content: center;
`;

const cardStyles = {
  padding: '1rem',
  backgroundColor: '#FFF'
};

const centerText = css`
  text-align: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

class Thanks extends Component {
  constructor() {
    super();
    this.state = {
      timer: 7000
    };

    this.timerCountdown = this.timerCountdown.bind(this);
  }

  componentDidMount() {
    setInterval(() => this.timerCountdown(), 1000);
  }

  componentDidUpdate() {
    if (this.state.timer === 0) {
      window.location.replace('/');
    }
  }

  timerCountdown() {
    let { timer } = this.state;
    timer -= 1000;
    this.setState({ timer });
  }

  render() {
    return (
      <ThanksContainer>
        <CardWrapper>
          <Card maxWidth="500px" style={cardStyles}>
            <h1 className={centerText}>Thank you!</h1>
            <p>
              Your form has been submitted successfully. Please click the button below to return to
              the homepage. You will be automatically redirected in {this.state.timer / 1000}{' '}
              seconds.
            </p>
            <ButtonWrapper>
              <Button to="/">Return to Homepage</Button>
            </ButtonWrapper>
          </Card>
        </CardWrapper>
      </ThanksContainer>
    );
  }
}

export default Thanks;
