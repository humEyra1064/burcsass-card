import "./Card.scss";

const Card = (props) => {
  const{title,desc,image} = props
  return (
    <div className="cards">
      <h1 className="title">{title}</h1>
      <img src={image} alt="" />
      <div className="card-over">
        <p>{desc}</p>
      </div>
      
    </div>
  )
}

export default Card
