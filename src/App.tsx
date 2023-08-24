import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { Routes, Route } from "react-router-dom";
import DefaultPage from "./pages/DefaultPage";

function App() {
	const [mode, setMode] = useState("light");
	const toggleMode = () => {
		if (mode === "light") {
			setMode("dark");
			document.body.style.backgroundColor = "black";
			document.body.style.color = "white";
		} else {
			setMode("light");
			document.body.style.backgroundColor = "white";
			document.body.style.color = "black";
		}
	};
	return (
		<Routes>
			<Route
				path="/"
				element={
					<Navbar
						title="TextUtils"
						aboutText="About"
						mode={mode}
						toggleMode={toggleMode}
					/>
				}
			>
				<Route
					index
					element={
						<div className="container my-3">
							<TextForm heading="Essay" mode={mode} toggleMode={toggleMode} />
						</div>
					}
				/>
				<Route
					path={`about`}
					element={
						<div className="container my-3">
							<About mode={mode} toggleMode={toggleMode} />
						</div>
					}
				/>
				<Route
					path={`*`}
					element={
						<div className="container my-3">
							<DefaultPage />
						</div>
					}
				/>
			</Route>
		</Routes>
	);
}

export default App;
