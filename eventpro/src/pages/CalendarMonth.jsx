import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { EventContext } from "../context/EventContext"

export default function CalendarMonth() {
  const navigate = useNavigate()
  const { events } = useContext(EventContext)

  const today = new Date()
  const [month, setMonth] = useState(today.getMonth())
  const [year, setYear] = useState(today.getFullYear())

  const monthNames = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ]

  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()

  const days = []

  for (let i = 0; i < firstDay; i++) {
    days.push(<div key={"empty" + i}></div>)
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const formattedMonth = String(month + 1).padStart(2, "0")
    const formattedDay = String(d).padStart(2, "0")
    const dateStr = `${year}-${formattedMonth}-${formattedDay}`

    const dayEvents = events.filter(e => e.date === dateStr)

    days.push(
      <div
        key={d}
        className="calendar-day"
        onClick={() => navigate(`/calendar/${dateStr}`)}
      >
        {d}

        {dayEvents.map(event => (
          <div
            key={event.id}
            style={{
              fontSize: "11px",
              marginTop: "4px",
              background: "#667eea",
              color: "white",
              padding: "2px 6px",
              borderRadius: "6px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap"
            }}
          >
            {event.title}
          </div>
        ))}
      </div>
    )
  }

  const prevMonth = () => {
    if (month === 0) {
      setMonth(11)
      setYear(year - 1)
    } else {
      setMonth(month - 1)
    }
  }

  const nextMonth = () => {
    if (month === 11) {
      setMonth(0)
      setYear(year + 1)
    } else {
      setMonth(month + 1)
    }
  }

  return (
    <div className="calendar-page">
      <div className="calendar-card">
        <div className="calendar-header">
          <button onClick={prevMonth}>◀</button>
          <h2>{monthNames[month]} {year}</h2>
          <button onClick={nextMonth}>▶</button>
        </div>

        <div className="week-days">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>

        <div className="calendar-grid">
          {days}
        </div>
      </div>
    </div>
  )
}