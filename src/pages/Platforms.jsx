import { useState } from 'react';
import Card from '../components/Card';
import { mockPlatforms } from '../data/mockData';
import { CheckCircle, Circle } from 'lucide-react';

const Platforms = () => {
  const [platforms, setPlatforms] = useState(mockPlatforms);

  const toggleConnection = (platformId) => {
    setPlatforms(platforms.map(p => 
      p.id === platformId ? { ...p, connected: !p.connected } : p
    ));
  };

  const connectedCount = platforms.filter(p => p.connected).length;

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <h1 style={styles.pageTitle}>Plataformas Conectadas</h1>
        <p style={styles.subtitle}>
          {connectedCount} de {platforms.length} plataformas conectadas
        </p>
      </div>

      <Card style={styles.infoCard}>
        <h3 style={styles.infoTitle}>🔗 Conecte suas contas</h3>
        <p style={styles.infoText}>
          Vincule suas contas de streaming, redes sociais e distribuidoras para centralizar 
          todos os seus dados em um único painel. O app irá puxar estatísticas automaticamente via API.
        </p>
      </Card>

      <div style={styles.platformsGrid}>
        {platforms.map((platform) => (
          <Card key={platform.id} style={styles.platformCard}>
            <div style={styles.platformHeader}>
              <span style={styles.platformIcon}>{platform.icon}</span>
              <h3 style={styles.platformName}>{platform.name}</h3>
            </div>
            <div style={styles.platformBody}>
              <div style={styles.statusBadge}>
                {platform.connected ? (
                  <>
                    <CheckCircle size={16} color="#1db954" />
                    <span style={styles.statusConnected}>Conectado</span>
                  </>
                ) : (
                  <>
                    <Circle size={16} color="#999" />
                    <span style={styles.statusDisconnected}>Não conectado</span>
                  </>
                )}
              </div>
              <button
                onClick={() => toggleConnection(platform.id)}
                style={{
                  ...styles.button,
                  ...(platform.connected ? styles.buttonDisconnect : styles.buttonConnect),
                }}
              >
                {platform.connected ? 'Desconectar' : 'Conectar'}
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

const styles = {
  page: {
    padding: '32px',
  },
  header: {
    marginBottom: '32px',
  },
  pageTitle: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '8px',
    color: '#1a1a1a',
  },
  subtitle: {
    fontSize: '16px',
    color: '#666',
    margin: 0,
  },
  infoCard: {
    marginBottom: '32px',
    backgroundColor: '#f0f8ff',
    border: '1px solid #1db954',
  },
  infoTitle: {
    margin: '0 0 12px 0',
    color: '#1a1a1a',
  },
  infoText: {
    margin: 0,
    color: '#666',
    lineHeight: '1.6',
  },
  platformsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '24px',
  },
  platformCard: {
    transition: 'transform 0.2s',
    cursor: 'pointer',
  },
  platformHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '16px',
  },
  platformIcon: {
    fontSize: '32px',
  },
  platformName: {
    fontSize: '18px',
    fontWeight: '600',
    margin: 0,
    color: '#1a1a1a',
  },
  platformBody: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  statusBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px',
  },
  statusConnected: {
    color: '#1db954',
    fontWeight: '600',
  },
  statusDisconnected: {
    color: '#999',
  },
  button: {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  buttonConnect: {
    backgroundColor: '#1db954',
    color: '#fff',
  },
  buttonDisconnect: {
    backgroundColor: '#f5f5f5',
    color: '#666',
  },
};

export default Platforms;
