import Link from 'next/link';

export default function DogsList({ dogs }) {
	return (
		<ul>
			{dogs.map((dog) => (
				<li key={dog.id}>
					<article>
						<h2>{dog.breeds[0].name}</h2>
						<p>{dog.breeds[0].breed_group}</p>
						<p>
							<Link href={`/dogs/${dog.id}`}>View Details</Link>
						</p>
					</article>
				</li>
			))}
		</ul>
	);
}
