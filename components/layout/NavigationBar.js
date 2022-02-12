import React, { Fragment } from 'react';
import Link from 'next/link';
import classes from './NavigationBar.module.css';

function NavigationBar() {
	return (
		<div className={classes.navbar}>
			<div className={classes.homepage}>
				<Link href={'/'}>React Meetups</Link>
			</div>
			<div className={classes.others}>
				<Link href={'/'}>All Meetups</Link>
				<Link href={'/new-meetup'}>Add Meetup</Link>
			</div>
		</div>
	);
}

export default NavigationBar;
