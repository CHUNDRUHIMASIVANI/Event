import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

export default function UserDashboard() {
  const { user, logout } = useContext(AuthContext)

  return (
    <div className="dashboard">

      {/* HEADER */}
      <div className="dashboard-header">
        <h1>User Dashboard</h1>

        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          
          {/* PROFILE ICON */}
          <div
            style={{
              width: "35px",
              height: "35px",
              borderRadius: "50%",
              background: "white",
              color: "#667eea",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold"
            }}
          >
            {user?.name?.charAt(0).toUpperCase()}
          </div>

          <button onClick={logout}>Logout</button>
        </div>
      </div>

      {/* WELCOME MESSAGE */}
      <h2 style={{ marginTop: "100px" }}>
        Welcome, {user?.name}
      </h2>

      {/* BUTTONS */}
      <div style={{ marginTop: "30px" }}>
        <Link to="/calendar" style={{ marginRight: "20px" }}>
          Open Calendar
        </Link>

        <Link to="/events">
          View All Events
        </Link>
      </div>

    </div>
  )
}