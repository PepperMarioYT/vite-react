import { useState } from 'react';
import Modal from './Modal';
import doNotInteractCriteria from './doNotInteractCriteria.md';
import './App.css';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [criteria, setCriteria] = useState('');

  // Load the criteria from the markdown file
  import('./doNotInteractCriteria.md').then((module) => setCriteria(module.default));

  const handleEmailButtonClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleAgree = () => {
    setShowModal(false);
    // Open Gmail with mailto link
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=your.email@example.com', '_blank');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>About Me</h1>
        <p>
          Hi! I'm <strong>PepperMarioYT</strong>, a passionate developer, gamer, and learner. 
          I enjoy building web applications, scripting, and playing video games in my free time.
        </p>

        {/* Email Button */}
        <button onClick={handleEmailButtonClick}>Email Me</button>

        {/* Modal */}
        {showModal && (
          <Modal
            content={criteria}
            onClose={handleModalClose}
            onAgree={handleAgree}
          />
        )}
      </header>
    </div>
  );
}

export default App;
