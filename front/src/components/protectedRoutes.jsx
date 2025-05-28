import React from "react";
import { Navigate } from "react-router";

export default function ProtectedRoute({ is, children }) {
  const token = localStorage.getItem("token");

  if (is == "auth") {
    if (token) {
      return <Navigate to="/home" replace />;
    }
  }
  if (is == "profile") {
    if (!token) {
      return <Navigate to="/login" replace />;
    }
  }

  return children;
}
