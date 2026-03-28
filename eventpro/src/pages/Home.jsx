import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="home-page">

      {/* TOP GLASS NAV CARD */}
      <div className="top-glass-card">
        <div className="top-left">
          <h2>EventPro</h2>
        </div>

        <div className="top-right">
          <Link to="/" className="top-btn outline-btn">
            Home
          </Link>

          <Link to="/login" className="top-btn outline-btn">
            Login
          </Link>

          <Link to="/admin-login" className="top-btn outline-btn">
            Admin
          </Link>

          <Link to="/signup" className="top-btn solid-btn">
            Get Started
          </Link>
        </div>
      </div>

      {/* HOME TITLE */}
      <div className="home-title">
        <h1>Welcome to EventPro</h1>
        <p>
          Your smart solution for organizing and managing events efficiently.
        </p>
      </div>

      {/* HERO GLASS CARD */}
      <div className="hero-glass">
        <h1>Smart Event Scheduling Platform</h1>

        <p>
          Seamlessly organize and manage events using a structured
          calendar interface with optimized performance.
        </p>

        <div className="hero-buttons">
          <Link to="/calendar" className="hero-btn">
            Explore Calendar
          </Link>

          <Link to="/signup" className="hero-outline">
            Create Account
          </Link>
        </div>
      </div>

      {/* FEATURE CARDS */}
      <div className="home-cards">

        <div className="glass-card">
          <h3>📅 Calendar System</h3>
          <p>
            Interactive month & day views with event management.
          </p>
        </div>

        <div className="glass-card">
          <h3>🔐 Secure Authentication</h3>
          <p>
            Role-based login for users and admins.
          </p>
        </div>

        <div className="glass-card">
          <h3>⚡ Optimized Performance</h3>
          <p>
            Fast rendering with protected routing architecture.
          </p>
        </div>

      </div>

    </div>
  )
}