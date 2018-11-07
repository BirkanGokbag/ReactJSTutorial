## JSX
 JSX allows the user to write, render, and return what looks HTML and include custom xml-like tags to make code simpler to write and more concise.  Using JSX is not mandatory as the actual HTML code is generated using the createElement JavaScript function. It is up to the user to determine what to use.

#### JSX

~~~
 const header =
  <div className="header">
   <h1>Connect 4</h1>
  </div>;
~~~

#### createElement

~~~
 const header = React.createElement('div', {className: 'header'},
  React.createElement('h1',{}, 'Connect 4')
 );
~~~

 Both code blocks above generate the same thing, however the JSX approach is a little more direct. This is why many React developers choose to take advantage of JSX in their code.

 JSX is actually closer to JavaScript than it is to HTML, so there are a few things to note:
  * className is used to add css classes
  * in JSX, properties and methods are camelCase, like onClick
  * self-closing tags need to end in a slash

 JavaScript may also be used inside of JSX by using curly braces.

~~~
 const title = 'Connect 4';
 const header =
  <div className="header">
   <h1>{title}</h1>
  </div>;
~~~


## Components
 Nearly everything in React is a component.  Components are, at their core, reusable snippets of code that are usually written in separate files, exported, and then loaded into the main application to reuse as needed.  This makes the main application easier to read.

There are two main types of components in React: Class components and Simple Components

#### SIMPLE

 Simple components are light-weight components that are written as functions.  These functions return JSX code that can be easily inserted into a page. (Props can be used to pass information into these functions, as will be discussed in the next sections.)

 Here is a Simple component that will return a header.

~~~
 function Header(){
    return (
        <div className="header">
          <h1>Connect 4</h1>
        </div>
    );
}
~~~

#### CLASS

 In comparison, components with the key word "class" are custom class components.  The name of the class in React must be capitalized to differentiate the custom component from built-in HTML components and it must extend the Component class. Class components must include  and implementation of the render() method, and the included return statement can only return a single parent element.

~~~
 class Footer extends Component {
   render(){
    return (
        <div className="footer">
          <h1>An Error Occured</h1>
        </div>
    );
   }
}
~~~

 Class components are more powerful and allow for more functionality, like keeping state (as will be discussed in the next sections).  Like classes in other programming languages, there may also be other functionality inside of these class components to handle certain events, like onClick, or make changes to the state.

To use a component, insert the function/class name inside of a bracket like `<Header \>`

Components may also be nested.  The class below returns an element that has a header and footer inside of it.

~~~
class Body extends Component {
  render() {
    return (
      <div className="body">
       <Header />
       <Footer />
      </div>
    );
  }
}
~~~
