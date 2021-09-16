import "./button.styles.scss";

const Button = ({ text, type }) => {
  const buttonClasses = {
    success: "green-btn",
    danger: "red-btn",
    warning: "yellow-btn",
  };

  return (
    <div>
      <button className={buttonClasses[type]}>{text}</button>
    </div>
  );
};

export default Button;
