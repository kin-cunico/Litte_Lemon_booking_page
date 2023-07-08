import { useState, useEffect } from "react";
import { fetchAPI, submitAPI } from "../mockServer/tableData";

import styles from "../styles/TableBooking.module.css";

export default function TimePicker() {
	const [availabletimes, setAvailabletimes] = useState([]);
	const fetchData = (availabletimes) => {
		const res = fetchAPI(new Date());
		return res.length > 0 ? setAvailabletimes(res) : availabletimes;
	};

	// useEffect to call fecth
	useEffect(() => {
		fetchData();
	}, []);
	const [time, setTime] = useState("1");
	const listTimes = availabletimes.map((availableTime) => {
		const avTime = `${availableTime}`;

		return (
			<option
				value={avTime}
				key={avTime}
			>
				{avTime}
			</option>
		);
	});

	const [errorTime, setErrorTime] = useState("");

	const handleTime = (e) => {
		console.log(time);
		e.preventDefault();
		if (time === "1") {
			setErrorTime(<p className={styles.error}>Please select a time.</p>);
		} else {
			setErrorTime("");
		}
	};

	return (
		<>
			{availabletimes.length > 0 ? (
				<>
					<select
						onBlur={handleTime}
						onChange={(e) => setTime(e.target.value)}
						required
					>
						<option
							defaultValue={"1"}
							key={1}
						>
							Select:
						</option>
						{listTimes}
					</select>
					{errorTime}
				</>
			) : (
				<p>Data pending...</p>
			)}
		</>
	);
}
