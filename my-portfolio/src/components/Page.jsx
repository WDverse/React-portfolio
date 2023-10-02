import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Project from "./Project";
import Resume from "./Resume";
import PageContent from "./PageContent";

function Page({ currentPage }) {

    const renderPage = (currentPage) => {
        switch (currentPage) {
            case "about":
                return <AboutMe />
            case "portfolio":
                return <Project />
            case "contact":
                return <Contact />
            case "resume":
                return <Resume />
            default:
        }
    }

    return (
        <>
            <PageContent>
                {renderPage(currentPage)}
            </PageContent>
        </>
    )
}

export default Page;