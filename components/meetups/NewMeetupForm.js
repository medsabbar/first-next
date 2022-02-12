import React, { useRef } from 'react';
import classes from './NewMeetupForm.module.css';

function NewMettupForm(props) {
	const titleInputRef = useRef();
	const imageInputRef = useRef();
	const addressInputRef = useRef();
	const descriptionInputRef = useRef();

	function submitHandler(event) {
		event.preventDefault();

		const entredTitle = titleInputRef.current.value;
		const entredImage = imageInputRef.current.value;
		const entredAdress = addressInputRef.current.value;
		const entredDescription = descriptionInputRef.current.value;

		const meetupDate = {
			title: entredTitle,
			image: entredImage,
			address: entredAdress,
			description: entredDescription,
		};

		props.onAddMeetup(meetupDate);
	}
	return (
		<form onSubmit={submitHandler} className={classes.container}>
			<label htmlFor="title">Meetup Title</label>
			<br />
			<input id="title" ref={titleInputRef} type="text" required />
			<br />
			<label htmlFor="image">Meetup Image</label>
			<br />
			<input id="image" ref={imageInputRef} type="text" required />
			<br />
			<label htmlFor="address">Meetup Address</label>
			<br />
			<input id="address" ref={addressInputRef} type="text" required />
			<br />
			<label htmlFor="description">Description</label>
			<br />
			<textarea
				id="description"
				ref={descriptionInputRef}
				name=""
				cols="30"
				rows="10"
			></textarea>
			<br />
			<button type="submit">Add Meetup</button>
		</form>
	);
}

export default NewMettupForm;
