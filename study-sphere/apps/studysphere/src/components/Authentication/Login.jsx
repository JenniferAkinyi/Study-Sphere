import React, { useState } from "react";
import pageImage from "../../assets/authentication-bg.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  
  const handleSubmit = async (e) =>{
    e.preventDefault()
    setError("")

    // TODO: call Firebase auth here (signInWithEmailAndPassword)
    if(!email || !password){
        setError("Please enter both email and password")
        return
    }
    try {
        
    } catch (error) {
        setError(error.message || "Login Failed")
    }
  }
  return (
    <main className="flex min-h-screen">
        <section className="flex items-center justify-center w-full p-8 md:w-1/2">  
            <div className="w-full max-w-md">
                <h1 className="mb-6 font-extrabold text-3x1">Welcome Back!</h1>
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <p>Forgot Password?</p>
                <button type="submit">Login</button>
                </form>
                <p>
                Not a member?<span>Sign Up</span>
                </p>
            </div>
        </section>
      <div className="page-image">
        <img src={pageImage} alt="authentication-bg" />
      </div>
    </main>
  );
};

export default Login;
