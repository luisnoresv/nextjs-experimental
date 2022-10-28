import { use } from 'react';

async function getDogs() {
	const res = await fetch(
		'https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=5',
		{ headers: { 'x-api-key': process.env.DOGS_API_HEADER_VALUE } }
	);
	return res.json();
}

export default function Page() {
	// * Based on rtfc https://github.com/acdlite/rfcs/blob/first-class-promises/text/0000-first-class-support-for-promises.md
	// * React Server Components also support async/await syntax to access promise-based APIs
	const dogs = use(getDogs());
	// console.info(dogs[0]);
	return (
		<>
			{/* Layout */}
			<h1>I 💙 Dogs</h1>
			<br />
			{/* <div>{JSON.stringify(dogs)}</div> */}
			<ul>
				{dogs.map((dog) => (
					<li key={dog.id}>{dog.breeds[0].name}</li>
				))}
			</ul>

			{/**Nested Layout */}
			<div>Dogs details</div>
		</>
	);
}
