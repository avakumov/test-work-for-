import Page from "@/components/page";
import "swiper/dist/css/swiper.css";
import useResize from "@/hooks/useResize";
import { useEffect, useRef, useState } from "react";
import Point from "@/components/point";

const mapMarks = [
  { minutes: 5, desc: "до набережной озера Кабан" },
  { minutes: 10, desc: "до центра города" },
  { minutes: 15, desc: "до Казанского Кремля" },
];

export default function Main() {
  const [w, setW] = useState(null);
  const containerRef = useRef(null);
  const { width } = useResize(containerRef);

  useEffect(() => {
    if (width) return setW(width);
    const currentWidth = containerRef.current.offsetWidth;
    setW(currentWidth);
  }, [containerRef, width]);

  return (
    <Page theme="transparent">
      <div className="all">
        <div style={{ height: "100px" }}></div>
        <div className="live-like-container">
          <div className="flex live-like">
            <div className="title">
              Жить <span>у озера</span>
              <div className="waves"></div>
            </div>
            <div className="desc">
              <div className="title-desc">Расположение</div>
              <div className="content">
                Тихое место у озера Средний Кабан. Несколько шагов и вы
                перемещаетесь из города на природу. Собственный парк, живописная
                виды, озеро для рыбалки создают идиллию загородного уикенда в 5
                минутах от дома.
              </div>
            </div>
          </div>
          <div className="child">
            <div className="wave"></div>
          </div>
        </div>
        <div className="mark-card-container">
          <div className="mark-card-wrapper">
            <div className="flex center mark-card">
              {mapMarks.map((item) => (
                <div className="card">
                  <div className="time">
                    <span>{item.minutes}</span> мин.
                  </div>
                  <div className="description">{item.desc}</div>
                </div>
              ))}
              <div className="flex items-center card card-btn">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M44.7071 30.7071C45.0976 30.3166 45.0976 29.6834 44.7071 29.2929L38.3431 22.9289C37.9526 22.5384 37.3195 22.5384 36.9289 22.9289C36.5384 23.3195 36.5384 23.9526 36.9289 24.3431L42.5858 30L36.9289 35.6569C36.5384 36.0474 36.5384 36.6805 36.9289 37.0711C37.3195 37.4616 37.9526 37.4616 38.3431 37.0711L44.7071 30.7071ZM16 31H44V29H16V31Z"
                    fill="#00A9A4"
                  />
                  <circle
                    cx="30"
                    cy="30"
                    r="29"
                    stroke="#00A9A4"
                    stroke-width="2"
                  />
                </svg>

                <div>
                  Смотреть <br />
                  на карте
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-map" ref={containerRef}>
          <div className="mask"></div>
          <Point left="190" top="50" width={w} />
          <Point left="1190" top="350" width={w} />
          <Point left="600" top="190" width={w} />
        </div>
      </div>
      <style jsx>{`
        .all {
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          min-width: 1366px;
        }
        .live-like-container {
          height: 787px;
          margin-bottom: 80px;
        }
        .live-like {
          justify-content: space-around;
          height: 250px;
          .title {
            font-weight: bold;
            font-size: 50px;
            line-height: 120%;
            text-transform: uppercase;
            padding-top: 50px;
            position: relative;
            .waves {
              z-index: 100;
              position: absolute;
              top: 180px;
              left: 75px;
              background-image: url("/static/branding/1/waves.png");
              height: 83px;
              width: 168px;
            }
            span {
              color: var(--color1);
            }
          }
          .desc {
            .title-desc {
              width: 515px;
              font-size: 20px;
              line-height: 120%;
              color: var(--color3);
              margin-bottom: 24px;
            }
            .content {
              width: 515px;
              font-style: normal;
              font-weight: normal;
              font-size: 18px;
              line-height: 150%;
            }
          }
        }
        .child {
          background-image: url("/static/branding/1/child.png");
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          position: relative;
          height: 537px;
        }
        .wave {
          position: absolute;
          bottom: -60px;
          background-image: url("/static/branding/1/wave.png");
          opacity: 0.6;
          height: 120px;
          width: 100%;
        }
        .card-btn {
          justify-content: space-around;
          color: var(--color1);
        }
        .mark-card-container {
          position: relative;
          height: 135px;
        }
        .mark-card-wrapper {
          position: absolute;
          z-index: 100;
          width: 100%;
          top: 40px;
        }
        .mark-card {
          justify-content: space-around;
          .card {
            width: 185px;
          }
          .time {
            color: var(--color1);
            opacity: 0.4;
            line-height: 28.8px;
            font-size: 24px;
            font-weight: 700;
            span {
              font-style: normal;
              font-weight: bold;
              font-size: 100px;
              line-height: 120%;
            }
            .description {
              font-style: normal;
              font-weight: normal;
              font-size: 18px;
              line-height: 120%;

              color: var(--color6);
            }
          }
        }
        .mask {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background: linear-gradient(
            180deg,
            #ffffff 12.29%,
            rgba(255, 255, 255, 0) 48.13%
          );
        }
        .container-map {
          height: 480px;
          position: relative;
          background-image: url("/static/branding/1/map.jpg");
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
        }
      `}</style>
    </Page>
  );
}
