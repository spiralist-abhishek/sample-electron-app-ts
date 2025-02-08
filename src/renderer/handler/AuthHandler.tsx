import React from "react";
import LoginPage from "../pages/Login";
import { useAuthContext } from "../context/AuthContextProvider";

export default function AuthHandler() {
  const { user, loading } = useAuthContext();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    user ? <div>{user.uid}</div> : <LoginPage />
  );
}