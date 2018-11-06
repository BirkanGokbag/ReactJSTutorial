## JSX
 JSX allows the user to write, render, and return what looks html and include custom xml-like tags to make code simpler and more concise.  Using JSX is not manditory -- the actual html code is generated using createElement, so it is up to the user to determine what to use.

 #### JSX
 ```
 const header = 
  <div className="header">
   <h1>Connect 4</h1>
  </div>;
 ```
 #### createElement
 ```
 const header = React.createElement('div', {className: 'header'},
  React.createElement('h1',{}, 'Connect 4') 
 );
 ```
 Both sets of code above generate the same thing, however the JSX approach is a little more direct. This is why many React developers choose to take advantage of JSX in their code.
 
 JSX is actually closer to javascript than it is to html, so there are a few things to note:
  * className is used to add css classes
  * in JSX, properties and methods are camelCase
  * self-closing tags need to end in a slash
 
 Javascript may also be used inside of JSX by using curly braces.
 
 ```
 const title = 'Connect 4';
 const header = 
  <div className="header">
   <h1>{title}</h1>
  </div>;
 ```

   
## COMPONENTS
 Nearly everything in React is a component.  Components are usually written in separate files, exported, and then loaded into the main application to reuse as needed.  This makes the main application easier to read.
 
 `~EXAMPLE SHOW HOW TO EXPORT AND LOAD`
 
There are two main types of components in React: Class components and Simple Components
#### SIMPLE
 Simple components are light-weight components that are written as functions.  These functions return JSX code that can be easily inserted into a page.
 
 Here is a Simple component that will return a header.
 ```
 const Header = () => { 
    return (
        <div className="header">
          <h1>Connect 4</h1>
        </div>
    );
}
``` 

#### CLASS
 In comparison, components with the key word "class" are custom class components.  The name of the class in React must be capitalized to differentiate the custom component from built-in html components and it must extend the Component class. Class components must include render(), and the included return statement can only return a single parent element.
 
 `~EXAMPLE OF A CLASS COMPONENT`
 
 Class components are more powerful and allow for more functionality, like keeping state (as will be discussed in the next sections).
 
Components may be nested as well.

`~EXAMPLE OF A NESTED COMPONENTS`
 

 
