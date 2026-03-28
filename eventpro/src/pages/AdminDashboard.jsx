import { useContext } from "react"
import { EventContext } from "../context/EventContext"
import { AuthContext } from "../context/AuthContext"

export default function AdminDashboard() {
  const { events, deleteEvent, registrations = [] } = useContext(EventContext)
  const { logout } = useContext(AuthContext)

  return (
    <div className="dashboard">
      <h1>Admin Dashboard</h1>
      <button onClick={logout}>Logout</button>

      <h2>All Events</h2>

      {events.map(e => {
        const eventRegistrations = (registrations || []).filter(
          r => r.eventId === e.id
        )

        return (
          <div
            key={e.id}
            style={{
              background: "white",
              padding: "15px",
              marginTop: "15px",
              borderRadius: "10px"
            }}
          >
            <h3>{e.title}</h3>
            <p>Date: {e.date}</p>
            <p>Category: {e.category}</p>

            <p>
              <strong>Registered:</strong>{" "}
              {eventRegistrations.length === 0
                ? "None"
                : eventRegistrations.map(r => r.user.name).join(", ")}
            </p>

            <button onClick={() => deleteEvent(e.id)}>Delete</button>
          </div>
        )
      })}
    </div>
  )
}