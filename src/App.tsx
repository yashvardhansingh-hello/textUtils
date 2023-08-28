import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { Routes, Route, Outlet } from "react-router-dom";
import DefaultPage from "./pages/DefaultPage";
import Alert from "./components/Alert";

function App() {
	const [mode, setMode] = useState("light");
	const [alert, setAlert] = useState(null);
	const showAlert = (message, type) => {
		setAlert({
			message: message,
			type: type,
		});
		setTimeout(() => {
			setAlert(null);
		}, 1000);
	};
	const toggleMode = () => {
		if (mode === "light") {
			setMode("dark");
			document.body.style.backgroundColor = "black";
			document.body.style.color = "white";
			showAlert("Dark mode has been enabled", "success");
		} else {
			setMode("light");
			document.body.style.backgroundColor = "white";
			document.body.style.color = "black";
			showAlert("Light mode has been enabled", "success");
		}
	};
	return (
		<Routes>
			<Route
				path="/"
				element={
					<>
						<Navbar
							title="TextUtils"
							aboutText="About"
							mode={mode}
							toggleMode={toggleMode}
						/>
						<Alert alert={alert} />
						<Outlet />
					</>
				}
			>
				<Route
					index
					element={
						<div className="container my-3">
							<TextForm
								heading="Essay"
								mode={mode}
								toggleMode={toggleMode}
								showAlert={showAlert}
							/>
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
