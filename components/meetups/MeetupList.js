import React from 'react';
import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';

function MeetupList(props) {
	return (
		<ul className={classes.meetuplist}>
			{props.meetups.map((meetup) => {
				return (
					<MeetupItem
						key={meetup.id}
						id={meetup.id}
						image={meetup.image}
						title={meetup.title}
						address={meetup.address}
					/>
				);
			})}
		</ul>
	);
}

export default MeetupList;
