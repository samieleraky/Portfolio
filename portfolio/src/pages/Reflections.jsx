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
    },
    {
        title: "Week 41",
        goals: "Re-order our frontend design for the jobapplicants, update wireframes, start with backend development",
        "The week that passed": "I re-structured our frontend design for our job-application site. I have placed all the information in one component instead of 3 seperate components. This will make it easier for the user to fill out the job application. I updated our wireframes in draw.io so its arranged into 1 component as well. I have began the backend design of our job application component by opening a ASP.NET project in visual studio which will feature the backend development of our React component ",
        resources: "Visual studio, Draw.io, Github",
        learning: "Feedback from my group members enhances my learning and helps me stay on track with developing the right product. By focusing on backend development, I am learning how to integrate the front end with the back end through APIs",
    },
    {
        title: "Week 42",
        goals: "Continue backend development and search for internships",
        "The week that passed": "I finished a prototype of our backend which stores the logic of the frontend of our job application site. I managed to connect it to a local database in SQL. When the user sends in the application it is stored in the database. I also spend time sending internship-application. I still have not found an internship but I will keep pushing",
        resources: "Visual studio, SQL server, Github",
        learning: "By working on the backend development I am learning how to connect the frontend with the backend through APIs. This is helping me understand the full stack development of web applications",

    }, 
    {
        title: "Week 43",
        goals: "Begin the frontend work on our dashboard and to keep searching for internship",
        "the week that passed": "I began the week with working on our frontend of the dashboard. This dashboard will work as the site which showcases the top applicants based on an AI score. I managed to finish a prototype of it but its still needs adjustments. The rest of the week was spent on sending internship applications",
        resources: "Visual studio, Github",
        learning: "The process of finding an internship is teaching me valuable lessons on resume-writing and cover letters"
    },
    {
        title: "Week 44",
        goals: "Continue working on dashboard and find an internship, start react native course",
        "the week that passed": "I continued working on the dashboard this week. It has been difficult to receive feedback from my groupmembers or just overall to plan any meetings. It seems like everyone is kind of on their own. I feel pressured to find an internship so the majority of the week was spent on sending our internship applications. I also begang a react native course on FreeCodeCamp which details a tutorial on how to develop a mobile app",
        resources: "Visual studio, Github, FreeCodeCamp, Youtube",
        learning: "Finding an internship is a difficult process. It requires patience and persistence. I have learned that its important to follow up on applications and to network as much as possible"


    },
    {
        title: "Week 45",
        goals: "Finish dashboard frontend and connect it to the backend, and continue react native course",
        "the week that passed": "I managed to finish the frontend part of our dashboard, and I connected it to our backend. I finished a course on React Native on Navigation and I will continue with more advanced topics next week",
        resources: "Visual studio, Github, FreeCodeCamp, Youtube",
        learning: "Im getting a better understanding of React Native and how to implement navigation between different pages in a mobile app. I am closely observing how React and React Native differ and what similarities they have. Im following a tuturial which gives me hands on learning"


    },
    {
        title: "Week 46",
        goals: " Implement AI service to backend, and continue React Native course",
        "the week that passed": "I began working on implementing an AI service to our backend. The goal is to have a match score for each applicant based on their CV and application. I decided to implement openAI for my AI service. For my React Native course I learned about styling and list views",
        resources: "Visual studio, Github, FreeCodeCamp, Youtube, OpenAI",
        learning: "Implementing an AI service is teaching me a lot about how AI can be used in real world applications. Its helping me understand the potential of AI and how to integrate it into web applications. The React Native course is helping me understand how to style mobile apps effectively"

    },
    {
        title: "Week 47",
        goals: "Test our product and develop a mobile application prototype with React Native",
        "the week that passed": "I spent most of the week testing our program and fixing bugs. The AIservice is now giving a matchscore more accurately based on the resumes and CVs.  I also continued my React Native course and learned about handling user input and CRUD. I have began a project on react native which showcases a mobile application of our job application component. I also had a meeting with a firm who approved my internship. So I finally found a place to be an intern at",



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
