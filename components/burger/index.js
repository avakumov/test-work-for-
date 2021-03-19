export default ({ onClick, mode, inverse = false }) => {
  const color = inverse ? 'white' : '#646464'
  
  const burgerUrl = inverse?'/static/branding/burger-white.svg':'/static/branding/burger.svg'
  const burgerHoverUrl = inverse?'/static/branding/burger-hover-white.svg':'/static/branding/burger-hover.svg'
  return (
    <div onClick={onClick} className="burger-wrap">
      {'close' === mode ? (
        // prettier-ignore
        <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="24.1064" width="33" height="3" rx="1.5" transform="rotate(-45 0 24.1064)" fill={color}/>
          <rect x="2.12109" y="0.772217" width="33" height="3" rx="1.5" transform="rotate(45 2.12109 0.772217)" fill={color}/>
        </svg>
      ) : (
        // prettier-ignore
        <div className="burger">
        </div>
        
      )}
      <style jsx>{`
        .burger {
          height: 19px;
          width: 33px;
          background: center no-repeat url(${burgerUrl});
          :hover {
            background-image: url(${burgerHoverUrl});
          }
        }
        .burger-wrap {
          width: 33px;
          height: 32px;
          cursor: pointer;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          svg {
            display: block;
          }
        }
      `}</style>
    </div>
  )
}
