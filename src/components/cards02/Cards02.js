import React from "react"

import "./cards02.css"

const Cards02 = props => {
  return (
    <div className="card02 cards-space01">
      <img src={props.img} alt={props.title} />

      <h3>{props.title}</h3>
      <h4 className="title06">{props.subTitle}</h4>
      <p>{props.desc}</p>
    </div>
  )
}

export default Cards02
