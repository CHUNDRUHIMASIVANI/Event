import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import AdminLogin from "./pages/AdminLogin"
import UserDashboard from "./pages/UserDashboard"
import AdminDashboard from "./pages/AdminDashboard"
import CalendarMonth from "./pages/CalendarMonth"
import CalendarDay from "./pages/CalendarDay"
import AllEvents from "./pages/AllEvents"
import RegisterEvent from "./pages/RegisterEvent" // ✅ NEW

import ProtectedRoute from "./routes/ProtectedRoute"

import { AuthProvider } from "./context/AuthContext"
import { EventProvider } from "./context/EventContext"

function App() {
  return (
    <AuthProvider>
      <EventProvider>
        <BrowserRouter>
          <Routes>

            {/* HOME */}
            <Route path="/" element={<Home />} />

            {/* AUTH PAGES */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/admin-login" element={<AdminLogin />} />

            {/* USER PROTECTED ROUTES */}
            <Route element={<ProtectedRoute role="user" />}>
              <Route path="/dashboard" element={<UserDashboard />} />
              <Route path="/calendar" element={<CalendarMonth />} />
              <Route path="/calendar/:date" element={<CalendarDay />} />
              <Route path="/events" element={<AllEvents />} />
              <Route path="/register/:id" element={<RegisterEvent />} /> {/* ✅ NEW */}
            </Route>

            {/* ADMIN PROTECTED ROUTE */}
            <Route element={<ProtectedRoute role="admin" />}>
              <Route path="/admin" element={<AdminDashboard />} />
            </Route>

          </Routes>
        </BrowserRouter>
      </EventProvider>
    </AuthProvider>
  )
}

export default App