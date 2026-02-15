import Card from '../components/Card';
import { User, Bell, Lock, CreditCard, Check } from 'lucide-react';

const Settings = () => {
  const plans = [
    {
      name: 'Free',
      price: '0€',
      period: 'sempre',
      features: [
        'Dashboard básico',
        'Conectar até 3 plataformas',
        'Estatísticas básicas',
        'Suporte por email',
      ],
      current: true,
    },
    {
      name: 'Pro',
      price: '9€',
      period: 'mês',
      features: [
        'Dashboard completo',
        'Plataformas ilimitadas',
        'Estatísticas avançadas',
        'IA Insights',
        'Gestão de anúncios',
        'Calendário de conteúdo',
        'Suporte prioritário',
      ],
      current: false,
      highlighted: true,
    },
    {
      name: 'Label',
      price: '49€',
      period: 'mês',
      features: [
        'Tudo do Pro',
        'Múltiplos artistas',
        'Dashboard de produtora',
        'Analytics avançados',
        'API access',
        'Suporte dedicado',
      ],
      current: false,
    },
  ];

  return (
    <div style={styles.page}>
      <h1 style={styles.pageTitle}>Configurações</h1>

      <Card style={styles.infoCard}>
        <h3 style={styles.infoTitle}>⚙️ Personalize sua experiência</h3>
        <p style={styles.infoText}>
          Gerencie sua conta, notificações, privacidade e escolha o plano ideal para você.
        </p>
      </Card>

      <div style={styles.settingsGrid}>
        <Card title="Perfil">
          <div style={styles.settingSection}>
            <div style={styles.settingItem}>
              <User size={20} />
              <div style={styles.settingInfo}>
                <h4 style={styles.settingLabel}>Nome do Artista</h4>
                <p style={styles.settingValue}>Artista Demo</p>
              </div>
              <button style={styles.editButton}>Editar</button>
            </div>
            <div style={styles.settingItem}>
              <User size={20} />
              <div style={styles.settingInfo}>
                <h4 style={styles.settingLabel}>Email</h4>
                <p style={styles.settingValue}>artista@musichub.pro</p>
              </div>
              <button style={styles.editButton}>Editar</button>
            </div>
          </div>
        </Card>

        <Card title="Notificações">
          <div style={styles.settingSection}>
            <div style={styles.settingItem}>
              <Bell size={20} />
              <div style={styles.settingInfo}>
                <h4 style={styles.settingLabel}>Email de Novos Streams</h4>
                <p style={styles.settingDescription}>Receba atualizações diárias</p>
              </div>
              <input type="checkbox" defaultChecked style={styles.checkbox} />
            </div>
            <div style={styles.settingItem}>
              <Bell size={20} />
              <div style={styles.settingInfo}>
                <h4 style={styles.settingLabel}>Insights da IA</h4>
                <p style={styles.settingDescription}>Recomendações semanais</p>
              </div>
              <input type="checkbox" defaultChecked style={styles.checkbox} />
            </div>
          </div>
        </Card>

        <Card title="Segurança">
          <div style={styles.settingSection}>
            <div style={styles.settingItem}>
              <Lock size={20} />
              <div style={styles.settingInfo}>
                <h4 style={styles.settingLabel}>Senha</h4>
                <p style={styles.settingValue}>••••••••</p>
              </div>
              <button style={styles.editButton}>Alterar</button>
            </div>
            <div style={styles.settingItem}>
              <Lock size={20} />
              <div style={styles.settingInfo}>
                <h4 style={styles.settingLabel}>Autenticação em 2 Fatores</h4>
                <p style={styles.settingDescription}>Proteja sua conta</p>
              </div>
              <button style={styles.enableButton}>Ativar</button>
            </div>
          </div>
        </Card>
      </div>

      <div style={styles.plansSection}>
        <h2 style={styles.plansTitle}>Planos e Preços</h2>
        <p style={styles.plansSubtitle}>Escolha o plano ideal para seu momento de carreira</p>
        
        <div style={styles.plansGrid}>
          {plans.map((plan, index) => (
            <Card key={index} style={{
              ...styles.planCard,
              ...(plan.highlighted ? styles.planCardHighlighted : {}),
            }}>
              {plan.highlighted && <div style={styles.badge}>Recomendado</div>}
              <h3 style={styles.planName}>{plan.name}</h3>
              <div style={styles.planPrice}>
                <span style={styles.priceAmount}>{plan.price}</span>
                <span style={styles.pricePeriod}>/{plan.period}</span>
              </div>
              <ul style={styles.featuresList}>
                {plan.features.map((feature, i) => (
                  <li key={i} style={styles.featureItem}>
                    <Check size={16} color="#1db954" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button style={
                plan.current 
                  ? styles.planButtonCurrent 
                  : plan.highlighted 
                    ? styles.planButtonHighlighted 
                    : styles.planButton
              }>
                {plan.current ? 'Plano Atual' : 'Escolher Plano'}
              </button>
            </Card>
          ))}
        </div>
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
  settingsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '24px',
    marginBottom: '48px',
  },
  settingSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  settingItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '16px',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
  },
  settingInfo: {
    flex: 1,
  },
  settingLabel: {
    fontSize: '14px',
    fontWeight: '600',
    margin: '0 0 4px 0',
    color: '#1a1a1a',
  },
  settingValue: {
    fontSize: '14px',
    color: '#666',
    margin: 0,
  },
  settingDescription: {
    fontSize: '12px',
    color: '#999',
    margin: 0,
  },
  editButton: {
    padding: '6px 16px',
    border: '1px solid #e0e0e0',
    borderRadius: '6px',
    backgroundColor: '#fff',
    cursor: 'pointer',
    fontSize: '14px',
  },
  enableButton: {
    padding: '6px 16px',
    border: 'none',
    borderRadius: '6px',
    backgroundColor: '#1db954',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '600',
  },
  checkbox: {
    width: '20px',
    height: '20px',
    cursor: 'pointer',
  },
  plansSection: {
    marginTop: '48px',
  },
  plansTitle: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '8px',
    color: '#1a1a1a',
    textAlign: 'center',
  },
  plansSubtitle: {
    fontSize: '16px',
    color: '#666',
    marginBottom: '32px',
    textAlign: 'center',
  },
  plansGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px',
  },
  planCard: {
    position: 'relative',
    padding: '32px',
    textAlign: 'center',
  },
  planCardHighlighted: {
    border: '2px solid #1db954',
  },
  badge: {
    position: 'absolute',
    top: '16px',
    right: '16px',
    padding: '4px 12px',
    backgroundColor: '#1db954',
    color: '#fff',
    borderRadius: '12px',
    fontSize: '12px',
    fontWeight: '600',
  },
  planName: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '16px',
    color: '#1a1a1a',
  },
  planPrice: {
    marginBottom: '24px',
  },
  priceAmount: {
    fontSize: '48px',
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  pricePeriod: {
    fontSize: '16px',
    color: '#666',
  },
  featuresList: {
    listStyle: 'none',
    padding: 0,
    margin: '0 0 24px 0',
    textAlign: 'left',
  },
  featureItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '12px',
    fontSize: '14px',
    color: '#666',
  },
  planButton: {
    width: '100%',
    padding: '12px',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    backgroundColor: '#fff',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '600',
  },
  planButtonHighlighted: {
    width: '100%',
    padding: '12px',
    border: 'none',
    borderRadius: '8px',
    backgroundColor: '#1db954',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '600',
  },
  planButtonCurrent: {
    width: '100%',
    padding: '12px',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    backgroundColor: '#f5f5f5',
    color: '#666',
    cursor: 'not-allowed',
    fontSize: '16px',
    fontWeight: '600',
  },
};

export default Settings;
