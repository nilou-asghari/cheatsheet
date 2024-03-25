import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"; // Corrected 'Tabpanel' to 'TabPanel'
import "react-tabs/style/react-tabs.css";

export default function MyTabs() {
  return (
    <Tabs>
      <TabList>
        <Tab>HTML</Tab>
        <Tab>Git</Tab>
        <Tab>JavaScript</Tab>
      </TabList>

      <TabPanel>
        <h2>Starting A Git Project</h2>
        {/* import git content here from its component */}
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
      </TabPanel>
      <TabPanel>
        <h2>Starting HTML Project</h2>
        {/* import html content here */}
      </TabPanel>
      <TabPanel>
        <h2>Starting Javascript</h2>
        {/* import javascript content here from another component*/}
      </TabPanel>
    </Tabs>
  );
}
