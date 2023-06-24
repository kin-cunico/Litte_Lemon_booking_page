import { Button } from "@chakra-ui/react";
import Image from "next/image";
import logo from "public/images/Logo.svg";

export default function Navbar() {
	return (
		<nav className="navbar">
			<a
				href="/"
				role="logo-link to home page"
			>
				<Image
					src={logo}
					alt="logo"
					className="logo"
				></Image>
			</a>

			<ul className="nav_list">
				<li
					className="link"
					role="link to home"
				>
					<a href="/">HOME</a>
				</li>
				<li
					role="link to about section"
					className="link"
				>
					<a href="#about">ABOUT</a>
				</li>
				<li
					className="link"
					role="link to menu page"
				>
					<a href="/menu">MENU</a>
				</li>
				<li
					className="link"
					role="link to order online page"
				>
					<a href="/order">ORDER ONLINE</a>
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
