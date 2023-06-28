import styles from "../styles/TableBooking.module.css";
import { Button } from "@chakra-ui/react";

export default function updateData() {
	const submitAPI = (formData) => {
		const res = submitAPI(formData);
		console.log(formData);

		if (res) {
			return (
				<main className={styles.booked}>
					<h2>Booking successful</h2>
					<p>
						You will receive an email with all the details regarding your
						booking!
					</p>
					<Button>OK</Button>
				</main>
			);
		} else {
			<p>Sending data...</p>;
		}
	};

	return;
}
