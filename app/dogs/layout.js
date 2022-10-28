import Link from 'next/link';
import { use } from 'react';
import DogsList from './dogs-list';

import classes from './layout.module.css';

async function getDogs(order) {
	const res = await fetch(
		`https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=${order}&page=0&limit=5`,
		{ headers: { 'x-api-key': process.env.DOGS_API_HEADER_VALUE } }
	);
	return await res.json();
}

export default function Layout({ children }) {
	// * Based on rtfc https://github.com/acdlite/rfcs/blob/first-class-promises/text/0000-first-class-support-for-promises.md
	// * React Server Components also support async/await syntax to access promise-based APIs
	const dogs = use(getDogs('ASC'));

	return (
		<div className={classes.layout}>
			<aside className={classes.sidebar}>
				<DogsList dogs={dogs} />
			</aside>
			{children}
		</div>
	);
}
