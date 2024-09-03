import React from "react";

const Button = ({ type, text, extraClasses, onClick }) => {
  return (
    <button
      className={`btn ${
        type === "primary"
          ? "btn-primary"
          : type === "secondary"
          ? "btn-secondary"
          : type === "primary-outline"
          ? "btn-primary-outline"
          : type === "danger"
          ? "btn-danger"
          : type === "warning"
          ? "btn-warning"
          : type === "link"
          ? "btn-link"
          : null
      } ${extraClasses}`}
      onClick={onClick}
    >
      <span className="text-nowrap">{text}</span>{" "}
    </button>
  );
};

export default Button;
