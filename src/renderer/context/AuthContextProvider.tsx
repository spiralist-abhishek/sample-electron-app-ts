import React, { useState, createContext, useContext, useEffect } from "react";
import { signInWithEmailAndPassword, User } from "firebase/auth";
import { auth } from "../config/firebase";

interface IAuth {
	user: User | null;
	loading: boolean;
	signInWithEmail: (email: string, password: string) => void;
	signOut: () => void;
}

const AuthContext = createContext<IAuth>({} as IAuth);

export function useAuthContext() {
	return useContext(AuthContext);
}

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState<boolean>(false);

	const signInWithEmail = (email: string, password: string) => {
		setLoading(true);
		signInWithEmailAndPassword(auth, email, password)
			.then(() => {
				console.log("user signed in");
			})
			.catch((err) => {
				console.error("error signing in", err);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	const signOut = () => {
		setLoading(true);
		auth
			.signOut()
			.then(() => {
				console.log("user signed in");
			})
			.catch((err) => {
				console.error("error signing in", err);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	const value = {
		user,
		loading,
		signInWithEmail,
		signOut,
	};

	useEffect(() => {
		setLoading(true);
		const unsubscribe = auth.onAuthStateChanged((user) => {
			setUser(user);
		});
		setLoading(false);

		return () => unsubscribe();
	}, [auth]);

	return (
		<>
			<AuthContext.Provider value={value}>{children}</AuthContext.Provider>
		</>
	);
};

export default AuthContextProvider;
