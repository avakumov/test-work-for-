import Content from '@/components/content'
import { ModalConsumer } from '@/components/context/modal'
import Spacer from '@/components/typo/spacer'
import Socials from '@/components/socials'
import { useContext } from 'react'
import { SettingsContext } from '@/components/context/settings'
import { DeveloperLink } from './index'

export default ({ ...props }) => {
  const settings = useContext(SettingsContext)
  const phonePts = settings.phone_html.split(/\s/)

  return (
    <ModalConsumer>
      {({ showModal }) => (
        <Content paddingless>
          <div className="footer">
            <div className="flex items-center justify-center">
              <img
                src={require('@/static/branding/logo-white.svg')}
                height={60}
              />
            </div>
            <Spacer tSpace={30}>
              <div className="flex items-center">
                <div className="flex-auto">
                  <a className="phone" href={`tel:${settings.phone}`}>
                    <span className="pref">{phonePts[1]}</span>{' '}
                    <span className="suff">{phonePts[2]}</span>
                  </a>
                </div>
                <div className="flex-none">
                  <div
                    className="label"
                    onClick={async () => {
                      const CallMe = await import('@/components/modals/call-me')
                      showModal(CallMe.default, { centerContent: true })
                    }}
                  >
                    Заказать звонок
                  </div>
                </div>
              </div>
            </Spacer>
            <Spacer tSpace={30}>
              <div className="socials-wrap flex justify-center">
                <Socials {...settings.social} />
              </div>
            </Spacer>
            <Spacer vSpace={24}>
              <div className="t5">
                <div>Предложение не является публичной офертой.</div>
                <div>
                  <div className="developer">
                    Застройщик: <DeveloperLink {...settings.developer} />
                  </div>
                </div>
              </div>
            </Spacer>
          </div>
          <style jsx>{`
            .developer {
              color: white;
            }
            .developer :global(a),
            .developer :global(span) {
              color: white;
            }
            .footer {
              padding: 20px;
              padding-top: 40px;
              background: #212121;
            }
            .t5 {
              font-size: 9px;
              color: #ffffff;
              font-weight: 500;
              line-height: 140%;
              text-align: center;
            }
            .phone {
              font-size: 18px;
              font-weight: 500;
              color: #ffffff !important;
              text-decoration: none;
              .pref {
                font-size: 12px;
              }
              .suff {
              }
            }
            .label {
              font-size: 12px;
              font-weight: 500;
              color: white;
              text-transform: uppercase;
            }
          `}</style>
        </Content>
      )}
    </ModalConsumer>
  )
}
