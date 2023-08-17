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
- Implemenet Props

### Different b/w React and React Native?

|     | React JS | React Native |
|:---:|:--------:|--------------|
|1.   | JS Library | Mobile Framework|
|2.   |Best instrument for building complex highly functional web applications. | Best instrument for a native look and feel in cross-platform mobile applications.|
|3.   | React.JS implement V-DOM for browser code rendering. |React Native implements native APIs for mobile components rendering. |
|4.   |React.JS is implemented for web (Browser) platforms. | it's more difficult to work with React Native across different platforms. |
|5.   |in React.JS, software engineers can create robust animation with the help of CSS. | To implement animation in react native, Software engineers have to use API.|

### How do you switch one component to another, Conditional Rendering?
 ---
### Question Time 
#### need to create three compo, one compo contain 'Welcome to Prepbytes", second compo - 'Welcome to EA23 Session', third compo - contain button, and click on button it should be toggle the compo1 and compo2.

---

### Why do we need keys in react less?
- In React, "keys" serve as a way to uniquely identify and track elements within a list of items that are being rendered. When you render a dynamic list of items using React, such as in a loop or a mapping function, each item in the list needs a way to be uniquely identified by React so that it can efficiently update and manage the components in the Virtual DOM. Keys help React optimize the process of updating the UI when items are added, removed, or rearranged in the list.

1. Efficient Reconciliation
2. Preserving State
3. Performance

### Difference between Axios and fetch?
|   | Axios | Fetch   |
| :---| :-----| :-----|
|1. | Axios is 3rd party library | Builtin API|
|2. | Faster | Little bit slower |
|3. | Easier to handle the error | Harder to handle the error|
|4. | Automatically transform Data into JSON | Have to manually dtransform data | 
|5. | Need to install form npm (npm i / install axios) | No need to install externally|

## Day - 4

### What are React Life cycles Explain each one with Example?

- In class components, React provides a set of lifecycle methods that allow you to control and manipulate the rendering and behavior of components as they mount, update, and unmount. The React lifecycle consists of three main phases: Mounting, Updating, and Unmounting.
1. Mounting Phanse: 
	- These methods are called when an instance of a component is being created and inserted into the DOM.
	- **constructor():**  This is the first method that is called when a component is instantiated. It's used to initialize the component's state and bind event handlers.
	- **render():** This method returns the JSX representation of the component. It's required and must be a pure function that doesn't modify the component state. 
	- **componentDidMount():** This method is called after the component has been rendered into the DOM. It's commonly used to fetch data from APIs or set up timers.
  
2. **Updating Phase:** These methods are called when a component is being re-rendered due to changes in its state or props.
	- **shouldComponentUpdate(nextProps, nextState):** This method is used to optimize performance by allowing you to control whether a component should re-render or not. It receives the next props and states as arguments and should return a boolean value.
	- **componentDidUpdate(prevProps, prevState):** This method is called after the component has been re-rendered. It's commonly used to perform actions after an update, like fetching new data based on new props.

3. **Unmounting Phase:** This method is called when a component is being removed from the DOM.
	- **componentWillUnmount():** This method is called before a component is removed from the DOM. It's used to perform cleanup tasks like canceling timers and removing event listeners.
  
### What is Props Drilling Concept ?What is State Uplifting ?

- In a React component hierarchy, props can be passed down from a parent component to its child component, and then to its child's child component, and so on. When a component deep down in the hierarchy needs to access data or functionality that is only available in a higher-level component, the data or functionality must be passed down through all the intermediate components via props. This process is known as "props drilling".
- State uplifting - Often there will be a need to share state between different components. The common approach to share state between two components is to move the state to common parent of the two components. This approach is called as lifting state up in React.js


## Hooks

### basic Hooks

1. useState()
2. useEffect()
3. useContext()

### Additional Hooks
1. useReducer()
2. useRef()
3. useMemo()
4. useCallback()

### Router package Hooks
1. useParams()
2. useLocation()
3. useNaviator()

## useState - 
- It is a hook which we used in functional component and it is used for manage the state variable within the component.
- usestate hooks allows us to track state in a functional component.
- State generally refers to data or properties that need to be tracking in an application.
- usestate can be used to toggle between 2 values, usually true and false.
- need to import useState from 'react' package.
  - const [state variable, setter function] = useState(initial value of this state variable);
  - const [count, setCount] = useState(0);
  - count is a state variable and setCount a function to change the state variable.

## useEffect - 
- useEffect is a hook in React that allows functional components to perform side effects during their lifecycle
- It's a replacement for the lifecycle methods in class components.
 
-  The Effect Hook allows us to perform side effects (an action) in the function components. It does not use components lifecycle methods which are available in class components.
  - Mounting phase
  - updating phase ()
  - unmounting phase (cleanup function)
- In other words, useEffects Hooks are equivalent to componentDidMount(), componentDidUpdate(), and componentWillUnmount() lifecycle methods.
- useEffect allows you to run side effects after the component has rendered, and also provides a way to clean up any side effects when the component is unmounted or updated. Here is an example of how to use useEffect:
- Side effects have common features which the most web applications need to perform, such as:
- Updating the DOM, Fetching and consuming data from a server API, subscribing to events.
- useEffect accepts 2 arguments (callback,[dependency])

## useReducer Hooks
- It does very similiar to setState, It's a different way to manage state using Redux Pattern. Instead of updating the state directly, we dispatch actions, that go to a reducer function, and this function figure out, how to compute the next state.
- Syntax
  - **const [state, dispatch] = useReducer(reducer, initialstate)**
  - state - Name of your state variable
  - dispatch - if i want to change the state variable, we need dispatch function. has one parameter **action**.
  - reducer - it is a function, that accept **currect state** and **action** we want to perform.
  - initialstate - The initial value of state.

### useMemo
- useMemo is a React hook that allows you to memoize the result of a function, and recompute the result only when the dependencies of the function have changed.
- In simple terms, useMemo can be used to optimize the performance of your React components by avoiding unnecessary re-renders.
- useMemo is a React hook that can be used to memoize the result of a function and optimize the performance of your components. By avoiding unnecessary re-renders, you can create faster and more efficient React applications.

### useRef Hooks
- useRef is a hook in React that provides a way to create a mutable reference to a DOM element or to persist values across renders without causing re-renders.
- In React, the useRef hook is used to access and interact with DOM elements or to store mutable values that won't trigger a re-render when they change.
- useRef is a React hook that allows you to create a mutable reference to an element or value, which persists across re-renders of your component.
- It returns an object with a single property, current, which initially holds the value passed as argument (or undefined if no argument is provided). We can modify the current property without triggering a re-render of the component. This makes it useful for managing mutable values and for accessing the underlying DOM elements.

### Different between callback and useCallback Hooks?
- callback : A callback function in React is a function that you can pass as a prop to child components, allowing those child components to communicate back to the parent component. This is a general concept and not specific to hooks. Callback functions are often used to achieve component interaction and data flow in React applications. They can be used to handle events or pass data between components, especially when using props.
- useCallback Hooks : useCallback is a hook provided by React that is used to optimize the performance of your functional components. It's specifically designed to address the issue of unnecessary re-rendering in cases where the dependencies of a function (usually event handlers) change, but you want to avoid recreating the function itself.

### Difference between useEffect and useContext ?
- **useEffect** : useEffect is used to handle side effects in functional components. Side effects are actions that are not directly related to rendering the component, such as data fetching, subscribing to a WebSocket, manipulating the DOM, etc. This hook allows you to perform these side effects after the component has rendered or when certain dependencies have changed.
- **useContext** : useContext is used to consume data from the React context API within functional components. Context provides a way to share data, like a global state, between components without passing props through each level of the component tree. The useContext hook allows you to access the value of a context directly within a component.
- so useEffect is for managing side effects and performing actions after rendering. and useContext is for consuming data fron the context API and accessing global state within a component.

### High Order Component in react js?
- A Higher-Order Component (HOC) is a pattern used in React to enhance or modify the behavior of components by wrapping them in a higher-order function. It's a way to reuse component logic and add additional functionality without altering the original component's code.

### What is an event in react?
- An event is an action or occurrence that takes place within a component, typically triggered by user interaction or system events like timers. Events in React are similar to events in traditional web development but are implemented and handled in a slightly different way due to React's virtual DOM and component-based architecture.
- An event is a mechanism that allows you to respond to user interactions such as clicks, key presses, form submissions, and more.
- An event in React is an action that can be triggered by a user or a system-generated event.
  1. Event Name : 
     1. onClick
     2. mouseOver
     3. event.preventDefault();
     4. onChange
     5. keydown
  2. Event Handling
  3. Event Binding
  4. Event Object
  5. Updating state

### Do you prefer function-based or class component and why ?
- Self Answered

### What do you know about NPM?
- NPM (Node package Manager) - NPM (Node Package Manager) is a package manager for JavaScript programming language. It's primarily used to manage and distribute open-source JavaScript packages and libraries. NPM allows developers to easily install, update, and manage various packages that can be used in their projects, making it a crucial tool in the Node.js ecosystem.


  1.  Package Management
  2.  Dependency Management
  3.  Package.json
  4.  Global and Local Installation
  5.  Security
- NPX (Node package execute)