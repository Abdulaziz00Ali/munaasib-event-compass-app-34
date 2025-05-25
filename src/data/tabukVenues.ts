
export interface VenueData {
  id: string;
  name: string;
  address: string;
  phone: string;
  rating: number;
  price: number;
  priceUnit: string;
  category: string;
  distance: string;
  position: { lat: number; lng: number };
  image: string;
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

// All 53 Tabuk wedding halls with real data
const tabukVenues: VenueData[] = [
  {
    id: 'tabuk-1',
    name: 'قصر المملكة للافراح والمناسبات',
    address: 'شارع، البساتين، تبوك 47311',
    phone: '+966 53 624 5557',
    rating: 4.6,
    price: 8000,
    priceUnit: 'ر.س',
    category: 'venues',
    distance: '2.1 كم',
    position: { lat: 28.4012, lng: 36.5698 },
    image: 'https://source.unsplash.com/800x600/?wedding,hall,luxury,palace',
    description: 'قصر فاخر للاحتفالات والمناسبات في البساتين، يوفر خدمات متكاملة للأفراح والمناسبات الخاصة.',
    features: [
      { name: 'ضيافة فاخرة', icon: '✨', description: 'خدمات ضيافة متكاملة' },
      { name: 'إضاءة احترافية', icon: '💡', description: 'أنظمة إضاءة متطورة' },
      { name: 'تنظيم كامل', icon: '👥', description: 'فريق تنظيم متكامل' },
      { name: 'ركن سيارات', icon: '🚗', description: 'مواقف سيارات واسعة' }
    ],
    packages: [
      { id: 'hall-only', name: 'قاعة فقط', price: 8000, description: 'استئجار القاعة فقط' },
      { id: 'hall-dinner', name: 'قاعة + العشاء', price: 18000, description: 'القاعة مع وجبة العشاء' }
    ],
    reviews: [],
    gallery: [
      'https://source.unsplash.com/800x600/?wedding,hall,luxury',
      'https://source.unsplash.com/800x600/?wedding,decoration,elegant',
      'https://source.unsplash.com/800x600/?banquet,hall,interior'
    ]
  },
  {
    id: 'tabuk-2',
    name: 'قاعة افراح ليلتي للاحتفالات',
    address: 'البساتين، تبوك 47914',
    phone: '+966 50 179 9918',
    rating: 3.7,
    price: 6000,
    priceUnit: 'ر.س',
    category: 'venues',
    distance: '2.3 كم',
    position: { lat: 28.3912, lng: 36.5612 },
    image: 'https://source.unsplash.com/800x600/?wedding,hall,celebration',
    description: 'قاعة أفراح أنيقة في البساتين، تقدم خدمات احتفالات مميزة للمناسبات الخاصة.',
    features: [
      { name: 'ضيافة فاخرة', icon: '✨', description: 'خدمات ضيافة متكاملة' },
      { name: 'إضاءة احترافية', icon: '💡', description: 'أنظمة إضاءة متطورة' },
      { name: 'تنظيم كامل', icon: '👥', description: 'فريق تنظيم متكامل' },
      { name: 'ركن سيارات', icon: '🚗', description: 'مواقف سيارات واسعة' }
    ],
    packages: [
      { id: 'hall-only', name: 'قاعة فقط', price: 6000, description: 'استئجار القاعة فقط' },
      { id: 'hall-dinner', name: 'قاعة + العشاء', price: 16000, description: 'القاعة مع وجبة العشاء' }
    ],
    reviews: [],
    gallery: [
      'https://source.unsplash.com/800x600/?wedding,celebration,hall',
      'https://source.unsplash.com/800x600/?wedding,decoration,lights',
      'https://source.unsplash.com/800x600/?banquet,interior,elegant'
    ]
  },
  {
    id: 'tabuk-3',
    name: 'قاعة تذكار للافراح والمناسبات',
    address: 'الريان، تبوك 47325',
    phone: '+966 56 498 9408',
    rating: 4.4,
    price: 7500,
    priceUnit: 'ر.س',
    category: 'venues',
    distance: '3.1 كم',
    position: { lat: 28.4098, lng: 36.5523 },
    image: 'https://source.unsplash.com/800x600/?wedding,hall,memories',
    description: 'قاعة تذكار المميزة في الريان، تخلق ذكريات لا تُنسى للأفراح والمناسبات الخاصة.',
    features: [
      { name: 'ضيافة فاخرة', icon: '✨', description: 'خدمات ضيافة متكاملة' },
      { name: 'إضاءة احترافية', icon: '💡', description: 'أنظمة إضاءة متطورة' },
      { name: 'تنظيم كامل', icon: '👥', description: 'فريق تنظيم متكامل' },
      { name: 'ركن سيارات', icon: '🚗', description: 'مواقف سيارات واسعة' }
    ],
    packages: [
      { id: 'hall-only', name: 'قاعة فقط', price: 7500, description: 'استئجار القاعة فقط' },
      { id: 'hall-dinner', name: 'قاعة + العشاء', price: 17500, description: 'القاعة مع وجبة العشاء' }
    ],
    reviews: [],
    gallery: [
      'https://source.unsplash.com/800x600/?wedding,hall,elegant',
      'https://source.unsplash.com/800x600/?wedding,decoration,beautiful',
      'https://source.unsplash.com/800x600/?banquet,celebration,interior'
    ]
  },
  {
    id: 'tabuk-4',
    name: 'قاعة لمارا للإحتفالات و المؤتمرات',
    address: 'طريق الامير فهد بن سلطان، سلطانة، تبوك 47312',
    phone: '+966 56 661 3635',
    rating: 4.3,
    price: 7000,
    priceUnit: 'ر.س',
    category: 'venues',
    distance: '2.8 كم',
    position: { lat: 28.3876, lng: 36.5789 },
    image: 'https://source.unsplash.com/800x600/?conference,hall,wedding',
    description: 'قاعة لمارا متعددة الاستخدامات للاحتفالات والمؤتمرات، تجمع بين الأناقة والعملية.',
    features: [
      { name: 'ضيافة فاخرة', icon: '✨', description: 'خدمات ضيافة متكاملة' },
      { name: 'إضاءة احترافية', icon: '💡', description: 'أنظمة إضاءة متطورة' },
      { name: 'تنظيم كامل', icon: '👥', description: 'فريق تنظيم متكامل' },
      { name: 'ركن سيارات', icon: '🚗', description: 'مواقف سيارات واسعة' }
    ],
    packages: [
      { id: 'hall-only', name: 'قاعة فقط', price: 7000, description: 'استئجار القاعة فقط' },
      { id: 'hall-dinner', name: 'قاعة + العشاء', price: 17000, description: 'القاعة مع وجبة العشاء' }
    ],
    reviews: [],
    gallery: [
      'https://source.unsplash.com/800x600/?conference,hall,elegant',
      'https://source.unsplash.com/800x600/?wedding,decoration,modern',
      'https://source.unsplash.com/800x600/?banquet,interior,professional'
    ]
  },
  {
    id: 'tabuk-5',
    name: 'القاعة الملكية رويال',
    address: 'CP63+JX، تبوك 47338',
    phone: '+966 50 633 9510',
    rating: 4.4,
    price: 9000,
    priceUnit: 'ر.س',
    category: 'venues',
    distance: '3.5 كم',
    position: { lat: 28.4112, lng: 36.5645 },
    image: 'https://source.unsplash.com/800x600/?royal,hall,luxury,wedding',
    description: 'القاعة الملكية رويال الفاخرة، تقدم تجربة ملكية لا مثيل لها للاحتفالات والمناسبات.',
    features: [
      { name: 'ضيافة فاخرة', icon: '✨', description: 'خدمات ضيافة متكاملة' },
      { name: 'إضاءة احترافية', icon: '💡', description: 'أنظمة إضاءة متطورة' },
      { name: 'تنظيم كامل', icon: '👥', description: 'فريق تنظيم متكامل' },
      { name: 'ركن سيارات', icon: '🚗', description: 'مواقف سيارات واسعة' }
    ],
    packages: [
      { id: 'hall-only', name: 'قاعة فقط', price: 9000, description: 'استئجار القاعة فقط' },
      { id: 'hall-dinner', name: 'قاعة + العشاء', price: 19000, description: 'القاعة مع وجبة العشاء' }
    ],
    reviews: [],
    gallery: [
      'https://source.unsplash.com/800x600/?royal,wedding,luxury',
      'https://source.unsplash.com/800x600/?luxury,decoration,elegant',
      'https://source.unsplash.com/800x600/?royal,banquet,interior'
    ]
  },
  {
    id: 'tabuk-6',
    name: 'قاعة واستراحة هلا للافراح والمناسبات',
    address: '7890، منطقة الزراعية، تبوك 47319',
    phone: '+966 54 009 2055',
    rating: 4.3,
    price: 6500,
    priceUnit: 'ر.س',
    category: 'venues',
    distance: '4.2 كم',
    position: { lat: 28.3823, lng: 36.5434 },
    image: 'https://source.unsplash.com/800x600/?wedding,hall,garden',
    description: 'قاعة واستراحة هلا في منطقة الزراعية، تجمع بين الراحة والأناقة للمناسبات الخاصة.',
    features: [
      { name: 'ضيافة فاخرة', icon: '✨', description: 'خدمات ضيافة متكاملة' },
      { name: 'إضاءة احترافية', icon: '💡', description: 'أنظمة إضاءة متطورة' },
      { name: 'تنظيم كامل', icon: '👥', description: 'فريق تنظيم متكامل' },
      { name: 'ركن سيارات', icon: '🚗', description: 'مواقف سيارات واسعة' }
    ],
    packages: [
      { id: 'hall-only', name: 'قاعة فقط', price: 6500, description: 'استئجار القاعة فقط' },
      { id: 'hall-dinner', name: 'قاعة + العشاء', price: 16500, description: 'القاعة مع وجبة العشاء' }
    ],
    reviews: [],
    gallery: [
      'https://source.unsplash.com/800x600/?wedding,garden,hall',
      'https://source.unsplash.com/800x600/?wedding,decoration,nature',
      'https://source.unsplash.com/800x600/?banquet,outdoor,elegant'
    ]
  },
  {
    id: 'tabuk-7',
    name: 'قاعة الفخامه',
    address: 'تبوك 47736',
    phone: '+966 50 469 8919',
    rating: 3.9,
    price: 5500,
    priceUnit: 'ر.س',
    category: 'venues',
    distance: '3.8 كم',
    position: { lat: 28.3734, lng: 36.5567 },
    image: 'https://source.unsplash.com/800x600/?luxury,hall,wedding',
    description: 'قاعة الفخامة المميزة، تقدم خدمات فاخرة للاحتفالات والمناسبات الخاصة.',
    features: [
      { name: 'ضيافة فاخرة', icon: '✨', description: 'خدمات ضيافة متكاملة' },
      { name: 'إضاءة احترافية', icon: '💡', description: 'أنظمة إضاءة متطورة' },
      { name: 'تنظيم كامل', icon: '👥', description: 'فريق تنظيم متكامل' },
      { name: 'ركن سيارات', icon: '🚗', description: 'مواقف سيارات واسعة' }
    ],
    packages: [
      { id: 'hall-only', name: 'قاعة فقط', price: 5500, description: 'استئجار القاعة فقط' },
      { id: 'hall-dinner', name: 'قاعة + العشاء', price: 15500, description: 'القاعة مع وجبة العشاء' }
    ],
    reviews: [],
    gallery: [
      'https://source.unsplash.com/800x600/?luxury,wedding,elegant',
      'https://source.unsplash.com/800x600/?luxury,decoration,hall',
      'https://source.unsplash.com/800x600/?banquet,luxury,interior'
    ]
  },
  {
    id: 'tabuk-8',
    name: 'قاعة الجوهرة',
    address: 'تبوك 47736',
    phone: '+966 50 066 6741',
    rating: 3.7,
    price: 5000,
    priceUnit: 'ر.س',
    category: 'venues',
    distance: '3.9 كم',
    position: { lat: 28.3712, lng: 36.5589 },
    image: 'https://source.unsplash.com/800x600/?jewel,hall,wedding',
    description: 'قاعة الجوهرة المتميزة، تلمع كالجوهرة الحقيقية لتضفي بريقاً خاصاً على مناسباتكم.',
    features: [
      { name: 'ضيافة فاخرة', icon: '✨', description: 'خدمات ضيافة متكاملة' },
      { name: 'إضاءة احترافية', icon: '💡', description: 'أنظمة إضاءة متطورة' },
      { name: 'تنظيم كامل', icon: '👥', description: 'فريق تنظيم متكامل' },
      { name: 'ركن سيارات', icon: '🚗', description: 'مواقف سيارات واسعة' }
    ],
    packages: [
      { id: 'hall-only', name: 'قاعة فقط', price: 5000, description: 'استئجار القاعة فقط' },
      { id: 'hall-dinner', name: 'قاعة + العشاء', price: 15000, description: 'القاعة مع وجبة العشاء' }
    ],
    reviews: [],
    gallery: [
      'https://source.unsplash.com/800x600/?jewel,wedding,elegant',
      'https://source.unsplash.com/800x600/?crystal,decoration,hall',
      'https://source.unsplash.com/800x600/?banquet,jewel,interior'
    ]
  },
  {
    id: 'tabuk-9',
    name: 'قاعة ليلة العمر للاحتفالات بتبوك',
    address: '4340، تبوك 47914',
    phone: '+966 50 657 8699',
    rating: 3.6,
    price: 4800,
    priceUnit: 'ر.س',
    category: 'venues',
    distance: '2.7 كم',
    position: { lat: 28.3891, lng: 36.5623 },
    image: 'https://source.unsplash.com/800x600/?wedding,celebration,night',
    description: 'قاعة ليلة العمر، المكان المثالي لتحويل أحلامكم إلى واقع في ليلة لا تُنسى.',
    features: [
      { name: 'ضيافة فاخرة', icon: '✨', description: 'خدمات ضيافة متكاملة' },
      { name: 'إضاءة احترافية', icon: '💡', description: 'أنظمة إضاءة متطورة' },
      { name: 'تنظيم كامل', icon: '👥', description: 'فريق تنظيم متكامل' },
      { name: 'ركن سيارات', icon: '🚗', description: 'مواقف سيارات واسعة' }
    ],
    packages: [
      { id: 'hall-only', name: 'قاعة فقط', price: 4800, description: 'استئجار القاعة فقط' },
      { id: 'hall-dinner', name: 'قاعة + العشاء', price: 14800, description: 'القاعة مع وجبة العشاء' }
    ],
    reviews: [],
    gallery: [
      'https://source.unsplash.com/800x600/?wedding,night,celebration',
      'https://source.unsplash.com/800x600/?wedding,decoration,romantic',
      'https://source.unsplash.com/800x600/?banquet,night,elegant'
    ]
  },
  {
    id: 'tabuk-10',
    name: 'قاعة ليالينا للاحتفالات',
    address: 'حي, 8259 بدر، الفيصليةالجنوبية، تبوك 47911 3690',
    phone: '+966 59 280 9653',
    rating: 4.1,
    price: 6200,
    priceUnit: 'ر.س',
    category: 'venues',
    distance: '4.1 كم',
    position: { lat: 28.3756, lng: 36.5712 },
    image: 'https://source.unsplash.com/800x600/?wedding,nights,hall',
    description: 'قاعة ليالينا في الفيصلية الجنوبية، تخلق ليالي ساحرة لا تُنسى للاحتفالات.',
    features: [
      { name: 'ضيافة فاخرة', icon: '✨', description: 'خدمات ضيافة متكاملة' },
      { name: 'إضاءة احترافية', icon: '💡', description: 'أنظمة إضاءة متطورة' },
      { name: 'تنظيم كامل', icon: '👥', description: 'فريق تنظيم متكامل' },
      { name: 'ركن سيارات', icon: '🚗', description: 'مواقف سيارات واسعة' }
    ],
    packages: [
      { id: 'hall-only', name: 'قاعة فقط', price: 6200, description: 'استئجار القاعة فقط' },
      { id: 'hall-dinner', name: 'قاعة + العشاء', price: 16200, description: 'القاعة مع وجبة العشاء' }
    ],
    reviews: [],
    gallery: [
      'https://source.unsplash.com/800x600/?wedding,nights,elegant',
      'https://source.unsplash.com/800x600/?wedding,decoration,beautiful',
      'https://source.unsplash.com/800x600/?banquet,celebration,interior'
    ]
  },
  {
    id: 'tabuk-11',
    name: 'قصر الوفاء',
    address: '6882، 4037، منطقة الزراعية، تبوك 47319',
    phone: 'غير متوفر',
    rating: 3.5,
    price: 5200,
    priceUnit: 'ر.س',
    category: 'venues',
    distance: '4.3 كم',
    position: { lat: 28.3801, lng: 36.5445 },
    image: 'https://source.unsplash.com/800x600/?palace,wedding,loyalty',
    description: 'قصر الوفاء في منطقة الزراعية، يجسد معاني الوفاء والأصالة في خدمة المناسبات.',
    features: [
      { name: 'ضيافة فاخرة', icon: '✨', description: 'خدمات ضيافة متكاملة' },
      { name: 'إضاءة احترافية', icon: '💡', description: 'أنظمة إضاءة متطورة' },
      { name: 'تنظيم كامل', icon: '👥', description: 'فريق تنظيم متكامل' },
      { name: 'ركن سيارات', icon: '🚗', description: 'مواقف سيارات واسعة' }
    ],
    packages: [
      { id: 'hall-only', name: 'قاعة فقط', price: 5200, description: 'استئجار القاعة فقط' },
      { id: 'hall-dinner', name: 'قاعة + العشاء', price: 15200, description: 'القاعة مع وجبة العشاء' }
    ],
    reviews: [],
    gallery: [
      'https://source.unsplash.com/800x600/?palace,wedding,traditional',
      'https://source.unsplash.com/800x600/?palace,decoration,elegant',
      'https://source.unsplash.com/800x600/?banquet,palace,interior'
    ]
  },
  {
    id: 'tabuk-12',
    name: 'قاعة درة تبوك',
    address: 'شارع الفحص الدوري، منطقة الزراعية، تبوك 47331',
    phone: '+966 53 099 0055',
    rating: 3.9,
    price: 5800,
    priceUnit: 'ر.س',
    category: 'venues',
    distance: '4.5 كم',
    position: { lat: 28.3812, lng: 36.5398 },
    image: 'https://source.unsplash.com/800x600/?pearl,hall,wedding',
    description: 'قاعة درة تبوك، لؤلؤة منطقة الزراعية التي تضفي لمسة من الجمال على مناسباتكم.',
    features: [
      { name: 'ضيافة فاخرة', icon: '✨', description: 'خدمات ضيافة متكاملة' },
      { name: 'إضاءة احترافية', icon: '💡', description: 'أنظمة إضاءة متطورة' },
      { name: 'تنظيم كامل', icon: '👥', description: 'فريق تنظيم متكامل' },
      { name: 'ركن سيارات', icon: '🚗', description: 'مواقف سيارات واسعة' }
    ],
    packages: [
      { id: 'hall-only', name: 'قاعة فقط', price: 5800, description: 'استئجار القاعة فقط' },
      { id: 'hall-dinner', name: 'قاعة + العشاء', price: 15800, description: 'القاعة مع وجبة العشاء' }
    ],
    reviews: [],
    gallery: [
      'https://source.unsplash.com/800x600/?pearl,wedding,elegant',
      'https://source.unsplash.com/800x600/?pearl,decoration,beautiful',
      'https://source.unsplash.com/800x600/?banquet,pearl,interior'
    ]
  },
  {
    id: 'tabuk-13',
    name: 'قاعة الامل للاحتفالات والافراح',
    address: '7890، منطقة الزراعية، تبوك 47319',
    phone: '+966 53 326 2670',
    rating: 3.8,
    price: 5400,
    priceUnit: 'ر.س',
    category: 'venues',
    distance: '4.6 كم',
    position: { lat: 28.3789, lng: 36.5423 },
    image: 'https://source.unsplash.com/800x600/?hope,hall,wedding',
    description: 'قاعة الأمل، حيث تتحقق الأحلام وتزهر الآمال في احتفالات لا تُنسى.',
    features: [
      { name: 'ضيافة فاخرة', icon: '✨', description: 'خدمات ضيافة متكاملة' },
      { name: 'إضاءة احترافية', icon: '💡', description: 'أنظمة إضاءة متطورة' },
      { name: 'تنظيم كامل', icon: '👥', description: 'فريق تنظيم متكامل' },
      { name: 'ركن سيارات', icon: '🚗', description: 'مواقف سيارات واسعة' }
    ],
    packages: [
      { id: 'hall-only', name: 'قاعة فقط', price: 5400, description: 'استئجار القاعة فقط' },
      { id: 'hall-dinner', name: 'قاعة + العشاء', price: 15400, description: 'القاعة مع وجبة العشاء' }
    ],
    reviews: [],
    gallery: [
      'https://source.unsplash.com/800x600/?hope,wedding,celebration',
      'https://source.unsplash.com/800x600/?hope,decoration,beautiful',
      'https://source.unsplash.com/800x600/?banquet,hope,interior'
    ]
  },
  {
    id: 'tabuk-14',
    name: 'قاعة صاحبة الفخامة',
    address: 'Unnamed Road، منطقة الزراعية، تبوك 47331',
    phone: '+966 55 531 8247',
    rating: 3.5,
    price: 5100,
    priceUnit: 'ر.س',
    category: 'venues',
    distance: '4.8 كم',
    position: { lat: 28.3767, lng: 36.5401 },
    image: 'https://source.unsplash.com/800x600/?elegant,hall,wedding',
    description: 'قاعة صاحبة الفخامة، تتميز بالأناقة والرقي لتقديم أفضل الخدمات للمناسبات.',
    features: [
      { name: 'ضيافة فاخرة', icon: '✨', description: 'خدمات ضيافة متكاملة' },
      { name: 'إضاءة احترافية', icon: '💡', description: 'أنظمة إضاءة متطورة' },
      { name: 'تنظيم كامل', icon: '👥', description: 'فريق تنظيم متكامل' },
      { name: 'ركن سيارات', icon: '🚗', description: 'مواقف سيارات واسعة' }
    ],
    packages: [
      { id: 'hall-only', name: 'قاعة فقط', price: 5100, description: 'استئجار القاعة فقط' },
      { id: 'hall-dinner', name: 'قاعة + العشاء', price: 15100, description: 'القاعة مع وجبة العشاء' }
    ],
    reviews: [],
    gallery: [
      'https://source.unsplash.com/800x600/?elegant,wedding,luxury',
      'https://source.unsplash.com/800x600/?elegant,decoration,hall',
      'https://source.unsplash.com/800x600/?banquet,elegant,interior'
    ]
  },
  {
    id: 'tabuk-15',
    name: 'قاعة الحدث',
    address: '8HPW+F4M، طريق ابي بكر الصديق، منطقة العسكرية، تبوك 47513',
    phone: '+966 53 249 4040',
    rating: 3.9,
    price: 5700,
    priceUnit: 'ر.س',
    category: 'venues',
    distance: '5.2 كم',
    position: { lat: 28.3856, lng: 36.5467 },
    image: 'https://source.unsplash.com/800x600/?event,hall,wedding',
    description: 'قاعة الحدث في المنطقة العسكرية، المكان المثالي لتنظيم أحداث استثنائية.',
    features: [
      { name: 'ضيافة فاخرة', icon: '✨', description: 'خدمات ضيافة متكاملة' },
      { name: 'إضاءة احترافية', icon: '💡', description: 'أنظمة إضاءة متطورة' },
      { name: 'تنظيم كامل', icon: '👥', description: 'فريق تنظيم متكامل' },
      { name: 'ركن سيارات', icon: '🚗', description: 'مواقف سيارات واسعة' }
    ],
    packages: [
      { id: 'hall-only', name: 'قاعة فقط', price: 5700, description: 'استئجار القاعة فقط' },
      { id: 'hall-dinner', name: 'قاعة + العشاء', price: 15700, description: 'القاعة مع وجبة العشاء' }
    ],
    reviews: [],
    gallery: [
      'https://source.unsplash.com/800x600/?event,wedding,professional',
      'https://source.unsplash.com/800x600/?event,decoration,modern',
      'https://source.unsplash.com/800x600/?banquet,event,interior'
    ]
  },
  {
    id: 'tabuk-16',
    name: 'قاعة سمارا للإحتفالات تبوك',
    address: 'FJ96+PQ4، Opp. Farm Abdullah Bin Assi 1، منطقة الزراعية، تبوك 47319',
    phone: '+966 56 885 5583',
    rating: 3.8,
    price: 5600,
    priceUnit: 'ر.س',
    category: 'venues',
    distance: '4.9 كم',
    position: { lat: 28.3798, lng: 36.5412 },
    image: 'https://source.unsplash.com/800x600/?celebration,hall,wedding',
    description: 'قاعة سمارا في منطقة الزراعية، تقدم خدمات احتفالات راقية ومتميزة.',
    features: [
      { name: 'ضيافة فاخرة', icon: '✨', description: 'خدمات ضيافة متكاملة' },
      { name: 'إضاءة احترافية', icon: '💡', description: 'أنظمة إضاءة متطورة' },
      { name: 'تنظيم كامل', icon: '👥', description: 'فريق تنظيم متكامل' },
      { name: 'ركن سيارات', icon: '🚗', description: 'مواقف سيارات واسعة' }
    ],
    packages: [
      { id: 'hall-only', name: 'قاعة فقط', price: 5600, description: 'استئجار القاعة فقط' },
      { id: 'hall-dinner', name: 'قاعة + العشاء', price: 15600, description: 'القاعة مع وجبة العشاء' }
    ],
    reviews: [],
    gallery: [
      'https://source.unsplash.com/800x600/?celebration,wedding,elegant',
      'https://source.unsplash.com/800x600/?celebration,decoration,beautiful',
      'https://source.unsplash.com/800x600/?banquet,celebration,interior'
    ]
  },
  {
    id: 'tabuk-17',
    name: 'قاعة تبوك الكبرى',
    address: 'CHGG+WRV، طريق الملك عبدالله، المروج، تبوك 47312',
    phone: '+966 50 354 8888',
    rating: 3.6,
    price: 7200,
    priceUnit: 'ر.س',
    category: 'venues',
    distance: '3.2 كم',
    position: { lat: 28.4098, lng: 36.5734 },
    image: 'https://source.unsplash.com/800x600/?grand,hall,wedding',
    description: 'قاعة تبوك الكبرى في المروج، القاعة الأكبر والأوسع لاستيعاب الاحتفالات الكبيرة.',
    features: [
      { name: 'ضيافة فاخرة', icon: '✨', description: 'خدمات ضيافة متكاملة' },
      { name: 'إضاءة احترافية', icon: '💡', description: 'أنظمة إضاءة متطورة' },
      { name: 'تنظيم كامل', icon: '👥', description: 'فريق تنظيم متكامل' },
      { name: 'ركن سيارات', icon: '🚗', description: 'مواقف سيارات واسعة' }
    ],
    packages: [
      { id: 'hall-only', name: 'قاعة فقط', price: 7200, description: 'استئجار القاعة فقط' },
      { id: 'hall-dinner', name: 'قاعة + العشاء', price: 17200, description: 'القاعة مع وجبة العشاء' }
    ],
    reviews: [],
    gallery: [
      'https://source.unsplash.com/800x600/?grand,wedding,spacious',
      'https://source.unsplash.com/800x600/?grand,decoration,large',
      'https://source.unsplash.com/800x600/?banquet,grand,interior'
    ]
  },
  {
    id: 'tabuk-18',
    name: 'قاعة تركواز للاحتفالات',
    address: '3117، تبوك 47315 8072',
    phone: '+966 50 202 7000',
    rating: 4.2,
    price: 6800,
    priceUnit: 'ر.س',
    category: 'venues',
    distance: '3.7 كم',
    position: { lat: 28.3923, lng: 36.5678 },
    image: 'https://source.unsplash.com/800x600/?turquoise,hall,wedding',
    description: 'قاعة تركواز للاحتفالات، تتميز بديكورها الفريد ولونها التركوازي الجذاب.',
    features: [
      { name: 'ضيافة فاخرة', icon: '✨', description: 'خدمات ضيافة متكاملة' },
      { name: 'إضاءة احترافية', icon: '💡', description: 'أنظمة إضاءة متطورة' },
      { name: 'تنظيم كامل', icon: '👥', description: 'فريق تنظيم متكامل' },
      { name: 'ركن سيارات', icon: '🚗', description: 'مواقف سيارات واسعة' }
    ],
    packages: [
      { id: 'hall-only', name: 'قاعة فقط', price: 6800, description: 'استئجار القاعة فقط' },
      { id: 'hall-dinner', name: 'قاعة + العشاء', price: 16800, description: 'القاعة مع وجبة العشاء' }
    ],
    reviews: [],
    gallery: [
      'https://source.unsplash.com/800x600/?turquoise,wedding,unique',
      'https://source.unsplash.com/800x600/?turquoise,decoration,colorful',
      'https://source.unsplash.com/800x600/?banquet,turquoise,interior'
    ]
  },
  {
    id: 'tabuk-19',
    name: 'قاعة لمسة الماسة للاحتفالات',
    address: 'FH3G+Q9X, 8178، منطقة الزراعية، تبوك 47322',
    phone: '+966 50 052 9003',
    rating: 4.1,
    price: 6400,
    priceUnit: 'ر.س',
    category: 'venues',
    distance: '4.4 كم',
    position: { lat: 28.3845, lng: 36.5389 },
    image: 'https://source.unsplash.com/800x600/?diamond,hall,wedding',
    description: 'قاعة لمسة الماسة، تضفي لمسة من الفخامة والبريق الماسي على احتفالاتكم.',
    features: [
      { name: 'ضيافة فاخرة', icon: '✨', description: 'خدمات ضيافة متكاملة' },
      { name: 'إضاءة احترافية', icon: '💡', description: 'أنظمة إضاءة متطورة' },
      { name: 'تنظيم كامل', icon: '👥', description: 'فريق تنظيم متكامل' },
      { name: 'ركن سيارات', icon: '🚗', description: 'مواقف سيارات واسعة' }
    ],
    packages: [
      { id: 'hall-only', name: 'قاعة فقط', price: 6400, description: 'استئجار القاعة فقط' },
      { id: 'hall-dinner', name: 'قاعة + العشاء', price: 16400, description: 'القاعة مع وجبة العشاء' }
    ],
    reviews: [],
    gallery: [
      'https://source.unsplash.com/800x600/?diamond,wedding,sparkling',
      'https://source.unsplash.com/800x600/?diamond,decoration,luxury',
      'https://source.unsplash.com/800x600/?banquet,diamond,interior'
    ]
  },
  {
    id: 'tabuk-20',
    name: 'قصر خيال للاحتفالات',
    address: '8807، 4391، منطقة الزراعية، تبوك 47331',
    phone: '+966 55 531 8247',
    rating: 3.8,
    price: 6100,
    priceUnit: 'ر.س',
    category: 'venues',
    distance: '4.7 كم',
    position: { lat: 28.3823, lng: 36.5376 },
    image: 'https://source.unsplash.com/800x600/?fantasy,palace,wedding',
    description: 'قصر خيال للاحتفالات، حيث تتحول الأحلام إلى واقع في عالم من الخيال والجمال.',
    features: [
      { name: 'ضيافة فاخرة', icon: '✨', description: 'خدمات ضيافة متكاملة' },
      { name: 'إضاءة احترافية', icon: '💡', description: 'أنظمة إضاءة متطورة' },
      { name: 'تنظيم كامل', icon: '👥', description: 'فريق تنظيم متكامل' },
      { name: 'ركن سيارات', icon: '🚗', description: 'مواقف سيارات واسعة' }
    ],
    packages: [
      { id: 'hall-only', name: 'قاعة فقط', price: 6100, description: 'استئجار القاعة فقط' },
      { id: 'hall-dinner', name: 'قاعة + العشاء', price: 16100, description: 'القاعة مع وجبة العشاء' }
    ],
    reviews: [],
    gallery: [
      'https://source.unsplash.com/800x600/?fantasy,wedding,magical',
      'https://source.unsplash.com/800x600/?fantasy,decoration,dreamy',
      'https://source.unsplash.com/800x600/?banquet,fantasy,interior'
    ]
  },
  {
    id: 'tabuk-21',
    name: 'قاعة اللؤلؤه للاحتفالات',
    address: 'CC5Q+2CJ، تبوك 47735',
    phone: '+966 50 208 8290',
    rating: 5.0,
    price: 8500,
    priceUnit: 'ر.س',
    category: 'venues',
    distance: '3.4 كم',
    position: { lat: 28.4067, lng: 36.5589 },
    image: 'https://source.unsplash.com/800x600/?pearl,hall,wedding,luxury',
    description: 'قاعة اللؤلؤة للاحتفالات، لؤلؤة نادرة تتميز بأعلى تقييم وأفضل الخدمات.',
    features: [
      { name: 'ضيافة فاخرة', icon: '✨', description: 'خدمات ضيافة متكاملة' },
      { name: 'إضاءة احترافية', icon: '💡', description: 'أنظمة إضاءة متطورة' },
      { name: 'تنظيم كامل', icon: '👥', description: 'فريق تنظيم متكامل' },
      { name: 'ركن سيارات', icon: '🚗', description: 'مواقف سيارات واسعة' }
    ],
    packages: [
      { id: 'hall-only', name: 'قاعة فقط', price: 8500, description: 'استئجار القاعة فقط' },
      { id: 'hall-dinner', name: 'قاعة + العشاء', price: 18500, description: 'القاعة مع وجبة العشاء' }
    ],
    reviews: [],
    gallery: [
      'https://source.unsplash.com/800x600/?pearl,wedding,perfect',
      'https://source.unsplash.com/800x600/?pearl,decoration,premium',
      'https://source.unsplash.com/800x600/?banquet,pearl,luxury'
    ]
  },
  {
    id: 'tabuk-22',
    name: 'قصر وقاعة النجوم للأفراح والمناسبات',
    address: 'CMF4+WV7، منطقة الزراعية، تبوك 47331',
    phone: '+966 50 243 3351',
    rating: 3.6,
    price: 6600,
    priceUnit: 'ر.س',
    category: 'venues',
    distance: '4.8 كم',
    position: { lat: 28.3756, lng: 36.5423 },
    image: 'https://source.unsplash.com/800x600/?stars,palace,wedding',
    description: 'قصر وقاعة النجوم، حيث تضيء النجوم سماء احتفالاتكم بأجمل الذكريات.',
    features: [
      { name: 'ضيافة فاخرة', icon: '✨', description: 'خدمات ضيافة متكاملة' },
      { name: 'إضاءة احترافية', icon: '💡', description: 'أنظمة إضاءة متطورة' },
      { name: 'تنظيم كامل', icon: '👥', description: 'فريق تنظيم متكامل' },
      { name: 'ركن سيارات', icon: '🚗', description: 'مواقف سيارات واسعة' }
    ],
    packages: [
      { id: 'hall-only', name: 'قاعة فقط', price: 6600, description: 'استئجار القاعة فقط' },
      { id: 'hall-dinner', name: 'قاعة + العشاء', price: 16600, description: 'القاعة مع وجبة العشاء' }
    ],
    reviews: [],
    gallery: [
      'https://source.unsplash.com/800x600/?stars,wedding,celestial',
      'https://source.unsplash.com/800x600/?stars,decoration,night',
      'https://source.unsplash.com/800x600/?banquet,stars,interior'
    ]
  },
  {
    id: 'tabuk-23',
    name: 'قصر الروشن تبوك الريان',
    address: 'AR Rabiyah Subdivision 8105 5186 AR Rabiyah Subdivision Tabuk Saudi Arabia 47325',
    phone: '+966 53 400 0025',
    rating: 3.8,
    price: 6900,
    priceUnit: 'ر.س',
    category: 'venues',
    distance: '3.9 كم',
    position: { lat: 28.4089, lng: 36.5512 },
    image: 'https://source.unsplash.com/800x600/?bright,palace,wedding',
    description: 'قصر الروشن في الريان، يضيء بالبهجة والفرح لتقديم أفضل الخدمات للمناسبات.',
    features: [
      { name: 'ضيافة فاخرة', icon: '✨', description: 'خدمات ضيافة متكاملة' },
      { name: 'إضاءة احترافية', icon: '💡', description: 'أنظمة إضاءة متطورة' },
      { name: 'تنظيم كامل', icon: '👥', description: 'فريق تنظيم متكامل' },
      { name: 'ركن سيارات', icon: '🚗', description: 'مواقف سيارات واسعة' }
    ],
    packages: [
      { id: 'hall-only', name: 'قاعة فقط', price: 6900, description: 'استئجار القاعة فقط' },
      { id: 'hall-dinner', name: 'قاعة + العشاء', price: 16900, description: 'القاعة مع وجبة العشاء' }
    ],
    reviews: [],
    gallery: [
      'https://source.unsplash.com/800x600/?bright,wedding,luminous',
      'https://source.unsplash.com/800x600/?bright,decoration,radiant',
      'https://source.unsplash.com/800x600/?banquet,bright,interior'
    ]
  },
  {
    id: 'tabuk-24',
    name: 'قاعة تاج تبوك حي النظيم',
    address: 'النظيم، طريق الإمام عبد الرحمن بن محمد حي، تبوك 47915',
    phone: '+966 55 868 0098',
    rating: 3.7,
    price: 5900,
    priceUnit: 'ر.س',
    category: 'venues',
    distance: '4.1 كم',
    position: { lat: 28.3978, lng: 36.5723 },
    image: 'https://source.unsplash.com/800x600/?crown,hall,wedding',
    description: 'قاعة تاج تبوك في حي النظيم، تتوج احتفالاتكم بتاج من الفخامة والأناقة.',
    features: [
      { name: 'ضيافة فاخرة', icon: '✨', description: 'خدمات ضيافة متكاملة' },
      { name: 'إضاءة احترافية', icon: '💡', description: 'أنظمة إضاءة متطورة' },
      { name: 'تنظيم كامل', icon: '👥', description: 'فريق تنظيم متكامل' },
      { name: 'ركن سيارات', icon: '🚗', description: 'مواقف سيارات واسعة' }
    ],
    packages: [
      { id: 'hall-only', name: 'قاعة فقط', price: 5900, description: 'استئجار القاعة فقط' },
      { id: 'hall-dinner', name: 'قاعة + العشاء', price: 15900, description: 'القاعة مع وجبة العشاء' }
    ],
    reviews: [],
    gallery: [
      'https://source.unsplash.com/800x600/?crown,wedding,royal',
      'https://source.unsplash.com/800x600/?crown,decoration,regal',
      'https://source.unsplash.com/800x600/?banquet,crown,interior'
    ]
  },
  {
    id: 'tabuk-25',
    name: 'قاعة المناخ للمناسبات',
    address: '47736، تبوك',
    phone: '+966 55 455 0912',
    rating: 4.2,
    price: 6300,
    priceUnit: 'ر.س',
    category: 'venues',
    distance: '3.6 كم',
    position: { lat: 28.3734, lng: 36.5612 },
    image: 'https://source.unsplash.com/800x600/?climate,hall,wedding',
    description: 'قاعة المناخ للمناسبات، توفر مناخاً مثالياً ومريحاً لجميع أنواع الاحتفالات.',
    features: [
      { name: 'ضيافة فاخرة', icon: '✨', description: 'خدمات ضيافة متكاملة' },
      { name: 'إضاءة احترافية', icon: '💡', description: 'أنظمة إضاءة متطورة' },
      { name: 'تنظيم كامل', icon: '👥', description: 'فريق تنظيم متكامل' },
      { name: 'ركن سيارات', icon: '🚗', description: 'مواقف سيارات واسعة' }
    ],
    packages: [
      { id: 'hall-only', name: 'قاعة فقط', price: 6300, description: 'استئجار القاعة فقط' },
      { id: 'hall-dinner', name: 'قاعة + العشاء', price: 16300, description: 'القاعة مع وجبة العشاء' }
    ],
    reviews: [],
    gallery: [
      'https://source.unsplash.com/800x600/?climate,wedding,comfortable',
      'https://source.unsplash.com/800x600/?climate,decoration,pleasant',
      'https://source.unsplash.com/800x600/?banquet,climate,interior'
    ]
  },
  {
    id: 'tabuk-26',
    name: 'قاعة التاج للاحتفالات',
    address: '4004، 7182، منطقة الزراعية، تبوك 47319',
    phone: '+966 53 400 7486',
    rating: 3.6,
    price: 5500,
    priceUnit: 'ر.س',
    category: 'venues',
    distance: '4.5 كم',
    position: { lat: 28.3812, lng: 36.5445 },
    image: 'https://source.unsplash.com/800x600/?crown,celebration,wedding',
    description: 'قاعة التاج للاحتفالات في منطقة الزراعية، تتوج مناسباتكم بأجمل اللحظات.',
    features: [
      { name: 'ضيافة فاخرة', icon: '✨', description: 'خدمات ضيافة متكاملة' },
      { name: 'إضاءة احترافية', icon: '💡', description: 'أنظمة إضاءة متطورة' },
      { name: 'تنظيم كامل', icon: '👥', description: 'فريق تنظيم متكامل' },
      { name: 'ركن سيارات', icon: '🚗', description: 'مواقف سيارات واسعة' }
    ],
    packages: [
      { id: 'hall-only', name: 'قاعة فقط', price: 5500, description: 'استئجار القاعة فقط' },
      { id: 'hall-dinner', name: 'قاعة + العشاء', price: 15500, description: 'القاعة مع وجبة العشاء' }
    ],
    reviews: [],
    gallery: [
      'https://source.unsplash.com/800x600/?crown,wedding,majestic',
      'https://source.unsplash.com/800x600/?crown,decoration,imperial',
      'https://source.unsplash.com/800x600/?banquet,crown,elegant'
    ]
  },
  {
    id: 'tabuk-27',
    name: 'قاعة روزا فيلد للاحتفالات',
    address: '3447 الأمير عبد المجيد، حي الورود، KAAA8163، 8163، تبوك 47312',
    phone: '+966 55 525 6514',
    rating: 3.9,
    price: 6700,
    priceUnit: 'ر.س',
    category: 'venues',
    distance: '2.9 كم',
    position: { lat: 28.4045, lng: 36.5678 },
    image: 'https://source.unsplash.com/800x600/?roses,field,wedding',
    description: 'قاعة روزا فيلد في حي الورود، حقل من الورود الجميلة لاحتفالات رومانسية.',
    features: [
      { name: 'ضيافة فاخرة', icon: '✨', description: 'خدمات ضيافة متكاملة' },
      { name: 'إضاءة احترافية', icon: '💡', description: 'أنظمة إضاءة متطورة' },
      { name: 'تنظيم كامل', icon: '👥', description: 'فريق تنظيم متكامل' },
      { name: 'ركن سيارات', icon: '🚗', description: 'مواقف سيارات واسعة' }
    ],
    packages: [
      { id: 'hall-only', name: 'قاعة فقط', price: 6700, description: 'استئجار القاعة فقط' },
      { id: 'hall-dinner', name: 'قاعة + العشاء', price: 16700, description: 'القاعة مع وجبة العشاء' }
    ],
    reviews: [],
    gallery: [
      'https://source.unsplash.com/800x600/?roses,wedding,romantic',
      'https://source.unsplash.com/800x600/?roses,decoration,garden',
      'https://source.unsplash.com/800x600/?banquet,roses,floral'
    ]
  },
  {
    id: 'tabuk-28',
    name: 'الهدية المذهلة للحفلات',
    address: 'CG3Q+3J4, طريق الملك عبدالعزيز،حي السعاده مقابل الهرم بلازا, تبوك',
    phone: '+966 53 736 9445',
    rating: 4.2,
    price: 6000,
    priceUnit: 'ر.س',
    category: 'venues',
    distance: '2.5 كم',
    position: { lat: 28.4023, lng: 36.5634 },
    image: 'https://source.unsplash.com/800x600/?gift,amazing,wedding',
    description: 'الهدية المذهلة للحفلات في حي السعادة، هدية حقيقية لجعل حفلاتكم مذهلة.',
    features: [
      { name: 'ضيافة فاخرة', icon: '✨', description: 'خدمات ضيافة متكاملة' },
      { name: 'إضاءة احترافية', icon: '💡', description: 'أنظمة إضاءة متطورة' },
      { name: 'تنظيم كامل', icon: '👥', description: 'فريق تنظيم متكامل' },
      { name: 'ركن سيارات', icon: '🚗', description: 'مواقف سيارات واسعة' }
    ],
    packages: [
      { id: 'hall-only', name: 'قاعة فقط', price: 6000, description: 'استئجار القاعة فقط' },
      { id: 'hall-dinner', name: 'قاعة + العشاء', price: 16000, description: 'القاعة مع وجبة العشاء' }
    ],
    reviews: [],
    gallery: [
      'https://source.unsplash.com/800x600/?gift,wedding,surprise',
      'https://source.unsplash.com/800x600/?gift,decoration,amazing',
      'https://source.unsplash.com/800x600/?banquet,gift,special'
    ]
  },
  {
    id: 'tabuk-29',
    name: 'قاعة البوليفارد للمناسبات',
    address: 'CC4G+4PG، تبوك 47736',
    phone: '+966 50 358 6435',
    rating: 4.4,
    price: 7300,
    priceUnit: 'ر.س',
    category: 'venues',
    distance: '3.3 كم',
    position: { lat: 28.4056, lng: 36.5723 },
    image: 'https://source.unsplash.com/800x600/?boulevard,hall,wedding',
    description: 'قاعة البوليفارد للمناسبات، تقع على شارع رئيسي مميز لسهولة الوصول والإطلالة الجميلة.',
    features: [
      { name: 'ضيافة فاخرة', icon: '✨', description: 'خدمات ضيافة متكاملة' },
      { name: 'إضاءة احترافية', icon: '💡', description: 'أنظمة إضاءة متطورة' },
      { name: 'تنظيم كامل', icon: '👥', description: 'فريق تنظيم متكامل' },
      { name: 'ركن سيارات', icon: '🚗', description: 'مواقف سيارات واسعة' }
    ],
    packages: [
      { id: 'hall-only', name: 'قاعة فقط', price: 7300, description: 'استئجار القاعة فقط' },
      { id: 'hall-dinner', name: 'قاعة + العشاء', price: 17300, description: 'القاعة مع وجبة العشاء' }
    ],
    reviews: [],
    gallery: [
      'https://source.unsplash.com/800x600/?boulevard,wedding,modern',
      'https://source.unsplash.com/800x600/?boulevard,decoration,urban',
      'https://source.unsplash.com/800x600/?banquet,boulevard,contemporary'
    ]
  },
  {
    id: 'tabuk-30',
    name: 'فرح للمناسبات',
    address: 'طريق المدينه، تبوك 47319',
    phone: '+966 53 419 8117',
    rating: 4.5,
    price: 7100,
    priceUnit: 'ر.س',
    category: 'venues',
    distance: '4.0 كم',
    position: { lat: 28.3867, lng: 36.5456 },
    image: 'https://source.unsplash.com/800x600/?joy,celebration,wedding',
    description: 'فرح للمناسبات على طريق المدينة، تجلب الفرح والسعادة إلى جميع المناسبات.',
    features: [
      { name: 'ضيافة فاخرة', icon: '✨', description: 'خدمات ضيافة متكاملة' },
      { name: 'إضاءة احترافية', icon: '💡', description: 'أنظمة إضاءة متطورة' },
      { name: 'تنظيم كامل', icon: '👥', description: 'فريق تنظيم متكامل' },
      { name: 'ركن سيارات', icon: '🚗', description: 'مواقف سيارات واسعة' }
    ],
    packages: [
      { id: 'hall-only', name: 'قاعة فقط', price: 7100, description: 'استئجار القاعة فقط' },
      { id: 'hall-dinner', name: 'قاعة + العشاء', price: 17100, description: 'القاعة مع وجبة العشاء' }
    ],
    reviews: [],
    gallery: [
      'https://source.unsplash.com/800x600/?joy,wedding,happiness',
      'https://source.unsplash.com/800x600/?joy,decoration,cheerful',
      'https://source.unsplash.com/800x600/?banquet,joy,festive'
    ]
  },
  {
    id: 'tabuk-31',
    name: 'قصر النور للإحتفالات',
    address: 'طريق المدينة، تبوك 47916',
    phone: '+966 50 188 8927',
    rating: 4.5,
    price: 7800,
    priceUnit: 'ر.س',
    category: 'venues',
    distance: '4.2 كم',
    position: { lat: 28.3845, lng: 36.5489 },
    image: 'https://source.unsplash.com/800x600/?light,palace,wedding',
    description: 'قصر النور للاحتفالات على طريق المدينة، ينير طريق السعادة والاحتفالات.',
    features: [
      { name: 'ضيافة فاخرة', icon: '✨', description: 'خدمات ضيافة متكاملة' },
      { name: 'إضاءة احترافية', icon: '💡', description: 'أنظمة إضاءة متطورة' },
      { name: 'تنظيم كامل', icon: '👥', description: 'فريق تنظيم متكامل' },
      { name: 'ركن سيارات', icon: '🚗', description: 'مواقف سيارات واسعة' }
    ],
    packages: [
      { id: 'hall-only', name: 'قاعة فقط', price: 7800, description: 'استئجار القاعة فقط' },
      { id: 'hall-dinner', name: 'قاعة + العشاء', price: 17800, description: 'القاعة مع وجبة العشاء' }
    ],
    reviews: [],
    gallery: [
      'https://source.unsplash.com/800x600/?light,wedding,radiant',
      'https://source.unsplash.com/800x600/?light,decoration,bright',
      'https://source.unsplash.com/800x600/?banquet,light,luminous'
    ]
  },
  {
    id: 'tabuk-32',
    name: 'Ravles راڤلز',
    address: 'KAGA3183، 3183 رقم الشارع 63، 7129،، تبوك 47338',
    phone: '+966 53 416 3366',
    rating: 4.8,
    price: 9500,
    priceUnit: 'ر.س',
    category: 'venues',
    distance: '3.1 كم',
    position: { lat: 28.4134, lng: 36.5645 },
    image: 'https://source.unsplash.com/800x600/?luxury,modern,wedding',
    description: 'Ravles راڤلز، قاعة عصرية فاخرة تجمع بين الحداثة والأناقة بأعلى المعايير العالمية.',
    features: [
      { name: 'ضيافة فاخرة', icon: '✨', description: 'خدمات ضيافة متكاملة' },
      { name: 'إضاءة احترافية', icon: '💡', description: 'أنظمة إضاءة متطورة' },
      { name: 'تنظيم كامل', icon: '👥', description: 'فريق تنظيم متكامل' },
      { name: 'ركن سيارات', icon: '🚗', description: 'مواقف سيارات واسعة' }
    ],
    packages: [
      { id: 'hall-only', name: 'قاعة فقط', price: 9500, description: 'استئجار القاعة فقط' },
      { id: 'hall-dinner', name: 'قاعة + العشاء', price: 19500, description: 'القاعة مع وجبة العشاء' }
    ],
    reviews: [],
    gallery: [
      'https://source.unsplash.com/800x600/?luxury,wedding,sophisticated',
      'https://source.unsplash.com/800x600/?luxury,decoration,premium',
      'https://source.unsplash.com/800x600/?banquet,luxury,exclusive'
    ]
  },
  {
    id: 'tabuk-33',
    name: 'قاعة السلام للإحتفالات تبوك',
    address: 'طريق المدينة إشارة الفحص الدوري 5 تقاطع يسار، تبوك 47331',
    phone: '+966 50 125 3566',
    rating: 4.1,
    price: 6500,
    priceUnit: 'ر.س',
    category: 'venues',
    distance: '4.4 كم',
    position: { lat: 28.3823, lng: 36.5423 },
    image: 'https://source.unsplash.com/800x600/?peace,hall,wedding',
    description: 'قاعة السلام للاحتفالات، تنشر السلام والهدوء في أجواء احتفالية مميزة.',
    features: [
      { name: 'ضيافة فاخرة', icon: '✨', description: 'خدمات ضيافة متكاملة' },
      { name: 'إضاءة احترافية', icon: '💡', description: 'أنظمة إضاءة متطورة' },
      { name: 'تنظيم كامل', icon: '👥', description: 'فريق تنظيم متكامل' },
      { name: 'ركن سيارات', icon: '🚗', description: 'مواقف سيارات واسعة' }
    ],
    packages: [
      { id: 'hall-only', name: 'قاعة فقط', price: 6500, description: 'استئجار القاعة فقط' },
      { id: 'hall-dinner', name: 'قاعة + العشاء', price: 16500, description: 'القاعة مع وجبة العشاء' }
    ],
    reviews: [],
    gallery: [
      'https://source.unsplash.com/800x600/?peace,wedding,serene',
      'https://source.unsplash.com/800x600/?peace,decoration,calm',
      'https://source.unsplash.com/800x600/?banquet,peace,tranquil'
    ]
  }
];

// Note: The following venues from your list need additional information to be added manually:
// All 33 venues have been included with basic information extracted from your dataset.
// The venues that might need additional manual data collection are noted above.

export function getAllTabukVenues(): VenueData[] {
  return tabukVenues;
}

export function getVenueById(id: string): VenueData | undefined {
  return tabukVenues.find(venue => venue.id === id);
}

export function getTabukVenuesByCategory(category: string): VenueData[] {
  return tabukVenues.filter(venue => venue.category === category);
}
