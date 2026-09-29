export type Content = {
  id: string;
  title: string;
  type: 'film' | 'serie';
  year: number;
  rating: number;
  duration?: string;
  seasons?: number;
  genres: string[];
  image: string;
  description: string;
  progress?: number;
  badge?: 'NOUVEAU' | 'EXCLUSIF' | 'TENDANCE';
};

export type Channel = {
  id: string;
  name: string;
  number: number;
  category: string;
  logo: string;
  program: string;
  live: boolean;
  viewers?: string;
};

export const contents: Content[] = [
  {
    id: 'f1',
    title: 'Les Échos du Silence',
    type: 'film',
    year: 2025,
    rating: 8.7,
    duration: '2h 14min',
    genres: ['Thriller', 'Drame'],
    image: '/images/show-1.jpg',
    description: 'Une journaliste enquête sur une série de disparitions dans une station balnéaire oubliée.',
    badge: 'EXCLUSIF',
  },
  {
    id: 's1',
    title: 'Nuit de Velours',
    type: 'serie',
    year: 2024,
    rating: 9.1,
    seasons: 3,
    genres: ['Policier', 'Noir'],
    image: '/images/show-2.jpg',
    description: 'Une brigade d\'élite enquête sur des crimes commis dans le Paris des années 30.',
    progress: 65,
    badge: 'TENDANCE',
  },
  {
    id: 'f2',
    title: 'Horizons Brisés',
    type: 'film',
    year: 2025,
    rating: 7.9,
    duration: '1h 58min',
    genres: ['Science-fiction'],
    image: '/images/show-3.jpg',
    description: 'Un astronaute perdu dans l\'espace tente de rentrer sur une Terre qui ne lui ressemble plus.',
    badge: 'NOUVEAU',
  },
  {
    id: 's2',
    title: 'Le Dernier Carrousel',
    type: 'serie',
    year: 2024,
    rating: 8.4,
    seasons: 2,
    genres: ['Drame', 'Famille'],
    image: '/images/show-4.jpg',
    description: 'Trois générations d\'une dynastie de cirque s\'affrontent pour l\'héritage familial.',
  },
  {
    id: 'f3',
    title: 'Manoir d\'Hiver',
    type: 'film',
    year: 2024,
    rating: 8.0,
    duration: '2h 02min',
    genres: ['Horreur', 'Mystère'],
    image: '/images/show-5.jpg',
    description: 'Une famille s\'installe dans un manoir où les miroirs semblent cacher quelque chose.',
  },
  {
    id: 'f4',
    title: 'Poussière d\'Étoiles',
    type: 'film',
    year: 2025,
    rating: 8.2,
    duration: '1h 47min',
    genres: ['Romance', 'Aventure'],
    image: '/images/show-6.jpg',
    description: 'Un road-trip dans le désert marocain où deux solitudes apprennent à se reconnaître.',
    badge: 'NOUVEAU',
  },
  {
    id: 's3',
    title: 'Code Source',
    type: 'serie',
    year: 2025,
    rating: 9.0,
    seasons: 1,
    genres: ['Thriller', 'Technologie'],
    image: '/images/show-7.jpg',
    description: 'Une hackeuse révèle un complot qui relie les plus grandes puissances mondiales.',
    progress: 30,
    badge: 'EXCLUSIF',
  },
  {
    id: 'f5',
    title: 'Les Cimes Oubliées',
    type: 'film',
    year: 2023,
    rating: 7.6,
    duration: '2h 18min',
    genres: ['Aventure', 'Drame'],
    image: '/images/show-8.jpg',
    description: 'L\'ascension d\'un sommet himalayen devient un voyage intérieur pour ses alpinistes.',
  },
  {
    id: 's4',
    title: 'Chambre Froide',
    type: 'serie',
    year: 2024,
    rating: 8.6,
    seasons: 4,
    genres: ['Médical', 'Suspense'],
    image: '/images/show-9.jpg',
    description: 'Au cœur d\'un hôpital universitaire, un médecin mène une double vie.',
    progress: 85,
  },
  {
    id: 'f6',
    title: 'Route 88',
    type: 'film',
    year: 2025,
    rating: 7.8,
    duration: '1h 52min',
    genres: ['Action', 'Polar'],
    image: '/images/show-10.jpg',
    description: 'Un pilote clandestin se retrouve traqué par un réseau criminel à travers l\'Europe.',
    badge: 'TENDANCE',
  },
  {
    id: 's5',
    title: 'Scènes de Vie',
    type: 'serie',
    year: 2023,
    rating: 8.3,
    seasons: 5,
    genres: ['Comédie', 'Société'],
    image: '/images/show-11.jpg',
    description: 'Le quotidien d\'une troupe de théâtre de quartier qui rêve du grand soir.',
  },
  {
    id: 'f7',
    title: 'Le Sanctuaire',
    type: 'film',
    year: 2024,
    rating: 8.5,
    duration: '2h 06min',
    genres: ['Historique', 'Drame'],
    image: '/images/show-12.jpg',
    description: 'Un archéologue découvre un temple oublié qui déhept les lois de la physique.',
    badge: 'EXCLUSIF',
  },
];

export const channels: Channel[] = [
  { id: 'tf1', name: 'TF1', number: 1, category: 'Généraliste', logo: 'TF1', program: 'Journal de 20h', live: true, viewers: '2.1M' },
  { id: 'f2', name: 'France 2', number: 2, category: 'Généraliste', logo: 'F2', program: 'Tout le monde veut savoir', live: true, viewers: '1.4M' },
  { id: 'f3', name: 'France 3', number: 3, category: 'Régionale', logo: 'F3', program: 'Des racines et des ailes', live: true, viewers: '890K' },
  { id: 'canal', name: 'Canal+', number: 4, category: 'Premium', logo: 'C+', program: 'Le Cercle — Magazine', live: true, viewers: '1.7M' },
  { id: 'france5', name: 'France 5', number: 5, category: 'Documentaire', logo: 'F5', program: 'La Galerie France 5', live: true, viewers: '420K' },
  { id: 'm6', name: 'M6', number: 6, category: 'Généraliste', logo: 'M6', program: 'Top Chef — Épisode 12', live: true, viewers: '1.9M' },
  { id: 'arte', name: 'Arte', number: 7, category: 'Culture', logo: 'ARTE', program: 'Construire demain', live: true, viewers: '560K' },
  { id: 'cnews', name: 'CNEWS', number: 8, category: 'Info', logo: 'CN', program: 'La Matinale', live: true, viewers: '720K' },
  { id: 'rmc', name: 'RMC Découverte', number: 9, category: 'Documentaire', logo: 'RMC', program: 'Routes Mythiques', live: false },
  { id: 'bfm', name: 'BFM TV', number: 10, category: 'Info', logo: 'BFM', program: 'Bonsoir BFM', live: true, viewers: '610K' },
  { id: 'lci', name: 'LCI', number: 11, category: 'Info', logo: 'LCI', program: '24h Pujadas', live: true, viewers: '340K' },
  { id: 'tv5', name: 'TV5 Monde', number: 12, category: 'International', logo: 'TV5', program: 'Le Journal de la RTS', live: false },
];

export const genres = [
  { id: 'films', label: 'Films', icon: 'film' },
  { id: 'series', label: 'Séries', icon: 'series' },
  { id: 'direct', label: 'Direct', icon: 'live' },
  { id: 'sport', label: 'Sport', icon: 'sport' },
  { id: 'doc', label: 'Docs', icon: 'doc' },
  { id: 'jeunesse', label: 'Jeunesse', icon: 'kid' },
  { id: 'musique', label: 'Musique', icon: 'music' },
  { id: 'info', label: 'Info', icon: 'news' },
];

export const heroIcons = [
  {
    id: 'films',
    label: 'Films',
    sublabel: 'Cinéma en illimité',
    href: '/accueil?cat=films',
  },
  {
    id: 'series',
    label: 'Séries',
    sublabel: 'Saisons complètes',
    href: '/accueil?cat=series',
  },
  {
    id: 'direct',
    label: 'Direct',
    sublabel: 'Chaînes en direct',
    href: '/direct',
  },
];