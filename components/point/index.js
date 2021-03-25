import mark from "@/static/branding/1/mark.svg";

const Point = ({ left, top, width }) => {
  let calculatedLeft;
  let calculatedTop;
const scale = width/1366
  if (width < 1366) {
    calculatedLeft = +left - (1366 - width) / 2;
    calculatedTop = top;
  } else {
    calculatedLeft = +left*scale
    calculatedTop = +top*scale - (480*(+scale - 1))/3
  }

  return (
    <>
      <img className="mark" src={mark} />
      <style jsx>{`
        .mark {
          position: absolute;
          left: ${calculatedLeft}px;
          top: ${calculatedTop}px;
        }
      `}</style>
    </>
  );
};

export default Point;
