const ProgressBar = ({ step, title }) => {
  return (
    <div>
      <img
        src={`/assets/UI_Images/progressBar${step}.png`}
        alt="Progress Bar"
        className="mt-4 mx-auto max-w-[70%] object-cover"
      />
      {title && (
        <h2 className="text-center font-gibson-semibold text-lg my-4">
          {title}
        </h2>
      )}
    </div>
  );
};

export default ProgressBar;
