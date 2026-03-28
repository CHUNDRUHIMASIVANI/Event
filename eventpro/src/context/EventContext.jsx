import { createContext, useState, useEffect } from "react"

export const EventContext = createContext()

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([])
  const [registrations, setRegistrations] = useState([])

  useEffect(() => {
    const savedEvents = JSON.parse(localStorage.getItem("events"))
    const savedRegs = JSON.parse(localStorage.getItem("registrations"))

    if (!savedEvents || savedEvents.length === 0) {
      const defaultEvents = [
        {
          id: 1,
          title: "Samyak Tech Fest",
          date: "2026-04-10",
          category: "Technical"
        },
        {
          id: 2,
          title: "Surabhi Cultural Fest",
          date: "2026-04-12",
          category: "Cultural"
        },
        {
          id: 3,
          title: "Coding Hackathon",
          date: "2026-04-15",
          category: "Competition"
        }
      ]
      setEvents(defaultEvents)
    } else {
      setEvents(savedEvents)
    }

    if (savedRegs) setRegistrations(savedRegs)
  }, [])

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events))
  }, [events])

  useEffect(() => {
    localStorage.setItem("registrations", JSON.stringify(registrations))
  }, [registrations])

  const addEvent = (event) => {
    const newEvent = {
      id: Date.now(),
      ...event
    }
    setEvents(prev => [...prev, newEvent])
  }

  const deleteEvent = (id) => {
    setEvents(prev => prev.filter(e => e.id !== id))
  }

  const registerEvent = (eventId, user) => {
    const exists = registrations.find(
      r => r.eventId === eventId && r.user.email === user.email
    )
    if (exists) return

    setRegistrations(prev => [
      ...prev,
      { eventId, user }
    ])
  }

  // ✅ NEW: CANCEL REGISTRATION
  const unregisterEvent = (eventId, user) => {
    setRegistrations(prev =>
      prev.filter(
        r => !(r.eventId === eventId && r.user.email === user.email)
      )
    )
  }

  return (
    <EventContext.Provider
      value={{
        events,
        addEvent,
        deleteEvent,
        registerEvent,
        unregisterEvent,
        registrations
      }}
    >
      {children}
    </EventContext.Provider>
  )
}