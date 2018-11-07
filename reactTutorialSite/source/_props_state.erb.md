## Props and State

React.js allows reusable code to be created which can then be applied anywhere. This partial code is code that be included anywhere in a project. There are two data structures that allow React.js to do this in addition to components:

* Prop

* State

## Prop

Prop stands for property. This data structure builds up on the component class. Prop allows specified properties to be passed into the component for use.

The arguments are passed into the components respective functions as a property. The syntax for passing properties into function1, for example, is written as:

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

In this case, the element variable is rendered to the HTML element with the id "second". If we populate function "function1" to return a h1 tag with the contents "Hello, {name from prop}", then all of this can be done by:

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

What happens here is that the element gets rendered to the location of the tag assigned the id, "second", and uses the "function1" function to write a h1 tag with "Hello, {prop.name}" where prop.name is an attribute of the input property. In this case the property is "John."

The strength of prop comes from the fact that HTML pages can be dynamically updated based on the input given. However, react does not allow props to change within the function they are passed into. In this example, props.name cannot be changed within function1, as again, props are read-only. This means that a function that takes prop as an argument cannot change its own input.

## State

Similarly to prop, state also builds on component. However, while prop is passed into the component, state is managed and changed within the component.

Assume that we have a function called "function2," and its only purpose is to call a function to change a state named "this.state.name", where "this.state" is a rendered value, and this.state.name has the value "hello" stored in it. So roughly it looks something like this:

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

Even though this.state.name shows "hello", if accessed within the function, on the page when the state is rendered, the changes will show and it will be "hello111" instead.

Combining both of these is an example of the structure for a state implementation with a function that updates one of its attributes is located down below.

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

setState is an instance function that allows the state to be changed. One important characteristic of setState is the fact that it is asynchronous. React will wait until all of the components call setState within their event handlers before starting to re-render the page.

The reason for this is to make sure that the React structure stays consistent. Each call shouldn't call re-render, but it should instead be called only when everything is ready to be rendered. This improves the performance of React as it prevents unnecessary re-renders from happening and allows the state to be consistent throughout the functions.
