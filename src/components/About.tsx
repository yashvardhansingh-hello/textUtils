import React, { useState } from "react";

export default function About() {
	const [myStyle, setMyStyle] = useState({
		color: "black",
		backgroundColor: "white",
	});
	const [btnStyle, setBtnStyle] = useState("Enable Dark Mode");
	const handleDarkLight = () => {
		if (myStyle.color === "white") {
			setMyStyle({
				color: "black",
				backgroundColor: "white",
			});
			setBtnStyle("Enable Dark Mode");
		} else {
			setMyStyle({
				color: "white",
				backgroundColor: "rgb(31, 31, 31)",
			});
			setBtnStyle("Enable Light Mode");
		}
	};

	return (
		<div className="container" style={myStyle}>
			<h2 className="my-3" style={myStyle}>
				About Us
			</h2>
			<div className="accordion accordion-flush" id="accordionFlushExample">
				<div className="accordion-item" style={myStyle}>
					<h2 className="accordion-header">
						<button
							className="accordion-button collapsed"
							type="button"
							style={myStyle}
							data-bs-toggle="collapse"
							data-bs-target="#flush-collapseOne"
							aria-expanded="false"
							aria-controls="flush-collapseOne"
						>
							Accordion Item #1
						</button>
					</h2>
					<div
						id="flush-collapseOne"
						className="accordion-collapse collapse"
						data-bs-parent="#accordionFlushExample"
					>
						<div className="accordion-body" style={myStyle}>
							Placeholder content for this accordion, which is intended to
							demonstrate the <code>.accordion-flush</code> class. This is the
							first item's accordion body.
						</div>
					</div>
				</div>
				<div className="accordion-item" style={myStyle}>
					<h2 className="accordion-header" style={myStyle}>
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#flush-collapseTwo"
							aria-expanded="false"
							style={myStyle}
							aria-controls="flush-collapseTwo"
						>
							Accordion Item #2
						</button>
					</h2>
					<div
						id="flush-collapseTwo"
						className="accordion-collapse collapse"
						style={myStyle}
						data-bs-parent="#accordionFlushExample"
					>
						<div className="accordion-body" style={myStyle}>
							Placeholder content for this accordion, which is intended to
							demonstrate the <code>.accordion-flush</code> class. This is the
							second item's accordion body. Let's imagine this being filled with
							some actual content.
						</div>
					</div>
				</div>
				<div className="accordion-item" style={myStyle}>
					<h2 className="accordion-header" style={myStyle}>
						<button
							className="accordion-button collapsed"
							type="button"
							style={myStyle}
							data-bs-toggle="collapse"
							data-bs-target="#flush-collapseThree"
							aria-expanded="false"
							aria-controls="flush-collapseThree"
						>
							Accordion Item #3
						</button>
					</h2>
					<div
						id="flush-collapseThree"
						style={myStyle}
						className="accordion-collapse collapse"
						data-bs-parent="#accordionFlushExample"
					>
						<div className="accordion-body" style={myStyle}>
							Placeholder content for this accordion, which is intended to
							demonstrate the <code>.accordion-flush</code> class. This is the
							third item's accordion body. Nothing more exciting happening here
							in terms of content, but just filling up the space to make it
							look, at least at first glance, a bit more representative of how
							this would look in a real-world application.
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<button
					type="button"
					onClick={handleDarkLight}
					className="btn btn-primary my-3 mx-1"
				>
					{btnStyle}
				</button>
			</div>
		</div>
	);
}
