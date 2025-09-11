import './App.css';
import RenamePerson from './RenamePerson.tsx';
import test from './test.ts';

function App() {

  return <div>
    <button onClick={test}>Test</button>
    <RenamePerson />
  </div>
}

export default App;
