

import React, { useState } from 'react';

const App = () => {
  // State to track which page is selected
  const [selectedPage, setSelectedPage] = useState('page1');

  // Function to handle sidebar click
  const handleSidebarClick = (page) => {
    setSelectedPage(page);
  };

  return (
    <div className="app-container">
      <div className="sidebar">
        <button onClick={() => handleSidebarClick('page1')}>Page 1</button>
        <button onClick={() => handleSidebarClick('page2')}>Page 2</button>
      </div>
      <div className="content">
        {selectedPage === 'page1' && <Page1 />}
        {selectedPage === 'page2' && <Page2 />}
      </div>
    </div>
  );
};

const Page1 = () => {
  return (
    <div>
      <h1>Page 1 Content</h1>
      <p>This is the content for Page 1.</p>
    </div>
  );
};

const Page2 = () => {
  return (
    <div>
      <h1>Page 2 Content</h1>
      <p>This is the content for Page 2.</p>
    </div>
  );
};

export default App;
