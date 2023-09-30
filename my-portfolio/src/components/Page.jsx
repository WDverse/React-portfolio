import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Project from "./Project";
import Resume from "./Resume";

function Page() {
    return (
        <>
            <AboutMe name="about-me" title="About Me" />
            <Project name="portfolio" title="Portfolio"/>
            <Contact name="contact" title="Contact" />
            <Resume name="resume" title="Resume" />
        </>
    )
}

export default Page;