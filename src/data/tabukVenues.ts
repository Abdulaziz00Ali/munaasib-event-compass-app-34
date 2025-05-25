
export interface VenueData {
  id: string;
  name: string;
  address: string;
  phone: string;
  rating: number;
  category: string;
  price: number;
  priceUnit: string;
  image: string;
  position: { lat: number, lng: number };
  distance: string;
  description: string;
  features: Array<{
    name: string;
    icon: string;
    description: string;
  }>;
  packages: Array<{
    id: string;
    name: string;
    price: number;
    description: string;
  }>;
  reviews: Array<{
    id: string;
    name: string;
    rating: number;
    date: string;
    comment: string;
  }>;
  gallery: string[];
}

export const tabukWeddingHalls: VenueData[] = [
  {
    id: 'tabuk-1',
    name: 'قصر المملكة للافراح والمناسبات',
    address: 'شارع، البساتين، تبوك 47311',
    phone: '+966 53 624 5557',
    rating: 4.6,
    category: 'venues',
    price: 12000,
    priceUnit: 'ر.س / ليلة',
    image: 'https://source.unsplash.com/featured/?wedding,hall,luxury',
    position: { lat: 28.3998, lng: 36.5662 },
    distance: '2.1 كم',
    description: 'قصر فاخر للأفراح والمناسبات يقع في منطقة البساتين بتبوك، يوفر خدمات متكاملة وتنظيم احترافي للحفلات.',
    features: [
      { name: 'ضيافة فاخرة', icon: '✨', description: 'خدمات ضيافة متكاملة مع أرقى المشروبات والحلويات' },
      { name: 'إضاءة احترافية', icon: '💡', description: 'أنظمة إضاءة متطورة مع تأثيرات متنوعة' },
      { name: 'تنظيم كامل', icon: '👥', description: 'فريق متكامل لإدارة الحفل من البداية للنهاية' },
      { name: 'ركن سيارات', icon: '🚗', description: 'خدمة صف السيارات لجميع الضيوف' }
    ],
    packages: [
      { id: 'gold', name: 'الباقة الذهبية', price: 18000, description: 'قاعة فاخرة + ضيافة كاملة + تنسيق' },
      { id: 'silver', name: 'الباقة الفضية', price: 12000, description: 'قاعة + ضيافة أساسية' },
      { id: 'bronze', name: 'الباقة البرونزية', price: 8000, description: 'قاعة فقط' }
    ],
    reviews: [
      { id: '1', name: 'خالد العتيبي', rating: 5, date: 'قبل 5 أيام', comment: 'قصر رائع وخدمة ممتازة، تنظيم احترافي للحفل' },
      { id: '2', name: 'فاطمة المطيري', rating: 4, date: 'قبل أسبوعين', comment: 'مكان جميل ومناسب للاحتفالات' }
    ],
    gallery: [
      'https://source.unsplash.com/featured/?wedding,hall,luxury',
      'https://source.unsplash.com/featured/?wedding,decoration,gold',
      'https://source.unsplash.com/featured/?wedding,lighting'
    ]
  },
  {
    id: 'tabuk-2',
    name: 'قاعة افراح ليلتي للاحتفالات',
    address: 'البساتين، تبوك 47914',
    phone: '+966 50 179 9918',
    rating: 3.7,
    category: 'venues',
    price: 8000,
    priceUnit: 'ر.س / ليلة',
    image: 'https://source.unsplash.com/featured/?wedding,celebration,hall',
    position: { lat: 28.4012, lng: 36.5698 },
    distance: '2.5 كم',
    description: 'قاعة أفراح مميزة في منطقة البساتين، تتميز بالتصميم العصري والخدمات المتنوعة.',
    features: [
      { name: 'تصميم عصري', icon: '✨', description: 'تصميم داخلي عصري ومميز' },
      { name: 'إضاءة متنوعة', icon: '💡', description: 'خيارات إضاءة متعددة' },
      { name: 'خدمة العملاء', icon: '👥', description: 'فريق خدمة عملاء متاح' },
      { name: 'موقف سيارات', icon: '🚗', description: 'موقف سيارات واسع' }
    ],
    packages: [
      { id: 'gold', name: 'الباقة الذهبية', price: 12000, description: 'قاعة + ضيافة + تنسيق' },
      { id: 'silver', name: 'الباقة الفضية', price: 8000, description: 'قاعة + ضيافة أساسية' },
      { id: 'bronze', name: 'الباقة البرونزية', price: 5000, description: 'قاعة فقط' }
    ],
    reviews: [
      { id: '1', name: 'أحمد النفيعي', rating: 4, date: 'قبل 3 أيام', comment: 'قاعة جميلة وخدمة جيدة' },
      { id: '2', name: 'نورا السالم', rating: 3, date: 'قبل أسبوع', comment: 'مكان مناسب للاحتفالات الصغيرة' }
    ],
    gallery: [
      'https://source.unsplash.com/featured/?wedding,celebration,hall',
      'https://source.unsplash.com/featured/?party,decoration',
      'https://source.unsplash.com/featured/?event,lighting'
    ]
  },
  {
    id: 'tabuk-3',
    name: 'قاعة تذكار للافراح والمناسبات',
    address: 'الريان، تبوك 47325',
    phone: '+966 56 498 9408',
    rating: 4.4,
    category: 'venues',
    price: 10000,
    priceUnit: 'ر.س / ليلة',
    image: 'https://source.unsplash.com/featured/?wedding,venue,elegant',
    position: { lat: 28.3845, lng: 36.5421 },
    distance: '3.2 كم',
    description: 'قاعة تذكار في حي الريان، تقدم خدمات احترافية للأفراح والمناسبات مع تنسيق مميز.',
    features: [
      { name: 'تنسيق مميز', icon: '✨', description: 'تنسيق وديكور مميز للمناسبات' },
      { name: 'إضاءة احترافية', icon: '💡', description: 'نظام إضاءة احترافي' },
      { name: 'فريق تنظيم', icon: '👥', description: 'فريق تنظيم محترف' },
      { name: 'مواقف آمنة', icon: '🚗', description: 'مواقف سيارات آمنة' }
    ],
    packages: [
      { id: 'gold', name: 'الباقة الذهبية', price: 15000, description: 'قاعة فاخرة + ضيافة كاملة + تنسيق' },
      { id: 'silver', name: 'الباقة الفضية', price: 10000, description: 'قاعة + ضيافة أساسية' },
      { id: 'bronze', name: 'الباقة البرونزية', price: 7000, description: 'قاعة فقط' }
    ],
    reviews: [
      { id: '1', name: 'سعد المالكي', rating: 5, date: 'قبل يومين', comment: 'قاعة رائعة وتنسيق مبهر للحفل' },
      { id: '2', name: 'ريم الشهري', rating: 4, date: 'قبل 10 أيام', comment: 'خدمة ممتازة ومكان جميل' }
    ],
    gallery: [
      'https://source.unsplash.com/featured/?wedding,venue,elegant',
      'https://source.unsplash.com/featured/?celebration,decor',
      'https://source.unsplash.com/featured/?event,flowers'
    ]
  },
  {
    id: 'tabuk-4',
    name: 'قاعة لمارا للإحتفالات و المؤتمرات',
    address: 'طريق الامير فهد بن سلطان، سلطانة، تبوك 47312',
    phone: '+966 56 661 3635',
    rating: 4.3,
    category: 'venues',
    price: 11000,
    priceUnit: 'ر.س / ليلة',
    image: 'https://source.unsplash.com/featured/?conference,hall,modern',
    position: { lat: 28.4156, lng: 36.5789 },
    distance: '1.8 كم',
    description: 'قاعة لمارا متعددة الاستخدامات، مناسبة للاحتفالات والمؤتمرات، تقع على طريق الأمير فهد بن سلطان.',
    features: [
      { name: 'متعددة الاستخدامات', icon: '✨', description: 'مناسبة للاحتفالات والمؤتمرات' },
      { name: 'تقنيات حديثة', icon: '💡', description: 'أجهزة عرض وصوتيات حديثة' },
      { name: 'فريق محترف', icon: '👥', description: 'فريق تنظيم وخدمة محترف' },
      { name: 'موقع مميز', icon: '🚗', description: 'موقع مميز وسهولة الوصول' }
    ],
    packages: [
      { id: 'gold', name: 'الباقة الذهبية', price: 16000, description: 'قاعة + خدمات شاملة + تقنيات' },
      { id: 'silver', name: 'الباقة الفضية', price: 11000, description: 'قاعة + خدمات أساسية' },
      { id: 'bronze', name: 'الباقة البرونزية', price: 8000, description: 'قاعة فقط' }
    ],
    reviews: [
      { id: '1', name: 'عبدالله الحربي', rating: 4, date: 'قبل 4 أيام', comment: 'قاعة مناسبة للمؤتمرات والاحتفالات' },
      { id: '2', name: 'هند الزهراني', rating: 4, date: 'قبل أسبوع', comment: 'خدمة جيدة وموقع مميز' }
    ],
    gallery: [
      'https://source.unsplash.com/featured/?conference,hall,modern',
      'https://source.unsplash.com/featured/?meeting,room',
      'https://source.unsplash.com/featured/?event,technology'
    ]
  },
  {
    id: 'tabuk-5',
    name: 'القاعة الملكية رويال',
    address: 'CP63+JX، تبوك 47338',
    phone: '+966 50 633 9510',
    rating: 4.4,
    category: 'venues',
    price: 14000,
    priceUnit: 'ر.س / ليلة',
    image: 'https://source.unsplash.com/featured/?royal,hall,luxury',
    position: { lat: 28.4112, lng: 36.6045 },
    distance: '2.7 كم',
    description: 'القاعة الملكية رويال، قاعة فاخرة تتميز بالتصميم الملكي والخدمات الراقية للاحتفالات المميزة.',
    features: [
      { name: 'تصميم ملكي', icon: '✨', description: 'تصميم فاخر بطابع ملكي مميز' },
      { name: 'إضاءة فاخرة', icon: '💡', description: 'أنظمة إضاءة فاخرة ومتطورة' },
      { name: 'خدمة ملكية', icon: '👥', description: 'خدمة راقية على مستوى ملكي' },
      { name: 'مدخل مميز', icon: '🚗', description: 'مدخل مميز ومواقف واسعة' }
    ],
    packages: [
      { id: 'gold', name: 'الباقة الذهبية', price: 20000, description: 'قاعة ملكية + خدمات فاخرة + تنسيق راقي' },
      { id: 'silver', name: 'الباقة الفضية', price: 14000, description: 'قاعة + خدمات متميزة' },
      { id: 'bronze', name: 'الباقة البرونزية', price: 10000, description: 'قاعة فقط' }
    ],
    reviews: [
      { id: '1', name: 'محمد الشمري', rating: 5, date: 'قبل 6 أيام', comment: 'قاعة ملكية بحق، خدمة استثنائية' },
      { id: '2', name: 'عائشة البلوي', rating: 4, date: 'قبل أسبوعين', comment: 'مكان فاخر ومناسب للمناسبات الكبيرة' }
    ],
    gallery: [
      'https://source.unsplash.com/featured/?royal,hall,luxury',
      'https://source.unsplash.com/featured/?palace,interior',
      'https://source.unsplash.com/featured/?luxury,decoration'
    ]
  }
];

// Add more venues from the list with similar structure...
export const getAllTabukVenues = (): VenueData[] => {
  return tabukWeddingHalls;
};

export const getVenueById = (id: string): VenueData | undefined => {
  return tabukWeddingHalls.find(venue => venue.id === id);
};
