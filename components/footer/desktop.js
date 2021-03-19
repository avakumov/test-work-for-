import Content from "@/components/content";
import Socials from "@/components/socials";
import Spacer from "@/components/typo/spacer";
import Dev from "@/components/dev";
import { DesktopCallButton } from "@/components/call-button";
import { ModalConsumer } from "@/components/context/modal";
import { useContext } from "react";
import { SettingsContext } from "@/components/context/settings";
import { DeveloperLink } from "./index";

export default ({ ...props }) => {
  const settings = useContext(SettingsContext);
  return (
    <ModalConsumer>
      {({ showModal }) => (
        <div className="footer flex items-center">
          <Content dtp dbp>
            <div className="flex items-center">
              <div className="flex-none">
                <Spacer bSpace={20}>
                  <img
                    src={require("@/static/branding/logo-dark.svg")}
                    height={31}
                  />
                </Spacer>
                <div className="copyrights">
                  <div className="flex">
                    <div className="text">
                      <div>Предложение не является публичной офертой.</div>
                      <div>
                        Застройщик: <DeveloperLink {...settings.developer} />
                      </div>
                    </div>
                    <div className="wrap-socials">
                      <Socials />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-auto" />
              <div className="flex-none" />
              <div className="wrap-call flex-none">
                <Spacer lSpace={70}>
                  <DesktopCallButton
                    onClickCall={async () => {
                      const CallMe = await import(
                        "@/components/modals/call-me"
                      );
                      showModal(CallMe.default, { centerContent: true });
                    }}
                  />
                </Spacer>
              </div>
            </div>
          </Content>
          <div className="wrap-dev">
            <Dev inverse />
          </div>
          <style jsx>{`
            .footer {
              min-height: 64px;
              background: var(--color7);
              position: relative;
              margin-bottom: 35px;
            }
            .text {
              font-size: 10px;
              font-weight: 500;
            }
            .text :global(a),
            .text :global(span) {
              color: var(--color1-dark);
            }
            .wrap-call {
              color: var(--color1-dark);
              align-self: flex-start;
            }
            .wrap-socials {
              bottom: -5px;
              position: absolute;
              left: 50%;
              bottom: 0;
              transform: translate(-50%, -50%);
            }
            .wrap-dev {
              right: 50px;
              bottom: -20px;
              position: absolute;
            }
          `}</style>
        </div>
      )}
    </ModalConsumer>
  );
};
