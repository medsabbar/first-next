import React, { useRef } from 'react';
import classes from './NewMeetupForm.module.css';

import { motion } from 'framer-motion';

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
		<motion.form
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1 }}
			onSubmit={submitHandler}
			className={classes.container}
		>
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
			<motion.button
				whileHover={{ scale: 1.1, cursor: 'pointer' }}
				whileTap={{ scale: 0.9 }}
				type="submit"
			>
				Add Meetup
			</motion.button>
		</motion.form>
	);
}

export default NewMettupForm;
