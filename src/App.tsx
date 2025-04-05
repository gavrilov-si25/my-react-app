import React from 'react';
import Message from './Message';

const messageText = "Message";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Hello, World!</h1>
      <Message text={messageText} />
    </div>
  );
};

export default App;
