import React from "react";
import { useEffect } from "react";
import Prism from "prismjs";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "../prism.css";
import Styles from "./HTML.module.css";


export default function HTML() {
  
  useEffect(()=> {
    Prism.highlightAll();
},[])

  return (
    
    <div className={Styles.container}>
      <ol>
       <h4>HTML Declaration</h4>
        <p>All HTM documents should start with the declaration: <br /><h4>!DOCTYPE html</h4></p>
        <pre>
      <code className="language-html">{`<!DOCTYPE html>
<html>
<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>
</html> `}</code>
            
      
        </pre>
      </ol>
  
      <ol>
        <h4>HTML Elements</h4>
        <p>Elements are all your start and end tags</p>
        <pre>                                       
          <code className="language-html">{`Example: <tagstart> YOUR CONTENT </tagend>`}</code>
        </pre>
      </ol>

      <ol>
        <h4>HTML Attributes</h4>
        <p>Attributes help to provide information about used *ELEMENTs*</p>
        <pre> 
            <h4>Example</h4>                                      
          <code className="language-html">{`<a href="https://www.w3schools.com">Visit W3Schools</a>`} </code>
            <pre>
               <h4>The 'a' tag first defines the link. The "href" here is an attribute that specifies the URL where a user should go to.</h4>
            </pre>
        </pre>
        <div>
            Another example
        </div>
        <pre>
        <code className="language-html">{`<img src="img_girl.jpg">
`} </code>
 <h4>The src attribute specifies the path to the image to be displayed.</h4>

        </pre>
      </ol>
    </div>
  );
}
