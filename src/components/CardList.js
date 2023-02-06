import Card from "./Card";

const CardList = ({ data = [] }) => {
  if (data.length === 0)
    return <div className="alert alert-info">No data to display</div>;
  return (
    <div className="row gy-3">
      {data.map((element) => {
        return (
          <div key={element.id} className="col-12 col-sm-6 col-lg-4">
            <Card item={element} />
          </div>
        );
      })}
    </div>
  );
};

export default CardList;
