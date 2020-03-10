# ASSESSMENT 2: Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

1. What does CRUD stand for?

  Your answer: Create, Read, Upload, Delete

  Researched answer: "In computer programming, create, read, update, and delete (CRUD) are the four basic functions of persistent storage."



2. What are the 5 HTTP verbs?

  Your answer: put, patch, parse(?), get, delete

  Researched answer: "The primary or most-commonly-used HTTP verbs (or methods, as they are properly called) are POST, GET, PUT, PATCH, and DELETE. "



3. When creating a basic (stateless) class component in React, what are the necessary elements needed to render "Hello World" on the page?

  Your answer:

  class App extends Component {
    render() {
      return (
          <p>Hello World</p>
        )
    }
  }


  Researched answer:

  same as above


4. What is JSX?

  Your answer: a special style of syntax used in React ; a combination of HTML and Javascript syntax (JS syntax is called inside '{}')

  Researched answer:
  "JSX is an XML/HTML-like syntax used by React that extends ECMAScript so that XML/HTML-like text can co-exist with JavaScript/React code"


5. What is the difference between React state and props?

  Your answer: state values can be called on the same page whereas props can be called onto different components existing on different pages (mainly from parent to child components)

  Researched answer:
  "In a React component, props are variables passed to it by its parent component. State on the other hand is still variables, but directly initialized and managed by the component. The state can be initialized by props."


6. STRETCH: What is hoisting in JavaScript?

  Your answer:
   bringing up the saved prop value from a child component back to a parent component.

  Researched answer: "Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. Inevitably, this means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local."



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

- React lifecycle methods:
Each component has several “lifecycle methods” that you can override to run code at particular times in the process.

(Look at 'React lifecycle method.png' file.)

#Mounting
These methods are called in the following order when an instance of a component is being created and inserted into the DOM:

- constructor()
- static getDerivedStateFromProps()
- render()
- componentDidMount()

#Updating
An update can be caused by changes to props or state. These methods are called in the following order when a component is being re-rendered:

static getDerivedStateFromProps()
shouldComponentUpdate()
render()
getSnapshotBeforeUpdate()
componentDidUpdate()

#Unmounting
This method is called when a component is being removed from the DOM:

componentWillUnmount()

#Error Handling
These methods are called when there is an error during rendering, in a lifecycle method, or in the constructor of any child component.

static getDerivedStateFromError()
componentDidCatch()



- API:
"An application programming interface is an interface or communication protocol between different parts of a computer program intended to simplify the implementation and maintenance of software. An API may be for a web-based system, operating system, database system, computer hardware, or software library. "



- event.preventDefault()
The Event interface's preventDefault() method tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be. The event continues to propagate as usual, unless one of its event listeners calls stopPropagation() or stopImmediatePropagation(), either of which terminates propagation at once.

As noted below, calling preventDefault() for a non-cancelable event, such as one dispatched via EventTarget.dispatchEvent(), without specifying cancelable: true  has no effect.


- DOM events

DOM (Document Object Model) events are actions that occurs as a result of the user action or as result of state change of the elements of a DOM tree. Client-side scripting languages like JavaScript, JScript, ECMAScript, VBScript, and Java can register various event handlers or listeners on the element nodes inside a DOM tree, such as in HTML, XHTML, XUL, and SVG documents.

Examples of HTML DOM events:

When a user clicks the mouse
When a web page has loaded
When an image has been loaded
When the mouse moves over an element
When an input field is changed
When an HTML form is submitted
When a user presses a key[1]
