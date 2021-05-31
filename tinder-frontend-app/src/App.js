import './App.css';
import Header from './Header';
import SwipeButtons from './SwipeButtons';
import TinderCards from './TinderCards';

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header/>
      
      {/* TinderCards */}
      <TinderCards/>

      {/* SwipeButton */}
      <SwipeButtons/>
    </div>
  );
}

export default App;
