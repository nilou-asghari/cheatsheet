import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"; // Corrected 'Tabpanel' to 'TabPanel'
import "react-tabs/style/react-tabs.css";
import HTML from "./HTML";
import GitTab from "./GitTab";
import JavaSCheat from "./JavaSCheat";

export default function MyTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick= (index) => {
    setActiveTab(index);

  };
  return (
    <div className="my-tabs">

    <Tabs>
      <TabList>
        <Tab>HTML</Tab>
        <Tab>Git</Tab>
        <Tab>JavaScript</Tab>
      </TabList>

      <TabPanel>
        <div className="tab-content">
        <h2>Starting An HTML Project</h2>
        <HTML/>
        </div>
        {/* import git content here from its component */}
      </TabPanel>
      <TabPanel>
        <h2>Starting A Git Project</h2>
        <GitTab/>
        {/* import html content here */}
      </TabPanel>
      <TabPanel>
        <h2>Starting Javascript</h2>
        <JavaSCheat/>
        {/* import javascript content here from another component*/}
      </TabPanel>
    </Tabs> 
    </div>
  );
}
