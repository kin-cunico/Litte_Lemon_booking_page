import "src/app/styles/popup.css";
import React from "react";
import Modal from "react-modal";
import Header from "./Header";

const Popup = ({ isOpen, onClose }) => {
	const handleClosePopup = () => {
		window.close();
	};
	return (
		<form className="popup">
			<Header />
			<Modal
				isOpen={isOpen}
				onRequestClose={onClose}
				ariaHideApp={false}
				className="popup"
			>
				<h2 aria-label="confirmation">Confirmation</h2>
				<p>You will receive an email with all the detais of your booking.</p>
				<p>
					If you need to cancel your booking, you can cancel via email or
					telephone at: XXXXXXXXXXX
				</p>
				<p>This window will close automatically</p>
				<button
					onClick={handleClosePopup}
					type="submit"
					className="popupClose"
				>
					Close
				</button>
			</Modal>
		</form>
	);
};

export default Popup;
