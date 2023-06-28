import { render, fireEvent, screen } from "@testing-library/react";
import TableBooking from "./pages/TableBooking.jsx";

// TODO BUILD TESTS FOR THE COMPONENTS

describe("Table Booking Form", () => {
	test("submission is disabled if all required fields are not filled", () => {
		const handleSubmit = jest.fn();
		render(<TableBooking onSubmit={handleSubmit} />);

		const name = screen.getByTestId("name");
		fireEvent.change(name, { target: { value: "k" } });

		const submitButton = screen.getByTestId("btn");
		fireEvent.click(submitButton);

		expect(handleSubmit).not.toHaveBeenCalled();
		expect(submitButton).toHaveAttribute("disabled");
	});
});
