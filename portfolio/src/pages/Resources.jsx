import React from 'react';
import reactComplete from '../assets/reactComplete.jpg';

export const Resources = () => {
    return (
        <div className="resources-page">
            <h1 className="resources-title">Resources</h1>

            <div className="resource-card">
                <h2>Learn React - Codecademy</h2>

                <a
                    href="https://www.codecademy.com/learn/react-101"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Visit Learn React Course
                </a>

                <p>
                    Learn React - Codecademy is a course that teaches you how to build interactive applications with React.
                    The course spans over 11 lessons and covers the following topics:
                </p>
                <ul>
                    <li>JSX</li>
                    <li>React Components</li>
                    <li>Hooks</li>
                    <li>React Programming Patterns</li>
                    <li>React Styles</li>
                    <li>React Forms</li>
                </ul>

                <p>
                    Learn React - Codecademy is a great resource for beginners who want to learn React from scratch.
                    The course is interactive and provides hands-on experience building React applications.
                    They also provide sections where you can run the code directly in the browser,
                    which is an excellent way to practice and reinforce your learning.
                </p>

                <img src={reactComplete} alt="React course completion" className="reactComplete" />
            </div>
        </div>
    );
};
