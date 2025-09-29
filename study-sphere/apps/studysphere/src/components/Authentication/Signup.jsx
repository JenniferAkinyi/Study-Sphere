import React from 'react'

const Signup = () => {
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