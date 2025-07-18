import React from "react";
import { logout } from "./firebase";
// import { Tabs } from '@radix-ui/react-tabs';
import './Dashboard.css';
import * as Tabs from '@radix-ui/react-tabs';
import { Box } from "@radix-ui/themes";
import GenerateOutput from "./components/GenerateOutput";
import UserSettings from "./components/UserSettings";
import ViewHistory from "./components/ViewHistory";


export default function Dashboard({user}) {
    return (
    <div className="App">
      <div className="Content">
<Tabs.Root className="DashboardTabs" defaultValue="generate">
	<Tabs.List className="DashboardTabsList">
		<Tabs.Trigger className="DashboardTabsTrigger" value="generate">Generate Output</Tabs.Trigger>
		<Tabs.Trigger className="DashboardTabsTrigger" value="history">View History</Tabs.Trigger>
		<Tabs.Trigger className="DashboardTabsTrigger" value="settings">User Settings</Tabs.Trigger>
    {/* <div className="user-area">
    <img src={user.photoURL} alt="User avatar" className="avatar" />
    <button onClick={logout} className="logout-button">Log Out</button>
  </div> */}
	</Tabs.List>
	<Box pt="3">
		<Tabs.Content className="DashboardTabsContent" value="generate">
    <GenerateOutput />
		</Tabs.Content>

		<Tabs.Content className="DashboardTabsContent" value="history">
    <ViewHistory />
		</Tabs.Content>

		<Tabs.Content className="DashboardTabsContent" value="settings">
    <UserSettings />
		</Tabs.Content>
	</Box>
</Tabs.Root>
</div>
</div>

    )
}