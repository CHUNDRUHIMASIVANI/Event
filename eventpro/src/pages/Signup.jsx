import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

export default function Signup() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const navigate = useNavigate()
  const { login } = useContext(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    login(name, email, "user")
    navigate("/dashboard")
  }

  return (
    <div className="login-page">
      <div className="login-overlay">
        <form className="login-card" onSubmit={handleSubmit}>
          <h2>Signup</h2>

          <input
            placeholder="Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <input type="password" placeholder="Password" />

          <button type="submit">Create Account</button>
        </form>
      </div>
    </div>
  )
}