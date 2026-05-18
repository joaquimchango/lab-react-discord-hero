// src/App.jsx
import './index.css';

function App() {
  return (
  <div className="App">
        <div className='navbar'>
          <div className='logo'>
            <img src='./assets/discord.png' alt=' logo' />
          </div>
          <div className='menu'>
            <img src = './assets/menu.png' alt='menu' />
            </div>
            </div>
            <div className='hero'>
                <div className='title'>
                  <h1>IMAGINE A PLACE...</h1>
                </div>
                <div className='description'>
                  <p>...where you can belong to a schoold club, a gaming group, or a worldwide art community. Where just you and a handfull of friends can spend time together. A place that makes it easy to talk everyday and hang out more often.</p>
                  </div>
              <button className='white' >Download for Mac</button>   
              <button className='dark'>Open Discord in your browser</button>
          </div>
    </div>
  );
}

export default App;