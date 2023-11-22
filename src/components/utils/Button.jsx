const Button = ({
  text,
  bgColor = "#edb45e",
  color = "#51087e",
  type = "button",
  onClick,
  rounded,
  icon,
  border,
  width = "w-max",
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      style={{ color, backgroundColor: bgColor }}
      disabled={disabled}
      className={`flex gap-2 items-center justify-center font-gibson-semibold min-w-[120px] ${width} px-4 py-3 ${
        rounded === "none" ? "" : "rounded-xl"
      } text-base cursor-pointer disabled:cursor-no-drop ${border && border}`}
    >
      <span className="">{text}</span>
      {icon && icon}
    </button>
  );
};

export default Button;
