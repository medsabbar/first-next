import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import classes from './MeetupItem.module.css';
import { motion } from 'framer-motion';

function MeetupItem(props) {
	const router = useRouter();
	function showDetailsHandler() {
		router.push('/' + props.id);
	}

	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1 }}
			viewport={{ once: true }}
			className={classes.container}
		>
			<div className={classes.imageContainer}>
				<Image src={props.image} alt={props.title} layout="fill" />
			</div>
			<div className={classes.else}>
				<div>
					<h3>{props.title}</h3>
					<address>{props.address}</address>
				</div>
				<div>
					<motion.button
						whileHover={{ scale: 1.1, cursor: 'pointer' }}
						whileTap={{ scale: 0.9 }}
						onClick={showDetailsHandler}
						className={classes.button}
					>
						Show Details
					</motion.button>
				</div>
			</div>
		</motion.div>
	);
}

export default MeetupItem;
