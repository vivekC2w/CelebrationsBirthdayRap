const Select = (props) => {
  const { id, label, name, formErrors } = props;
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
        <select
          className="w-full placeholder:font-gibson-regular rounded-full border-none shadow outline-none bg-white py-2 px-4 text-black remove-arrow"
          {...props}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <div className="absolute right-0 top-0 flex items-center py-2 pr-3">
          <img
            src="/assets/UI_Images/Icons/down-arrow.svg"
            className="h-6 w-6 cursor-pointer"
          />
        </div>
      </div>
      {formErrors[name] && <p className="text-red-500">{formErrors[name]}</p>}
    </div>
  );
};

export default Select;
