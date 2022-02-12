import React, { useState } from 'react';
import NavigationBar from './NavigationBar';
import Loader from './Loader';

function Layout(props) {
	return (
		<div>
			<NavigationBar />
			{props.loading ? <Loader /> : <main>{props.children}</main>}
		</div>
	);
}

export default Layout;
