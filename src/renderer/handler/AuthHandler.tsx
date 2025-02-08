import React from "react";
import LoginPage from "../pages/Login";
import { useAuthContext } from "../context/AuthContextProvider";
import HomePage from "../pages/Homes";

export default function AuthHandler() {
	const { user, loading } = useAuthContext();

	if (loading) {
		return <div>Loading...</div>;
	}

	return user ? (
		<>
			<div className="w-screen grid place-content-center">{user.uid}</div>{" "}
			<HomePage />
		</>
	) : (
		<LoginPage />
	);
}
