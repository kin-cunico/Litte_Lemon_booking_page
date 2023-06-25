import { Button } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
//////////////////////////////////////////////////////////
import reserveSectionImg from "public/images/restauranfood.jpg";
import mozzarella from "public/images/12mozzarellafrescaverano.webp";
import carbonara from "public/images/msl-food-entertaining-whats-for-dinner-noodles-cavatappi-md110135_horiz-25a701ac8fe240218fab3b564118e673.jpg";
import lemonCake from "public/images/lemon dessert.jpg";
/////////////////////////////////////////////////////////

export default function MainHero() {
	return (
		<main
			className="container"
			role="container for reserve a table section and specials-menu section"
		>
			<section
				className="hero_section"
				role="reserve a table section"
			>
				<article className="header_hero">
					<h1>Little Lemon</h1>
					<p>London</p>
					<p>
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
						commodo ligula eget dolor. Aenean massa. Cum sociis natoque
						penatibus et magnis dis parturient montes, nascetur ridiculus mus.
					</p>
					<Link
						href="/pages/TableBooking"
						target="_blank"
						className="link_button"
					>
						<Button
							colorScheme="yellow"
							variant="solid"
							className="HeroButton"
						>
							Reserve a Table
						</Button>
					</Link>
				</article>

				<Image
					src={reserveSectionImg}
					alt="reserve a table image"
					role="reserve a table image"
					className="hero_image"
				></Image>
			</section>
			<section
				className="specials"
				role="specials section"
			>
				<div className="specials_menu">
					<h4>Specials</h4>
					<Link
						href="/pages/MenuPage"
						target="_blank"
						className="link_button"
					>
						<Button
							colorScheme="yellow"
							variant="solid"
							role="button to access the menu page"
						>
							Menu à la carte
						</Button>
					</Link>
				</div>
				<section className="dishCardSection">
					<div className="dishCard">
						<Image
							src={mozzarella}
							alt="lemon-cake picture"
							className="dishImage"
						></Image>
						<h4 role="dish name">
							Mozzarella fresca <span>£ 9.20</span>
						</h4>
						<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </p>
						<a href="/order">order online</a>
					</div>
					<div className="dishCard">
						<Image
							src={carbonara}
							alt="lemon-cake picture"
							className="dishImage"
						></Image>
						<h4 role="dish name">
							Fusilli carbonara <span>£ 9.20</span>
						</h4>
						<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </p>
						<a href="/order">order online</a>
					</div>
					<div className="dishCard">
						<Image
							src={lemonCake}
							alt="lemon-cake picture"
							className="dishImage"
						></Image>
						<h4 role="dish name">
							Lemoncake <span>£ 9.20</span>
						</h4>
						<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </p>
						<a href="/order">order online</a>
					</div>
				</section>
			</section>
		</main>
	);
}
