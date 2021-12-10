import './App.css';
import Details from './components/Details';
import Outline from './components/Outline';
import dummyData from './data/dummyData';

function App() {
  return (
    <div className="App">
      <main className="resumeContainer">
        <Outline dummyData= {dummyData}/>
        <Details dummyData={dummyData}/>
      </main>
    </div>
  );
}

export default App;
