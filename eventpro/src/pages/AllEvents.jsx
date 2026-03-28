import { useContext } from "react"
import { EventContext } from "../context/EventContext"
import { AuthContext } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

export default function AllEvents() {
  const {
    events,
    unregisterEvent,
    registrations
  } = useContext(EventContext)

  const { user } = useContext(AuthContext)
  const navigate = useNavigate()

  const isRegistered = (eventId) => {
    return registrations.some(
      r => r.eventId === eventId && r.user.email === user?.email
    )
  }

  return (
    <div className="dashboard">
      <h1>Available Events</h1>

      {events.map(event => {
        const allowRegistration = event.category !== "Birthday"

        return (
          <div
            key={event.id}
            style={{
              background: "white",
              padding: "15px",
              marginBottom: "15px",
              borderRadius: "10px"
            }}
          >
            <h3>{event.title}</h3>
            <p>Date: {event.date}</p>
            <p>Category: {event.category}</p>

            {allowRegistration && (
              isRegistered(event.id) ? (
                <button onClick={() => unregisterEvent(event.id, user)}>
                  Cancel Registration ❌
                </button>
              ) : (
                <button onClick={() => navigate(`/register/${event.id}`)}>
                  Register
                </button>
              )
            )}
          </div>
        )
      })}
    </div>
  )
}