## Forms

Forms are very useful elements in a webpages, and can be written in many languages, such as HTML and React. Although the purpose of the forms do not vary drastically, HTML forms work differently from other DOM elements in React. For instance, form validations must be must be handled manually by React. We will now examine the mostly used form elements in React.

#### Basic Input

There are two methods of input in React: controlled and uncontrolled. The main difference is that in controlled inputs, the form data is handled by a React component, while in uncontrolled components, the form data is handled by DOM itself. The generally used input tags in React are <textarea>, <input>, and <select>.

``

Uncontrolled inputs resemble HTML form elements, and these inputs can remember the last user input. With this input, the value is needed to be pulled when the user needs it or when it is submitted. Their value can be get using the onClick function.

``

Controlled inputs update the variable attached to the tag when the value in the input field is changed. For instance, this can be done with the syntax

`<input value={someValue} onChange={handleChange} />`
