import Card from '../components/Card';
import { Calendar as CalendarIcon, Plus } from 'lucide-react';

const Content = () => {
  const suggestedContent = [
    { type: 'Reel', idea: 'Bastidores da gravação', platform: 'Instagram' },
    { type: 'Short', idea: 'Preview de 15s da nova música', platform: 'YouTube' },
    { type: 'TikTok', idea: 'Challenge com sua música', platform: 'TikTok' },
    { type: 'Story', idea: 'Contagem regressiva do lançamento', platform: 'Instagram' },
  ];

  const scheduledPosts = [
    { date: '2026-02-20', content: 'Anúncio do single', platforms: ['Instagram', 'Facebook'] },
    { date: '2026-02-25', content: 'Teaser 1', platforms: ['TikTok', 'Instagram'] },
    { date: '2026-03-01', content: 'Teaser 2', platforms: ['YouTube', 'Instagram'] },
  ];

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <h1 style={styles.pageTitle}>Planejamento de Conteúdo</h1>
        <button style={styles.newPostButton}>
          <Plus size={20} />
          Novo Post
        </button>
      </div>

      <Card style={styles.infoCard}>
        <h3 style={styles.infoTitle}>📅 Organize seu conteúdo</h3>
        <p style={styles.infoText}>
          Use o calendário de posts, receba sugestões automáticas de conteúdo e 
          reaproveite trechos das suas músicas para criar reels e shorts.
        </p>
      </Card>

      <div style={styles.contentGrid}>
        <Card title="Sugestões de Conteúdo" style={styles.suggestionsCard}>
          <div style={styles.suggestionsList}>
            {suggestedContent.map((suggestion, index) => (
              <div key={index} style={styles.suggestionItem}>
                <div style={styles.suggestionInfo}>
                  <span style={styles.suggestionType}>{suggestion.type}</span>
                  <p style={styles.suggestionIdea}>{suggestion.idea}</p>
                  <span style={styles.suggestionPlatform}>{suggestion.platform}</span>
                </div>
                <button style={styles.useButton}>Usar</button>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Posts Agendados" style={styles.scheduledCard}>
          <div style={styles.scheduledList}>
            {scheduledPosts.map((post, index) => (
              <div key={index} style={styles.scheduledItem}>
                <div style={styles.scheduledDate}>
                  <CalendarIcon size={16} />
                  <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                </div>
                <p style={styles.scheduledContent}>{post.content}</p>
                <div style={styles.platformTags}>
                  {post.platforms.map((platform, i) => (
                    <span key={i} style={styles.platformTag}>{platform}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>
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
  newPostButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
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
  contentGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: '24px',
  },
  suggestionsCard: {
    minHeight: '500px',
  },
  scheduledCard: {
    minHeight: '500px',
  },
  suggestionsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  suggestionItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
  },
  suggestionInfo: {
    flex: 1,
  },
  suggestionType: {
    fontSize: '12px',
    fontWeight: '600',
    color: '#1db954',
    textTransform: 'uppercase',
  },
  suggestionIdea: {
    fontSize: '14px',
    margin: '8px 0',
    color: '#1a1a1a',
  },
  suggestionPlatform: {
    fontSize: '12px',
    color: '#666',
  },
  useButton: {
    padding: '8px 16px',
    backgroundColor: '#1db954',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    fontSize: '14px',
    cursor: 'pointer',
  },
  scheduledList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  scheduledItem: {
    padding: '16px',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
  },
  scheduledDate: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '8px',
    color: '#666',
    fontSize: '14px',
  },
  scheduledContent: {
    fontSize: '16px',
    fontWeight: '600',
    margin: '8px 0',
    color: '#1a1a1a',
  },
  platformTags: {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
  },
  platformTag: {
    padding: '4px 8px',
    backgroundColor: '#1db954',
    color: '#fff',
    borderRadius: '4px',
    fontSize: '12px',
  },
};

export default Content;
