// Mock data para demonstração do MVP
export const mockStreamingData = [
  { name: 'Jan', streams: 12500, revenue: 45.50 },
  { name: 'Fev', streams: 15800, revenue: 57.42 },
  { name: 'Mar', streams: 19200, revenue: 69.84 },
  { name: 'Abr', streams: 23400, revenue: 85.14 },
  { name: 'Mai', streams: 28900, revenue: 105.09 },
  { name: 'Jun', streams: 34200, revenue: 124.38 },
];

export const mockTopSongs = [
  { name: 'Noite Perfeita', streams: 45200, revenue: 164.48 },
  { name: 'Sol da Manhã', streams: 38500, revenue: 140.05 },
  { name: 'Estrelas', streams: 32100, revenue: 116.76 },
  { name: 'Caminho Longo', streams: 28700, revenue: 104.39 },
  { name: 'Horizonte', streams: 24300, revenue: 88.39 },
];

export const mockSocialStats = {
  instagram: { followers: 45230, growth: 12.5, engagement: 4.8 },
  tiktok: { followers: 78900, growth: 28.3, engagement: 7.2 },
  youtube: { subscribers: 23400, growth: 8.7, views: 456789 },
  spotify: { followers: 12800, growth: 15.2, monthlyListeners: 34567 },
};

export const mockCountries = [
  { country: 'Brasil', streams: 125400, percentage: 45 },
  { country: 'Portugal', streams: 56200, percentage: 20 },
  { country: 'Estados Unidos', streams: 42300, percentage: 15 },
  { country: 'Espanha', streams: 28100, percentage: 10 },
  { country: 'Outros', streams: 27800, percentage: 10 },
];

export const mockPlatforms = [
  { id: 'spotify', name: 'Spotify', connected: false, icon: '🎵' },
  { id: 'apple-music', name: 'Apple Music', connected: false, icon: '🍎' },
  { id: 'youtube', name: 'YouTube', connected: false, icon: '▶️' },
  { id: 'instagram', name: 'Instagram', connected: false, icon: '📸' },
  { id: 'tiktok', name: 'TikTok', connected: false, icon: '🎬' },
  { id: 'facebook', name: 'Facebook', connected: false, icon: '👥' },
  { id: 'soundcloud', name: 'SoundCloud', connected: false, icon: '☁️' },
  { id: 'distrokid', name: 'DistroKid', connected: false, icon: '💿' },
  { id: 'tunecore', name: 'TuneCore', connected: false, icon: '🎼' },
];

export const mockReleases = [
  {
    id: 1,
    title: 'Verão 2026',
    date: '2026-03-15',
    status: 'planejado',
    checklist: [
      { item: 'Capa da música', done: true },
      { item: 'ISRC registrado', done: true },
      { item: 'Pre-save link criado', done: false },
      { item: 'Posts programados', done: false },
    ],
  },
  {
    id: 2,
    title: 'Acústico ao Vivo',
    date: '2026-04-20',
    status: 'em preparação',
    checklist: [
      { item: 'Capa da música', done: false },
      { item: 'ISRC registrado', done: false },
      { item: 'Pre-save link criado', done: false },
      { item: 'Posts programados', done: false },
    ],
  },
];

export const mockFinancialData = {
  totalRevenue: 5234.67,
  adSpend: 1456.00,
  profit: 3778.67,
  projectedGrowth: 24.5,
};
