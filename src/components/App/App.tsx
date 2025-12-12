import { data } from "../../data/users.ts";
import UserList from "../UserList/UserList.tsx";
import Section from "../Section/Section.tsx";
import { useState } from "react";

function App() {
    const [users, setUsers] = useState(data);

    return (
        <Section title="List of users">
            <UserList users={users} />
        </Section>
    );
}

export default App;
