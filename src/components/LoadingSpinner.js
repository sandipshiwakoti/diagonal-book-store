import logoSpinner from "../images/logo-spinner.gif";

const LoadingSpinner = () => {
  return (
    <div className="grid place-items-center py-[4rem]">
      <img
        src={logoSpinner}
        alt="loading spinner"
        className="h-[8rem]"
        data-testid="imgLogoSpinner"
      />
    </div>
  );
};

export default LoadingSpinner;
