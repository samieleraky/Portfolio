import React from 'react';
import IfStatement from '../assets/IfStatement.png';
import TernaryOperator1 from '../assets/TernaryOperator1.png';
import Conditional from '../assets/Conditional.png';
import Rendering from '../assets/Rendering.png';
import Tal from '../assets/Tal.png';
import Curly from '../assets/Curly.png';
import redpanda from '../assets/redpanda.jpg';
import logicfunction from '../assets/logicfunction.jpg';
import conditionalfunction from '../assets/conditionalfunction.jpg';
import authorization from '../assets/authorization.jpg';
import submit from '../assets/submit.jpg';
import PurchaseButton from '../assets/PurchaseButton.jpg';
import '../Styles/Notes.css';
import NavbarExample from '../assets/NavbarExample.jpg';
import AllAboutMe from '../assets/AllAboutMe.jpg';
import Applewatch from '../assets/Applewatch.jpg';
import Talker from '../assets/Talker.jpg';
import blahblah from '../assets/blahblah.jpg';
import defaulttext from '../assets/defaulttext.jpg';
import { Navbar } from '../components/Navbar';

export const Notes = () => {
    return (
        <section>
            <div>
                <h1>React</h1>
                <h3>JSX Conditionals</h3>

                <p>
                    JSX conditionals allow you to render different elements or components based on certain conditions.
                    Here are some common ways to implement conditionals in JSX:
                </p>

                <h4>If statements</h4>
                <p>
                    You can use if statements outside of the JSX to determine what to render. Since you cant use if statements directly inside JSX,
                    you use JavaScript expressions like the ternary operator (condition ? valueIfTrue : valueIfFalse) or logical AND (condition && valueIfTrue).
                    This lets you decide what to display based on some logic.
                </p>

                <div className="image-container">
                    <img src={IfStatement} alt="IfStatement" className="notes-image" />
                </div>

                <h4>Ternary Operator</h4>
                <div>
                    <p>
                        The ternary operator is a concise way to include conditionals directly within your JSX.
                        It follows the syntax: condition ? valueIfTrue : valueIfFalse.
                        This allows you to render different elements based on whether the condition is true or false.
                    </p>

                    <div className="image-container">
                        <img src={TernaryOperator1} alt="TernaryOperator1" className="notes-image" />
                    </div>
                    <p>
                        In the above example if age is greater than or equal to drinkingAge, then headline will equal "Buy Drink".
                        Otherwise, headline will equal "Do Teen Stuff".
                    </p>
                </div>

                <h4>JSX conditional &&</h4>
                <div>
                    <p>
                        JSX conditional && is used to render elements only when a condition is true
                    </p>
                    <div className="image-container">
                        <img src={Conditional} alt="Conditional" className="notes-image" />
                    </div>
                </div>

                <h4>Rendering JSX</h4>
                <div>
                    <p>
                        To render a JSX expression means to make it appear on the screen.
                        React relies on two things to render: What content to render, and where to place the content.
                    </p>
                    <div className="image-container">
                        <img src={Rendering} alt="Rendering" className="notes-image" />
                    </div>
                    <p>
                        The above example renders Hello, world! inside the HTML element with the id of root.
                    </p>
                </div>

                <h4>className</h4>
                <p>
                    In React you have to use className instead of class. React will read any code in between JSX element as JSX not as regular Javascript.
                    JSX doesnt add numbers, it adds them as text just as HTML.
                </p>
                <div className="image-container">
                    <img src={Tal} alt="Tal" className="notes-image" />
                </div>
                <p>
                    In the above example it will not display 5 because 2+3 is located in between h1-elements.
                    If you instead add curly braces then it will display the number 5.
                </p>
                <div className="image-container">
                    <img src={Curly} alt="Curly" className="notes-image" />
                </div>

                <h3>Week 37</h3>
                <p>
                    Using variable attribute in a component to render an image of a red panda.
                    Our redpanda has 3 properties src, alt and width which has a link to an image.
                </p>
                <div className="image-container">
                    <img src={redpanda} alt="redpanda" className="notes-image" />
                </div>

                
                <h4>Putting logic in a function component.</h4>

                <p>A function component must have a return statement.
                    Also you can put simple calculations that need to happen before returning your JSX element within the function component.
                </p>
                <div className="image-container">
                    <img src={logicfunction} alt="logicfunction" className="notes-image" />
                </div>

                <p>Example of using conditionals in a function component. Where it returns either "Tonight Im ging our WOOO" or else "Tonight Im going to bed WOO" based on the condition</p>
                <div className="image-container">
                    <img src={conditionalfunction} alt="conditionalfunction" className="notes-image" />
                </div>
                <p> Using event listerners and event handlers to run some code in response to interactions with interface such as clicking. As seen in the below example with an onClick on the Submit button which showcases "Submission Successful</p>
                <img src={conditionalfunction} alt="conditionalfunction" className="notes-image" />
            </div>
            <div>
            <p>Authorization form in react can be used to hide certain details from the user. In the below assignment i created a react component which hides the websites contact page behind a password form</p>
                <img src={authorization} alt="authorization" className="notes-image" />
                <img src={submit} alt="submit" className="notes-image" />
            </div>

            <h3>Week 38</h3>
            <h4>Component interaction</h4>
            <p>React apps are made out of components but what makes React special is the way that the components interact with eachother. In the below example, the function component ItemBox Returns an instance of PurchaseButton. This is an example of how a component can reference other components</p>
            <div className="image-container">
                    <img src={PurchaseButton} alt="PurchaseButton" className="notes-image" />
                </div>

            <h4>Apply a component in a render function</h4>
            <p>In the below example I import Navbar from the other file NavBar.js. This returns ProfilePage with the NavBar shown above the H1 element "All about me"</p>
                <div className="image-container">
                <img src={NavbarExample} alt="NavbarExample" className="notes-image" />
                <img src={AllAboutMe} alt="AllAboutMe" className="notes-image" />
            </div>

            <h4>Entering a component props</h4>
            <p>Props are how components talk to eachother. Props are short for properties and they are a way of passing data from one component to another. To access a components props object you can reference the props object and the dot notation for its properties. In the below example, App is the parent and Product is the child. App passes three props to Product name, price and rating which can then be read inside the child component</p>
            <div className="image-container">
                <img src={Applewatch} alt="Applewatch" className="notes-image" />
                </div>

            <h3>Week 39</h3>
            <h4>Passing eventhandler function as a prop</h4>
            <p>In the below example, I passed a function from Talker to Button. Talker function displays "blah blah blah" 1000 times on the OnClick. From line 5 -11 is the eventhandler I chose to name "talk". For the prop name I chose "talk" as shown on line 12</p>
            <div className="image-container">
                <img src={Talker} alt="Talker" className="notes-image" />
                <img src={blahblah} alt="blahblah" className="notes-image" />
            </div>

            <h4>Giving default values to props</h4>
            <p>If nobody passes any text to Button, then Button´s display will be blank. It would be better if Button could display a default message instead. You can make this happen by specifying a default value for the prop. There are different ways to do that. In the below example on line 4, the button shows Default Text of Big Button, if no text prop is passed</p>
            <div className="image-container">
                <img src={defaulttext} alt="defaulttext" className="notes-image" />
            </div>
        </section>
    );
};