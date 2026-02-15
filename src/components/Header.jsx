import { Bell, User } from 'lucide-react';

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.search}>
        <input
          type="text"
          placeholder="Buscar..."
          style={styles.searchInput}
        />
      </div>
      <div style={styles.actions}>
        <button style={styles.iconButton}>
          <Bell size={20} />
        </button>
        <button style={styles.userButton}>
          <User size={20} />
          <span>Meu Perfil</span>
        </button>
      </div>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#fff',
    padding: '16px 32px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #e0e0e0',
    position: 'sticky',
    top: 0,
    zIndex: 10,
  },
  search: {
    flex: 1,
    maxWidth: '400px',
  },
  searchInput: {
    width: '100%',
    padding: '10px 16px',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    fontSize: '14px',
  },
  actions: {
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
  },
  iconButton: {
    padding: '8px',
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
  },
  userButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 16px',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    background: 'transparent',
    cursor: 'pointer',
  },
};

export default Header;
