import { Button } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import logo from "public/images/Logo.svg";

export default function Navbar() {
	return (
		<nav className="navbar">
			<Link
				href="/"
				role="logo-link to home page"
			>
				<Image
					src={logo}
					alt="logo"
					className="logo"
				></Image>
			</Link>

			<ul className="nav_list">
				<li
					className="link home"
					role="link to home"
				>
					<Link href="/">HOME</Link>
				</li>
				<li
					role="link to about section"
					className="link about"
				>
					<Link href="#about">ABOUT</Link>
				</li>
				<li
					className="link menu"
					role="link to menu page"
				>
					<Link
						href="/"
						target="_blank"
					>
						MENU
					</Link>
				</li>
				<li
					className="link order"
					role="link to order online page"
					passHref
				>
					<Link href="/">ORDER ONLINE</Link>
				</li>
				<li role="button to login">
					<Button
						colorScheme="green"
						variant="outline"
					>
						LOGIN
					</Button>
				</li>
			</ul>
		</nav>
	);
}
