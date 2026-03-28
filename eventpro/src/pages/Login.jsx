import { useState, useContext } from "react"
import { useNavigate, Link } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

export default function Login() {
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
          <h2>User Login</h2>

          

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <input type="password" placeholder="Password" />

          <button type="submit">Login</button>

          <p style={{ marginTop: "15px" }}>
            <Link to="/signup">Signup</Link>
          </p>
        </form>
      </div>
    </div>
  )
}