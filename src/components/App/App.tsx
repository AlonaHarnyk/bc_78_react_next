import { useState } from "react";
import ContactsTab from "../ContactsTab/ContactsTab";
import UsersTab from "../UsersTab/UsersTab";

enum Tab {
  UsersTab,
  ContactsTab,
}

function App() {
  const [activeTab, setActiveTab] = useState(Tab.ContactsTab);
  return (
    <>
      <ul>
        <li>
          <button onClick={() => setActiveTab(Tab.ContactsTab)}>
            Contacts tab
          </button>
        </li>
        <li>
          <button onClick={() => setActiveTab(Tab.UsersTab)}>Users tab</button>
        </li>
      </ul>
      {activeTab === Tab.ContactsTab && <ContactsTab />}
      {activeTab === Tab.UsersTab && <UsersTab />}
    </>
  );
}

export default App;
