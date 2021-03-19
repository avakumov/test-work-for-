import themes from '@/enums/themes'
import classnames from 'classnames'
import { useContext } from 'react'
import { SettingsContext } from '@/components/context/settings'

const DesktopCallButton = ({ onClickCall, theme, menuOpened, inverse }) => {
  const settings = useContext(SettingsContext)
  const phonePts = settings.phone_html.split(/\s/)
  const fontColor = theme==="transparent"? "--color7":"--color1-dark"

  return (
    <div
      className={classnames('button', {
        [theme]: true,
        opened: menuOpened
      })}
    >
      <div className="label" onClick={onClickCall}>
        Заказать звонок
      </div>
      <div>
        <a href={`tel:${settings.phone}`}>
          <small className="pref">{phonePts[1]}</small>{' '}
          <span className="suff">{phonePts[2]}</span>
        </a>
      </div>
      <style jsx>{`
        @import 'mixins/r';
        .button {
          font-size: 12px;
          line-height: 13px;
          font-weight: 500;
          text-align: right;
          display: inline-block;
          color: black;
          .opened & {
            a {
            }
          }
        }
        .label {
          cursor: pointer;
          color: var(${fontColor});
          text-transform: uppercase;
          &:hover {
            text-decoration: underline;
          }
          .opened & {
          }
        }
        a {
          font-size: 20px;
          line-height: 28px;
          font-weight: 700;
          color: var(--color6);
          text-decoration: none;
          position: relative;
          .alternate &,
          .dark &,
          .opened & {
            color: #646464 !important;
          }
          .transparent & {
            color: #fff;
          }
          &:hover {
          }
        }
        :global(.transparent) {
        }
      `}</style>
    </div>
  )
}

DesktopCallButton.defaultProps = {
  onClickCall() {},
  theme: themes.default
}

export default DesktopCallButton
