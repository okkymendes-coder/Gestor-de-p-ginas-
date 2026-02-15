import Card from '../components/Card';
import { formatCurrency } from '../utils/formatters';
import { TrendingUp, DollarSign, CreditCard } from 'lucide-react';

const Ads = () => {
  const campaigns = [
    {
      id: 1,
      name: 'Promoção Single - Instagram',
      platform: 'Meta Ads',
      budget: 150,
      spent: 87.50,
      reach: 45200,
      clicks: 1280,
      roi: 2.4,
    },
    {
      id: 2,
      name: 'YouTube Pre-roll',
      platform: 'Google Ads',
      budget: 200,
      spent: 156.30,
      reach: 78900,
      clicks: 2340,
      roi: 1.8,
    },
  ];

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <h1 style={styles.pageTitle}>Gestão de Anúncios</h1>
        <button style={styles.newCampaignButton}>+ Nova Campanha</button>
      </div>

      <Card style={styles.infoCard}>
        <h3 style={styles.infoTitle}>💰 Maximize seu ROI</h3>
        <p style={styles.infoText}>
          Conecte Meta Ads e Google Ads, crie campanhas simples, monitore ROI e 
          receba recomendações automáticas para otimizar seus anúncios.
        </p>
      </Card>

      <div style={styles.statsGrid}>
        <Card>
          <div style={styles.statCard}>
            <div style={styles.statIcon}>
              <DollarSign size={24} color="#1db954" />
            </div>
            <div>
              <p style={styles.statLabel}>Gasto Total</p>
              <h3 style={styles.statValue}>{formatCurrency(243.80)}</h3>
            </div>
          </div>
        </Card>
        <Card>
          <div style={styles.statCard}>
            <div style={styles.statIcon}>
              <TrendingUp size={24} color="#2196f3" />
            </div>
            <div>
              <p style={styles.statLabel}>Alcance Total</p>
              <h3 style={styles.statValue}>124.1K</h3>
            </div>
          </div>
        </Card>
        <Card>
          <div style={styles.statCard}>
            <div style={styles.statIcon}>
              <CreditCard size={24} color="#ff9800" />
            </div>
            <div>
              <p style={styles.statLabel}>ROI Médio</p>
              <h3 style={styles.statValue}>2.1x</h3>
            </div>
          </div>
        </Card>
      </div>

      <Card title="Campanhas Ativas">
        <div style={styles.campaignsList}>
          {campaigns.map((campaign) => (
            <div key={campaign.id} style={styles.campaignItem}>
              <div style={styles.campaignHeader}>
                <h4 style={styles.campaignName}>{campaign.name}</h4>
                <span style={styles.campaignPlatform}>{campaign.platform}</span>
              </div>
              <div style={styles.campaignStats}>
                <div style={styles.campaignStat}>
                  <span style={styles.campaignStatLabel}>Orçamento</span>
                  <span style={styles.campaignStatValue}>{formatCurrency(campaign.budget)}</span>
                </div>
                <div style={styles.campaignStat}>
                  <span style={styles.campaignStatLabel}>Gasto</span>
                  <span style={styles.campaignStatValue}>{formatCurrency(campaign.spent)}</span>
                </div>
                <div style={styles.campaignStat}>
                  <span style={styles.campaignStatLabel}>Alcance</span>
                  <span style={styles.campaignStatValue}>{campaign.reach.toLocaleString()}</span>
                </div>
                <div style={styles.campaignStat}>
                  <span style={styles.campaignStatLabel}>Cliques</span>
                  <span style={styles.campaignStatValue}>{campaign.clicks}</span>
                </div>
                <div style={styles.campaignStat}>
                  <span style={styles.campaignStatLabel}>ROI</span>
                  <span style={{...styles.campaignStatValue, color: '#1db954'}}>{campaign.roi}x</span>
                </div>
              </div>
              <div style={styles.campaignProgress}>
                <div style={styles.progressBar}>
                  <div style={{
                    ...styles.progressFill,
                    width: `${(campaign.spent / campaign.budget) * 100}%`,
                  }} />
                </div>
                <span style={styles.progressText}>
                  {Math.round((campaign.spent / campaign.budget) * 100)}% usado
                </span>
              </div>
            </div>
          ))}
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
  newCampaignButton: {
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
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '24px',
    marginBottom: '32px',
  },
  statCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  statIcon: {
    width: '48px',
    height: '48px',
    borderRadius: '12px',
    backgroundColor: '#f5f5f5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statLabel: {
    fontSize: '14px',
    color: '#666',
    margin: '0 0 4px 0',
  },
  statValue: {
    fontSize: '24px',
    fontWeight: 'bold',
    margin: 0,
    color: '#1a1a1a',
  },
  campaignsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  campaignItem: {
    padding: '20px',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
  },
  campaignHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px',
  },
  campaignName: {
    fontSize: '18px',
    fontWeight: '600',
    margin: 0,
    color: '#1a1a1a',
  },
  campaignPlatform: {
    padding: '4px 12px',
    backgroundColor: '#1db954',
    color: '#fff',
    borderRadius: '12px',
    fontSize: '12px',
    fontWeight: '600',
  },
  campaignStats: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
    gap: '16px',
    marginBottom: '16px',
  },
  campaignStat: {
    display: 'flex',
    flexDirection: 'column',
  },
  campaignStatLabel: {
    fontSize: '12px',
    color: '#666',
    marginBottom: '4px',
  },
  campaignStatValue: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#1a1a1a',
  },
  campaignProgress: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  progressBar: {
    flex: 1,
    height: '8px',
    backgroundColor: '#e0e0e0',
    borderRadius: '4px',
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#1db954',
  },
  progressText: {
    fontSize: '14px',
    color: '#666',
    whiteSpace: 'nowrap',
  },
};

export default Ads;
