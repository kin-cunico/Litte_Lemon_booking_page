import styles from "../styles/TableBooking.module.css";

export default function PopUp(props) {
	return props.trigger ? (
		<div className={styles.confirmBooking}>{props.children}</div>
	) : (
		""
	);
}
