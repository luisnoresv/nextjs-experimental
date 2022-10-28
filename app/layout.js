import './globals.css';
import MainNavigation from '../components/ui/main-navigation';
/**
 * Place to import libraries like for example
 * import "talwindcss/talwind.css"
 */

/**
 * * Next 13 Server components: Run on the server and send their static output up to the browser +Fast,-less js to the FE
 * ! Next 12: Pre-rendering client components, sending the HTML but also the js to rehydrate those components on the client
 */
export default function RooLayout({ children }) {
	console.log('rendering');

	return (
		<html lang='en'>
			<head>
				<title>Nested layout by Example</title>
			</head>
			<body>
				<header>
					<MainNavigation />
				</header>
				{children}
			</body>
		</html>
	);
}
