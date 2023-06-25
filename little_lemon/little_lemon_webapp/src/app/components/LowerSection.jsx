import Image from "next/image";

import userImage from "public/images/Mario and Adrian A.jpg";
import userImage2 from "public/images/Mario and Adrian b.jpg";

export default function LowerSection() {
	return (
		<main
			className="testimonials_container"
			role="testimonials section"
		>
			<h4>What our customers think about us:</h4>
			<section className="testimonials">
				<div className="testimonial">
					<div className="testimonial_image">
						<Image
							src={userImage}
							alt="user image"
							className="userImage"
						></Image>
						<h4>Hector Casa</h4>
					</div>
					<icon
						src="public/images/icons8-star-50.png"
						className="stars"
					>
						☆☆☆☆☆
					</icon>
					<p>
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
						commodo ligula eget dolor. Aenean massa.
					</p>
				</div>
				<div className="testimonial">
					<div className="testimonial_image">
						<Image
							src={userImage2}
							alt="user image"
							className="userImage"
						/>
						<h4>Hector Casa</h4>
					</div>
					<icon
						src="public/images/icons8-star-50.png"
						className="stars"
					>
						☆☆☆☆☆
					</icon>
					<p>
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
						commodo ligula eget dolor. Aenean massa.
					</p>
				</div>
			</section>
			<section
				className="aboutUsSection"
				id="about"
			>
				<div className="left_about">
					<h2>Little Lemon</h2>
					<span>London</span>
					<p>
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
						commodo ligula eget dolor. Aenean massa. Cum sociis natoque
						penatibus et magnis dis parturient montes, nascetur ridiculus mus.
					</p>
				</div>
				<div className="imageAbout">
					<Image
						src={userImage}
						alt="Adrian Image"
					/>
					<p>Adrian</p>
				</div>
				<div className="imageAbout">
					<Image
						src={userImage2}
						alt="Mario Image"
					/>
					<p>Adrian</p>
				</div>
			</section>
		</main>
	);
}
