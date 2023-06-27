"use client";

import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";

import { Button, ChakraProvider } from "@chakra-ui/react";
import styles from "../../styles/TableBooking.module.css";
import { useState, useEffect, useReducer } from "react";
import Header from "@/app/components/Header";

// mock server side

/////////////////////////////////////////////////////////////////
export default function TableBooking() {
	////// TODO dateUnavailable picked

	const datePicked = () => {
		if (value in unavailableDates && time in unavailableDates) {
			console.log("Sorry, this date is unavailable.");
		}
	};

	///// date and time state
	const [value, setValue] = useState(new Date());
	console.log(value);
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

	//// TODO create array of selected dates
	let selDates = [
		{
			date: "",
			time: "",
		},
	];
	let unavailableDates = [...selDates];

	function pushToArray(a, b) {
		selDates.push({
			date: { a },
			time: { b },
		});
	}

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

		/// selected dates arrayPush
		pushToArray(value, time);
		let unavailableDates = [...selDates];
		console.log(unavailableDates);

		alert("Table Booked");
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
	const [errorTime, setErrorTime] = useState("");
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

	//////////////////////////// handle error date NOT WORKING

	const handleDate = (e) => {
		e.preventDefault();
		if (!value) {
			setErrorDate(<p className={styles.error}>Please pick a date.</p>);
		} else {
			setErrorDate("");
		}
	};

	////////////////////////////////////////////////////////////////

	const handleTime = (e) => {
		e.preventDefault();
		if (time === "1") {
			setErrorTime(<p className={styles.error}>Please select a time.</p>);
		} else {
			setErrorTime("");
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

	return (
		<ChakraProvider>
			<main className={styles.main}>
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
						type="date"
						id="date"
						value={value}
						onChange={(e) => setValue(e.target.value)}
						required
						onBlur={handleDate}
					></input>
					{errorDate}
					<select
						className={styles.select}
						required
						onChange={(e) => setTime(e.target.value)}
						onBlur={handleTime}
					>
						<option value="1">Select</option>
						<option value="2">10:00</option>
						<option value="3">11:00</option>
						<option value="4">12:00</option>
						<option value="5">13:00</option>

						<option value="6">18:00</option>
						<option value="7">19:00</option>
						<option value="8">20:00</option>
						<option value="9">21:00</option>
					</select>
					{errorTime}
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
						colorScheme="green"
						variant="outline"
						type="submit"
						disabled={
							!name ||
							!telephone ||
							!email ||
							!value ||
							!time ||
							guests === "Select"
						}
					>
						Confirm
					</Button>
				</form>
			</main>
		</ChakraProvider>
	);
}
