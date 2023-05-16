import "./Cards.css";

function Cards(props) {
  return (
    <div className="cardWrap">
      <div className="icon">{props.icon}</div>
      <h5 className="cardTitle">{props.title}</h5>
      <p className="description">{props.description}</p>
    </div>
  );
}

export default Cards;
