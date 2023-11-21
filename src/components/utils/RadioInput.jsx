const RadioInput = ({ id, label, placeholder }) => {
  return (
    <div className="w-full flex gap-4 items-center text-left text-sm font-gibson-regular">
      <input
        className="placeholder:font-gibson-regular rounded-full border-none shadow outline-none bg-white py-2 px-4 text-black"
        placeholder={placeholder}
        id={id}
        type="radio"
      />
      {label && (
        <label className="text-sm" htmlFor={id}>
          {label}
        </label>
      )}
    </div>
  );
};

export default RadioInput;
