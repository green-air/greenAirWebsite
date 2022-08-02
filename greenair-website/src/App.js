import logo from './logo.svg';
import './App.css';
import InstagramIcon from '@mui/icons-material/Instagram.js';
import WhatsAppIcon from '@mui/icons-material/WhatsApp.js';
import FacebookIcon from '@mui/icons-material/Facebook.js';
import TelegramIcon from '@mui/icons-material/Telegram.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <FacebookIcon />
        <TelegramIcon />
        <WhatsAppIcon />
        <InstagramIcon />
      </header>
    </div>
  );
}

export default App;
