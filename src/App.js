import './App.css';
import User from './User';
function App() {
  return (
    <div className="App">
    <h2>App Component</h2>
    <User data={{name:'Sanjay Kumbhkar',age:32}}/>
    </div>
  );
}

export default App;
