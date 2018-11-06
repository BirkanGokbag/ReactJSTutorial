## Props, State, and Component

React.js allows reusable code to be created that can be applied to anywhere, partial code that can be applied to anywhere specified.  There are three data structures that allow React.js to do this:

⋅⋅* Component
⋅⋅* Prop
⋅⋅* State

## Component
**We already have a section that discusses class and simple components, if there is anything here that is not discussed in those sections, we should probably move it there, otherwise I don't think we need this section here**
React.Component is a type of class that accepts inputs from the user that returns the way html should be presented after the input. An example is located right below, where Hello class returns a h1 tag within div tag that displays "Hi!" after it has been called.

`class Hello extends React.Component {
   render() {
      return (
         <div>
            <h1>Hi!</h1>
         </div>
      );
   }
}`

Another example is an inline initialization of a component function that is later then given properties.

`const myFunc = () => <h1>Hello Everyone</h1>;
ReactDOM.render(
    <myFunc />,
    document.getElementById('first')
);`

The render function of ReactDOM allows React.js to change the UI for the user, such as changing the element with id "first" in this particular example.

**I would add a little more explanation about these two sections below, instead of just saying what each thing is, show/tell how you would use it, and give the user a little more direction. Just by reading what's below, I'm not really sure how I would go about using these two things**
## Prop

Prop stands for property, builds up on the component component class. Prop allows specified properties to be passed into the component for use.

The arguments are passed into their respective functions as a property. The syntax for passing properties into function1, for example, is written as:

const example = <function1 name = "john">;

"example" is a constant variable that is assigned to this so that React can access this element and render it to a place. This is done by the render function within ReactDOM, which looks like something like this:

ReactDOM.render(
  element,
  document.getElementById('second')
);

In this case, the element variable is rendered to the html element with the id "second". If we populate function "function1" to return a h1 tag with the contents "Hello, (name and last name from prop)", then all of this can be written as:

function function1(props){
  return <h1>Hello, {props.name} </h1>;
}

const example = <function1 name = "john">;

ReactDOM.render(
  element,
  document.getElementById('second')
);

An example is the following:

//To Be replaced by Michael's code
]]`function HelloFunc(props){
  return <h1>Hello, {props.name} </h1>;
}

const element = <HelloFunc name = "John"/>;
ReactDOM.render(
  element,
  document.getElementById('second')
);`]]

What happens here is that element gets rendered to the location of id with "second", and uses the "function1" function to write a h1 tag with "Hello, {prop.name}" where prop.name is an attribute of the input property, in this case it is "John."

The strength of prop comes from the fact that html pages can be dynamically updated with the input given.

## state

Similarly to prop, state also builds up on component. On the contrary, while prop is passed into the component, state is managed and changed within the component.

Assume that we have a function called "function2," and its only purpose is to call a function to change a state named "this.state.name", where "this.state" is a rendered value, and this.state.name has the value "hello" stored in it. So roughly it looks like something like this:

function2() {

  this.changeValue();
  this.changeValue();
  this.changeValue();

  //Here, this.state.name will be "hello" if it was read from here.
}`

Now if we want to change the this.state.name to have "1" concatenated to it at the end of each call, our changeValue function would look like this:

changeValue() {
  this.setState((state) => {
    return {name: state.name + "1"}
  });
}

The changeValue sets the state for this, and it updates the this.state.name by adding 1 next to it. Therefore, after the fist call of changeValue, we would have "hello1" rendered on the page. On the second time, we would have "hello11" rendered on the page, and "hello111" on the third time.

Even though this.state.name shows "hello" if accessed within the function, on the page when the state is rendered, the changes will show, and it will be "hello111" instead.


//References:
1. https://reactjs.org/docs/components-and-props.html
2. https://reactjs.org/docs/faq-state.html
