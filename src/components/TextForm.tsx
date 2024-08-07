import React, { useState } from "react";

export default function TextForm(props) {
	{
		document.title = "TextUtils: Home";
	}
	const handleOnChange = (event) => {
		setText(event.target.value);
	};
	const handleDelete = () => {
		setText("");
		props.showAlert("Text Cleared", "danger");
	};
	const handleCopy = () => {
		navigator.clipboard.writeText(text);
		props.showAlert("Copied to Clipboard", "success");
	};
	const handleSpaces = () => {
		let newText = text.split(/[ ]+/).join(" ");
		setText(newText);
		props.showAlert("Removed Spaces", "warning");
	};
	const [text, setText] = useState("");
	const [_case, setCase] = useState("Upper");
	const toggleCase = () => {
		if (_case === "Upper") {
			setCase("Lower");
			setText(text.toUpperCase());
			props.showAlert("Entire text Upper Case", "primary");
		} else {
			setCase("Upper");
			setText(text.toLowerCase());
			props.showAlert("Entire text Lower Case", "primary");
		}
	};
	let words = text.split(" ").filter((element) => {
		return element.length !== 0;
	}).length;

	return (
		<>
			<div className="container m-0 p-0">
				<h1>{props.heading}</h1>
				<div className="mb-1">
					<textarea
						className={`form-control`}
						data-bs-theme={props.mode}
						value={text}
						onChange={handleOnChange}
						id="myBox"
						rows={8}
					></textarea>
				</div>
				<button
					className="btn btn-primary mx-1"
					disabled={text.length === 0}
					onClick={toggleCase}
				>
					Toggle Case
				</button>
				<button
					className="btn btn-danger mx-1"
					onClick={handleDelete}
					disabled={text.length === 0}
				>
					Delete
				</button>
				<button
					className="btn btn-success mx-1"
					onClick={handleCopy}
					disabled={text.length === 0}
				>
					Copy
				</button>
				<button
					className="btn btn-warning mx-1 my-1"
					disabled={text.length === 0}
					onClick={handleSpaces}
				>
					Remove Extra Spaces
				</button>
			</div>
			<div className="container my-1">
				<h1>Text Summary</h1>
				<p>
					{words} Words{" "}
					{
						text.split("").filter((element) => {
							return element !== " ";
						}).length
					}{" "}
					characters
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
