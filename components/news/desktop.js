import dateformat from 'dateformat'
import dayjs from '@/dayjs'
import { parseDate } from '@/helpers'

const Item = props => {
  const humanDate = dateformat(
    new Date(...parseDate(props.published_at)),
    'd.mm.yyyy'
  )
  return (
    <div
      onClick={() => props.onClick(props)}
      key={props.id}
      className="news flex"
    >
      <div className="flex-none">
        <img src={props.picture_url} width="212" height="212" />
      </div>
      <div className="news-body flex flex-auto justify-center flex-column">
        <div className="date">{humanDate}</div>
        <div className="name">{props.name}</div>
        <div className="notice">{props.annotation}</div>
        <div className="law-text">
          <small>{props.law_text}</small>
        </div>
      </div>
      <style jsx>{`
        .news {
          height: 100%;
          cursor: pointer;
          box-sizing: border-box;
          margin-right: 19px;
          &:hover {
            background: #f9f9f9;
          }
        }
        .date {
          font-weight: 400;
          font-size: 14px;
          color: var(--color1);
        }
        .name {
          margin: 12px 0;
          font-weight: 400;
          font-size: 20px;
          line-height: 130%;
          text-transform: uppercase;
          color: var(--color6);
        }
        .notice {
          font-weight: 400;
          font-size: 14px;
          line-height: 130%;
          color: var(--color6);
        }
        img {
          display: block;
          object-fit: cover;
          margin-right: 20px;
          width: 194px;
          height: 194px;
        }
        .news-body {
          padding-left: 20px;
          padding-right: 29px;
          
        }
      `}</style>
    </div>
  )
}

export default Item
