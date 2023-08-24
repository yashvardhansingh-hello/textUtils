import React, { useState } from "react";

export default function TextForm(props: {
	heading: any;
	mode: string;
	toggleMode: any;
}) {
	const handleUpClick = () => {
		setText(text.toUpperCase());
	};
	const handleLoClick = () => {
		setText(text.toLowerCase());
	};

	const handleOnChange = (event) => {
		setText(event.target.value);
	};
	const handleDelete = () => {
		setText("");
	};
	const handleCopy = () => {
		// let text = document.getElementById("myBox");
		navigator.clipboard.writeText(text);
	};
	const handleSpaces = () => {
		let newText = text.split(/[ ]+/).join(" ");
		setText(newText);
	};
	const [text, setText] = useState("");
	let words = text.split(" ").length;
	if (text.split(" ")[0] === "") {
		words = 0;
	}
	return (
		<>
			<div className="container m-0 p-0">
				<h1>{props.heading}</h1>
				<div className="mb-1">
					<textarea
						className="form-control"
						value={text}
						onChange={handleOnChange}
						id="myBox"
						rows={8}
					></textarea>
				</div>
				<button className="btn btn-primary mx-1" onClick={handleUpClick}>
					Convert to UpperCase
				</button>
				<button className="btn btn-primary mx-1" onClick={handleLoClick}>
					Convert to LowerCase
				</button>
				<button className="btn btn-danger mx-1" onClick={handleDelete}>
					Delete
				</button>
				<button className="btn btn-success mx-1" onClick={handleCopy}>
					Copy
				</button>
				<button className="btn btn-danger mx-1" onClick={handleSpaces}>
					Remove Extra Spaces
				</button>
			</div>
			<div className="container my-1">
				<h1>Text Summary</h1>
				<p>
					{words} Words {text.split("").length} characters
				</p>
				<p className="my-1">
					Reading Time: {words * 0.008}{" "}
					<span className="text-danger" style={{ padding: 0, margin: 0 }}>
						minutes
					</span>
				</p>
				<h2>Preview</h2>
				<p>{text !== "" ? text : "Nothing to show. Enter Text"}</p>
			</div>
		</>
	);
}
