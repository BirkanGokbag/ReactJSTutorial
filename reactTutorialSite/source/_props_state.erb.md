# Props and State

React.js allows reusable code to be created that can be applied to anywhere, partial code that can be included anywhere.  There are two data structures that allow React.js to do this in addition to component:

* Prop

* State

## Prop

Prop stands for property, builds up on the component component class. Prop allows specified properties to be passed into the component for use.

The arguments are passed into their respective functions as a property. The syntax for passing properties into function1, for example, is written as:

~~~
const example = <function1 name = "john">;
~~~

"example" is a constant variable that is assigned to this component so that React can access this element and render it to a place. This is done by the render function within ReactDOM, which looks like something like this:

~~~
ReactDOM.render(
  element,
  document.getElementById('second')
);
~~~

In this case, the element variable is rendered to the html element with the id "second". If we populate function "function1" to return a h1 tag with the contents "Hello, {name from prop}", then all of this can be done by:

~~~
function function1(props){
  return <h1>Hello, {props.name} </h1>;
}

const example = <function1 name = "john">;

ReactDOM.render(
  element,
  document.getElementById('second')
);
~~~

What happens here is that element gets rendered to the location of id with "second", and uses the "function1" function to write a h1 tag with "Hello, {prop.name}" where prop.name is an attribute of the input property, in this case it is "John."

The strength of prop comes from the fact that html pages can be dynamically updated with the input given, however it does not allow props to change within the function. In this example, props.name cannot be changed within function1 as props are read-only. This means that function that takes props cannot change its own input.

## State

Similarly to prop, state also builds up on component. On the contrary, while prop is passed into the component, state is managed and changed within the component.

Assume that we have a function called "function2," and its only purpose is to call a function to change a state named "this.state.name", where "this.state" is a rendered value, and this.state.name has the value "hello" stored in it. So roughly it looks like something like this:

~~~
function2() {

  this.changeValue();
  this.changeValue();
  this.changeValue();

}
~~~

Now if we want to change the this.state.name to have "1" concatenated to it at the end of each call, our changeValue function would look like this:

~~~
changeValue() {
  this.setState((state) => {
    return {name: state.name + "1"}
  });
}
~~~

The changeValue sets the state for this, and it updates the this.state.name by adding 1 next to it. Therefore, after the first call of changeValue, we would have "hello1" rendered on the page. On the second time, we would have "hello11" rendered on the page, and "hello111" on the third time.

Even though this.state.name shows "hello" if accessed within the function, on the page when the state is rendered, the changes will show, and it will be "hello111" instead.

When both of them are combined together, an example of the structure for a state implementation with a function that updates one of its attributes is located down below.

~~~
changeValue() {
  this.setState((state) => {
    return {name: state.name + "1"}
  });
}

function2() {

  this.changeValue();
  this.changeValue();
  this.changeValue();

  //When this.state.name is accessed here, within the function, it will return "hello". However when rendered into the webpage, then it will be "hello111" on screen.
}
~~~

###setState

setState is an instance function that allows the states to be changed. One important characteristic of setState is the fact that it is asynchronous. React proceeds to wait till all of the components call setState within their event handlers before starting to re-render the page.

The reason for this to be used is to make sure that React structure stays consistent, that each call shouldn't call re-render but only when everything is ready to be rendered. This increases the performance of React as it prevents unnecessary re-renders from happening, and allows the state to be consistent throughout the functions.
