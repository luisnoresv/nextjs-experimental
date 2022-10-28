import Image from 'next/image';
import { use } from 'react';

async function getDog(id) {
	const res = await fetch(`https://api.thedogapi.com/v1/images/${id}`, {
		headers: { 'x-api-key': process.env.DOGS_API_HEADER_VALUE },
	});

	return res.json();
}

export default function Page({ params }) {
	// console.info('DogDetailPage - id:', params);
	const dog = use(getDog(params.id));
	console.info('Dog requested:', dog);
	return (
		<article>
			<p>Details: </p>
			<ul>
				{dog.breeds.map((breed, index) => (
					<>
						<li key={index + 1}>{breed.weight.metric}</li>
						<li key={index + 2}>{breed.height.metric}</li>
						<li key={index + 3}>{breed.bred_for}</li>
						<li key={index + 4}>{breed.life_span}</li>
						<li key={index + 5}>{breed.temperament}</li>
					</>
				))}
			</ul>

			<Image src={dog.url} alt={dog.breeds[0].name} width={100} height={100} />
		</article>
	);
}

// export async function generateStaticParams() {
// 	const order = 'ASC';
// 	const res = await fetch(
// 		`https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=${order}&page=0&limit=5`,
// 		{ headers: { 'x-api-key': process.env.DOGS_API_HEADER_VALUE } }
// 	);
// 	const dogs = await res.json();

// 	return dogs.map((dog) => ({ id: dog.id }));
// }
