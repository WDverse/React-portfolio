import './App.css';
import Header from './components/Header';
import Page from './components/Page';
import Project from './components/Project';
import Footer from './components/Footer';

function App() {
  return (
    <div className="warning">
      <Header name=" Emmanuel Appiagyei" />
      <Page />
      <Project title="Portfolio" />
      <Footer />
    </div>
  );
}

export default App;
