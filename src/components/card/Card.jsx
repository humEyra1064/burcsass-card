import "./Card.scss";

const Card = (props) => {
  const{title,desc,img} = props
  return (
    <div className="cards">

      <div className="title">
        <h1 >{title}</h1>
      </div>
      
      <img src={img} alt="" />

      <div className="card-over">
        <p>{desc}</p>
      </div>
      
    </div>
  )
}

export default Card
