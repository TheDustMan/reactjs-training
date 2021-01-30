import logo from './logo.svg';
import './App.css';
import TestElement from './components/TestElement';
import PropAggregator from './components/PropAggregator';
import doTick from './components/Ticker';
import Clock from './components/Clock';
import Clock2 from './components/Clock2';
import ActionLink from './components/ActionLink';
import ToggleButton from './components/ToggleButton';
import InputIteratorButton from './components/InputIteratorButton';
import SaveListForm from './forms/SaveListForm';
import ItemList from './components/ItemList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Hi
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <TestElement/>
      <PropAggregator name="LOLOL"/>
      <Clock/>
      <Clock2/>
      <ActionLink/>
      <ToggleButton/>
      <InputIteratorButton/>
      <SaveListForm/>
      <div id='components'>
      {doTick()}
      </div>
    </div>
  );
}

export default App;
