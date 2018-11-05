## Props, State, and Component

React.js allows reusable code to be created that can be applied to anywhere, partial code that can be applied to anywhere specified.  There are three data structures that allow React.js to do this:

⋅⋅* Component
⋅⋅* Prop
⋅⋅* State

## Component

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

## Prop

Prop stands for property, builds up on component where the specified properties are passed into the component.

An example is the following:

`function HelloFunc(props){
  return <h1>Hello, {props.name} </h1>;
}

const element = <HelloFunc name = "John"/>;
ReactDOM.render(
  element,
  document.getElementById('second')
);`

What happens here is that element gets rendered to the location of id with "second", and uses the HelloFunc function to write a h1 tag with "Hello, {prop.name}" where prop.name is an attribute of the input property.

The strength of prop comes from the fact that html pages can be dynamically updated with the input given, the only problem however is updating the prop, which is taken care of by "state."

## state

Similarly to prop, state also builds up on component. On the contrary, while prop is passed into the component, state is managed and changed within the component.

An example given below:

`changeValue() {
  this.setState((state) => {
    return {count: state.name + "1"}
  });
}

function1() {
  //Assume that there is a variable this.state.name that is initialized to "hello"

  this.changeValue();
  this.changeValue();
  this.changeValue();

  //At the end here, this.state.name will be "hello" if it was read from here. However, when react re-renders the page, it will be hello111 instead.
}`




//References:
1. https://reactjs.org/docs/components-and-props.html
2. https://reactjs.org/docs/faq-state.html
