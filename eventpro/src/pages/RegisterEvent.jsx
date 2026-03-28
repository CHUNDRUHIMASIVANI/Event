import { useParams, useNavigate } from "react-router-dom"
import { useState, useContext } from "react"
import { EventContext } from "../context/EventContext"
import { AuthContext } from "../context/AuthContext"

export default function RegisterEvent() {
  const { id } = useParams()
  const navigate = useNavigate()

  const { events, registerEvent } = useContext(EventContext)
  const { user } = useContext(AuthContext)

  const [name, setName] = useState(user?.name || "")
  const [year, setYear] = useState("")
  const [branch, setBranch] = useState("")
  const [phone, setPhone] = useState("")

  const event = events.find(e => e.id === Number(id))

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !year || !branch || !phone) return

    registerEvent(event.id, {
      name,
      email: user.email,
      year,
      branch,
      phone
    })

    navigate("/events")
  }

  if (!event) return <p>Event not found</p>

  return (
    <div
      className="dashboard"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "20px",
          width: "450px",
          boxShadow: "0 15px 40px rgba(0,0,0,0.2)"
        }}
      >
        <h2 style={{ marginBottom: "25px", textAlign: "center" }}>
          Register for {event.title}
        </h2>

        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px"
          }}
        >
          <input
            placeholder="Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            style={inputStyle}
          />

          <input
            placeholder="Year of Study"
            value={year}
            onChange={(e)=>setYear(e.target.value)}
            style={inputStyle}
          />

          {/* ✅ BRANCH DROPDOWN */}
          <select
            value={branch}
            onChange={(e)=>setBranch(e.target.value)}
            style={inputStyle}
          >
            <option value="">Select Branch</option>
            <option value="CSE">CSE</option>
            <option value="CSIT">CSIT</option>
            <option value="AIDS">AIDS</option>
            <option value="ECE">ECE</option>
            <option value="EEE">EEE</option>
            <option value="MECH">MECH</option>
            <option value="CIVIL">CIVIL</option>
          </select>

          <input
            placeholder="Phone Number"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            style={inputStyle}
          />

          <button type="submit" style={buttonStyle}>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  borderRadius: "12px",
  border: "1px solid #ccc",
  outline: "none",
  fontSize: "14px"
}

const buttonStyle = {
  padding: "12px",
  borderRadius: "12px",
  border: "none",
  background: "#667eea",
  color: "white",
  cursor: "pointer",
  fontSize: "15px"
}