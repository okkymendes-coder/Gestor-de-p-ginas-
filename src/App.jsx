import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Platforms from './pages/Platforms';
import Releases from './pages/Releases';
import Content from './pages/Content';
import Ads from './pages/Ads';
import Financial from './pages/Financial';
import AIInsights from './pages/AIInsights';
import Settings from './pages/Settings';
import './App.css';

function App() {
  return (
    <Router>
      <div style={styles.app}>
        <Sidebar />
        <div style={styles.main}>
          <Header />
          <div style={styles.content}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/platforms" element={<Platforms />} />
              <Route path="/releases" element={<Releases />} />
              <Route path="/content" element={<Content />} />
              <Route path="/ads" element={<Ads />} />
              <Route path="/financial" element={<Financial />} />
              <Route path="/ai" element={<AIInsights />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

const styles = {
  app: {
    display: 'flex',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
  },
  main: {
    flex: 1,
    marginLeft: '250px',
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: 1,
    overflow: 'auto',
  },
};

export default App;
