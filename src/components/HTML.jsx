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
    <h3>A Simple HTML Document</h3>

    <p>Example</p>
    <div>
      <pre className="copy-to-clipboard">
        <code className="language-JavaScript">{`<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>
</html>`}</code>
      </pre>
    </div>
    <h3>HTML Elements</h3>

    <p>The HTML element is everything from the start tag to the end tag:</p>
    <div>
      <pre className="copy-to-clipboard">
        <code className="language-JavaScript">{`<tagname>Content goes here...</tagname>`}</code>
      </pre>
    </div>
    <p>Empty HTML Elements</p>
    <div>
      <pre className="copy-to-clipboard">
        <p>HTML elements with no content are called empty elements. <br />The tag defines a line break, and is an empty element without a closing tag:</p>
        <code className="language-JavaScript">{`Example: <p>This is a <br> paragraph with a line break.</p>
`}</code>
      </pre>
    </div>
    <p>HTML Formatting Elements</p>
    <div>
      <pre className="copy-to-clipboard">
        <code className="language-JavaScript">{`<b> - Bold text
<strong> - Important text
<i> - Italic text
<em> - Emphasized text
<mark> - Marked text
<small> - Smaller text
<del> - Deleted text
<ins> - Inserted text
<sub> - Subscript text
<sup> - Superscript text`}</code>
      </pre>
    </div>
    <h3>HTML Colors</h3>

    <p>Example</p>
    <div>
      <pre className="copy-to-clipboard">
        <code className="language-JavaScript">{`
<h1 style="background-color:DodgerBlue;">Hello World</h1>
<p style="background-color:Tomato;">Lorem ipsum...</p>`}</code>
      </pre>
    </div>
    <p>Border Color</p>
    <div>
      <pre className="copy-to-clipboard">
        <code className="language-JavaScript">{`<h1 style="border:2px solid Tomato;">Hello World</h1>
<h1 style="border:2px solid DodgerBlue;">Hello World</h1>
<h1 style="border:2px solid Violet;">Hello World</h1>`}</code>
      </pre>
    </div>
    <h3>HTML Links - Hyperlinks</h3>

    <p>The HTML "a" tag defines a hyperlink. It has the following syntax:</p>
    <div>
      <pre className="copy-to-clipboard">
        <code className="language-JavaScript">{`<a href="url">link text</a>`}</code>
      </pre>
    </div>
    <p>This example shows how to create a link to W3Schools.com:</p>
    <div>
      <pre className="copy-to-clipboard">
        <code className="language-JavaScript">{`<a href="https://www.w3schools.com/">Visit W3Schools.com!</a>`}</code>
      </pre>
    </div>
    <p>HTML Images Syntax</p>
    <p>src -specifies the path to the image</p>
    <p>alt - specifies an alternative text for the image</p>
    <div>
      <pre className="copy-to-clipboard">
        <code className="language-JavaScript">{`<img src="url" alt="alternatetext">
`}</code>
      </pre>
    </div>
   
  
   
  </div>
);
}

    
    // <div className={Styles.container}>
    //   <ol>
    //    <h4>HTML Declaration</h4>
        // <p>All HTM documents should start with the declaration: <br /><h4>!DOCTYPE html</h4></p>
        // <pre>
    //   <code className="language-html">{`<!DOCTYPE html>
{/* <html> */}
{/* <body> */}

{/* <h1>My First Heading</h1> */}
{/* <p>My first paragraph.</p> */}

// </body>
// </html> `}</code>
            
      
        // </pre>
    //   </ol>
  
    //   <ol>
        {/* <h3>HTML Elements</h3> */}
        // <p>Elements are all your start and end tags</p>
        // <pre>                                       
          {/* <code className="language-html">{`Example: <tagstart> YOUR CONTENT </tagend>`}</code> */}
        // </pre>
    //   </ol>

    //   <ol>
        // <h4>HTML Attributes</h4>
        // <p>Attributes help to provide information about used *ELEMENTs*</p>
        // <pre> 
            // <h4>Example</h4>                                      
        //   <code className="language-html">{`<a href="https://www.w3schools.com">Visit W3Schools</a>`} </code>
            // <pre>
            //    <h4>The 'a' tag first defines the link. The "href" here is an attribute that specifies the URL where a user should go to.</h4>
            // </pre>
        // </pre>
        // <div>
            // Another example
        // </div>
        // <pre>
        // <code className="language-html">{`<img src="img_girl.jpg">
// `} </code>
//  <h4>The src attribute specifies the path to the image to be displayed.</h4>

        // </pre>
    //   </ol>
    // </div>
//   );
// }
