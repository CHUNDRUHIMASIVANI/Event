import { Link } from "react-router-dom"

export default function AdminLogin() {
  return (
    <div className="login-page">
      <div className="login-overlay">
        <form className="login-card">
          <h2>Admin Login</h2>

          <input placeholder="Email" />
          <input placeholder="Password" />

          <button>Login</button>

          <p style={{ marginTop: "15px" }}>
            <Link to="/login">Back to User Login</Link>
          </p>
        </form>
      </div>
    </div>
  )
}