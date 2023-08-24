import { Outlet } from "react-router-dom";

export default function Navbar(props: {
	title: string;
	aboutText: string;
	mode: string;
	toggleMode: any;
}) {
	return (
		<nav className={`navbar`} data-bs-theme={props.mode}>
			<div
				className="container-fluid pb-2"
				style={
					props.mode === "dark"
						? { borderBottom: "2px solid white" }
						: { borderBottom: "2px solid black" }
				}
			>
				<a className="navbar-brand" href={`/:`}>
					{props.title}
				</a>
				<button
					className="navbar-toggler"
					type="button"
					style={{ boxShadow: "none" }}
					data-bs-toggle="offcanvas"
					data-bs-target={`#offcanvasNavbar`}
					aria-controls={`offcanvasNavbar`}
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className={`offcanvas offcanvas-end text-bg-`}
					tabIndex={-1}
					id={`offcanvasNavbar`}
					aria-labelledby={`offcanvasNavbarLabel`}
				>
					<div className="offcanvas-header">
						<h5 className="offcanvas-title" id={`offcanvasNavbarLabel`}>
							{props.title}
						</h5>
						<div className="form-check form-switch">
							<input
								className="form-check-input"
								type="checkbox"
								role="switch"
								id="flexSwitchCheckDefault"
								onClick={props.toggleMode}
							/>
							<label
								className={`form-check-label text-${
									props.mode === "light" ? "dark" : "light"
								}`}
								htmlFor="flexSwitchCheckDefault"
							>
								Enable DarkMode
							</label>
						</div>
						<button
							type="button"
							className={`btn-close btn-close-${
								props.mode === "light" ? "black" : "white"
							}`}
							data-bs-dismiss="offcanvas"
							aria-label="Close"
						></button>
					</div>
					<div className="offcanvas-body">
						<ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
							<li className="nav-item">
								<a className="nav-link" aria-current="page" href={`/`}>
									Home
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" aria-current="page" href={`/about`}>
									{props.aboutText}
								</a>
							</li>
						</ul>
						<form className="d-flex mt-3" role="search">
							<input
								className="form-control me-2"
								type="search"
								placeholder="Search"
								aria-label="Search"
							/>
							<button className="btn btn-success" type="submit">
								Search
							</button>
						</form>
					</div>
				</div>
			</div>
			<Outlet />
		</nav>
	);
}
