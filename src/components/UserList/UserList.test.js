import { render, screen, within } from "@testing-library/react";
import UserList from "./UserList";

const users = [
    { name: "John Doe", email: "john@doe.com" },
    { name: "Jane Doe", email: "jane@doe.com" },
];

function renderComponent() {
    render(<UserList users={users} />);      // Render User List Component
}

test("Render One Row Per User, Unpreferred Version", () => {
    const rows = screen.getAllByRole("row"); // Finding All Rows in the Table Ambiguous
    expect(rows).toHaveLength(3);            // Add ONE for Header             
});


test("Render One Row Per User, Acceptable Version", () => {
    render(<UserList users={users} />);              // Render User List Component    
    const rows = within(screen.getByTestId("users")) // Get Elements with TBody's Test ID
                 .getAllByRole("row");               // Get the Rows
    expect(rows).toHaveLength(2);                    // Only TBody Rows Length Here 
});

test("Render One Row Per User, Ideal Version", () => {
    const { container } = render(<UserList users={users} />); // Produce a Contatier
    // eslint-disable-next-line
    const rows = container.querySelectorAll("tbody tr");      // Traditional HTML Query
    expect(rows).toHaveLength(2);                             // Only TBody Rows Length Here
});


test("Render Email and Name for Each User", () => {
    render(<UserList users={users} />);                                // Render User List Component    
    users.forEach(user => {                                            // Iterate Users
        const nameCell = screen.getByRole("cell", { name: user.name }); // Get Name Cell
        const emailCell = screen.getByRole("cell", { name: user.email }); // Get Email Cell
        expect(nameCell).toBeInTheDocument();
        expect(emailCell).toBeInTheDocument();
    });
});