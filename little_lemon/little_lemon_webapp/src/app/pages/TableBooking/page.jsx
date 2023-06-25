"use client";

import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";

import DateTimePicker from "react-datetime-picker";
import { Button, ChakraProvider } from "@chakra-ui/react";
import styles from "../../styles/TableBooking.module.css";
import { useState, useEffect } from "react";
/////////////////////////////////////////////////////////////////
export default function TableBooking() {
	let tables = [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
	];
	const [
		t1,
		t2,
		t3,
		t4,
		t5,
		t6,
		t7,
		t8,
		t9,
		t10,
		t11,
		t12,
		t13,
		t14,
		t15,
		t16,
		t17,
		t18,
		t19,
		t20,
	] = tables;

	///// CALENDAR
	const [value, onChange] = useState(new Date());

	// USE EFFECT to remove hydration error

	useEffect(() => {
		if (localStorage === 0) {
			return localStorage.setItem(TableBooking);
		}
	}, []);

	return (
		<ChakraProvider>
			<main className={styles.main}>
				<h1>Reserve your table:</h1>
				<form className={styles.form}>
					<label
						htmlFor="name"
						className={styles.fillForm}
					>
						Name:
					</label>
					<input
						placeholder="Full name"
						id="name"
						required
					></input>
					<label
						htmlFor="telephone"
						className={styles.fillForm}
					>
						Telephone:
					</label>
					<input
						placeholder="+44"
						id="telephone"
						required
					></input>
					<label
						htmlFor="email"
						className={styles.fillForm}
					>
						Email:
					</label>
					<input
						placeholder="your email"
						id="email"
						required
					></input>
					<label htmlFor="date">Select the date and time:</label>
					<DateTimePicker
						onChange={onChange}
						value={value}
						id="date"
						data-testid="date-picker"
						format="y-MM-dd h:mm"
						hourPlaceholder="hh"
						autoFocus={true}
						required
						yearPlaceholder="2023"
						monthPlaceholder="06"
						dayPlaceholder="26"
						minutePlaceholder="mm"
						hourAriaLabel="Hour"
					/>

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
					>
						<option>Inside</option>
						<option>Outside</option>
					</select>
					<label
						htmlFor="guests"
						className={styles.fillForm}
					>
						Number of guests:
					</label>
					<select
						id="guests"
						className="selects"
						required
					>
						<option>1-2</option>
						<option>3-4</option>
						<option>5-8</option>
						<option>9-12</option>
						<option>13+</option>
					</select>
					<Button
						colorScheme="green"
						variant="outline"
					>
						Confirm
					</Button>
				</form>
			</main>
		</ChakraProvider>
	);
}
