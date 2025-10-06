import React from 'react';
import '../Styles/LearningGoals.css';

export const LearningGoals = () => {
    return (
        <div className="learning-goals">
            <h1 className="learning-h1">Individual learning goals </h1>

            <div className="beskrivelser">
                <div className="valgfag-container">
                    <h2>Frontend and web development - React.js</h2>
                    <span className="ects">20 ECTS</span>
                </div>

                <ul className="outer-ul">
                    <li className="outer-li">Knowledge - The student can</li>
                    <ul>
                        <li>Components and props, and their role in implementing reusable components.</li>
                        <li>JSX: Learning what JSX (JavaScript XML) is, and how it is used to write HTML-like syntax directly inside JavaScript code in React.</li>
                        <li>State management, including hooks such as useState and useEffect.</li>
                    </ul>

                    <li className="outer-li">Skills - the student can</li>
                    <ul>
                        <li>Build simple, static, and dynamic web applications using React.js by combining JavaScript and React.</li>
                        <li>Apply state with hooks: learn to use React hooks such as useState and useEffect to manage state and side effects in functional components.</li>
                        <li>Structure and set up a React project based on the use of components, props, and hooks.</li>
                    </ul>

                    <li className="outer-li">Competencies - the student can</li>
                    <ul>
                        <li>Explain and discuss the advantages of using React as a modern frontend framework.</li>
                        <li>Put the use and relevance of React into perspective by comparing it with other frontend frameworks.</li>
                        <li>Evaluate the need for implementing React in a project in relation to scalability and maintainability.</li>
                    </ul>
                </ul>

                <div className="valgfag-container">
                    <h2>Appdevelopment - React Native</h2>
                    <span className="ects">10 ECTS</span>
                </div>
                <ul className="outer-ul">
                    <li className="outer-li">Knowledge - The student has knowledg on</li>
                    <ul>
                        <li>The core principles of React Native and how it differs from React for web</li>
                        <li>The React Native architecture, including the bridge between JavaScript and native mobile components</li>
                        <li>Native components (View, Text, Image, ScrollView, etc.) and their role in building mobile interfaces</li>
                        <li>Styling in React Native</li>
                    </ul>

                    <li className="outer-li">Skills - the student can</li>
                    <ul>
                        <li>Build mobile applications using react Native </li>
                        <li>Use and manage state with React hooks such as useState, useEffect, and context for global state</li>
                        <li>Style and structure responsive mobile layouts with Flexbox and StyleSheet</li>
                        <li>Integrate external APIs</li>
                    </ul>

                    <li className="outer-li">Competencies - the student can</li>
                    <ul>
                        <li>Plan and manage a small-scale mobile app project from concept to functional prototyp.</li>
                        <li>Continuously learn and adapt to updates in the React Native ecosystem and related libraries</li>
                        <li>Apply best practices for structuring and organizing React Native projects to ensure maintainability and readability</li>
                    </ul>
                </ul>
            </div>
        </div>       
    )
};

