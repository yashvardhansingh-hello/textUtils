import React, { useState } from "react";
export default function TextForm(props: { heading: any }) {
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
		navigator.clipboard.writeText(text);
	};
	const [text, setText] = useState("");
	let words = text.split(" ").length;
	if (text.split(" ")[0] === "") {
		words = 0;
	}
	return (
		<>
			<div className="container">
				<h1>{props.heading}</h1>
				<div className="mb-3">
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
			</div>
			<div className="container my-3">
				<h1>Your Text Summary</h1>
				<p>
					{words} Words {text.split("").length} characters
				</p>
				<p className="my-4">
					Reading Time: {words * 0.008}{" "}
					<span className="text-danger">minutes</span>
				</p>
			</div>
		</>
	);
}
