const IconsWrapper = ({
  imgSrc,
  subTitle,
  title,
  selected,
  handleSelected,
  width = "w-14",
  borderRadius = "rounded-full",
}) => {
  return (
    <div
      className="my-2 cursor-pointer"
      onClick={() => handleSelected(title, subTitle)}
    >
      <div
        className={`${borderRadius}  flex items-center justify-center h-14 ${width} overflow-hidden ${
          selected[title] === subTitle ? "bg-[#edb45e]" : "bg-white"
        }`}
      >
        <img src={imgSrc} alt="" className={` w-9 object-cover`} />
      </div>
      <p className="font-gibson-regular text-white text-center">{subTitle}</p>
    </div>
  );
};

export default IconsWrapper;
