import { Head } from "next/head";

export default function Header() {
	return (
		<header>
			<title>Little Lemon London</title>
			<meta
				name="description"
				content="The new Italo-American style restaurant in London. Open everyday, 11 to 23, in Little Italy"
			/>
			<meta
				name="og:title"
				content="Little Lemon London"
			/>
			<meta
				name="og:image"
				content="public/images/Logo.svg"
			/>
			<meta
				name="og:description"
				content="Welcome to Little Lemon London."
			/>
		</header>
	);
}
