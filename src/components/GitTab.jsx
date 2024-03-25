import React from "react";
import Prism from "prismjs";
import "../prism.css";
import Styles from "./GitTab.module.css";

export default function GitTab() {
  Prism.highlightAll();
  return (
    <div className={Styles.container}>
      <ol>
        <pre>
          <code className="language-git">
            {`
               git init
              `}
          </code>
        </pre>
      </ol>
      <ol>
        <pre>
          <code className="language-git">{`git clone [url]`}</code>
        </pre>
      </ol>
    </div>
  );
}
