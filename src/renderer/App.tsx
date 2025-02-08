import React from "react";
import AuthContextProvider from "./context/AuthContextProvider";
import AuthHandler from "./handler/AuthHandler";

const App = () => {

	return (
		<>
			<AuthContextProvider>
				<AuthHandler />
			</AuthContextProvider>
		</>
	);
};

export default App;
