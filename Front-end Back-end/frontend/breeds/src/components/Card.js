import Stars from "./Stars";
import style from "../css/style.css"
const Card = ({ item }) => {
  return (
    <div className="card shadow h-100 cardimg " style={{ width: "18rem" }}>
      <div className="card-header">
        <img
          src={item.imageUrl}
          alt={"breed " + item.name}
          className="img-thumbnail"
          height={"5px"}
        />
      </div>
      <div className="card-body">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
      </div>
      <div className="card-footer">
        <span className="h6">Trainability: </span>
        <Stars value={item.trainability} max={5} />
      </div>
    </div>
  );
};

export default Card;
