//how is import helping us
//what is it replacing from our normal webpage in plnkr
//does this look somewhat familiar from node?
//where is 'react' coming from
//what javascript thing is the word "React"
import React from 'react';
import ReactDOM from 'react-dom';


//is this still here when i change to master????


//what is this replacing from our plunker example code
class HelloWorld extends React.Component {
  render() {
    return <h1>Hello World!</h1>;
  }
}
//we no longer have to make a blue print object
//we no longer have to call React.createClass
//we are now just making a class
//but React.createClass did do important stuff for us so how do we get that
//this class does need to have some built in functionality from react
//so we need to "extends" the react class Component


ReactDOM.render(
  <HelloWorld />,
  document.getElementById('root')
);
