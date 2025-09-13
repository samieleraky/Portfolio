﻿import React from 'react';
import { useState } from "react";

const weeks = [
    {
        title: "Week 33",
        goals: "To get an overview of the semester, our project, and my selective courses",
        reflection:
            "The first week was mostly spent on practical information. We are a completely new group so we have to learn each other better and our ways of working. Luckily we were quick at choosing our project for the semester.",
        resources: "",
        learning: "",
    },
    {
        title: "Week 34",
        goals: "Familiarize myself with the project and begin React",
        reflection:
            "We met in the product and guild groups, which provided valuable feedback. The majority of the time has been spent on starting the portfolio and diving into our project description. I have chosen to start a React course while continuously developing my portfolio in React.",
        resources:
            "React – YouTube on React and how to implement pages and routing",
        learning:
            "Watching the YouTube tutorial on React while simultaneously using React to build my portfolio is improving my learning curve. I learn better when watching tutorials and then implementing them at the same time.",
    },
    {
        title: "Week 35",
        goals:
            "Setting up a plan for our project, focusing on routing between pages in React, and continuing work on the portfolio.",
        reflection:
            "I managed to set up routing between my different pages in React. Our process meeting provided valuable feedback as we gained insight into each other's portfolios and received feedback from teachers and fellow students. An important point was to get off to a good start with our blog/reflections. In our group we decided that everyone should start researching the tools used for the project.",
        resources:
            "React – focus on routing and describing our reflections on our blog, CodeAcademy course on React",
        learning:
            "Taking a React course on CodeAcademy is boosting my learning curve. Following a tutorial in React has helped me implement routing in my portfolio and helped me understand how to implement routing for our project.",
    },
    {
        title: "Week 36",
        goals: "Research and agree on technologies used to create the project.",
        reflection:
            "We have researched the tools we would like to use for our project. I will use React for frontend development and web development. I will use React Native for mobile app development. I gained a lot of insight from our guild meetings, in particular on the tools used by my classmates. Based on the meeting, I would like to dig further into Tailwind for the design and styling. In our group we decided to continue individually on own courses and to begin HLD for our next meeting. We are considering implementing the frontend slowly.",
        resources: "React/React Native in CodeAcademy",
        learning:
            "Continuous course training in Codeacademy and listening to feedback from our meetings are helping me gain more knowledge on how to implement our project. It's helping my learning curve by providing practical examples and immediate application opportunities for the concepts I'm studying.",
    },
    {
        title: "Week 37",
        goals:
            "Begin High Level Design (HLD) for our project and continue learning React and start React Native course",
        reflection: "",
        resources: "",
        learning: "",
    },
];

export const Reflections = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleWeek = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="p-6 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">
                Reflections during the semester
            </h2>

            <div className="space-y-4">
                {weeks.map((week, index) => (
                    <div
                        key={index}
                        className="border rounded-xl bg-white shadow-md"
                    >
                        <button
                            onClick={() => toggleWeek(index)}
                            className="w-full flex justify-between items-center p-4 text-left font-semibold"
                            aria-expanded={openIndex === index}
                        >
                            <span>{week.title}</span>
                            <span>{openIndex === index ? "▲" : "▼"}</span>
                        </button>

                        {openIndex === index && (
                            <div className="p-4 border-t space-y-3 text-gray-700">
                                {week.goals && (
                                    <>
                                        <p className="font-bold">Goals:</p>
                                        <p>{week.goals}</p>
                                    </>
                                )}

                                {week.reflection && (
                                    <>
                                        <p className="font-semibold">The week that passed:</p>
                                        <p>{week.reflection}</p>
                                    </>
                                )}

                                {week.resources && (
                                    <>
                                        <p className="font-semibold">Resources:</p>
                                        <p>{week.resources}</p>
                                    </>
                                )}

                                {week.learning && (
                                    <>
                                        <p className="font-semibold">Ways of learning:</p>
                                        <p>{week.learning}</p>
                                    </>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};
