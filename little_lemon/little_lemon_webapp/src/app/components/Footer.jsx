import logo from "../../../public/images/Logo.svg";
import Image from "next/image";
export default function Footer() {
	return (
		<footer className="footer">
			<Image
				src={logo}
				alt="footer-logo"
				className="footer_logo"
			/>
			<ul className="nav_menuFooter">
				<h4>Navigation Menu</h4>
				<a href="/">
					<li>Page example</li>
				</a>
				<a href="/">
					<li>Page example</li>
				</a>
				<a href="/">
					<li>Page example</li>
				</a>
			</ul>
			<ul className="nav_menuFooter">
				<h4>Contact</h4>
				<a href="/">
					<li>Page example</li>
				</a>
				<a href="/">
					<li>Page example</li>
				</a>
				<a href="/">
					<li>Page example</li>
				</a>
			</ul>
			<ul className="nav_menuFooter">
				<h4>Socials</h4>
				<a href="/">
					<li>Page example</li>
				</a>
				<a href="/">
					<li>Page example</li>
				</a>
				<a href="/">
					<li>Page example</li>
				</a>
			</ul>
		</footer>
	);
}
