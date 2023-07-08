import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import TableBooking from "./pages/TableBooking/page";

describe("TableBooking", () => {
	it("displays validation errors when form fields are invalid", async () => {
		render(<TableBooking />);

		fireEvent.click(screen.getByText("Submit"));

		await waitFor(() => {
			expect(screen.getByText("Name is required")).toBeInTheDocument();
			expect(screen.getByText("Email is required")).toBeInTheDocument();
			expect(screen.getByText("Telephone is required")).toBeInTheDocument();
			expect(screen.getByText("Date is required")).toBeInTheDocument();
			expect(screen.getByText("Guests is required")).toBeInTheDocument();
		});
	});

	it("disables submit button when there are invalid fields", async () => {
		render(<TableBooking />);

		fireEvent.change(screen.getByLabelText("Name"), {
			target: { value: "John" },
		});
		fireEvent.change(screen.getByLabelText("Email"), {
			target: { value: "invalidemail" },
		});

		expect(screen.getByRole("button", { name: "Submit" })).toBeDisabled();
	});

	it("opens the popup after submitting the form", async () => {
		render(<TableBooking />);

		fireEvent.change(screen.getByLabelText("Name"), {
			target: { value: "John" },
		});
		fireEvent.change(screen.getByLabelText("Email"), {
			target: { value: "john@example.com" },
		});
		fireEvent.change(screen.getByLabelText("Telephone"), {
			target: { value: "1234567890" },
		});
		fireEvent.change(screen.getByLabelText("Date"), {
			target: { value: "2023-05-01" },
		});
		fireEvent.change(screen.getByLabelText("Time"), {
			target: { value: "12:00" },
		});
		fireEvent.change(screen.getByLabelText("Occasion"), {
			target: { value: "Birthday" },
		});
		fireEvent.change(screen.getByLabelText("Guests"), {
			target: { value: "4" },
		});

		fireEvent.click(screen.getByText("Submit"));

		await waitFor(() => {
			expect(screen.getByText("Confirmation")).toBeInTheDocument();
		});
	});

	it("closes the window after 10 seconds", async () => {
		render(<TableBooking />);

		fireEvent.change(screen.getByLabelText("Name"), {
			target: { value: "John" },
		});
		fireEvent.change(screen.getByLabelText("Email"), {
			target: { value: "john@example.com" },
		});
		fireEvent.change(screen.getByLabelText("Telephone"), {
			target: { value: "1234567890" },
		});
		fireEvent.change(screen.getByLabelText("Date"), {
			target: { value: "2023-05-01" },
		});
		fireEvent.change(screen.getByLabelText("Time"), {
			target: { value: "12:00" },
		});
		fireEvent.change(screen.getByLabelText("Occasion"), {
			target: { value: "Birthday" },
		});
		fireEvent.change(screen.getByLabelText("Guests"), {
			target: { value: "4" },
		});

		fireEvent.click(screen.getByText("Submit"));

		await waitFor(() => {
			expect(screen.getByText("Confirmation Message")).toBeInTheDocument();
		});

		jest.useFakeTimers();
		jest.advanceTimersByTime(10000);

		await waitFor(() => {
			expect(window.close).toHaveBeenCalled();
		});
	});
});
