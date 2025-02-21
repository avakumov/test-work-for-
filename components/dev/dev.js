import React from 'react'
import posed from 'react-pose'
import classnames from 'classnames'

class Dev extends React.Component {
  constructor(props) {
    super(props)
    this.state = { active: props.opened }
  }

  onEnter = () => {
    this.setState({ active: true })
  }

  onLeave = () => {
    this.setState({ active: false })
  }

  onClick = () => {
    window.location.assign('http://it-effects.ru')
  }

  render() {
    const { active } = this.state
    return (
      <a href="http://it-effects.ru" target="_blank">
        <div
          onMouseEnter={this.onEnter}
          onMouseLeave={this.onLeave}
          className={classnames('dev', { active })}
        >
          <div className="ugol">
            <img
              width="14"
              height="14"
              src={require('@/static/dev/ugol.svg')}
            />
          </div>
          <div className="logo">
            <Logo pose={active ? 'opened' : 'closed'}>
              <svg height="19" viewBox="0 0 219 49" width="89">
                <g fill="none">
                  <path
                    d="m7.1 7.1h-7.1v-6.5h7.1zm0 41.2h-7.1v-33h7.1z"
                    fill="#000000"
                  />
                  <path
                    d="m23.9 7.2v8h5.7v5.5h-5.7v18.3c0 1.4.3 2.3.8 2.9.6.6 1.3.9 2.3.9.4 0 .8 0 1.1-.1.4-.1.7-.2 1.1-.3l.8 5.4c-.6.3-1.3.6-2.2.8-.8.2-1.7.3-2.6.3-2.6 0-4.7-.8-6.1-2.4-1.5-1.6-2.2-4.1-2.2-7.5v-18.3h-4.9v-5.5h4.8v-8z"
                    fill="#000000"
                  />
                  <g
                    transform="translate(34)"
                    fill={this.props.inverse ? 'white' : 'black'}
                  >
                    <path d="m15.4 48.9c-4.5 0-8.1-1.5-10.7-4.6-2.7-3.1-4-7-4-11.8v-1.2c0-4.8 1.3-8.8 4-12 2.6-3.2 5.9-4.7 9.9-4.7 4.3 0 7.5 1.3 9.8 4s3.4 6.3 3.4 10.9v4.4h-19.7l-.1.1c.1 2.6.9 4.8 2.2 6.4 1.4 1.7 3.2 2.5 5.6 2.5 1.9 0 3.5-.2 4.9-.7s2.7-1.2 3.9-2.1l2.4 4.9c-1.2 1.1-2.8 2-4.7 2.8-2 .7-4.3 1.1-6.9 1.1zm-.8-28.3c-1.8 0-3.2.7-4.3 2.2s-1.8 3.3-2.1 5.5l.1.2h12.5v-.8c0-2.1-.5-3.8-1.5-5.1s-2.6-2-4.7-2z" />
                    <path d="m35.9 48.3v-27.6h-4.8v-5.5h4.8v-3.8c0-3.6 1-6.5 2.9-8.4 1.9-2 4.6-3 8-3 .7 0 1.4.1 2.1.2s1.5.3 2.4.5l-.7 5.7c-.4-.1-.8-.2-1.3-.2-.5-.1-1-.1-1.5-.1-1.5 0-2.7.5-3.5 1.4s-1.3 2.2-1.3 3.9v3.8h6.4v5.5h-6.4v27.5z" />
                    <path d="m56.9 48.3v-27.6h-4.8v-5.5h4.8v-3.8c0-3.6 1-6.5 2.9-8.4 1.9-2 4.6-3 8-3 .7 0 1.4.1 2.1.2s1.5.3 2.4.5l-.7 5.7c-.4-.1-.8-.2-1.3-.2-.5-.1-1-.1-1.5-.1-1.5 0-2.7.5-3.5 1.4s-1.3 2.2-1.3 3.9v3.8h6.4v5.5h-6.4v27.5z" />
                    <path d="m89.2 48.9c-4.5 0-8.1-1.5-10.7-4.6-2.7-3.1-4-7-4-11.8v-1.2c0-4.8 1.3-8.8 4-12 2.6-3.2 5.9-4.7 9.9-4.7 4.3 0 7.5 1.3 9.8 4s3.4 6.3 3.4 10.9v4.4h-19.7l-.1.2c.1 2.6.9 4.8 2.2 6.4 1.4 1.7 3.2 2.5 5.6 2.5 1.9 0 3.5-.2 4.9-.7s2.7-1.2 3.9-2.1l2.3 4.9c-1.2 1.1-2.8 2-4.7 2.8-2 .6-4.2 1-6.8 1zm-.8-28.3c-1.8 0-3.2.7-4.3 2.2s-1.8 3.3-2.1 5.5l.1.2h12.5v-.8c0-2.1-.5-3.8-1.5-5.1s-2.7-2-4.7-2z" />
                    <path d="m120.4 42.9c1.7 0 3.2-.5 4.4-1.6s1.8-2.4 1.8-4h6.4l.1.2c.1 3.1-1.1 5.8-3.6 8s-5.5 3.4-9 3.4c-4.7 0-8.2-1.6-10.7-4.7s-3.7-7.1-3.7-11.9v-1.1c0-4.8 1.2-8.7 3.7-11.9s6.1-4.7 10.7-4.7c3.8 0 6.9 1.2 9.3 3.5s3.5 5.2 3.4 8.8l-.1.2h-6.5c0-1.8-.6-3.3-1.7-4.6s-2.6-1.9-4.5-1.9c-2.7 0-4.6 1-5.7 3s-1.7 4.6-1.7 7.6v1.1c0 3.1.6 5.7 1.7 7.7 1.1 1.9 3 2.9 5.7 2.9z" />
                    <path d="m147.6 7.2v8h5.7v5.5h-5.7v18.3c0 1.4.3 2.3.8 2.9.6.6 1.3.9 2.3.9.4 0 .8 0 1.1-.1.4-.1.7-.2 1.1-.3l.8 5.4c-.6.3-1.3.6-2.2.8-.8.2-1.7.3-2.6.3-2.6 0-4.7-.8-6.1-2.4-1.5-1.6-2.2-4.1-2.2-7.5v-18.3h-4.8v-5.5h4.8v-8z" />
                    <path d="m177.3 39.3c0-1.1-.5-2.1-1.4-2.8-.9-.8-2.7-1.4-5.2-2-3.8-.8-6.6-2-8.6-3.6-1.9-1.5-2.9-3.6-2.9-6.3 0-2.8 1.1-5.1 3.4-7.1 2.2-2 5.2-2.9 8.9-2.9 3.9 0 6.9 1 9.2 3s3.4 4.4 3.3 7.4l-.1.2h-6.9c0-1.4-.5-2.5-1.5-3.5s-2.4-1.5-4.1-1.5-3 .4-3.9 1.2-1.3 1.8-1.3 2.9c0 1.2.4 2.1 1.3 2.8.8.7 2.6 1.3 5.2 1.8 4 .9 6.9 2.1 8.8 3.6 1.9 1.6 2.9 3.7 2.9 6.4 0 3-1.2 5.4-3.5 7.2-2.3 1.9-5.4 2.8-9.3 2.8-4.1 0-7.4-1.1-9.7-3.3-2.4-2.2-3.5-4.7-3.4-7.6l.1-.2h6.6c.1 1.9.7 3.3 2 4.2 1.2.9 2.8 1.3 4.6 1.3s3.2-.4 4.2-1.1c.8-.7 1.3-1.7 1.3-2.9z" />
                  </g>
                </g>
              </svg>
            </Logo>
          </div>
          <style jsx>{`
            .dev {
              right: 0;
              width: 92px;
              height: 40px;
              cursor: pointer;
              overflow: hidden;
              position: relative;
              &.active {
                overflow: visible;
              }
            }
            .ugol {
              top: 0;
              right: 0;
              z-index: 2;
              width: 14px;
              height: 14px;
              position: absolute;
            }
            .logo {
              top: 1px;
              right: -3px;
              position: absolute;
              pointer-events: none;
            }
          `}</style>
        </div>
      </a>
    )
  }
}

const Logo = posed.div({
  opened: { x: -6, transition: { stiffness: 250, type: 'spring' } },
  closed: { x: 86, transition: { stiffness: 250, type: 'spring' } }
})

export default Dev
