/*
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding more styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="react-logo.png"` in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */

import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <div className="img-wrapper">
      <div>
      <img width={40} src="https://static.cdnlogo.com/logos/r/85/react.svg" />
        ReactFacts
        </div>
      </div>
    <h1>Fun facts about React</h1>
    <ul>
      <li> Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 200K stars on GitHub</li>
      <li>Is maintained by Meta</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
  </>
);
