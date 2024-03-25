import React from "react";
import Prism from "prismjs";
import "../prism.css";

export default function GitTab() {
  return (
    <div>
      <pre>
        <code>
          {`
            onSubmit(e) {
              e.preventDefault();
              const job = {
                title: 'Developer',
                company: 'Facebook' 
              };
              // Do something with the job object
            }
          `}
        </code>
      </pre>
    </div>
  );
}
