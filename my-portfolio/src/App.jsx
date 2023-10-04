// Import the useState hook from React library
import { useState } from "react";

// Import components from their respective files
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Page from "./components/Page";
import Footer from "./components/Footer";

// Define the main App component
function App() {
  // Define an array of page names
  const [pages] = useState(["about", "portfolio", "contact", "resume"]);

  // Define a state variable to keep track of the current page
  const [currentPage, setCurrentPage] = useState(pages[0]);

  // Render the App component
  return (
    <div>
      <Header>
        <Navigation
          pages={pages} // Pass the array of page names
          setCurrentPage={setCurrentPage} // Pass a function to set the current page
          currentPage={currentPage} // Pass the current page
        ></Navigation>
      </Header>
      <main>
        <Page currentPage={currentPage}></Page>
      </main>
      <Footer />
    </div>
  );
}

// Export the App component as the default export
export default App;
