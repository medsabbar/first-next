import React from 'react';
import Link from 'next/link';
import classes from './NavigationBar.module.css';
import { motion } from 'framer-motion';

function NavigationBar() {
	return (
		<motion.div
			initial={{ translateY: -60 }}
			whileInView={{ translateY: 0 }}
			transition={{ duration: 1 }}
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
