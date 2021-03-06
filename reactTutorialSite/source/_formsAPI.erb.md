## Submitting Form Data
Forms are very useful elements in webpages, and can be written in many languages, such as HTML and React. Although the purpose of the forms do not vary drastically, HTML forms work differently from other DOM elements in React. For instance, form validations must be handled manually by React. The sections below will cover the most frequently used form elements in React.

#### Basic Input
There are two methods of input in React: controlled and uncontrolled. The main difference between these is that in controlled inputs, the form data is handled by a React component, while in uncontrolled components, the form data is handled by the DOM itself. The generally used input tags are `<textarea>`, `<input>`, and `<select>`.

Uncontrolled inputs resemble HTML form elements, and these inputs can remember the last user input. With this input, the value is needed to be pulled when the user needs it or when it is submitted. Their value can be received using the `onClick` function. Controlled inputs is more the React way and update the variable attached to the tag when the value in the input field is changed. For instance, this can be done with the syntax:

`<input value={someValue} onChange={handleChange} />`

where `someValue` is a variable and `handleChange` is the function.

#### Submitting the Form
The uncontrolled input types can be submitted by using the onSubmit tag attached to a form element that has a button. This can be done with the syntax:

`<form onSubmit={this.handleSubmit}>`

where `this.handleSubmit` is a function.

The controlled inputs uses the `onChange` to capture the text value in the input when any change occurs. the variable in the value attribute is updated, and the function called in `onChange` attribute executes at any change

#### An Example Form

in the connect 4 game a form was used to get the player's information. The code snippet for this function is:

~~~

<form onSubmit={this.handleSubmit}>
  <label>
    Player 1 Name:    
    <input type="text" value={this.state.valuePlayer1} onChange={this.handleChangePlayer1} />
  </label>
  <label>
     Player 2 Name:
     <input type="text" value={this.state.valuePlayer2} onChange={this.handleChangePlayer2} />
   </label>
  <input type="submit" value="Submit" />
</form>


handleSubmit(event) {
  if(this.state.valuePlayer2 != '' && this.state.valuePlayer1 != ''){
    this.props.playerData.player1Name = this.state.valuePlayer1;
    this.props.playerData.player2Name = this.state.valuePlayer2;
    this.setState({toGame: true});
  }else{
    alert('please enter a name for both players');
  }
}

~~~

## Pulling API data using fetch.then
React also has built in functionality to fetch data from an external web server.

The browser connects to the API of an external web server and pulls the data it needs. The sample syntax is:

`fetch(url).then(result => result.json()).then(result => {this.setState({data: result})});`

The `url` is the website that the data will be retrieved from. The first `then` converts the result into the JSON format. The second `then` assigns the JSON API into the data array.  
