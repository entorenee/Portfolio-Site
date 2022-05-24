import React, { Component } from 'react'
import { css } from '@emotion/core'

import themeUtils from '../components/theme-utils'
import Layout from '../layouts/main'
import Card from '../components/base-components/card'
import Button from '../components/base-components/button'

const container = css`
  width: 100vw;
  height: 100vh;
  background-color: ${themeUtils.complementaryLight};
  display: flex;
  justify-content: center;
  align-items: center;
`

const cardWrapper = css`
  ${themeUtils.margins};
  display: flex;
  justify-content: center;
`

const cardStyles = css`
  max-width: 500px;
  padding: 1rem;
  background-color: #fff;
`

const centerText = css`
  text-align: center;
`

const buttonWrapper = css`
  display: flex;
  justify-content: flex-end;
`

interface State {
  timer: number
}

class Thanks extends Component<never, State> {
  state = {
    timer: 7000,
  }

  componentDidMount(): void {
    setInterval(() => this.timerCountdown(), 1000)
  }

  componentDidUpdate(): void {
    const { timer } = this.state

    if (timer === 0) {
      window.location.replace('/')
    }
  }

  timerCountdown = (): void => {
    this.setState((prevState) => ({ timer: prevState.timer - 1000 }))
  }

  render(): JSX.Element {
    const { timer } = this.state

    return (
      <Layout>
        <div css={container}>
          <div css={cardWrapper}>
            <Card css={cardStyles}>
              <h1 css={centerText}>Thank you!</h1>
              <p>
                Your form has been submitted successfully. Please click the
                button below to return to the homepage. You will be
                automatically redirected in {timer / 1000} seconds.
              </p>
              <div css={buttonWrapper}>
                <Button url='/'>Return to Homepage</Button>
              </div>
            </Card>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Thanks
