const Button = ({
  text,
  bgColor = "#edb45e",
  color = "#51087e",
  type = "button",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      style={{ color, backgroundColor: bgColor }}
      className={`flex items-center justify-center font-gibson-semibold min-w-[120px] w-max px-4 py-3 rounded-xl text-base cursor-pointer`}
    >
      {text}
    </button>
  );
};

export default Button;
