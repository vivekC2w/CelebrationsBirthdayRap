const GenreWrapper = ({ title, children }) => {
  return (
    <div className=" overflow-hidden rounded-xl border border-[#edb45e]">
      <div className=" bg-[#edb45e] text-center font-gibson-semibold text-lg text-[#51087e]">
        {title}
      </div>
      <div className=" flex justify-center items-center gap-4 p-2">
        {children}
      </div>
    </div>
  );
};

export default GenreWrapper;
