import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import classes from './MeetupItem.module.css';

function MeetupItem(props) {
	const router = useRouter();
	function showDetailsHandler() {
		router.push('/' + props.id);
	}

	return (
		<div className={classes.container}>
			<div className={classes.imageContainer}>
				<Image src={props.image} alt={props.title} layout="fill" />
			</div>
			<div className={classes.else}>
				<div>
					<h3>{props.title}</h3>
					<address>{props.address}</address>
				</div>
				<div>
					<button onClick={showDetailsHandler} className={classes.button}>
						Show Details
					</button>
				</div>
			</div>
		</div>
	);
}

export default MeetupItem;
