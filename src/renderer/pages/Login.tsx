import React, { useState } from "react";
import { useAuthContext } from "../context/AuthContextProvider";

export default function LoginPage() {
	const [email, setEmail] = useState("design1@spiralist.ai");
	const [password, setPassword] = useState("Design#1234");

	const { signInWithEmail } = useAuthContext();

	const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log('sign in started');
		signInWithEmail(email, password);
	};

	return (
		<>
			<main>
				<form onSubmit={handleSignIn}>
					<div>
						<div>
							<label htmlFor="sign-in">Email</label>
							<input
								type="text"
								id="sign-in"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div>
							<label htmlFor="sign-in">Password</label>
							<input
								type="password"
								id="sign-in"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
					</div>
          <button type="submit">Log in</button>
				</form>
			</main>
		</>
	);
}
