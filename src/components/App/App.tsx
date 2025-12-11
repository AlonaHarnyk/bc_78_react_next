import { data } from "../../data/users.ts";
import UserList from "../UserList/UserList.tsx";

function App() {
  return (
    <div>
      {/* <User userData={data[0]} />
      <User userData={data[1]} />
      <User userData={data[2]} />
      <User userData={data[3]} /> */}
      <UserList users={data} />
    </div>
  );
}

export default App;
