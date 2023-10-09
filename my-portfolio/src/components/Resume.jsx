// Importing the Resume component's stylesheet
import "../styles/Resume.css";
import resume from "../assets/files/Appiagyei_resume.pdf"

// Define a functional component called Resume
function Resume() {
  return (
    // Container div with a white background
    <div className="text" style={{ backgroundColor: "white" }}>
      <div className="resume">
        <h2 className="resume-title">Resume</h2>
        <p>
          Download my{" "}
          <a className="text resume-link" href={resume} download>
            resume
            <span className="download">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className=" download bi-download"
                viewBox="0 0 16 16"
              >
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
              </svg>
            </span>
          </a>
        </p>
        <h3>Frontend Proficiencies</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Bootstrap</li>
          <li>jQuery</li>
          <li>React</li>
          <li>Responsive Design</li>
        </ul>
        <h3>Backend Proficiencies</h3>
        <ul>
          <li>APIs</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
      </div>
    </div>
  );
}

// Export the Resume component as the default export of this module
export default Resume;
