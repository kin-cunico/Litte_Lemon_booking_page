"use client";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import MainHero from "./components/MainHero";
import LowerSection from "./components/LowerSection";
import Footer from "./components/Footer";
import { ChakraProvider } from "@chakra-ui/react";

export default function Home() {
	return (
		<ChakraProvider>
			<main className="main">
				<Header />
				<Navbar />
				<MainHero />
				<LowerSection />
				<Footer />
			</main>
		</ChakraProvider>
	);
}
