const Stars = ({ value, max }) => {
  const result = [];

  for (let i = 0; i < max; i++) {
    let icon = "fa fa-star";
    if (i >= value) icon = "fa fa-star-o";
    result.push(<i key={i} className={icon}></i>);
  }

  return <>{result}</>;
};

export default Stars;
