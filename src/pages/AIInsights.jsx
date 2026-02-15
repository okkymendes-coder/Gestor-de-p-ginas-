import Card from '../components/Card';
import { Brain, TrendingUp, Calendar, Target, Lightbulb } from 'lucide-react';

const AIInsights = () => {
  const insights = [
    {
      icon: TrendingUp,
      title: 'Melhor Horário para Postar',
      description: 'Baseado no engajamento dos últimos 30 dias, seus seguidores estão mais ativos às 19h-21h.',
      action: 'Agendar posts',
      color: '#1db954',
    },
    {
      icon: Calendar,
      title: 'Momento Ideal para Lançamento',
      description: 'Sexta-feira, 15 de março é o dia ideal para seu próximo lançamento, baseado em histórico de streams.',
      action: 'Criar lançamento',
      color: '#2196f3',
    },
    {
      icon: Target,
      title: 'Investimento Recomendado',
      description: 'A música "Noite Perfeita" tem alto potencial. Recomendamos investir mais €80-120 em anúncios.',
      action: 'Criar campanha',
      color: '#ff9800',
    },
    {
      icon: Lightbulb,
      title: 'Oportunidade de Crescimento',
      description: 'Seu público no TikTok cresceu 28% este mês. Foque em criar mais conteúdo para essa plataforma.',
      action: 'Ver calendário',
      color: '#e91e63',
    },
  ];

  const strategies = [
    {
      title: 'Estratégia de Conteúdo',
      items: [
        'Poste 3-4 reels por semana no Instagram',
        'Crie challenges no TikTok com suas músicas',
        'Compartilhe bastidores toda terça-feira',
      ],
    },
    {
      title: 'Estratégia de Lançamento',
      items: [
        'Comece teaser 2 semanas antes',
        'Use pre-save para aumentar streams no dia 1',
        'Planeje 5-7 posts diferentes para o dia',
      ],
    },
    {
      title: 'Estratégia de Monetização',
      items: [
        'Foque em Spotify e Apple Music para receita',
        'Use YouTube para descoberta de novos fãs',
        'Invista em anúncios para músicas com +10K streams',
      ],
    },
  ];

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <div>
          <h1 style={styles.pageTitle}>IA Insights</h1>
          <p style={styles.subtitle}>Recomendações personalizadas baseadas em seus dados</p>
        </div>
        <Brain size={48} color="#1db954" />
      </div>

      <Card style={styles.infoCard}>
        <h3 style={styles.infoTitle}>🤖 Inteligência Artificial para Artistas</h3>
        <p style={styles.infoText}>
          Nossa IA analisa seus dados e sugere o melhor tipo de conteúdo, quando lançar música, 
          se vale a pena investir mais numa faixa e estratégias personalizadas para seu crescimento.
        </p>
      </Card>

      <div style={styles.insightsGrid}>
        {insights.map((insight, index) => {
          const Icon = insight.icon;
          return (
            <Card key={index}>
              <div style={styles.insightCard}>
                <div style={{...styles.insightIcon, backgroundColor: insight.color}}>
                  <Icon size={24} color="#fff" />
                </div>
                <h3 style={styles.insightTitle}>{insight.title}</h3>
                <p style={styles.insightDescription}>{insight.description}</p>
                <button style={{...styles.insightButton, borderColor: insight.color, color: insight.color}}>
                  {insight.action}
                </button>
              </div>
            </Card>
          );
        })}
      </div>

      <Card title="Estratégias Personalizadas">
        <div style={styles.strategiesGrid}>
          {strategies.map((strategy, index) => (
            <div key={index} style={styles.strategyCard}>
              <h4 style={styles.strategyTitle}>{strategy.title}</h4>
              <ul style={styles.strategyList}>
                {strategy.items.map((item, i) => (
                  <li key={i} style={styles.strategyItem}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Card>

      <Card title="Análise de Performance" style={{marginTop: '24px'}}>
        <div style={styles.performanceGrid}>
          <div style={styles.performanceItem}>
            <h4 style={styles.performanceLabel}>Taxa de Crescimento</h4>
            <div style={styles.performanceBar}>
              <div style={{...styles.performanceFill, width: '75%', backgroundColor: '#1db954'}} />
            </div>
            <p style={styles.performanceText}>75% - Excelente</p>
          </div>
          <div style={styles.performanceItem}>
            <h4 style={styles.performanceLabel}>Engajamento</h4>
            <div style={styles.performanceBar}>
              <div style={{...styles.performanceFill, width: '82%', backgroundColor: '#2196f3'}} />
            </div>
            <p style={styles.performanceText}>82% - Muito bom</p>
          </div>
          <div style={styles.performanceItem}>
            <h4 style={styles.performanceLabel}>Consistência</h4>
            <div style={styles.performanceBar}>
              <div style={{...styles.performanceFill, width: '60%', backgroundColor: '#ff9800'}} />
            </div>
            <p style={styles.performanceText}>60% - Pode melhorar</p>
          </div>
        </div>
      </Card>
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
  subtitle: {
    fontSize: '16px',
    color: '#666',
    margin: '8px 0 0 0',
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
  insightsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '24px',
    marginBottom: '32px',
  },
  insightCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  insightIcon: {
    width: '56px',
    height: '56px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '16px',
  },
  insightTitle: {
    fontSize: '18px',
    fontWeight: '600',
    margin: '0 0 12px 0',
    color: '#1a1a1a',
  },
  insightDescription: {
    fontSize: '14px',
    color: '#666',
    lineHeight: '1.6',
    marginBottom: '16px',
  },
  insightButton: {
    padding: '10px 20px',
    border: '2px solid',
    borderRadius: '8px',
    backgroundColor: 'transparent',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  strategiesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px',
  },
  strategyCard: {
    padding: '20px',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
  },
  strategyTitle: {
    fontSize: '16px',
    fontWeight: '600',
    marginBottom: '16px',
    color: '#1a1a1a',
  },
  strategyList: {
    margin: 0,
    paddingLeft: '20px',
  },
  strategyItem: {
    fontSize: '14px',
    color: '#666',
    marginBottom: '8px',
    lineHeight: '1.6',
  },
  performanceGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '24px',
  },
  performanceItem: {
    padding: '16px',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
  },
  performanceLabel: {
    fontSize: '14px',
    fontWeight: '600',
    marginBottom: '12px',
    color: '#1a1a1a',
  },
  performanceBar: {
    height: '12px',
    backgroundColor: '#e0e0e0',
    borderRadius: '6px',
    overflow: 'hidden',
    marginBottom: '8px',
  },
  performanceFill: {
    height: '100%',
  },
  performanceText: {
    fontSize: '14px',
    color: '#666',
    margin: 0,
  },
};

export default AIInsights;
