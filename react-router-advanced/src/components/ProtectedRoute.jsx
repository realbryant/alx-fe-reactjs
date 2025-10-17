import { Navigate } from "react-router-dom"

// change to true to allow access
const isLoggedIn = false

export default function ProtectedRoute({ children }) {
  if (!isLoggedIn) {
    return <Navigate to="/" replace />
  }
  return children
}
