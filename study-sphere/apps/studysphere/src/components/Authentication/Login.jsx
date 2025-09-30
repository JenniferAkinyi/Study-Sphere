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
    <main className="flex min-h-screen bg-background-light text-primary-light">
        <section className="flex items-center justify-center w-full p-8 md:w-1/2">  
            <div className="flex flex-col w-full max-w-md border-2 border-red-400">
                <p className="mb-6 font-sans md:text-5xl">Welcome Back!</p>
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div>
                    <input type="email" id="email" name="email" placeholder="Email" />
                </div>
                <div>
                    <input type="password" id="password" name="password" placeholder="Password" />
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
