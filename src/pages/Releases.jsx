import Card from '../components/Card';
import { mockReleases } from '../data/mockData';
import { calculateDaysUntil } from '../utils/formatters';
import { Calendar, CheckCircle, Circle, Clock } from 'lucide-react';

const Releases = () => {
  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <h1 style={styles.pageTitle}>Gestão de Lançamentos</h1>
        <button style={styles.newReleaseButton}>+ Novo Lançamento</button>
      </div>

      <Card style={styles.infoCard}>
        <h3 style={styles.infoTitle}>🚀 Planeje seus lançamentos</h3>
        <p style={styles.infoText}>
          Agende lançamentos, use checklists automáticos, crie links inteligentes de pre-save 
          e notifique seus seguidores com contagem regressiva.
        </p>
      </Card>

      <div style={styles.releasesGrid}>
        {mockReleases.map((release) => {
          const daysUntil = calculateDaysUntil(release.date);
          const completedItems = release.checklist.filter(item => item.done).length;
          const totalItems = release.checklist.length;
          const progress = (completedItems / totalItems) * 100;

          return (
            <Card key={release.id} style={styles.releaseCard}>
              <div style={styles.releaseHeader}>
                <h3 style={styles.releaseTitle}>{release.title}</h3>
                <span style={{
                  ...styles.statusBadge,
                  backgroundColor: release.status === 'planejado' ? '#1db954' : '#ff9800',
                }}>
                  {release.status}
                </span>
              </div>

              <div style={styles.releaseDate}>
                <Calendar size={16} />
                <span>{new Date(release.date).toLocaleDateString('pt-BR')}</span>
              </div>

              {daysUntil > 0 && (
                <div style={styles.countdown}>
                  <Clock size={20} color="#1db954" />
                  <span style={styles.countdownText}>
                    Faltam {daysUntil} dias
                  </span>
                </div>
              )}

              <div style={styles.progressSection}>
                <div style={styles.progressHeader}>
                  <span style={styles.progressLabel}>Progresso</span>
                  <span style={styles.progressPercent}>{Math.round(progress)}%</span>
                </div>
                <div style={styles.progressBar}>
                  <div style={{
                    ...styles.progressFill,
                    width: `${progress}%`,
                  }} />
                </div>
              </div>

              <div style={styles.checklist}>
                <h4 style={styles.checklistTitle}>Checklist:</h4>
                {release.checklist.map((item, index) => (
                  <div key={index} style={styles.checklistItem}>
                    {item.done ? (
                      <CheckCircle size={18} color="#1db954" />
                    ) : (
                      <Circle size={18} color="#999" />
                    )}
                    <span style={{
                      ...styles.checklistText,
                      ...(item.done ? styles.checklistTextDone : {}),
                    }}>
                      {item.item}
                    </span>
                  </div>
                ))}
              </div>

              <div style={styles.releaseActions}>
                <button style={styles.actionButton}>Editar</button>
                <button style={styles.actionButtonPrimary}>Ver Detalhes</button>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

const styles = {
  page: {
    padding: '32px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '32px',
  },
  pageTitle: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#1a1a1a',
    margin: 0,
  },
  newReleaseButton: {
    padding: '12px 24px',
    backgroundColor: '#1db954',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
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
  releasesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
    gap: '24px',
  },
  releaseCard: {
    padding: '24px',
  },
  releaseHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px',
  },
  releaseTitle: {
    fontSize: '20px',
    fontWeight: '600',
    margin: 0,
    color: '#1a1a1a',
  },
  statusBadge: {
    padding: '4px 12px',
    borderRadius: '12px',
    fontSize: '12px',
    fontWeight: '600',
    color: '#fff',
    textTransform: 'capitalize',
  },
  releaseDate: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '16px',
    color: '#666',
  },
  countdown: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px',
    backgroundColor: '#f0f8ff',
    borderRadius: '8px',
    marginBottom: '16px',
  },
  countdownText: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#1db954',
  },
  progressSection: {
    marginBottom: '16px',
  },
  progressHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '8px',
  },
  progressLabel: {
    fontSize: '14px',
    color: '#666',
  },
  progressPercent: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#1db954',
  },
  progressBar: {
    height: '8px',
    backgroundColor: '#e0e0e0',
    borderRadius: '4px',
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#1db954',
    transition: 'width 0.3s',
  },
  checklist: {
    marginBottom: '16px',
  },
  checklistTitle: {
    fontSize: '14px',
    fontWeight: '600',
    marginBottom: '12px',
    color: '#1a1a1a',
  },
  checklistItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '8px',
  },
  checklistText: {
    fontSize: '14px',
    color: '#666',
  },
  checklistTextDone: {
    textDecoration: 'line-through',
    color: '#999',
  },
  releaseActions: {
    display: 'flex',
    gap: '12px',
    marginTop: '16px',
  },
  actionButton: {
    flex: 1,
    padding: '10px',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    backgroundColor: '#fff',
    cursor: 'pointer',
    fontSize: '14px',
  },
  actionButtonPrimary: {
    flex: 1,
    padding: '10px',
    border: 'none',
    borderRadius: '8px',
    backgroundColor: '#1db954',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '600',
  },
};

export default Releases;
