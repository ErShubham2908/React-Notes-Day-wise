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

## Day - 2

###  Difference b/w Stateful and stateless Component?

|       |Stateful | Stateless|
| :-----| :-------| :--------|
|1. | Stores info about the component's state change memory| Calculate the internal state of the components|
|2. |Authority to change state | Do not Authority to change state |
|3. | Manage React lifecycle method | Not Manage react lifecycle method|
|4. |contains the knowledge of past, current, and possible further changes in state. | Contains no knowledge of past, current, and possible further state changes.|
|5. |Class components is stateful compo | Function components is stateless compo|

### What does mean by state and its use in react?

- State is a crucial concept in React because it enables components to respond to user input, external events, or changes in data. It helps create dynamic and responsive user interfaces.
- State - The state of a component is an object that holds some information that may change over the lifetime of the component
- tate is typically used to handle user input, control component behavior, and store component-specific data.
- it is a built-in object that is used to contain data or information about the component
- State can be changed by using the **setState()** method, which is provided by the React framework. When a component's state changes, React automatically re-renders the component with the updated information.

### What is JSX and why do we use it instead of js?

- **JSX** is a syntax extension for JavaScript that allows developers to write HTML-like code within their JavaScript code. It was developed by Facebook as part of the React library and is used extensively in React applications.
- **Bebal** - Babel is a JavaScript compiler that allows developers to use modern JavaScript syntax and features while still supporting older browsers that do not support these features. Babel can compile JSX code into plain JavaScript code that can be run in any modern web browser.
- Bebel is transpiler that is help to convert the Higher level js  in to browser compatible js.

### What is package.json?
- The package.json file is a crucial part of the project structure. It is a JSON (JavaScript Object Notation) file that contains metadata about the project and its dependencies.
1. **Project Information:** The package.json file contains general information about the project, such as the project's name, version, description, author, license, and more. This information helps others understand the purpose and details of your project.

2. **Dependencies:** One of the most important functions of package.json is to list the dependencies that your project relies on. These dependencies can be libraries, frameworks, or other code modules that your project uses. They are crucial for your project to function properly.

3. **Development Dependencies:** In addition to regular dependencies, you can also specify development dependencies in the devDependencies section. These dependencies are used during development but are not required for the actual production version of your application.

4. **Scripts:** The scripts section allows you to define custom commands that can be run using the npm or yarn command line tools. These scripts can automate various tasks like starting the development server, building the project, running tests, and more. Version Control and Reproducibility: By specifying the exact versions of dependencies

5. **Version Control and Reproducibility:** By specifying the exact versions of dependencies your project uses, the package.json file helps ensure that your project remains consistent and reproducible across different environments and for different users.

6. **Package Management:** The package.json file, along with the node_modules directory (created when you install dependencies), allows you to manage your project's dependencies and easily share your project with others.

### What is the package name you are using for routing?
- name of the package is React Router DOM.

### Implement Routes / Dynamic Route?

- Routes is a third party lib. so we need to install by using **npm i/install react-router-dom** package.
- All route components will wrape inside **BrowserRouter**.
- BrowserROuter - it is a component provided by React Router, a library for handling routing in React applications. It uses the HTML5 History API to manage the navigation state of your application. **BrowserRouter** should be placed at the top level of your component hierarchy to enable routing in your application.
- Routes - In the context of React Router, a Route is a declarative way to render UI components based on the current URL path. You define a Route component with a specific path prop and the component that should be rendered when the URL matches that path.
- Route -  A Route component in React Router is responsible for rendering a UI component when the URL matches the specified path. It takes a path prop to define the URL pattern to match and a component prop that determines what component to render when the URL matches the path.
- Link - The **Link** component in React Router is used to create links within your application that allow users to navigate between different routes. It is a replacement for the standard HTML < a > tag, but it provides a more efficient way to handle navigation without causing a full page reload.

- NavLink - The **NavLink** component is similar to Link, but it's used for navigation with additional features, such as styling the link differently when it matches the current URL. It adds an active class to the link when its to prop matches the current URL, making it easier to apply styles to the active link.

### How do you pass data from parent to child?
- 