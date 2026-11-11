import { useState } from "react";
import LoginForm from "./Login";
import RegisterForm from "./Register";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      {isLogin ? (
        <LoginForm goToRegister={() => setIsLogin(false)} />
      ) : (
        <RegisterForm goToLogin={() => setIsLogin(true)} />
      )}
    </>
  );
}

export default App;