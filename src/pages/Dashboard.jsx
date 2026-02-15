import Card from '../components/Card';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, Users, Music, DollarSign } from 'lucide-react';
import { mockStreamingData, mockTopSongs, mockSocialStats, mockCountries } from '../data/mockData';
import { formatCurrency, formatNumber, formatPercentage } from '../utils/formatters';

const Dashboard = () => {
  const stats = [
    {
      label: 'Streams Totais',
      value: formatNumber(174200),
      change: '+15.3%',
      icon: Music,
      color: '#1db954',
    },
    {
      label: 'Seguidores Totais',
      value: formatNumber(160330),
      change: '+12.8%',
      icon: Users,
      color: '#e91e63',
    },
    {
      label: 'Receita do Mês',
      value: formatCurrency(632.85),
      change: '+18.2%',
      icon: DollarSign,
      color: '#ff9800',
    },
    {
      label: 'Taxa de Engajamento',
      value: '6.2%',
      change: '+2.1%',
      icon: TrendingUp,
      color: '#2196f3',
    },
  ];

  return (
    <div style={styles.dashboard}>
      <h1 style={styles.pageTitle}>Dashboard</h1>
      
      {/* Stats Grid */}
      <div style={styles.statsGrid}>
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} style={styles.statCard}>
              <div style={styles.statHeader}>
                <div style={{ ...styles.iconBox, backgroundColor: stat.color }}>
                  <Icon size={24} color="#fff" />
                </div>
                <span style={styles.statChange}>{stat.change}</span>
              </div>
              <h3 style={styles.statValue}>{stat.value}</h3>
              <p style={styles.statLabel}>{stat.label}</p>
            </Card>
          );
        })}
      </div>

      {/* Charts Row */}
      <div style={styles.chartsRow}>
        <Card title="Crescimento de Streams" style={styles.chartCard}>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={mockStreamingData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="streams" stroke="#1db954" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card title="Top 5 Músicas" style={styles.chartCard}>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={mockTopSongs}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="streams" fill="#1db954" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Social Stats & Countries */}
      <div style={styles.chartsRow}>
        <Card title="Redes Sociais" style={styles.chartCard}>
          <div style={styles.socialList}>
            {Object.entries(mockSocialStats).map(([platform, data]) => (
              <div key={platform} style={styles.socialItem}>
                <div style={styles.socialInfo}>
                  <h4 style={styles.socialName}>{platform.charAt(0).toUpperCase() + platform.slice(1)}</h4>
                  <p style={styles.socialFollowers}>
                    {formatNumber(data.followers || data.subscribers)} {data.subscribers ? 'inscritos' : 'seguidores'}
                  </p>
                </div>
                <div style={styles.socialStats}>
                  <span style={styles.growth}>{formatPercentage(data.growth)}</span>
                  <span style={styles.engagement}>Eng: {data.engagement}%</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Países Top" style={styles.chartCard}>
          <div style={styles.countriesList}>
            {mockCountries.map((country) => (
              <div key={country.country} style={styles.countryItem}>
                <div style={styles.countryInfo}>
                  <span style={styles.countryName}>{country.country}</span>
                  <span style={styles.countryStreams}>{formatNumber(country.streams)} streams</span>
                </div>
                <div style={styles.progressBar}>
                  <div 
                    style={{
                      ...styles.progressFill,
                      width: `${country.percentage}%`,
                    }}
                  />
                </div>
                <span style={styles.percentage}>{country.percentage}%</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

const styles = {
  dashboard: {
    padding: '32px',
  },
  pageTitle: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '32px',
    color: '#1a1a1a',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '24px',
    marginBottom: '32px',
  },
  statCard: {
    padding: '24px',
  },
  statHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px',
  },
  iconBox: {
    width: '48px',
    height: '48px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statChange: {
    color: '#1db954',
    fontSize: '14px',
    fontWeight: '600',
  },
  statValue: {
    fontSize: '28px',
    fontWeight: 'bold',
    margin: '8px 0',
    color: '#1a1a1a',
  },
  statLabel: {
    fontSize: '14px',
    color: '#666',
    margin: 0,
  },
  chartsRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: '24px',
    marginBottom: '32px',
  },
  chartCard: {
    minHeight: '400px',
  },
  socialList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  socialItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
  },
  socialInfo: {
    flex: 1,
  },
  socialName: {
    fontSize: '16px',
    fontWeight: '600',
    margin: '0 0 4px 0',
    textTransform: 'capitalize',
  },
  socialFollowers: {
    fontSize: '14px',
    color: '#666',
    margin: 0,
  },
  socialStats: {
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
  },
  growth: {
    color: '#1db954',
    fontWeight: '600',
  },
  engagement: {
    color: '#666',
    fontSize: '14px',
  },
  countriesList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  countryItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  countryInfo: {
    display: 'flex',
    flexDirection: 'column',
    width: '120px',
  },
  countryName: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#1a1a1a',
  },
  countryStreams: {
    fontSize: '12px',
    color: '#666',
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
  percentage: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#666',
    width: '40px',
    textAlign: 'right',
  },
};

export default Dashboard;
