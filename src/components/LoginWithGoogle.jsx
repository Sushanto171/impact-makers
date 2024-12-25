import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import googleIcon from "../assets/google.gif";
import useAuth from "./../hooks/useAuth";
const LoginWithGoogle = ({ state }) => {
  const { logInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const logInHandle = async () => {
    try {
      await logInWithGoogle();
      toast.success("Log in Success!");
      navigate(state?.location || "/");
    } catch (error) {
      toast.error(`${error.message}`);
    }
  };
  return (
    <div>
      <div className="divider">OR</div>
      <button
        onClick={logInHandle}
        className="btn w-full btn-ghost btn-outline  hover:text-[#ffdaa3]"
      >
        <img className="w-5 rounded-full" src={googleIcon} alt="" />
        Log in with Google
      </button>
    </div>
  );
};

export default LoginWithGoogle;
