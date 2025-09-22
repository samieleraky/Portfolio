import React from 'react';


export const Projects = () => {
    return (
        <section className="projects-section">
            <h2>My Projects</h2>

            <ul className="projects-list">
                {/* Project 1 */}
                <li className="project-item">
                    <h3>Gotorz - Travel Agency Website</h3>
                    <p>
                        A full-stack travel agency website built with Blazor that integrates with
                        various APIs to search for hotel and flight options. Features secure
                        Stripe payment integration for our users.
                    </p>
                    <div className="project-links">
                        <a
                            href="https://github.com/Team13-UCL/GoTorz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                        >
                            View Source Code
                        </a>
                        <a
                            href="https://gotorzz-hhchfbhabzaae6dr.swedencentral-01.azurewebsites.net/Login"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-success"
                        >
                            Live Demo
                        </a>
                    </div>
                </li>

                {/* Project 2 */}
                <li className="project-item">
                    <h3>Personal Portfolio</h3>
                    <p>
                        A responsive portfolio website built with React and modern web technologies
                        to showcase my skills and projects.
                    </p>
                    <div className="project-links">
                        <a
                            href="https://github.com/samieleraky/PortfolieSami"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                        >
                            View Source Code
                        </a>
                        <a
                            href="https://samieleraky.github.io/Portfolio/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-success"
                        >
                            Live Website
                        </a>
                    </div>
                </li>

                {/* Project 3 */}
                <li className="project-item">
                    <h3>Intelligent Job Portal</h3>
                    <p>
                        A smart recruitment platform designed for .dotLegal to automate the job
                        application process. Instead of manually reviewing applications via Outlook,
                        the portal uses AI & Machine Learning to streamline candidate evaluation.
                    </p>

                    <h4>Key Features</h4>
                    <ul className="list-disc list-inside ml-4">
                        <li>Automatic candidate scoring (1–10)</li>
                        <li>Match score between job posting & applicant profile</li>
                        <li>Auto-generated candidate summaries</li>
                        <li>GDPR-compliant (6 months data retention)</li>
                    </ul>

                    <div className="project-links">
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                        >
                            View Source Code
                        </a>
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-success"
                        >
                            Demo (coming soon)
                        </a>
                    </div>
                </li>
</ul>

            {/* Technologies Section */}
            <section className="technologies-section">
                <h2>Technologies & Tools</h2>
                <div className="tech-stack">
                    <h3>Frontend:</h3>
                    <div className="tech-badges">
                        <span className="tech-badge">React</span>
                        <span className="tech-badge">JavaScript</span>
                        <span className="tech-badge">HTML</span>
                        <span className="tech-badge">Blazor</span>
                    </div>

                    <h3>Backend:</h3>
                    <div className="tech-badges">
                        <span className="tech-badge">.NET</span>
                        <span className="tech-badge">APIs Integration</span>
                    </div>

                    <h3>Tools & Deployment:</h3>
                    <div className="tech-badges">
                        <span className="tech-badge">GitHub</span>
                        <span className="tech-badge">Azure</span>
                        <span className="tech-badge">Stripe API</span>
                    </div>
                </div>
            </section>
        </section>
    );
};
