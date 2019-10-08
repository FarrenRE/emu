import React from 'react';
import 'bulma/css/bulma.min.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './App.css';

import TemplatePicker from './components/templatePicker';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>EMU</h1>
      </header>
      <main>
        <div>
          <TemplatePicker />
        </div>
      </main>
    </div>
  );
}

export default App;
