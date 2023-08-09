## Interview Prepration Day - 1

### What is React and feature of React JS?
    - React.js is a popular open-source JavaScript library used to build user interfaces for web applications. It was developed by Facebook and has been widely adopted by the web development community for its simplicity, speed, and flexibility.
    - React is based on a concept called the virtual DOM, which is a lightweight representation of the actual DOM (Document Object Model).
    - When a user interacts with a React component, the virtual DOM is updated to reflect the changes, and then React efficiently updates only the necessary parts of the actual DOM to reflect those changes. This results in better performance and a smoother user experience.

- Feature of React
  - SPA 
  - Reusable Compo
  - JSX and Babel
  - V-DOM
  - One way Data Binding
  - Components based Structure 
  - Name export and default export
  - Community Support
  - Web and Mobile Support

### What is Virtual DOM?
- DOM stands for Document Object Model. Normally, whenever a user requests a webpage, the browser receives an HTML document for that page from the server. The browser then constructs a logical, tree-like structure from the HTML to show the user the requested page in the client.
  
-  The Problem in DOM
   - DOM manipulation is the heart of the modern, interactive web. Unfortunately, it is also a lot slower than most JavaScript operations. This slowness is made worse by the fact that most JavaScript frameworks update the DOM much more than they have to.
    - React contains a lightweight representation of real DOM in the memory called Virtual DOM.
    - DOM gets created whenever any React application gets loaded on the screen for the first time, Whenever React components gets mounted on the screen for the first time.
    - Now when any user makes any changes on the screen like button click, then the changes will not directly go to Real Dom.
    - So, we are having two virtual doms, one VDOM gets created at the time of mounting of react component so it is a copy of your real DOM.
    - Another VDOM is the dom which contains the new changes, updated state variables values.
    - Now these two virtual DOMs will get compared with each other and will check for the new changes this complete procedure is known as diffing algorithm.
    - Now the new changes will be updated in your Real DOM, this procedure is known as Recoinciliation This makes a big difference! React can update only the necessary parts of the DOM. React’s reputation for performance comes largely from this innovation.

### What is SPA?
- React is a popular JavaScript library for building SPAs. React allows developers to create reusable UI components that can be composed together to create complex user interfaces. React components are declarative, meaning they describe what should be rendered on the page rather than how it should be rendered. This makes it easier to reason about the code and to make changes without introducing bugs.
- To handle server requests, a React SPA typically uses an API (Application Programming Interface) to communicate with the server. The API provides a set of endpoints that the client-side code can use to fetch or update data. The client-side code sends requests to the server using the Fetch API or other libraries such as Axios or jQuery. When the server responds, the client-side code updates the state of the application and rerenders the UI as needed.
- One advantage of using a React SPA is that it can provide a smoother and more responsive user experience compared to traditional web applications, since the page does not need to reload every time the user interacts with it. However, SPAs can be more complex to build and maintain, since they require more client-side code and may require additional server-side infrastructure to support the API.

### What is the difference between function and class based components?

|      | Function Components| Class Components|
| :----| :------------------| :---------------|
|Definition | Define by JS Function | Define the JS Class|
|State-Management| Use useState and useEffect hook to manage state and life cycle methods | use state and lifecycle methods inside the class|
Props| Passed as an argument to the function components | Pass as a property to the class components|
Life-cycle methods | useEffect hooks manage components lifecycle | Has access to lifecycle methods such as componentDidMount and componentDidUpdate|
Performance | Generally faster because they do not have to create an instance of the component | Slightly slower because they have to create an instance of the component|
Syntax | 	Simpler and easier to read and understand | More verbose and complex |
Code-Reusability | Can be easily reused in other components | Cannot be easily reused in other components
Testing | 	Easier to test because they are pure functions | More difficult to test because they have state and lifecycle methods|
