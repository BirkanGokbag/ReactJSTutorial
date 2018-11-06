## Submitting Form Data

Forms are very useful elements in a webpages, and can be written in many languages, such as HTML and React. Although the purpose of the forms do not vary drastically, HTML forms work differently from other DOM elements in React. For instance, form validations must be must be handled manually by React. We will now examine the mostly used form elements in React.

#### Basic Input

There are two methods of input in React: controlled and uncontrolled. The main difference is that in controlled inputs, the form data is handled by a React component, while in uncontrolled components, the form data is handled by DOM itself. The generally used input tags in React are <textarea>, <input>, and <select>.

Uncontrolled inputs resemble HTML form elements, and these inputs can remember the last user input. With this input, the value is needed to be pulled when the user needs it or when it is submitted. Their value can be get using the onClick function.

Controlled inputs is more the React way and update the variable attached to the tag when the value in the input field is changed. For instance, this can be done with the syntax:

<input value={someValue} onChange={handleChange} />

where someValue is a variable and handleChange is the function.

#### Submitting the Form

The uncontrolled input types can be submitted by using the onSubmit tag attached to a form element that has a button. This can be done with the syntax:

<form onSubmit={this.handleSubmit}>
  
where this.handleSubmit is a function.

The controlled inputs uses the onChange to capture the text value in the input when any change occurs. the variable in the value attribute is updated, and the function called in onChange attribute executes at any change

## Pulling API data using fetch.then


