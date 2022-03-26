import React from 'react';
import './artical.css'

const Artical = () => {
    return (
        <div className='container'>
            <div className="react-work">
                <h3>React-work</h3>
                <p>React works unidimansonally like waterfal, react is not framwork. react work html way but its not a complitly html .React document Object Model (DOM) is an application programming interface (API) for HTML and XML documents.
                    so react is so faster then another language.
                    React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements.
                </p>

            </div>
            <div className="props-state">
                <h3>props vs state</h3>
                <p>
                Props is a Immutable and Props can be used with state and functional components.its Props are read-only  
                The Data is passed from one component to another and State State is both read and write.It is Mutable The Data is passed within the component only and State can be used only with the state components/class component 
                </p>

            </div>
            <div className="how-work">
                <h3>How usestate work</h3>
                <p>
                The useState is a Hook.
                React has two types of components, one is class components which are ES6 classes that extend from React and the other is functional components. 
                 which allows you to have state variables in functional components. Class components a Component and can have state and lifecycle methods: class Message extends React. The useState hook is a special function that takes the initial state as an argument and returns an array of two entries.


                </p>

            </div>
            
        </div>
    );
};

export default Artical;