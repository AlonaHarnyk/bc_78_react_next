import { data } from "../../data/users.ts";
import UserList from "../UserList/UserList.tsx";
import Section from "../Section/Section.tsx";

function App() {
    return (
        <Section title="List of users">
            {/* <User userData={data[0]} />
      <User userData={data[1]} />
      <User userData={data[2]} />
      <User userData={data[3]} /> */}
            <UserList users={data} />
        </Section>
    );
}

export default App;
