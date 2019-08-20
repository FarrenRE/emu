import React from 'react';
import 'bulma/css/bulma.min.css';
import './App.css';

import TemplatePicker from './components/templatePicker';
// import ParentSelector from './components/test/parentSelector';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        EMU
      </header>
      <main>
        {/* <div>
        <ParentSelector />
        </div> */}
        <div>
         <TemplatePicker />
        </div>
      </main>
    </div>
  );
}

export default App;
