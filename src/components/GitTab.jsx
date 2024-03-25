import React from "react";
import { useEffect } from "react";
import Prism from "prismjs";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "../prism.css";
import Styles from "./GitTab.module.css";

export default function GitTab() {
  
  useEffect(()=> {
    Prism.highlightAll();
},[])
  return (
    <div className={Styles.container}>
      <ol>
        <pre>
      <code className="language-html">{`git init`}</code>

        </pre>
      </ol>
  
      <ol>
        <pre>
          <code className="language-html">{`git clone [url]`}</code>
        </pre>
      </ol>
    </div>
  );
}
