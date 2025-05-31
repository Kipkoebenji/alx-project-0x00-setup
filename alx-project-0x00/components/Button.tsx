import React from "react";

type ButtonProps = {
  title: string;
  styles?: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ title, styles = "", onClick }) => {
  return (
    <button
      className={`px-4 py-2 font-semibold text-white bg-blue-600 hover:bg-blue-700 transition ${styles}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;