import React, { useState } from 'react'

const Signup = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  
  return (
    <main>
      <div>
          <h1>Signup Page</h1>
          <form>
              <div>
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" required />
              </div>
              <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
              </div>
              <div>
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" required />
              </div>
              <button type="submit">Sign Up</button>
          </form>
      </div>
      <div className="page-image">
        
      </div>
    </main>
  )
}

export default Signup