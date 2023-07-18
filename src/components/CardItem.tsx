import type { Data } from "./types";

export default function CardItem ({ data }:Props) {
  return (
    <div className="card">
      {data.url? <img src={data.url} className="card-img-top" alt="..." /> : <></>}
      <div className="card-body">
        <h5 className="card-title">{data.title}</h5>
        <p className="card-text">{data.text}</p>
        <a href="#" className="btn btn-primary">{data.btnText}</a>
      </div>
    </div>
  )
}

type Props = {
  data: Data
}