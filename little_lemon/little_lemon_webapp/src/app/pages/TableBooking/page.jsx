"use client";

import { Button, ChakraProvider } from "@chakra-ui/react";
import styles from "../../styles/TableBooking.module.css";
import { useState, useEffect, useReducer } from "react";
import Header from "@/app/components/Header.jsx";
import Script from "next/script";
import InitializeTimes from "@/app/components/InizializeTimes";
import PopUp from "@/app/components/PopUp";

/////////////////////////////////////////////////////////////////
export default function TableBooking() {
	////// TODO dateUnavailable picked

	///// date and time state
	const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
	const [time, setTime] = useState("");

	/////////////////////////////////////////////////////////////////// controlled states

	const [name, setName] = useState("");

	const [telephone, setTelephone] = useState("");

	///// email state and validation

	const [email, setEmail] = useState("");

	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	///////

	const [where, setWhere] = useState("");
	////// guests state and validation
	const [guests, setGuests] = useState("");

	const [occasion, setOccasion] = useState("");

	const [comment, setComment] = useState("");

	//////////////////////////////////////////////////////////////////// handle submit

	const handleSubmit = (e) => {
		e.preventDefault();
		setName("") &&
			setTelephone("") &&
			setEmail("") &&
			setWhere("") &&
			setGuests("") &&
			setOccasion("") &&
			setComment("");
	};

	///////////////////////////////////////////////////////////////////////// handleBlur

	/////// TODO errorMessages to implement
	const [emailError, setEmailError] = useState("");
	const handleEmail = (e) => {
		e.preventDefault();
		if (!emailPattern.test(email)) {
			setEmailError(
				<p className={styles.error}>Please, add a valid email address</p>
			);
		} else if (emailPattern.test(email)) {
			setEmailError("");
		}
		return;
	};
	////////////////////////////////////////////////////////////////////////
	const [errorMessage, setErrorMessage] = useState("");
	const [phoneError, setPhoneError] = useState("");
	const [errorDate, setErrorDate] = useState("");
	const [errorGuests, setErrorGuests] = useState("");
	//
	const handleBlur = (e) => {
		e.preventDefault();
		if (name.length < 2) {
			setErrorMessage(
				<p className={styles.error}>
					Your name must be at least 2 characters long, and maximum 30.
				</p>
			);
		} else if (name.length >= 2) {
			setErrorMessage("");
		}
		return;
	};

	const handleTelephone = (e) => {
		e.preventDefault();
		if (telephone.length < 7) {
			setPhoneError(
				<p className={styles.error}>
					Your telephone number must have at least 7 digits and maximum 14.
				</p>
			);
		} else if (telephone.length >= 7) {
			setPhoneError("");
		}
	};
	const handleDate = (e) => {
		e.preventDefault();
		if (!date) {
			setErrorDate(<p className={styles.error}>Please pick a date.</p>);
		} else {
			setErrorDate("");
		}
	};
	///
	const handleGuests = (e) => {
		e.preventDefault();
		if (guests === "") {
			setErrorGuests(
				<p className={styles.error}>Please select the number of guests.</p>
			);
		} else {
			setErrorGuests("");
		}
	};

	// USE EFFECT to remove hydration error due to DOM changes with the calendar

	useEffect(() => {
		if (localStorage === 0) {
			return localStorage.setItem(TableBooking);
		}
	}, []);

	/// formData
	const [formData, setFormData] = useState([]);
	let formRes = [
		{
			name: { name },
		},
		{
			telephone: { telephone },
		},
		{
			email: { email },
		},
		{
			date: { date },
		},
		{
			time: { time },
		},
		{
			where: { where },
		},
		{
			guests: { guests },
		},
		{
			occasion: { occasion },
		},
		{
			comment: { comment },
		},
	];

	const handleForm = () => {
		setFormData(formRes);
		const keysData = formData.map((item) => {
			const key = Object.keys(item)[0];
			const userValue = item[key];
			console.log(key, userValue);
			return (
				<ul>
					<li>{`${key}: ${userValue}`}</li>
				</ul>
			);
		});
	};
	/// POPUP HANDLERS
	const [buttonPopUp, setButtonPopUp] = useState(false);

	const [disableButton, setDisableButton] = useState(
		name === "",
		telephone === "",
		!email,
		!date,
		time === "1",
		guests === "Select"
	);

	////////////////////////////////////////////////////
	return (
		<ChakraProvider>
			<main
				className={styles.main}
				trigger={true}
				id="main"
			>
				<Header />
				<h1>Reserve your table:</h1>
				<form
					className={styles.form}
					onSubmit={handleSubmit}
				>
					<label
						htmlFor="name"
						className={styles.fillForm}
					>
						<sup>* </sup>Name:
					</label>
					<input
						data-testid="name"
						placeholder="Full name"
						id="name"
						type="text"
						className={styles.input}
						required
						value={name}
						onChange={(e) => setName(e.target.value)}
						onBlur={handleBlur}
					></input>
					{errorMessage}
					<label
						htmlFor="telephone"
						className={styles.fillForm}
					>
						<sup>* </sup>Telephone:
					</label>
					<input
						data-testid="telephone"
						placeholder="+44"
						id="telephone"
						type="number"
						required
						className={styles.input}
						value={telephone}
						onChange={(e) => setTelephone(e.target.value)}
						onBlur={handleTelephone}
					></input>
					{phoneError}
					<label
						htmlFor="email"
						className={styles.fillForm}
					>
						<sup>* </sup>Email:
					</label>
					<input
						data-testid="email"
						placeholder="your email"
						id="email"
						required
						type="email"
						className={styles.input}
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						onBlur={handleEmail}
					></input>
					{emailError}
					<label
						htmlFor="date"
						className={styles.fillForm}
					>
						<sup>* </sup>Select the date and time:
					</label>
					<input
						data-testid="date"
						type="date"
						id="date"
						value={date}
						onChange={(e) => setDate(e.target.value)}
						required
						onBlur={handleDate}
					></input>
					{errorDate}
					<InitializeTimes />
					<label
						htmlFor="select"
						className={styles.fillForm}
					>
						I want to seat:
					</label>
					<select
						id="select"
						className={styles.select}
						required
						value={where}
						onChange={(e) => setWhere(e.target.value)}
					>
						<option>Select</option>
						<option>Inside</option>
						<option>Outside</option>
					</select>
					<label
						htmlFor="guests"
						className={styles.fillForm}
					>
						<sup>* </sup>Number of guests:
					</label>
					Total guests: {guests}
					<input
						id="guests"
						className="selects"
						type="range"
						min={1}
						max={80}
						placeholder="2"
						required
						value={guests}
						onChange={(e) => setGuests(e.target.value)}
						onMouseEnter={handleGuests}
					></input>
					{errorGuests}
					<label
						htmlFor="occasion"
						className={styles.fillForm}
					>
						Occasion:
					</label>
					<select
						id="occasion"
						value={occasion}
						onChange={(e) => setOccasion(e.target.value)}
					>
						<option>None</option>
						<option>Birthday</option>
						<option>Anniversary</option>
						<option>Business Meeting</option>
						<option>Wedding</option>
					</select>
					<label
						htmlFor="comment"
						className={styles.fillForm}
					>
						Special requirements:
					</label>
					<textarea
						id="comment"
						value={comment}
						onChange={(e) => setComment(e.target.value)}
						placeholder="Tell us if you have any special requirements"
					></textarea>
					<Button
						data-testid="btn"
						colorScheme="green"
						variant="outline"
						type="button"
						disabled={disableButton}
						onClick={() => setButtonPopUp(true)}
					>
						Confirm
					</Button>
				</form>
				<PopUp trigger={buttonPopUp}>
					<ul>
						<li className={styles.error}>Testing POPUP</li>
						<li>{handleForm}</li>
						<li className={styles.error}>item 2</li>
						<Button
							colorScheme="orange"
							variant="outline"
							onClick={() => setButtonPopUp(false)}
						>
							Back
						</Button>
						<Button
							type="submit"
							colorScheme="green"
							variant="outline"
							onClick={() => setButtonPopUp(false) && handleSubmit}
						>
							Confirm
						</Button>
					</ul>
				</PopUp>
			</main>
			<Script src="https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js" />
		</ChakraProvider>
	);
}
