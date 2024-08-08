import { useNavigate } from "react-router-dom";
import AppBar from "../components/AppBar";

import Footer from "../components/Footer";
import SignupCard from "../components/SignupCard";

function Login() {
  const navigate = useNavigate();
  const token = "abcd";

  if (token) {
    navigate("/");
  } else {
    navigate("/login");
  }

  

  return (
    <div>
      <AppBar />
      <SignupCard/>
      <Footer />
    </div>
  );
}

export default Login;
