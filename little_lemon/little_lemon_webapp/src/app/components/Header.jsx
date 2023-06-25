import { Head } from "next/head";

export default function Header() {
	return (
		<header>
			<title>Little Lemon London</title>
			<meta
				name="description"
				content="The new Italo-American style restaurant in London. Open everyday, 11 to 23, in Little Italy"
			/>
			<meta charset="UTF-8" />
			<meta
				name="author"
				content="Kin Cunico"
			></meta>
			<meta
				name="language"
				content="english"
			></meta>
			<meta
				name="robots"
				content="index,follow"
			/>
			<meta
				name="rating"
				content="safe for kids"
			></meta>
			<meta
				name="format-detection"
				content="telephone=yes"
			/>
			<meta
				name="HandheldFriendly"
				content="true"
			/>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1.0"
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
