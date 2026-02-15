import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Music, 
  Calendar, 
  TrendingUp, 
  Settings, 
  Megaphone,
  DollarSign,
  Link as LinkIcon
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/platforms', icon: LinkIcon, label: 'Plataformas' },
    { path: '/releases', icon: Music, label: 'Lançamentos' },
    { path: '/content', icon: Calendar, label: 'Conteúdo' },
    { path: '/ads', icon: Megaphone, label: 'Anúncios' },
    { path: '/financial', icon: DollarSign, label: 'Financeiro' },
    { path: '/ai', icon: TrendingUp, label: 'IA Insights' },
    { path: '/settings', icon: Settings, label: 'Configurações' },
  ];

  return (
    <aside style={styles.sidebar}>
      <div style={styles.logo}>
        <Music size={32} color="#1db954" />
        <h1 style={styles.logoText}>MusicHub Pro</h1>
      </div>
      <nav style={styles.nav}>
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              style={{
                ...styles.navItem,
                ...(isActive ? styles.navItemActive : {}),
              }}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

const styles = {
  sidebar: {
    width: '250px',
    backgroundColor: '#1a1a1a',
    color: '#fff',
    padding: '20px',
    height: '100vh',
    position: 'fixed',
    left: 0,
    top: 0,
    overflowY: 'auto',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '40px',
    paddingBottom: '20px',
    borderBottom: '1px solid #333',
  },
  logoText: {
    fontSize: '20px',
    fontWeight: 'bold',
    margin: 0,
  },
  nav: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  navItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '12px 16px',
    borderRadius: '8px',
    textDecoration: 'none',
    color: '#b3b3b3',
    transition: 'all 0.2s',
    cursor: 'pointer',
  },
  navItemActive: {
    backgroundColor: '#1db954',
    color: '#fff',
  },
};

export default Sidebar;
