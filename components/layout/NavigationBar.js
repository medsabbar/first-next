import React from 'react';
import Link from 'next/link';
import classes from './NavigationBar.module.css';
import { motion } from 'framer-motion';

function NavigationBar() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			className={classes.navbar}
		>
			<div>
				<Link href={'/'} passHref>
					<motion.div
						className={classes.homeLink}
						whileHover={{ scale: 1.1, cursor: 'pointer' }}
						whileTap={{ scale: 0.9 }}
					>
						React Meetups
					</motion.div>
				</Link>
			</div>
			<div className={classes.others}>
				<Link href={'/'} passHref>
					<motion.div
						whileHover={{ scale: 1.1, opacity: 0.8, cursor: 'pointer' }}
						whileTap={{ scale: 0.9 }}
					>
						All Meetups
					</motion.div>
				</Link>
				<Link href={'/new-meetup'} passHref>
					<motion.div
						whileHover={{ scale: 1.1, opacity: 0.8, cursor: 'pointer' }}
						whileTap={{ scale: 0.9 }}
					>
						Add Meetup
					</motion.div>
				</Link>
			</div>
		</motion.div>
	);
}

export default NavigationBar;
