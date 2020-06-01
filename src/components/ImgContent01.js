import React from "react"

const ImgContent01 = props => {
  return (
    <div className={`imgcontentwrapper01 ${props.classAdd}`}>
      <div className="description1">
        <h3 className="title05">{props.title}</h3>
        <p>{props.desc}</p>
      </div>

      <div className={`description1-img-wrapper ${props.animation}`}>
        <a>
          <img className="description1-img" alt={props.title} src={props.img} />
        </a>
      </div>
    </div>
  )
}

export default ImgContent01
