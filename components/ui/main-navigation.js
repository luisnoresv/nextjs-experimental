import Link from 'next/link';
import classes from './mainNavigation.module.css';

export default function MainNavigation() {
	return (
		<nav className={classes.nav}>
			<ul>
				<li>
					<Link href='/'>Home</Link>
				</li>
				<li>
					<Link href='/movies'>Movies</Link>
				</li>
				<li>
					<Link href='/dogs'>Dogs</Link>
				</li>
			</ul>
		</nav>
	);
}
