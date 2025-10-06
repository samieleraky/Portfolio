import React, { useState } from "react";

const weeks = [
    {
        title: "Week 33",
        goals: "To get an overview of the semester, our project, and my selective courses",
        "The week that passed":
            "The first week was mostly spent on practical information. We are a completely new group so we have to learn each other better and our ways of working. Luckily we were quick at choosing our project for the semester.",
        resources: "",
        learning: "",
    },
    {
        title: "Week 34",
        goals: "Familiarize myself with the project and begin React",
        "The week that passed":
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
        "The week that passed":
            "I managed to set up routing between my different pages in React. Our process meeting provided valuable feedback as we gained insight into each other's portfolios and received feedback from teachers and fellow students. An important point was to get off to a good start with our blog/reflections. In our group we decided that everyone should start researching the tools used for the project.",
        resources:
            "React – focus on routing and describing our reflections on our blog, CodeAcademy course on React",
        learning:
            "Taking a React course on CodeAcademy is boosting my learning curve. Following a tutorial in React has helped me implement routing in my portfolio and helped me understand how to implement routing for our project.",
    },
    {
        title: "Week 36",
        goals: "Research and agree on technologies used to create the project.",
        "The week that passed":
            "We have researched the tools we would like to use for our project. I will use React for frontend development and web development. I will use React Native for mobile app development. I gained a lot of insight from our guild meetings, in particular on the tools used by my classmates. Based on the meeting, I would like to dig further into Tailwind for the design and styling. In our group we decided to continue individually on own courses and to begin HLD for our next meeting. We are considering implementing the frontend slowly.",
        resources: "React/React Native in CodeAcademy",
        learning:
            "Continuous course training in Codeacademy and listening to feedback from our meetings are helping me gain more knowledge on how to implement our project. It's helping my learning curve by providing practical examples and immediate application opportunities for the concepts I'm studying.",
    },
    {
        title: "Week 37",
        goals:
            "Begin High Level Design (HLD) for our project and continue learning React and start React Native course",
        "The week that passed":
            "We have started our HLD with use cases and a domain model. We will continue working on HLD design and focusing on Wireframes so we have a foundation on how we wish our product should look like. Im continuing my learning in Codeacedemy with React and implementing my teachings in this portfolio. This is helping my learning tremendously as Im learninig on the go. This will also prepare me for the actual front end development of this project as Im getting a good understanding of React. We received good feecback from our productmeeting where most of the time was used on reviewing our High level design. Especially for our domain model it was important that the relations and attributes were correct for the further development of our databasemodel which requires normalization",
        resources: "Codeacedemy, Draw.io - for the HLD",
        learning:
            "The feedback from my colleagues and teachers are helping us stay on the right track with this project. The course that Im taking on Codeacedemy while implementing it in my portfolio is advancing my learning further ",
    },
    {
        title: "Week 38",
        goals: "Develop our wireframes and applying for internships",
        "The week that passed": "Most of this week was spent on attending webinars on internships. We also met in the group to discuss our progress and the assignments we need to fulfill for our next meeting. I worked on my resumes for the internships and I have asked around in my network if anyone is interested in hiring me as an intern. In our guild meetings we gained valuable insigt on eachothers progress, and I picked up a few ideas to implement in my project. Im continuing my Codeacademy course on react which is going pretty well at the moment. After I finish this course, I will dig into React native course for our app development. We also made some wireframes for our product that we need to review over the weekend ",
        resources: "Codeacademy, Draw.io",
        learning: "The Webinars has helped me understand how to apply for my internships. It has given me a clear overview on how to deal with the process. The continous learning in Codeacademy combined with my portfolio is enhancing my learning curve with React + vite. I feel more comfortable and prepared to start on our actual code ",
    },
    {
        title: "Week 39",
        goals: "Feedback on wireframes, applying for internships and setting up a git repository",
        "The week that passed": "We reviewed the wireframes that we developed and came with feedback to it. We decided to add a login function in our wireframes for both HR and the jobapplicants. I spent time working on cover letter and applying for internships at different companies. I also set up our git repository and I have launched our project. Our first coding-task will be to begin the front end development of our project. In our processmeeting we discussed our individual process for the semester as of now and some of the challenges we are facing while trying to develop a product and simultaneously keeping up with our portfolio and the various group meetings. The goal for our next processmeeting is to present our learning goals for eachother. The React course that Im taking on Codeacedemy is going well and Im nearing the finishline. I have a good understanding of how React works and how the implementation of the front end part will be.", 
        resources: "Codeacademy, Draw.io, Github",
        learning: "Using React + vite for this portfolio is adding an extra layer of learning and experience. I have decided to use Kolbs learning cycle as a tool to my learning. The majority of Concrete experience comes from my React course but also from the various guild meetings and processmeetings, where i pick up different ideas for our project. I then engange in Reflective observation, where I think of what material I thought was difficult to grasp, and what could be implemented in our project. An example is trying to learn use-state in React and the differnt hooks and how to implement them in our project. As of now I use my portfolio for my concrete experience, where I implement some of the lessons I learn and the ideas that I pick up along the meetings.",
    },
    {
        title: "Week 40",
        goals: "Finish React course on CodeAcademy, Begin front end development of our Intelligent Jobportal",
        "The week that passed": "I finished my react course in CodeAcademy, and I will begin a React native course on Freecodecamp. I have developed a design for our project on visual studio which incorporates the logos that .dotlegal uses and the background colors. I have only worked on the job-applicant pages for now. After presenting the work to my productgroup, we agreed that it would be better to gather all the information on one page for the jobapplicant than to have 3 different fans with documents, Personal details and application. The goal for the next week is therefore to rearrange our wireframes and re-order the overall design of our project",
        resources: "Codeacademy, Draw.io, Github",
        learning: "My individual learning is going well I would say. Im using Kolbs learning cycle as a tool to implement my lessions to my portfolio and our project. Also the feedback i receive from my groupmembers helps me focus on the details that needs be corrected",
    }
];

export const Reflections = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleWeek = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="page-container">
            <section className="reflections-content">
                <h2 className="text-2xl font-bold mb-6 text-center">
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
                                            <p className="week-label">Goals:</p>
                                            <p>{week.goals}</p>
                                        </>
                                    )}

                                    {week["The week that passed"] && (
                                        <>
                                            <p className="week-label">The week that passed:</p>
                                            <p>{week["The week that passed"]}</p>
                                        </>
                                    )}

                                    {week.resources && (
                                        <>
                                            <p className="week-label">Resources:</p>
                                            <p>{week.resources}</p>
                                        </>
                                    )}

                                    {week.learning && (
                                        <>
                                            <p className="week-label">Ways of learning:</p>
                                            <p>{week.learning}</p>
                                        </>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};
