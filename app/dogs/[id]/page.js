import Image from 'next/image';
// import { notFound } from 'next/navigation';
import { use } from 'react';
// import NotFound from '../not-found';

import classes from './dogDetails.module.css';

async function getDog(id) {
	const res = await fetch(`https://api.thedogapi.com/v1/images/${id}`, {
		headers: { 'x-api-key': process.env.DOGS_API_HEADER_VALUE },
	});

	return res.json();
}

export default function Page({ params }) {
	const dog = use(getDog(params.id));

	// ! Feature not tested
	// if (!dog) {
	// 	NotFound();
	// }

	return (
		<article className={classes.details}>
			<header>
				<Image
					src={dog.url}
					alt={dog.breeds[0].name}
					width={300}
					height={300}
				/>
				<h1>{dog.breeds[0].name}</h1>
				<p>Group: {dog.breeds[0].breed_group}</p>
			</header>
			<>
				<p>Weight: {dog.breeds[0].weight.metric}kg</p>
				<p>Size: {dog.breeds[0].height.metric}cm</p>
				<p>Hobbies: {dog.breeds[0].bred_for}</p>
				<p>Life: {dog.breeds[0].life_span}</p>
				<p>Temperament: {dog.breeds[0].temperament}</p>
			</>
		</article>
	);
}

export async function generateStaticParams() {
	const order = 'ASC';
	const res = await fetch(
		`https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=${order}&page=0&limit=5`,
		{ headers: { 'x-api-key': process.env.DOGS_API_HEADER_VALUE } }
	);
	const dogs = await res.json();

	return dogs.map((dog) => ({ id: dog.id }));
}
