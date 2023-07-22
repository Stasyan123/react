import './App.css';
import Albums from './components/Albums';

function App() {
  
  return (
    <div className='album-container'>
      <h2>
        Choose your album 
      </h2>
      
      <div className='albums'>
        <Albums />
      </div>
    </div>
  );
}

export default App;
