import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import classes from './EditMeetup.module.css';

function EditMeetup({ meetupData, onUpdateMeetup }) {
	const [entredTitle, setEntredTitle] = useState();
	const [entredImage, setEntredImage] = useState();
	const [entredDescription, setEntredDescription] = useState();
	const [entredAdress, setEntredAdress] = useState();

	const changeTitle = (e) => {
		setEntredTitle(e.target.value);
	};

	const changeImage = (e) => {
		setEntredImage(e.target.value);
	};

	const changeDescription = (e) => {
		setEntredDescription(e.target.value);
	};

	const changeAdress = (e) => {
		setEntredAdress(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const meetup = {
			id: meetupData.id,
			title: entredTitle,
			image: entredImage,
			address: entredAdress,
			description: entredDescription,
		};

		onUpdateMeetup(meetup);
	};

	useEffect(() => {
		setEntredTitle(meetupData.title);
		setEntredImage(meetupData.image);
		setEntredDescription(meetupData.description);
		setEntredAdress(meetupData.address);
	}, []);
	return (
		<motion.form
			onSubmit={handleSubmit}
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1 }}
			className={classes.container}
		>
			<label htmlFor="title">Meetup Title</label>
			<br />
			<input
				id="title"
				value={entredTitle}
				onChange={changeTitle}
				type="text"
				required
			/>
			<br />
			<label htmlFor="image">Meetup Image</label>
			<br />
			<input
				id="image"
				onChange={changeImage}
				value={entredImage}
				type="text"
				required
			/>
			<br />
			<div className={classes.imageContainer}>
				<Image src={meetupData.image} alt={meetupData.title} layout="fill" />
			</div>
			<label htmlFor="address">Meetup Address</label>
			<br />
			<input
				id="address"
				onChange={changeAdress}
				value={entredAdress}
				type="text"
				required
			/>
			<br />
			<label htmlFor="description">Description</label>
			<br />
			<textarea
				id="description"
				value={entredDescription}
				onChange={changeDescription}
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

export default EditMeetup;
