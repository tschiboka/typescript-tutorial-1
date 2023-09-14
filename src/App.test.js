import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "./App";

test("Can Receive a New User and Show it on a List", async () => {
    render(<App />);

    // Type in Name
    const nameInput = screen.getByRole("textbox", { name: /name/i});
    await user.click(nameInput);
    await user.keyboard("John Doe");
    
    // Type in Email
    const emailInput = screen.getByRole("textbox", { name: /email/i});
    await user.click(emailInput);
    await user.keyboard("john@doe.com")

    // Submit New User
    const button = screen.getByRole("button");
    await button.click(button);

    // Find User Name
    const nameCell = screen.getByRole("cell", { name: /john doe/i });
    expect(nameCell).toBeInTheDocument();

    // Find User Email
    const emailCell = screen.getByRole("cell", { name: /john@doe.com/i });
    expect(emailCell).toBeInTheDocument();
});