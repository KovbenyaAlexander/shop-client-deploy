import "./style.scss";
import { TailSpin } from "react-loader-spinner";

const Loader = (): JSX.Element => {
  return (
    <div className="loader-background">
      <TailSpin ariaLabel="loading-indicator" />
    </div>
  );
};

export default Loader;
