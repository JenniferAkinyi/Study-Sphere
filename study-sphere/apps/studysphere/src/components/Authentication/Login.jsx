import React, { useState } from "react";
import pageImage from "../../assets/authentication-bg.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // TODO: call Firebase auth here (signInWithEmailAndPassword)
    if (!email || !password) {
      setError("Please fill both fields");
      return;
    }
    try {
    } catch (error) {
      setError(error.message || "Login Failed");
    }
  };
  return (
    <main className="flex min-h-screen bg-background-light text-primary-light">
      <section className="flex items-center justify-center w-full p-8 md:w-1/2">
        <div className="flex flex-col items-center w-full max-w-md">
          <p className="mb-6 font-sans md:text-5xl">Welcome Back!</p>
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-64 mt-1 border-gray-400 rounded-lg focus:ring-indigo-500"
                aria-describedby={error ? "form-error" : undefined}
              />
            </div>
            <div>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-64 mt-1 border-gray-400 rounded-lg focus:ring-indigo-500"
              />
            </div>
            <div className="flex flex-row-reverse items-center justify-between text-sm">
              <button type="button" className="text-indigo-600 hover:underline">Forgot Password?</button>
            </div>
            {error &&(
              <p id="form-error" className="text-sm text-red-600">{error}</p>
            )}
            <button
              type="submit"
              className="w-full py-2 font-medium text-white transition bg-indigo-600 rounded-lg hover:bg-indigo-700"
            >
              Login
            </button>
          </form>
          <p className="md:text-sm"> 
            Not a member?<span className="font-semibold"> Sign Up</span>
          </p>
        </div>
      </section>
      <aside className="hidden md:block md:w-1/2">
        <img src={pageImage} alt="authentication-bg" className="object-cover w-full h-full"/>
      </aside>
    </main>
  );
};

export default Login;
