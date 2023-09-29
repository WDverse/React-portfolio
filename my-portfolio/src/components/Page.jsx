import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Project from "./Project";
import Resume from "./Resume";

function Page() {
    return (
        <>
            <AboutMe  name= "about-me" />
            <Project name= "portfolio" title="Portfolio"/>
            <Contact  name= "contact"/>
            <Resume name= "resume"/>
        </>
    )
}

export default Page;