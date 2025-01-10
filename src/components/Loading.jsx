import Lottie from "lottie-react";
import animationData from "../../public/lottie/loading.json";
const LoadingSpinner = ({}) => {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh)]">
      <div className=" h-16 w-16">
        <Lottie animationData={animationData} loop={true} />
      </div>
    </div>
  );
};

export default LoadingSpinner;
