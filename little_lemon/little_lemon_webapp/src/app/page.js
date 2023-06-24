"use client";

import Navbar from "./components/Navbar";
import MainHero from "./components/MainHero";

import Image from "next/image";
import styles from "./page.module.css";
import { ChakraProvider } from "@chakra-ui/react";

export default function Home() {
	return (
		<ChakraProvider>
			<>
				<Navbar />
				<MainHero />
				<footer></footer>
			</>
		</ChakraProvider>
	);
}
