import style from "../css/style.css"

const Frame = ({ children, color = "", shadow = false }) => {
  const borderClass = `border${color !== "" ? " border-" + color : ""}`;
  const shadowClass = `${shadow ? " shadow" : ""}`;

  return (
    <div className={`${borderClass} ${shadowClass} backimg rounded p-3 mb-3`}>
      {children}
    </div>
  );
};

export default Frame;
