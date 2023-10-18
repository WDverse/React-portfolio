// Importing necessary components
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Project from "./Project";
import Resume from "./Resume";
import PageContent from "./PageContent";

// Define a functional component called Page that takes 'currentPage' as a prop
function Page({ currentPage }) {
    // Function to render the appropriate page based on 'currentPage'
    const renderPage = (currentPage) => {
        switch (currentPage) {
            case "about":
                return <AboutMe />; // Render AboutMe component when 'currentPage' is "about"
            case "portfolio":
                return <Project />; // Render AboutMe component when 'currentPage' is "portfolio"
            case "contact":
                return <Contact />; // Render AboutMe component when 'currentPage' is "contact"
            case "resume":
                return <Resume />; // Render AboutMe component when 'currentPage' is "resume"
            default:
        }
    };

    return (
        <>
            <PageContent>{renderPage(currentPage)}</PageContent>
        </>
    );
}

// Export the Page component as the default export of this module
export default Page;
