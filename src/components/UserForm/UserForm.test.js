import {render, screen} from "@testing-library/react";
import user from "@testing-library/user-event"
import UserForm from "./UserForm";

test("It shows two inputs and a button", () => {
    render(<UserForm />);
    const inputs = screen.getAllByRole("textbox");
    const button = screen.getByRole("button");
    expect(inputs).toHaveLength(2);
    expect(button).toBeInTheDocument();
});

test("It Calls onAddUser When the Form is Submitted", async () => {
    // NOT THE BEST IMPLEMENTATION
    // const argList = [];
    // const callback = (...args) => {argList.push(args);};

    // IDEAL WAY: USING MOCK FUNTIONS
    const mock = jest.fn();

    // Try to render the component
    render(<UserForm onAddUser={mock}/>);

    // NOT THE BEST IMPLEMENTATION Find the inputs
    // const [nameInput, emailInput] = screen.getAllByRole("textbox");

    // Find the inputs
    const nameInput = screen.getByRole("textbox", {name: /name/i});
    const emailInput = screen.getByRole("textbox", {name: /email/i});

    // Simulate typing in the name
    await user.click(nameInput);
    await user.keyboard("John Doe");

    // Simulate typing in the email
    await user.click(emailInput);
    await user.keyboard("john@doe.com");

    // Find the submit button
    const button = screen.getByRole("button");
    
    // Simulate clicking the button
    await user.click(button);

    // Assert that onAddUser gets called with email and name
    //expect(argList).toHaveLength(1); // Function was called one time
    //expect(argList[0][0]).toEqual({name: "John Doe", email: "john@doe.com"});

    // Improved assertions for our mock funtion
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith({name: "John Doe", email: "john@doe.com"});
});