import Card from '../components/Card';
import { mockFinancialData, mockTopSongs } from '../data/mockData';
import { formatCurrency, formatPercentage } from '../utils/formatters';
import { DollarSign, TrendingUp, TrendingDown, PieChart } from 'lucide-react';

const Financial = () => {
  return (
    <div style={styles.page}>
      <h1 style={styles.pageTitle}>Controle Financeiro</h1>

      <Card style={styles.infoCard}>
        <h3 style={styles.infoTitle}>💵 Gestão financeira completa</h3>
        <p style={styles.infoText}>
          Acompanhe quanto cada música gerou, quanto foi gasto em anúncios, 
          seu lucro real e projeções de crescimento.
        </p>
      </Card>

      <div style={styles.statsGrid}>
        <Card>
          <div style={styles.statCard}>
            <div style={{...styles.statIcon, backgroundColor: '#e8f5e9'}}>
              <DollarSign size={24} color="#1db954" />
            </div>
            <div>
              <p style={styles.statLabel}>Receita Total</p>
              <h3 style={styles.statValue}>{formatCurrency(mockFinancialData.totalRevenue)}</h3>
              <span style={styles.statGrowth}>+18.5% vs mês anterior</span>
            </div>
          </div>
        </Card>
        <Card>
          <div style={styles.statCard}>
            <div style={{...styles.statIcon, backgroundColor: '#ffebee'}}>
              <TrendingDown size={24} color="#f44336" />
            </div>
            <div>
              <p style={styles.statLabel}>Gastos com Anúncios</p>
              <h3 style={styles.statValue}>{formatCurrency(mockFinancialData.adSpend)}</h3>
              <span style={styles.statNeutral}>Campanha ativa</span>
            </div>
          </div>
        </Card>
        <Card>
          <div style={styles.statCard}>
            <div style={{...styles.statIcon, backgroundColor: '#e3f2fd'}}>
              <PieChart size={24} color="#2196f3" />
            </div>
            <div>
              <p style={styles.statLabel}>Lucro Líquido</p>
              <h3 style={styles.statValue}>{formatCurrency(mockFinancialData.profit)}</h3>
              <span style={styles.statGrowth}>+24.3% vs mês anterior</span>
            </div>
          </div>
        </Card>
        <Card>
          <div style={styles.statCard}>
            <div style={{...styles.statIcon, backgroundColor: '#fff3e0'}}>
              <TrendingUp size={24} color="#ff9800" />
            </div>
            <div>
              <p style={styles.statLabel}>Crescimento Projetado</p>
              <h3 style={styles.statValue}>{formatPercentage(mockFinancialData.projectedGrowth)}</h3>
              <span style={styles.statNeutral}>Próximos 30 dias</span>
            </div>
          </div>
        </Card>
      </div>

      <Card title="Receita por Música">
        <div style={styles.songsList}>
          {mockTopSongs.map((song, index) => (
            <div key={index} style={styles.songItem}>
              <div style={styles.songRank}>{index + 1}</div>
              <div style={styles.songInfo}>
                <h4 style={styles.songName}>{song.name}</h4>
                <p style={styles.songStreams}>{song.streams.toLocaleString()} streams</p>
              </div>
              <div style={styles.songRevenue}>
                <span style={styles.revenueValue}>{formatCurrency(song.revenue)}</span>
                <span style={styles.revenueLabel}>receita</span>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <div style={styles.summaryGrid}>
        <Card title="Resumo Mensal">
          <div style={styles.summaryList}>
            <div style={styles.summaryItem}>
              <span style={styles.summaryLabel}>Receita de Streaming</span>
              <span style={styles.summaryValue}>{formatCurrency(4523.67)}</span>
            </div>
            <div style={styles.summaryItem}>
              <span style={styles.summaryLabel}>Receita de YouTube</span>
              <span style={styles.summaryValue}>{formatCurrency(711.00)}</span>
            </div>
            <div style={styles.summaryDivider} />
            <div style={styles.summaryItem}>
              <span style={styles.summaryLabel}>Gastos com Marketing</span>
              <span style={{...styles.summaryValue, color: '#f44336'}}>-{formatCurrency(1456.00)}</span>
            </div>
            <div style={styles.summaryDivider} />
            <div style={styles.summaryItem}>
              <span style={{...styles.summaryLabel, fontWeight: 'bold'}}>Total Líquido</span>
              <span style={{...styles.summaryValue, fontWeight: 'bold', color: '#1db954'}}>
                {formatCurrency(mockFinancialData.profit)}
              </span>
            </div>
          </div>
        </Card>

        <Card title="Próximos Pagamentos">
          <div style={styles.paymentsList}>
            <div style={styles.paymentItem}>
              <div>
                <h4 style={styles.paymentPlatform}>Spotify</h4>
                <p style={styles.paymentDate}>Previsto: 01 Mar 2026</p>
              </div>
              <span style={styles.paymentAmount}>{formatCurrency(312.45)}</span>
            </div>
            <div style={styles.paymentItem}>
              <div>
                <h4 style={styles.paymentPlatform}>Apple Music</h4>
                <p style={styles.paymentDate}>Previsto: 05 Mar 2026</p>
              </div>
              <span style={styles.paymentAmount}>{formatCurrency(189.30)}</span>
            </div>
            <div style={styles.paymentItem}>
              <div>
                <h4 style={styles.paymentPlatform}>YouTube</h4>
                <p style={styles.paymentDate}>Previsto: 15 Mar 2026</p>
              </div>
              <span style={styles.paymentAmount}>{formatCurrency(78.90)}</span>
            </div>
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
  pageTitle: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '32px',
    color: '#1a1a1a',
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
    gap: '16px',
  },
  statIcon: {
    width: '56px',
    height: '56px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  statLabel: {
    fontSize: '14px',
    color: '#666',
    margin: '0 0 4px 0',
  },
  statValue: {
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '0 0 4px 0',
    color: '#1a1a1a',
  },
  statGrowth: {
    fontSize: '12px',
    color: '#1db954',
    fontWeight: '600',
  },
  statNeutral: {
    fontSize: '12px',
    color: '#666',
  },
  songsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  songItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '16px',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
  },
  songRank: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    backgroundColor: '#1db954',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    flexShrink: 0,
  },
  songInfo: {
    flex: 1,
  },
  songName: {
    fontSize: '16px',
    fontWeight: '600',
    margin: '0 0 4px 0',
    color: '#1a1a1a',
  },
  songStreams: {
    fontSize: '14px',
    color: '#666',
    margin: 0,
  },
  songRevenue: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  revenueValue: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#1db954',
  },
  revenueLabel: {
    fontSize: '12px',
    color: '#666',
  },
  summaryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '24px',
    marginTop: '32px',
  },
  summaryList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  summaryItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  summaryLabel: {
    fontSize: '14px',
    color: '#666',
  },
  summaryValue: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#1a1a1a',
  },
  summaryDivider: {
    height: '1px',
    backgroundColor: '#e0e0e0',
    margin: '8px 0',
  },
  paymentsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  paymentItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
  },
  paymentPlatform: {
    fontSize: '16px',
    fontWeight: '600',
    margin: '0 0 4px 0',
    color: '#1a1a1a',
  },
  paymentDate: {
    fontSize: '14px',
    color: '#666',
    margin: 0,
  },
  paymentAmount: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#1db954',
  },
};

export default Financial;
