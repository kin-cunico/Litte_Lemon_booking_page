"use client";

import { React, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TimePicker from "../../components/InizializeTimes";
import styles from "../../styles/TableBooking.module.css";
import Popup from "../../components/Popup";

const validationSchema = Yup.object().shape({
	name: Yup.string().required("Name is required").min(2).max(30),
	email: Yup.string().email("Invalid email").required("Email is required"),
	telephone: Yup.string()
		.required("Telephone is required")
		.min(11, "minimum 11 digits"),
	date: Yup.date()
		.required("Date is required")
		.min(
			new Date(),
			"Date must be from tomorrow onwards. If you wish to reserve for today, please call us at: XXXXXXXXXXX"
		),
	guests: Yup.string().required("Guests is required"),
});

const TimePick = ({ field, form, disabledTimes }) => {
	const isTimeDisabled = (time) => disabledTimes.includes(time);
	const [selectedTime, setSelectedTime] = useState("");
	const handleTimeChange = (selectedTime) => {
		setSelectedTime(selectedTime);
		form.setFieldValue(field.name, selectedTime);
	};
	return (
		<div className={styles.inputBox}>
			<label htmlFor={field.name}>
				<sup>*</sup>Time:
			</label>
			<TimePicker
				id={field.name}
				name={field.name}
				selectedTime={selectedTime}
				onTimeChange={handleTimeChange}
				disabledTimes={disabledTimes}
			/>
			{isTimeDisabled(selectedTime) && (
				<div className="error-message">This time is already selected.</div>
			)}
			<ErrorMessage
				name={field.name}
				component="div"
				className={styles.error}
			/>
		</div>
	);
};

const TableBooking = () => {
	const handleSubmit = (values) => {
		setPopupOpen(true);
		setSubmitting(false);
		setTimeout(() => {
			window.close();
		}, 10000);
		// Handle form submission
		console.log(values);
	};
	const [submitting, setSubmitting] = useState(false);

	const [disabledTimes, setDisabledTimes] = useState([]);
	const [isPopupOpen, setPopupOpen] = useState(false);

	return (
		<>
			<Formik
				className={styles.form}
				initialValues={{
					name: "",
					email: "",
					telephone: "",
					date: "",
					time: "",
					occasion: "",
					guests: "",
				}}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
				{() => (
					<main
						className={styles.main}
						aria-label="book a table page"
					>
						<h2>Book your table at Little Lemon London:</h2>
						<Form className={styles.form}>
							<div className={styles.inputBox}>
								<label
									htmlFor="name"
									aria-label="name"
								>
									<sup>*</sup>Name:
								</label>
								<Field
									type="text"
									id="name"
									name="name"
								/>
								<ErrorMessage
									name="name"
									component="div"
									className={styles.error}
								/>
							</div>

							<div className={styles.inputBox}>
								<label
									htmlFor="email"
									aria-label="email"
								>
									<sup>*</sup>Email:
								</label>
								<Field
									type="email"
									id="email"
									name="email"
								/>
								<ErrorMessage
									name="email"
									component="div"
									className={styles.error}
								/>
							</div>

							<div className={styles.inputBox}>
								<label
									htmlFor="telephone"
									aria-label="telephone"
								>
									<sup>*</sup>Telephone:
								</label>
								<Field
									type="number"
									id="telephone"
									name="telephone"
								/>
								<ErrorMessage
									name="telephone"
									component="div"
									className={styles.error}
								/>
							</div>

							<div className={styles.inputBox}>
								<label
									htmlFor="date"
									aria-label="date"
								>
									<sup>*</sup>Date:
								</label>
								<Field
									type="date"
									id="date"
									name="date"
								/>
								<ErrorMessage
									name="date"
									component="div"
									className={styles.error}
								/>
							</div>

							<div className={styles.inputBox}>
								<Field
									name="time"
									component={TimePick}
									disabledTimes={disabledTimes}
								/>
							</div>

							<div className={styles.inputBox}>
								<label
									htmlFor="occasion"
									aria-label="occasion"
								>
									Occasion:
								</label>
								<Field
									as="select"
									name="occasion"
									id="occasion"
								>
									<option defaultValue>Select an option</option>
									<option value="Birthday">Birthday</option>
									<option value="Wedding">Wedding</option>
									<option value="Anniversary">Anniversary</option>
									<option value="Business Dinner">Business Dinner</option>
								</Field>
								<ErrorMessage
									name="occasion"
									component="div"
									className={styles.error}
								/>
							</div>

							<div className={styles.inputBox}>
								<label
									htmlFor="guests"
									aria-label="guests"
								>
									<sup>*</sup>Guests:
								</label>
								<Field
									type="number"
									id="guests"
									name="guests"
								/>
								<ErrorMessage
									name="guests"
									component="div"
									className={styles.error}
								/>
							</div>

							<button
								className={styles.formButton}
								type="submit"
								disabled={Form.isSubmitting}
							>
								Submit
							</button>
						</Form>
					</main>
				)}
			</Formik>
			<Popup
				isOpen={isPopupOpen}
				onClose={() => setPopupOpen(false)}
			/>
		</>
	);
};

export default TableBooking;
