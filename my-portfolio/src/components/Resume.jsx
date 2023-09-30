
function Resume(props) {
    return (
        <>

            <div>
                <h2>{props.title}</h2>
                <p>Download my <a href="https://drive.google.com/file/d/1SzImUxrvGugYeV063b9DL5cFN82B-f6N/view?usp=share_link" download="">resume</a></p>
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

        </>
    )
}


export default Resume;