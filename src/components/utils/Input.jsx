const Input = (props) => {
  const { id, label, name, formErrors, numberArrows, setAge } = props;

  const handleIncrease = () => {
    setAge(1);
  };

  const handleDecrease = () => {
    setAge(-1);
  };
  return (
    <div className="w-full font-gibson-semibold">
      {label && (
        <label
          className="text-center font-gibson-semibold mb-3 block"
          htmlFor={id}
        >
          {label}
        </label>
      )}

      <div className="relative">
        <input
          className="w-[90%] placeholder:font-gibson-regular rounded-full border-none shadow outline-none bg-white py-2 px-4 text-black appearance-none"
          {...props}
        />
        {numberArrows && (
          <div className="absolute right-0 top-0 flex items-center py-2 pr-3">
            <img
              src="/assets/UI_Images/Icons/up-arrow.svg"
              className="h-6 w-6 cursor-pointer"
              onClick={handleIncrease}
            />
            <img
              src="/assets/UI_Images/Icons/down-arrow.svg"
              className="h-6 w-6 cursor-pointer"
              onClick={handleDecrease}
            />
          </div>
        )}
      </div>
      {formErrors[name] && <p className="text-red-500">{formErrors[name]}</p>}
    </div>
  );
};

export default Input;
