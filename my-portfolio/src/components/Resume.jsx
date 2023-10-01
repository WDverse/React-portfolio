import '../styles/Resume.css';
function Resume(props) {
    return (
        <div className="text" style={{ backgroundColor: "#087F8C" }}>

            <div className="resume">
                <h2 className='resume-title' >{props.title}</h2>
                <p>Download my <a className="text resume-link" href="https://drive.google.com/file/d/1SzImUxrvGugYeV063b9DL5cFN82B-f6N/view?usp=share_link" download="">resume</a></p>
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
    )
}


export default Resume;