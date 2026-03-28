import { useParams } from "react-router-dom"
import { useContext, useState } from "react"
import { EventContext } from "../context/EventContext"

export default function CalendarDay() {
  const { date } = useParams()
  const { events, addEvent, deleteEvent } = useContext(EventContext)

  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("General") // ✅ NEW

  const filteredEvents = events.filter(e => e.date === date)

  const handleAdd = () => {
    if (!title.trim()) return

    addEvent({ title, date, category }) // ✅ include category
    setTitle("")
    setCategory("General")
  }

  return (
    <div className="day-page">
      <div className="day-card">
        <h2>{date}</h2>

        <div className="event-input">
          <input
            placeholder="Enter event title..."
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
          />

          {/* ✅ CATEGORY SELECT ADDED */}
          <select
            value={category}
            onChange={(e)=>setCategory(e.target.value)}
          >
            <option value="General">General</option>
            <option value="Technical">Technical</option>
            <option value="Cultural">Cultural</option>
            <option value="Competition">Competition</option>
            <option value="Birthday">Birthday</option>
          </select>

          <button onClick={handleAdd}>Add</button>
        </div>

        <div className="event-list">
          {filteredEvents.length === 0 && (
            <p className="no-events">No events yet</p>
          )}

          {filteredEvents.map(event => (
            <div key={event.id} className="event-item">
              <span>
                {event.title} ({event.category})
              </span>
              <button onClick={()=>deleteEvent(event.id)}>✖</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}