const Input = ({ id, label, type, placeholder }) => {
  return (
    <div className="w-full font-gibson-semibold">
      {label && (
        <label
          className="text-center font-gibson-semibold text-sm"
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <input
        className="w-full placeholder:font-gibson-regular rounded-full border-none shadow outline-none bg-white py-2 px-4 text-black"
        placeholder={placeholder}
        id={id}
        type={type}
      />
    </div>
  );
};

export default Input;
