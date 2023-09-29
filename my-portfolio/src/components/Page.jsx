import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Project from "./Project";
import Resume from "./Resume";

function Page() {
    return (
        <>
            <AboutMe />
            <Project title="Portfolio"/>
            <Contact />
            <Resume />
        </>
    )
}

export default Page;