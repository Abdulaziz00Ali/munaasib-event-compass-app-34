
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
    id: 'tabuk-kingdom-palace',
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
    id: 'tabuk-lailaty-hall',
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
    id: 'tabuk-tathkar-hall',
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
    id: 'tabuk-lamara-hall',
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
    id: 'tabuk-royal-hall',
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
  },
  {
    id: 'tabuk-hala-hall',
    name: 'قاعة واستراحة هلا للافراح والمناسبات',
    address: '7890، منطقة الزراعية، تبوك 47319',
    phone: '+966 54 009 2055',
    rating: 4.3,
    category: 'venues',
    price: 9500,
    priceUnit: 'ر.س / ليلة',
    image: 'https://source.unsplash.com/featured/?wedding,resort,hall',
    position: { lat: 28.3756, lng: 36.5234 },
    distance: '4.1 كم',
    description: 'قاعة واستراحة هلا في منطقة الزراعية، تجمع بين الراحة والأناقة لتوفير تجربة مميزة للضيوف.',
    features: [
      { name: 'قاعة واستراحة', icon: '✨', description: 'مزيج من القاعة والاستراحة للراحة' },
      { name: 'إضاءة مميزة', icon: '💡', description: 'نظام إضاءة مدروس ومميز' },
      { name: 'خدمة شاملة', icon: '👥', description: 'خدمات متكاملة للضيوف' },
      { name: 'موقع هادئ', icon: '🚗', description: 'موقع هادئ في منطقة الزراعية' }
    ],
    packages: [
      { id: 'gold', name: 'الباقة الذهبية', price: 14000, description: 'قاعة واستراحة + خدمات شاملة' },
      { id: 'silver', name: 'الباقة الفضية', price: 9500, description: 'قاعة + خدمات أساسية' },
      { id: 'bronze', name: 'الباقة البرونزية', price: 6500, description: 'قاعة فقط' }
    ],
    reviews: [
      { id: '1', name: 'نايف البلوي', rating: 4, date: 'قبل 5 أيام', comment: 'مكان مريح وخدمة جيدة' },
      { id: '2', name: 'منال العنزي', rating: 4, date: 'قبل أسبوع', comment: 'استراحة مميزة ومناسبة للعائلات' }
    ],
    gallery: [
      'https://source.unsplash.com/featured/?wedding,resort,hall',
      'https://source.unsplash.com/featured/?relaxation,venue',
      'https://source.unsplash.com/featured/?family,celebration'
    ]
  },
  {
    id: 'tabuk-fakhama-hall',
    name: 'قاعة الفخامه',
    address: 'تبوك 47736',
    phone: '+966 50 469 8919',
    rating: 3.9,
    category: 'venues',
    price: 7500,
    priceUnit: 'ر.س / ليلة',
    image: 'https://source.unsplash.com/featured/?elegant,hall,wedding',
    position: { lat: 28.3567, lng: 36.5834 },
    distance: '5.2 كم',
    description: 'قاعة الفخامة تقدم خدمات الضيافة والاحتفالات بأسلوب أنيق ومميز في تبوك.',
    features: [
      { name: 'أناقة وفخامة', icon: '✨', description: 'تصميم أنيق يجسد الفخامة' },
      { name: 'إضاءة راقية', icon: '💡', description: 'نظام إضاءة راقي ومتطور' },
      { name: 'ضيافة مميزة', icon: '👥', description: 'خدمات ضيافة على مستوى عالي' },
      { name: 'موقع مناسب', icon: '🚗', description: 'موقع سهل الوصول إليه' }
    ],
    packages: [
      { id: 'gold', name: 'الباقة الذهبية', price: 11000, description: 'قاعة فاخرة + ضيافة شاملة' },
      { id: 'silver', name: 'الباقة الفضية', price: 7500, description: 'قاعة + ضيافة أساسية' },
      { id: 'bronze', name: 'الباقة البرونزية', price: 5000, description: 'قاعة فقط' }
    ],
    reviews: [
      { id: '1', name: 'علي الشراري', rating: 4, date: 'قبل 8 أيام', comment: 'قاعة جميلة وخدمة مقبولة' },
      { id: '2', name: 'سارة المطيري', rating: 4, date: 'قبل أسبوعين', comment: 'مكان لائق للاحتفالات البسيطة' }
    ],
    gallery: [
      'https://source.unsplash.com/featured/?elegant,hall,wedding',
      'https://source.unsplash.com/featured/?sophisticated,decoration',
      'https://source.unsplash.com/featured/?classy,event'
    ]
  },
  {
    id: 'tabuk-jawhara-hall',
    name: 'قاعة الجوهرة',
    address: 'تبوك 47736',
    phone: '+966 50 066 6741',
    rating: 3.7,
    category: 'venues',
    price: 7000,
    priceUnit: 'ر.س / ليلة',
    image: 'https://source.unsplash.com/featured/?jewel,hall,wedding',
    position: { lat: 28.3445, lng: 36.5923 },
    distance: '5.8 كم',
    description: 'قاعة الجوهرة تقدم خدمات احتفالات مناسبة للمناسبات المتوسطة بأسعار معقولة.',
    features: [
      { name: 'تصميم جميل', icon: '✨', description: 'تصميم داخلي جميل ومرتب' },
      { name: 'إضاءة جيدة', icon: '💡', description: 'نظام إضاءة جيد ومناسب' },
      { name: 'خدمة ودودة', icon: '👥', description: 'فريق خدمة ودود ومتعاون' },
      { name: 'مواقف متاحة', icon: '🚗', description: 'مواقف سيارات متاحة' }
    ],
    packages: [
      { id: 'gold', name: 'الباقة الذهبية', price: 10000, description: 'قاعة + ضيافة + تنسيق' },
      { id: 'silver', name: 'الباقة الفضية', price: 7000, description: 'قاعة + ضيافة أساسية' },
      { id: 'bronze', name: 'الباقة البرونزية', price: 4500, description: 'قاعة فقط' }
    ],
    reviews: [
      { id: '1', name: 'خالد التميمي', rating: 4, date: 'قبل 12 يوم', comment: 'قاعة مناسبة للاحتفالات الصغيرة' },
      { id: '2', name: 'فاطمة الحربي', rating: 3, date: 'قبل 3 أسابيع', comment: 'مكان جيد وسعر مناسب' }
    ],
    gallery: [
      'https://source.unsplash.com/featured/?jewel,hall,wedding',
      'https://source.unsplash.com/featured/?crystal,decoration',
      'https://source.unsplash.com/featured/?shine,event'
    ]
  },
  {
    id: 'tabuk-lailat-omr-hall',
    name: 'قاعة ليلة العمر للاحتفالات بتبوك',
    address: '4340، تبوك 47914',
    phone: '+966 50 657 8699',
    rating: 3.6,
    category: 'venues',
    price: 6500,
    priceUnit: 'ر.س / ليلة',
    image: 'https://source.unsplash.com/featured/?lifetime,celebration,hall',
    position: { lat: 28.3234, lng: 36.5567 },
    distance: '6.1 كم',
    description: 'قاعة ليلة العمر تسعى لجعل مناسبتك ليلة لا تُنسى بخدمات مدروسة وأسعار مناسبة.',
    features: [
      { name: 'ذكرى لا تُنسى', icon: '✨', description: 'تصميم يهدف لصنع ذكريات جميلة' },
      { name: 'إضاءة رومانسية', icon: '💡', description: 'نظام إضاءة رومانسي ودافئ' },
      { name: 'خدمة مخصصة', icon: '👥', description: 'خدمة مخصصة حسب المناسبة' },
      { name: 'أسعار معقولة', icon: '🚗', description: 'أسعار مناسبة لجميع الميزانيات' }
    ],
    packages: [
      { id: 'gold', name: 'الباقة الذهبية', price: 9500, description: 'قاعة + ضيافة + تنسيق رومانسي' },
      { id: 'silver', name: 'الباقة الفضية', price: 6500, description: 'قاعة + ضيافة أساسية' },
      { id: 'bronze', name: 'الباقة البرونزية', price: 4000, description: 'قاعة فقط' }
    ],
    reviews: [
      { id: '1', name: 'أحمد الجهني', rating: 4, date: 'قبل 10 أيام', comment: 'قاعة مناسبة وسعر جيد' },
      { id: '2', name: 'نوف العتيبي', rating: 3, date: 'قبل شهر', comment: 'مكان بسيط ومناسب للاحتفالات الصغيرة' }
    ],
    gallery: [
      'https://source.unsplash.com/featured/?lifetime,celebration,hall',
      'https://source.unsplash.com/featured/?romantic,lighting',
      'https://source.unsplash.com/featured/?memorable,event'
    ]
  },
  {
    id: 'tabuk-layalina-hall',
    name: 'قاعة ليالينا للاحتفالات',
    address: 'حي, 8259 بدر، الفيصليةالجنوبية، تبوك 47911 3690',
    phone: '+966 59 280 9653',
    rating: 4.1,
    category: 'venues',
    price: 8500,
    priceUnit: 'ر.س / ليلة',
    image: 'https://source.unsplash.com/featured/?nights,celebration,hall',
    position: { lat: 28.3678, lng: 36.5445 },
    distance: '4.3 كم',
    description: 'قاعة ليالينا في حي الفيصلية الجنوبية، تقدم أجواء احتفالية مميزة لجميع المناسبات.',
    features: [
      { name: 'أجواء ليلية', icon: '✨', description: 'أجواء ليلية ساحرة ومميزة' },
      { name: 'إضاءة متقنة', icon: '💡', description: 'نظام إضاءة متقن ومدروس' },
      { name: 'فريق محترف', icon: '👥', description: 'فريق عمل محترف ومتخصص' },
      { name: 'موقع جيد', icon: '🚗', description: 'موقع جيد في حي الفيصلية' }
    ],
    packages: [
      { id: 'gold', name: 'الباقة الذهبية', price: 12500, description: 'قاعة ليلية + ضيافة + تنسيق' },
      { id: 'silver', name: 'الباقة الفضية', price: 8500, description: 'قاعة + ضيافة أساسية' },
      { id: 'bronze', name: 'الباقة البرونزية', price: 5500, description: 'قاعة فقط' }
    ],
    reviews: [
      { id: '1', name: 'عبدالرحمن الشراري', rating: 4, date: 'قبل 6 أيام', comment: 'قاعة جميلة وأجواء ليلية مميزة' },
      { id: '2', name: 'هيا العنزي', rating: 4, date: 'قبل أسبوعين', comment: 'خدمة جيدة وموقع مناسب' }
    ],
    gallery: [
      'https://source.unsplash.com/featured/?nights,celebration,hall',
      'https://source.unsplash.com/featured/?evening,party',
      'https://source.unsplash.com/featured/?nighttime,event'
    ]
  },
  {
    id: 'tabuk-wafa-palace',
    name: 'قصر الوفاء',
    address: '6882، 4037، منطقة الزراعية، تبوك 47319',
    phone: 'غير متوفر',
    rating: 3.5,
    category: 'venues',
    price: 6000,
    priceUnit: 'ر.س / ليلة',
    image: 'https://source.unsplash.com/featured/?loyalty,palace,wedding',
    position: { lat: 28.3889, lng: 36.5198 },
    distance: '4.8 كم',
    description: 'قصر الوفاء في منطقة الزراعية، يقدم خدمات احتفالات بأسلوب تقليدي وأصيل.',
    features: [
      { name: 'طابع تقليدي', icon: '✨', description: 'تصميم تقليدي أصيل ومميز' },
      { name: 'إضاءة كلاسيكية', icon: '💡', description: 'نظام إضاءة كلاسيكي وأنيق' },
      { name: 'خدمة تقليدية', icon: '👥', description: 'خدمة تجسد الكرم العربي الأصيل' },
      { name: 'موقع هادئ', icon: '🚗', description: 'موقع هادئ في منطقة الزراعية' }
    ],
    packages: [
      { id: 'gold', name: 'الباقة الذهبية', price: 9000, description: 'قصر + ضيافة تقليدية + تنسيق' },
      { id: 'silver', name: 'الباقة الفضية', price: 6000, description: 'قصر + ضيافة أساسية' },
      { id: 'bronze', name: 'الباقة البرونزية', price: 4000, description: 'قصر فقط' }
    ],
    reviews: [
      { id: '1', name: 'سعود البلوي', rating: 4, date: 'قبل أسبوع', comment: 'مكان تقليدي جميل' },
      { id: '2', name: 'أمل الحربي', rating: 3, date: 'قبل شهر', comment: 'مكان بسيط ومناسب' }
    ],
    gallery: [
      'https://source.unsplash.com/featured/?loyalty,palace,wedding',
      'https://source.unsplash.com/featured/?traditional,architecture',
      'https://source.unsplash.com/featured/?authentic,celebration'
    ]
  },
  {
    id: 'tabuk-dorrat-hall',
    name: 'قاعة درة تبوك',
    address: 'شارع الفحص الدوري، منطقة الزراعية، تبوك 47331',
    phone: '+966 53 099 0055',
    rating: 3.9,
    category: 'venues',
    price: 7500,
    priceUnit: 'ر.س / ليلة',
    image: 'https://source.unsplash.com/featured/?pearl,hall,wedding',
    position: { lat: 28.3756, lng: 36.5312 },
    distance: '4.5 كم',
    description: 'قاعة درة تبوك على شارع الفحص الدوري، تتميز بالأناقة والخدمة المتميزة في منطقة الزراعية.',
    features: [
      { name: 'أناقة ولمعان', icon: '✨', description: 'تصميم أنيق يشبه الدرة في جماله' },
      { name: 'إضاءة مشرقة', icon: '💡', description: 'نظام إضاءة مشرق ومبهج' },
      { name: 'خدمة راقية', icon: '👥', description: 'خدمة راقية ومهتمة بالتفاصيل' },
      { name: 'موقع مميز', icon: '🚗', description: 'موقع مميز على شارع رئيسي' }
    ],
    packages: [
      { id: 'gold', name: 'الباقة الذهبية', price: 11000, description: 'قاعة درة + ضيافة فاخرة + تنسيق' },
      { id: 'silver', name: 'الباقة الفضية', price: 7500, description: 'قاعة + ضيافة أساسية' },
      { id: 'bronze', name: 'الباقة البرونزية', price: 5000, description: 'قاعة فقط' }
    ],
    reviews: [
      { id: '1', name: 'ماجد الشمري', rating: 4, date: 'قبل 4 أيام', comment: 'قاعة جميلة وموقع ممتاز' },
      { id: '2', name: 'سلمى النفيعي', rating: 4, date: 'قبل أسبوع', comment: 'خدمة مميزة وتنظيم جيد' }
    ],
    gallery: [
      'https://source.unsplash.com/featured/?pearl,hall,wedding',
      'https://source.unsplash.com/featured/?bright,decoration',
      'https://source.unsplash.com/featured/?elegant,venue'
    ]
  },
  {
    id: 'tabuk-amal-hall',
    name: 'قاعة الامل للاحتفالات والافراح',
    address: '7890، منطقة الزراعية، تبوك 47319',
    phone: '+966 53 326 2670',
    rating: 3.8,
    category: 'venues',
    price: 7000,
    priceUnit: 'ر.س / ليلة',
    image: 'https://source.unsplash.com/featured/?hope,celebration,hall',
    position: { lat: 28.3812, lng: 36.5276 },
    distance: '4.2 كم',
    description: 'قاعة الأمل في منطقة الزراعية، تقدم أجواء مفعمة بالأمل والفرح لجميع المناسبات السعيدة.',
    features: [
      { name: 'أجواء مفرحة', icon: '✨', description: 'أجواء مفعمة بالأمل والفرح' },
      { name: 'إضاءة دافئة', icon: '💡', description: 'نظام إضاءة دافئ ومريح' },
      { name: 'خدمة مبهجة', icon: '👥', description: 'فريق خدمة مبهج ومتفائل' },
      { name: 'جو عائلي', icon: '🚗', description: 'أجواء عائلية دافئة ومرحبة' }
    ],
    packages: [
      { id: 'gold', name: 'الباقة الذهبية', price: 10500, description: 'قاعة الأمل + ضيافة + تنسيق مفرح' },
      { id: 'silver', name: 'الباقة الفضية', price: 7000, description: 'قاعة + ضيافة أساسية' },
      { id: 'bronze', name: 'الباقة البرونزية', price: 4500, description: 'قاعة فقط' }
    ],
    reviews: [
      { id: '1', name: 'محمد العنزي', rating: 4, date: 'قبل 5 أيام', comment: 'أجواء جميلة ومفرحة' },
      { id: '2', name: 'زينب التميمي', rating: 4, date: 'قبل أسبوعين', comment: 'مكان مناسب للعائلات' }
    ],
    gallery: [
      'https://source.unsplash.com/featured/?hope,celebration,hall',
      'https://source.unsplash.com/featured/?joyful,decoration',
      'https://source.unsplash.com/featured/?warm,lighting'
    ]
  },
  {
    id: 'tabuk-fakhama-owner-hall',
    name: 'قاعة صاحبة الفخامة',
    address: 'Unnamed Road، منطقة الزراعية، تبوك 47331',
    phone: '+966 55 531 8247',
    rating: 3.5,
    category: 'venues',
    price: 6500,
    priceUnit: 'ر.س / ليلة',
    image: 'https://source.unsplash.com/featured/?majesty,elegance,hall',
    position: { lat: 28.3923, lng: 36.5156 },
    distance: '5.1 كم',
    description: 'قاعة صاحبة الفخامة تجسد معنى الفخامة والأناقة في منطقة الزراعية بتبوك.',
    features: [
      { name: 'فخامة مطلقة', icon: '✨', description: 'تصميم يجسد الفخامة بكل معانيها' },
      { name: 'إضاءة ملكية', icon: '💡', description: 'نظام إضاءة ملكي فاخر' },
      { name: 'خدمة راقية', icon: '👥', description: 'خدمة راقية تليق بالفخامة' },
      { name: 'موقع مميز', icon: '🚗', description: 'موقع مميز ومناسب' }
    ],
    packages: [
      { id: 'gold', name: 'الباقة الذهبية', price: 9500, description: 'قاعة فاخرة + ضيافة ملكية + تنسيق' },
      { id: 'silver', name: 'الباقة الفضية', price: 6500, description: 'قاعة + ضيافة أساسية' },
      { id: 'bronze', name: 'الباقة البرونزية', price: 4500, description: 'قاعة فقط' }
    ],
    reviews: [
      { id: '1', name: 'عبدالله البلوي', rating: 4, date: 'قبل 8 أيام', comment: 'قاعة فاخرة ومميزة' },
      { id: '2', name: 'نادية الشراري', rating: 3, date: 'قبل 3 أسابيع', comment: 'مكان جيد ولكن يحتاج تحسينات' }
    ],
    gallery: [
      'https://source.unsplash.com/featured/?majesty,elegance,hall',
      'https://source.unsplash.com/featured/?luxury,interior',
      'https://source.unsplash.com/featured/?royal,decoration'
    ]
  },
  {
    id: 'tabuk-hadath-hall',
    name: 'قاعة الحدث',
    address: '8HPW+F4M، طريق ابي بكر الصديق، منطقة العسكرية، تبوك 47513',
    phone: '+966 53 249 4040',
    rating: 3.9,
    category: 'venues',
    price: 7200,
    priceUnit: 'ر.س / ليلة',
    image: 'https://source.unsplash.com/featured/?event,hall,modern',
    position: { lat: 28.4234, lng: 36.5434 },
    distance: '3.8 كم',
    description: 'قاعة الحدث في المنطقة العسكرية، مصممة خصيصاً لتكون مركزاً لأهم الأحداث والمناسبات.',
    features: [
      { name: 'تصميم للأحداث', icon: '✨', description: 'تصميم مخصص لاستضافة الأحداث المهمة' },
      { name: 'تقنيات حديثة', icon: '💡', description: 'تقنيات صوت وإضاءة حديثة' },
      { name: 'تنظيم احترافي', icon: '👥', description: 'فريق تنظيم احترافي للأحداث' },
      { name: 'موقع أمني', icon: '🚗', description: 'موقع آمن في المنطقة العسكرية' }
    ],
    packages: [
      { id: 'gold', name: 'الباقة الذهبية', price: 10800, description: 'قاعة الحدث + تقنيات + تنظيم احترافي' },
      { id: 'silver', name: 'الباقة الفضية', price: 7200, description: 'قاعة + خدمات أساسية' },
      { id: 'bronze', name: 'الباقة البرونزية', price: 5000, description: 'قاعة فقط' }
    ],
    reviews: [
      { id: '1', name: 'فهد الحربي', rating: 4, date: 'قبل 3 أيام', comment: 'قاعة مناسبة للأحداث الرسمية' },
      { id: '2', name: 'ريم العتيبي', rating: 4, date: 'قبل أسبوع', comment: 'تنظيم جيد وموقع آمن' }
    ],
    gallery: [
      'https://source.unsplash.com/featured/?event,hall,modern',
      'https://source.unsplash.com/featured/?corporate,meeting',
      'https://source.unsplash.com/featured/?professional,venue'
    ]
  },
  {
    id: 'tabuk-samara-hall',
    name: 'قاعة سمارا للإحتفالات تبوك..',
    address: 'FJ96+PQ4، Opp. Farm Abdullah Bin Assi 1، منطقة الزراعية، تبوك 47319',
    phone: '+966 56 885 5583',
    rating: 3.8,
    category: 'venues',
    price: 6800,
    priceUnit: 'ر.س / ليلة',
    image: 'https://source.unsplash.com/featured/?celebration,samara,hall',
    position: { lat: 28.3689, lng: 36.5145 },
    distance: '5.3 كم',
    description: 'قاعة سمارا في منطقة الزراعية مقابل مزرعة عبدالله بن عسي، تقدم خدمات احتفالات مميزة.',
    features: [
      { name: 'موقع ريفي', icon: '✨', description: 'موقع هادئ وريفي مميز' },
      { name: 'إضاءة طبيعية', icon: '💡', description: 'نظام إضاءة يمزج الطبيعي والصناعي' },
      { name: 'أجواء هادئة', icon: '👥', description: 'أجواء هادئة ومريحة للضيوف' },
      { name: 'مساحة واسعة', icon: '🚗', description: 'مساحة واسعة ومواقف كافية' }
    ],
    packages: [
      { id: 'gold', name: 'الباقة الذهبية', price: 10000, description: 'قاعة ريفية + ضيافة + تنسيق طبيعي' },
      { id: 'silver', name: 'الباقة الفضية', price: 6800, description: 'قاعة + ضيافة أساسية' },
      { id: 'bronze', name: 'الباقة البرونزية', price: 4500, description: 'قاعة فقط' }
    ],
    reviews: [
      { id: '1', name: 'سالم الشراري', rating: 4, date: 'قبل 6 أيام', comment: 'مكان هادئ وجميل' },
      { id: '2', name: 'هند البلوي', rating: 4, date: 'قبل أسبوعين', comment: 'أجواء ريفية مميزة' }
    ],
    gallery: [
      'https://source.unsplash.com/featured/?celebration,samara,hall',
      'https://source.unsplash.com/featured/?rural,venue',
      'https://source.unsplash.com/featured/?natural,decoration'
    ]
  },
  {
    id: 'tabuk-kubra-hall',
    name: 'قاعة تبوك الكبرى',
    address: 'CHGG+WRV، طريق الملك عبدالله، المروج، تبوك 47312',
    phone: '+966 50 354 8888',
    rating: 3.6,
    category: 'venues',
    price: 9000,
    priceUnit: 'ر.س / ليلة',
    image: 'https://source.unsplash.com/featured/?grand,hall,tabuk',
    position: { lat: 28.4123, lng: 36.5678 },
    distance: '2.9 كم',
    description: 'قاعة تبوك الكبرى على طريق الملك عبدالله في حي المروج، إحدى أكبر القاعات في تبوك.',
    features: [
      { name: 'قاعة كبيرة', icon: '✨', description: 'واحدة من أكبر القاعات في تبوك' },
      { name: 'إضاءة شاملة', icon: '💡', description: 'نظام إضاءة شامل ومتطور' },
      { name: 'سعة كبيرة', icon: '👥', description: 'تتسع لعدد كبير من الضيوف' },
      { name: 'موقع مركزي', icon: '🚗', description: 'موقع مركزي على طريق الملك عبدالله' }
    ],
    packages: [
      { id: 'gold', name: 'الباقة الذهبية', price: 13500, description: 'القاعة الكبرى + ضيافة شاملة + تنسيق' },
      { id: 'silver', name: 'الباقة الفضية', price: 9000, description: 'قاعة + ضيافة أساسية' },
      { id: 'bronze', name: 'الباقة البرونزية', price: 6500, description: 'قاعة فقط' }
    ],
    reviews: [
      { id: '1', name: 'ناصر العنزي', rating: 4, date: 'قبل 4 أيام', comment: 'قاعة كبيرة ومناسبة للمناسبات الكبيرة' },
      { id: '2', name: 'أمينة الحربي', rating: 3, date: 'قبل أسبوع', comment: 'مساحة واسعة لكن تحتاج تحديث' }
    ],
    gallery: [
      'https://source.unsplash.com/featured/?grand,hall,tabuk',
      'https://source.unsplash.com/featured/?large,venue',
      'https://source.unsplash.com/featured/?spacious,event'
    ]
  },
  {
    id: 'tabuk-turquoise-hall',
    name: 'قاعة تركواز للاحتفالات',
    address: '3117، تبوك 47315 8072',
    phone: '+966 50 202 7000',
    rating: 4.2,
    category: 'venues',
    price: 8200,
    priceUnit: 'ر.س / ليلة',
    image: 'https://source.unsplash.com/featured/?turquoise,hall,elegant',
    position: { lat: 28.3567, lng: 36.5789 },
    distance: '3.7 كم',
    description: 'قاعة تركواز تتميز بألوانها الهادئة والجميلة، وتقدم خدمات احتفالات راقية ومميزة.',
    features: [
      { name: 'ألوان هادئة', icon: '✨', description: 'تصميم بألوان التركواز الهادئة والجميلة' },
      { name: 'إضاءة ملونة', icon: '💡', description: 'نظام إضاءة ملونة ومتناسقة' },
      { name: 'ديكور عصري', icon: '👥', description: 'ديكور عصري وأنيق' },
      { name: 'جو مريح', icon: '🚗', description: 'أجواء مريحة ومهدئة للنفس' }
    ],
    packages: [
      { id: 'gold', name: 'الباقة الذهبية', price: 12000, description: 'قاعة تركواز + ضيافة راقية + تنسيق ملون' },
      { id: 'silver', name: 'الباقة الفضية', price: 8200, description: 'قاعة + ضيافة أساسية' },
      { id: 'bronze', name: 'الباقة البرونزية', price: 5500, description: 'قاعة فقط' }
    ],
    reviews: [
      { id: '1', name: 'فايز التميمي', rating: 4, date: 'قبل 2 أيام', comment: 'ألوان جميلة وأجواء هادئة' },
      { id: '2', name: 'لطيفة الشمري', rating: 4, date: 'قبل أسبوع', comment: 'قاعة مميزة وديكور راقي' }
    ],
    gallery: [
      'https://source.unsplash.com/featured/?turquoise,hall,elegant',
      'https://source.unsplash.com/featured/?blue,green,decoration',
      'https://source.unsplash.com/featured/?calm,colors'
    ]
  },
  {
    id: 'tabuk-lamasat-almas-hall',
    name: 'قاعة لمسة الماسة للاحتفالات',
    address: 'FH3G+Q9X, 8178، منطقة الزراعية، تبوك 47322',
    phone: '+966 50 052 9003',
    rating: 4.1,
    category: 'venues',
    price: 8800,
    priceUnit: 'ر.س / ليلة',
    image: 'https://source.unsplash.com/featured/?diamond,touch,hall',
    position: { lat: 28.3745, lng: 36.5267 },
    distance: '4.6 كم',
    description: 'قاعة لمسة الماسة تضفي لمسة من البريق والأناقة على مناسباتكم في منطقة الزراعية.',
    features: [
      { name: 'لمسة ماسية', icon: '✨', description: 'تصميم يضفي لمسة ماسية براقة' },
      { name: 'إضاءة براقة', icon: '💡', description: 'نظام إضاءة براق كالماس' },
      { name: 'تفاصيل أنيقة', icon: '👥', description: 'اهتمام بالتفاصيل الأنيقة' },
      { name: 'خدمة متميزة', icon: '🚗', description: 'خدمة متميزة ولائقة' }
    ],
    packages: [
      { id: 'gold', name: 'الباقة الذهبية', price: 13000, description: 'لمسة ماسية + ضيافة فاخرة + تنسيق براق' },
      { id: 'silver', name: 'الباقة الفضية', price: 8800, description: 'قاعة + ضيافة أساسية' },
      { id: 'bronze', name: 'الباقة البرونزية', price: 6000, description: 'قاعة فقط' }
    ],
    reviews: [
      { id: '1', name: 'مشعل البلوي', rating: 4, date: 'قبل 3 أيام', comment: 'قاعة براقة ومميزة' },
      { id: '2', name: 'سعاد العنزي', rating: 4, date: 'قبل أسبوعين', comment: 'تفاصيل جميلة ولمسة أنيقة' }
    ],
    gallery: [
      'https://source.unsplash.com/featured/?diamond,touch,hall',
      'https://source.unsplash.com/featured/?sparkling,decoration',
      'https://source.unsplash.com/featured/?brilliant,venue'
    ]
  },
  {
    id: 'tabuk-khayal-palace',
    name: 'قصر خيال للاحتفالات',
    address: '8807، 4391، منطقة الزراعية، تبوك 47331',
    phone: '+966 55 531 8247',
    rating: 3.8,
    category: 'venues',
    price: 7800,
    priceUnit: 'ر.س / ليلة',
    image: 'https://source.unsplash.com/featured/?fantasy,palace,celebration',
    position: { lat: 28.3834, lng: 36.5189 },
    distance: '4.9 كم',
    description: 'قصر خيال يحول أحلامكم إلى حقيقة بتصميمه الخيالي وخدماته المبدعة في منطقة الزراعية.',
    features: [
      { name: 'تصميم خيالي', icon: '✨', description: 'تصميم خيالي يحقق الأحلام' },
      { name: 'إضاءة سحرية', icon: '💡', description: 'نظام إضاءة سحري ومبهر' },
      { name: 'أجواء حالمة', icon: '👥', description: 'أجواء حالمة وخيالية' },
      { name: 'خدمة إبداعية', icon: '🚗', description: 'خدمة إبداعية ومبتكرة' }
    ],
    packages: [
      { id: 'gold', name: 'الباقة الذهبية', price: 11500, description: 'قصر خيالي + ضيافة سحرية + تنسيق حالم' },
      { id: 'silver', name: 'الباقة الفضية', price: 7800, description: 'قصر + ضيافة أساسية' },
      { id: 'bronze', name: 'الباقة البرونزية', price: 5500, description: 'قصر فقط' }
    ],
    reviews: [
      { id: '1', name: 'عادل الشراري', rating: 4, date: 'قبل 5 أيام', comment: 'تصميم خيالي ومبدع' },
      { id: '2', name: 'نوال الحربي', rating: 4, date: 'قبل أسبوع', comment: 'مكان حالم ومميز' }
    ],
    gallery: [
      'https://source.unsplash.com/featured/?fantasy,palace,celebration',
      'https://source.unsplash.com/featured/?dreamy,decoration',
      'https://source.unsplash.com/featured/?magical,venue'
    ]
  },
  {
    id: 'tabuk-lulua-hall',
    name: 'قاعة اللؤلؤه للاحتفالات',
    address: 'CC5Q+2CJ، تبوك 47735',
    phone: '+966 50 208 8290',
    rating: 5.0,
    category: 'venues',
    price: 12000,
    priceUnit: 'ر.س / ليلة',
    image: 'https://source.unsplash.com/featured/?pearl,hall,luxury',
    position: { lat: 28.3578, lng: 36.5989 },
    distance: '5.7 كم',
    description: 'قاعة اللؤلؤة تشع بالنقاء والجمال، تقدم خدمات احتفالات استثنائية بتقييم مثالي من العملاء.',
    features: [
      { name: 'نقاء اللؤلؤ', icon: '✨', description: 'تصميم نقي وجميل كاللؤلؤة' },
      { name: 'إضاءة لؤلؤية', icon: '💡', description: 'نظام إضاءة ناعم ولؤلؤي' },
      { name: 'خدمة مثالية', icon: '👥', description: 'خدمة مثالية حاصلة على تقييم كامل' },
      { name: 'جودة عالية', icon: '🚗', description: 'جودة عالية في كل التفاصيل' }
    ],
    packages: [
      { id: 'gold', name: 'الباقة الذهبية', price: 18000, description: 'قاعة اللؤلؤة + ضيافة راقية + تنسيق مثالي' },
      { id: 'silver', name: 'الباقة الفضية', price: 12000, description: 'قاعة + ضيافة متميزة' },
      { id: 'bronze', name: 'الباقة البرونزية', price: 8500, description: 'قاعة فقط' }
    ],
    reviews: [
      { id: '1', name: 'راشد النفيعي', rating: 5, date: 'قبل يوم', comment: 'قاعة مثالية وخدمة استثنائية' },
      { id: '2', name: 'جواهر التميمي', rating: 5, date: 'قبل 3 أيام', comment: 'أفضل قاعة في تبوك بلا منازع' }
    ],
    gallery: [
      'https://source.unsplash.com/featured/?pearl,hall,luxury',
      'https://source.unsplash.com/featured/?pure,white,decoration',
      'https://source.unsplash.com/featured/?perfect,venue'
    ]
  },
  {
    id: 'tabuk-nujoom-palace',
    name: 'قصر وقاعة النجوم للأفراح والمناسبات',
    address: 'CMF4+WV7، منطقة الزراعية، تبوك 47331',
    phone: '+966 50 243 3351',
    rating: 3.6,
    category: 'venues',
    price: 8500,
    priceUnit: 'ر.س / ليلة',
    image: 'https://source.unsplash.com/featured/?stars,palace,night',
    position: { lat: 28.3745, lng: 36.5123 },
    distance: '5.4 كم',
    description: 'قصر وقاعة النجوم يضعكم تحت سماء مليئة بالنجوم في أجواء احتفالية ساحرة.',
    features: [
      { name: 'سماء النجوم', icon: '✨', description: 'تصميم يحاكي سماء مليئة بالنجوم' },
      { name: 'إضاءة نجمية', icon: '💡', description: 'نظام إضاءة نجمي مبهر' },
      { name: 'أجواء ليلية', icon: '👥', description: 'أجواء ليلية ساحرة ومميزة' },
      { name: 'قصر وقاعة', icon: '🚗', description: 'يجمع بين فخامة القصر ووسع القاعة' }
    ],
    packages: [
      { id: 'gold', name: 'الباقة الذهبية', price: 12500, description: 'قصر النجوم + ضيافة + تنسيق نجمي' },
      { id: 'silver', name: 'الباقة الفضية', price: 8500, description: 'قاعة + ضيافة أساسية' },
      { id: 'bronze', name: 'الباقة البرونزية', price: 6000, description: 'قاعة فقط' }
    ],
    reviews: [
      { id: '1', name: 'طلال العنزي', rating: 4, date: 'قبل 7 أيام', comment: 'أجواء نجمية مميزة' },
      { id: '2', name: 'فوزية البلوي', rating: 3, date: 'قبل 3 أسابيع', comment: 'مكان جميل لكن يحتاج تطوير' }
    ],
    gallery: [
      'https://source.unsplash.com/featured/?stars,palace,night',
      'https://source.unsplash.com/featured/?starry,decoration',
      'https://source.unsplash.com/featured/?celestial,venue'
    ]
  },
  {
    id: 'tabuk-rawshan-palace',
    name: 'قصر الروشن تبوك الريان',
    address: 'AR Rabiyah Subdivision 8105 5186 AR Rabiyah Subdivision Tabuk Saudi Arabia 47325',
    phone: '+966 53 400 0025',
    rating: 3.8,
    category: 'venues',
    price: 9200,
    priceUnit: 'ر.س / ليلة',
    image: 'https://source.unsplash.com/featured/?bright,palace,elegant',
    position: { lat: 28.3923, lng: 36.5456 },
    distance: '3.4 كم',
    description: 'قصر الروشن في الريان يضيء مناسباتكم بأناقة وجمال لا مثيل له في تبوك.',
    features: [
      { name: 'إضاءة روشن', icon: '✨', description: 'إضاءة مشرقة وروشن مميزة' },
      { name: 'تصميم براق', icon: '💡', description: 'تصميم براق ومشرق' },
      { name: 'أجواء مضيئة', icon: '👥', description: 'أجواء مضيئة ومبهجة' },
      { name: 'موقع الريان', icon: '🚗', description: 'موقع مميز في حي الريان' }
    ],
    packages: [
      { id: 'gold', name: 'الباقة الذهبية', price: 13500, description: 'قصر الروشن + ضيافة مضيئة + تنسيق براق' },
      { id: 'silver', name: 'الباقة الفضية', price: 9200, description: 'قصر + ضيافة أساسية' },
      { id: 'bronze', name: 'الباقة البرونزية', price: 6500, description: 'قصر فقط' }
    ],
    reviews: [
      { id: '1', name: 'بندر الشمري', rating: 4, date: 'قبل 4 أيام', comment: 'قصر مضيء وجميل' },
      { id: '2', name: 'أسماء الحربي', rating: 4, date: 'قبل أسبوع', comment: 'مكان مشرق ومبهج' }
    ],
    gallery: [
      'https://source.unsplash.com/featured/?bright,palace,elegant',
      'https://source.unsplash.com/featured/?illuminated,decoration',
      'https://source.unsplash.com/featured/?radiant,venue'
    ]
  },
  {
    id: 'tabuk-taj-nazeem-hall',
    name: 'قاعة تاج تبوك حي النظيم',
    address: 'النظيم، طريق الإمام عبد الرحمن بن محمد حي، تبوك 47915',
    phone: '+966 55 868 0098',
    rating: 3.7,
    category: 'venues',
    price: 7600,
    priceUnit: 'ر.س / ليلة',
    image: 'https://source.unsplash.com/featured/?crown,hall,organized',
    position: { lat: 28.4234, lng: 36.5567 },
    distance: '3.1 كم',
    description: 'قاعة تاج تبوك في حي النظيم، تتوج مناسباتكم بالأناقة والتنظيم المثالي.',
    features: [
      { name: 'تاج الأناقة', icon: '✨', description: 'تصميم يتوج المناسبة بالأناقة' },
      { name: 'تنظيم مثالي', icon: '💡', description: 'تنظيم مثالي ومنسق' },
      { name: 'خدمة ملكية', icon: '👥', description: 'خدمة ملكية تليق بالتاج' },
      { name: 'حي النظيم', icon: '🚗', description: 'موقع منظم في حي النظيم' }
    ],
    packages: [
      { id: 'gold', name: 'الباقة الذهبية', price: 11000, description: 'قاعة التاج + ضيافة ملكية + تنظيم مثالي' },
      { id: 'silver', name: 'الباقة الفضية', price: 7600, description: 'قاعة + ضيافة أساسية' },
      { id: 'bronze', name: 'الباقة البرونزية', price: 5200, description: 'قاعة فقط' }
    ],
    reviews: [
      { id: '1', name: 'وليد العتيبي', rating: 4, date: 'قبل 6 أيام', comment: 'تنظيم جيد وموقع مناسب' },
      { id: '2', name: 'حصة النفيعي', rating: 4, date: 'قبل أسبوعين', comment: 'قاعة مرتبة ومنظمة' }
    ],
    gallery: [
      'https://source.unsplash.com/featured/?crown,hall,organized',
      'https://source.unsplash.com/featured/?royal,crown',
      'https://source.unsplash.com/featured/?organized,venue'
    ]
  },
  {
    id: 'tabuk-manakh-hall',
    name: 'قاعة المناخ للمناسبات',
    address: '47736، تبوك',
    phone: '+966 55 455 0912',
    rating: 4.2,
    category: 'venues',
    price: 8000,
    priceUnit: 'ر.س / ليلة',
    image: 'https://source.unsplash.com/featured/?climate,atmosphere,hall',
    position: { lat: 28.3456, lng: 36.5834 },
    distance: '5.1 كم',
    description: 'قاعة المناخ تهيئ لكم المناخ المثالي للاحتفال بجو مريح ومناسب لجميع المناسبات.',
    features: [
      { name: 'مناخ مثالي', icon: '✨', description: 'مناخ مريح ومثالي للاحتفال' },
      { name: 'تهوية ممتازة', icon: '💡', description: 'نظام تهوية وتكييف ممتاز' },
      { name: 'جو مريح', icon: '👥', description: 'أجواء مريحة ومناسبة' },
      { name: 'راحة تامة', icon: '🚗', description: 'راحة تامة للضيوف' }
    ],
    packages: [
      { id: 'gold', name: 'الباقة الذهبية', price: 12000, description: 'قاعة المناخ + ضيافة + تنسيق مريح' },
      { id: 'silver', name: 'الباقة الفضية', price: 8000, description: 'قاعة + ضيافة أساسية' },
      { id: 'bronze', name: 'الباقة البرونزية', price: 5500, description: 'قاعة فقط' }
    ],
    reviews: [
      { id: '1', name: 'عثمان البلوي', rating: 4, date: 'قبل 2 أيام', comment: 'مناخ مريح وجو مناسب' },
      { id: '2', name: 'دلال الشراري', rating: 4, date: 'قبل أسبوع', comment: 'قاعة مريحة وتهوية ممتازة' }
    ],
    gallery: [
      'https://source.unsplash.com/featured/?climate,atmosphere,hall',
      'https://source.unsplash.com/featured/?comfortable,venue',
      'https://source.unsplash.com/featured/?perfect,temperature'
    ]
  },
  {
    id: 'tabuk-taj-ziraiya-hall',
    name: 'قاعة التاج للاحتفالات',
    address: '4004، 7182، منطقة الزراعية، تبوك 47319',
    phone: '+966 53 400 7486',
    rating: 3.6,
    category: 'venues',
    price: 7400,
    priceUnit: 'ر.س / ليلة',
    image: 'https://source.unsplash.com/featured/?crown,celebration,agricultural',
    position: { lat: 28.3812, lng: 36.5234 },
    distance: '4.7 كم',
    description: 'قاعة التاج في منطقة الزراعية، تضع التاج على رؤوس المحتفلين بخدماتها المميزة.',
    features: [
      { name: 'تاج الفخر', icon: '✨', description: 'تصميم يضع تاج الفخر على المناسبة' },
      { name: 'إضاءة ملكية', icon: '💡', description: 'نظام إضاءة ملكي مميز' },
      { name: 'خدمة متوجة', icon: '👥', description: 'خدمة متوجة بالإتقان' },
      { name: 'موقع زراعي', icon: '🚗', description: 'موقع هادئ في المنطقة الزراعية' }
    ],
    packages: [
      { id: 'gold', name: 'الباقة الذهبية', price: 11000, description: 'قاعة التاج + ضيافة ملكية + تنسيق فاخر' },
      { id: 'silver', name: 'الباقة الفضية', price: 7400, description: 'قاعة + ضيافة أساسية' },
      { id: 'bronze', name: 'الباقة البرونزية', price: 5000, description: 'قاعة فقط' }
    ],
    reviews: [
      { id: '1', name: 'مساعد العنزي', rating: 4, date: 'قبل 9 أيام', comment: 'قاعة مناسبة في موقع هادئ' },
      { id: '2', name: 'عبير الحربي', rating: 3, date: 'قبل 3 أسابيع', comment: 'مكان جيد لكن يحتاج تحسينات' }
    ],
    gallery: [
      'https://source.unsplash.com/featured/?crown,celebration,agricultural',
      'https://source.unsplash.com/featured/?rural,crown',
      'https://source.unsplash.com/featured/?peaceful,venue'
    ]
  },
  {
    id: 'tabuk-rosa-field-hall',
    name: 'قاعة روزا فيلد للاحتفالات',
    address: '3447 الأمير عبد المجيد، حي الورود، KAAA8163، 8163، تبوك 47312',
    phone: '+966 55 525 6514',
    rating: 3.9,
    category: 'venues',
    price: 8300,
    priceUnit: 'ر.س / ليلة',
    image: 'https://source.unsplash.com/featured/?rose,field,garden',
    position: { lat: 28.4067, lng: 36.5456 },
    distance: '3.2 كم',
    description: 'قاعة روزا فيلد في حي الورود، تحيطكم بعبق الورود وجمال الطبيعة في أجواء احتفالية رومانسية.',
    features: [
      { name: 'عبق الورود', icon: '✨', description: 'أجواء معطرة بعبق الورود الجميلة' },
      { name: 'ديكور طبيعي', icon: '💡', description: 'ديكور طبيعي مستوحى من الحدائق' },
      { name: 'أجواء رومانسية', icon: '👥', description: 'أجواء رومانسية مفعمة بالحب' },
      { name: 'حي الورود', icon: '🚗', description: 'موقع شاعري في حي الورود' }
    ],
    packages: [
      { id: 'gold', name: 'الباقة الذهبية', price: 12000, description: 'حديقة الورود + ضيافة رومانسية + تنسيق طبيعي' },
      { id: 'silver', name: 'الباقة الفضية', price: 8300, description: 'قاعة + ضيافة أساسية' },
      { id: 'bronze', name: 'الباقة البرونزية', price: 5800, description: 'قاعة فقط' }
    ],
    reviews: [
      { id: '1', name: 'يوسف التميمي', rating: 4, date: 'قبل 3 أيام', comment: 'أجواء رومانسية وعبق الورود جميل' },
      { id: '2', name: 'روان الشمري', rating: 4, date: 'قبل أسبوع', comment: 'مكان شاعري ومناسب للأعراس' }
    ],
    gallery: [
      'https://source.unsplash.com/featured/?rose,field,garden',
      'https://source.unsplash.com/featured/?romantic,flowers',
      'https://source.unsplash.com/featured/?garden,venue'
    ]
  },
  {
    id: 'tabuk-amazing-gift-hall',
    name: 'الهدية المذهلة للحفلات',
    address: 'CG3Q+3J4, طريق الملك عبدالعزيز،حي السعاده مقابل الهرم بلازا, تبوك',
    phone: '+966 53 736 9445',
    rating: 4.2,
    category: 'venues',
    price: 8600,
    priceUnit: 'ر.س / ليلة',
    image: 'https://source.unsplash.com/featured/?amazing,gift,celebration',
    position: { lat: 28.3945, lng: 36.5678 },
    distance: '2.8 كم',
    description: 'الهدية المذهلة في حي السعادة مقابل الهرم بلازا، تقدم لكم هدية احتفال لا تُنسى.',
    features: [
      { name: 'هدية مذهلة', icon: '✨', description: 'تجربة احتفال مذهلة كالهدية' },
      { name: 'موقع مميز', icon: '💡', description: 'موقع مميز مقابل الهرم بلازا' },
      { name: 'سعادة غامرة', icon: '👥', description: 'أجواء سعادة غامرة ومبهجة' },
      { name: 'حي السعادة', icon: '🚗', description: 'في قلب حي السعادة' }
    ],
    packages: [
      { id: 'gold', name: 'الباقة الذهبية', price: 12500, description: 'الهدية الذهبية + ضيافة مذهلة + تنسيق سعيد' },
      { id: 'silver', name: 'الباقة الفضية', price: 8600, description: 'قاعة + ضيافة أساسية' },
      { id: 'bronze', name: 'الباقة البرونزية', price: 6000, description: 'قاعة فقط' }
    ],
    reviews: [
      { id: '1', name: 'سلطان البلوي', rating: 4, date: 'قبل يومين', comment: 'هدية حقيقية من السعادة' },
      { id: '2', name: 'غدير العنزي', rating: 4, date: 'قبل أسبوع', comment: 'موقع ممتاز وخدمة مذهلة' }
    ],
    gallery: [
      'https://source.unsplash.com/featured/?amazing,gift,celebration',
      'https://source.unsplash.com/featured/?happiness,venue',
      'https://source.unsplash.com/featured/?joyful,decoration'
    ]
  },
  {
    id: 'tabuk-boulevard-hall',
    name: 'قاعة البوليفارد للمناسبات',
    address: 'CC4G+4PG، تبوك 47736',
    phone: '+966 50 358 6435',
    rating: 4.4,
    category: 'venues',
    price: 9500,
    priceUnit: 'ر.س / ليلة',
    image: 'https://source.unsplash.com/featured/?boulevard,modern,hall',
    position: { lat: 28.3556, lng: 36.5823 },
    distance: '5.3 كم',
    description: 'قاعة البوليفارد تجمع بين الحداثة والأناقة، وتقدم تجربة احتفال عصرية ومتطورة.',
    features: [
      { name: 'تصميم عصري', icon: '✨', description: 'تصميم عصري على طراز البوليفارد' },
      { name: 'تقنيات حديثة', icon: '💡', description: 'أحدث التقنيات والأنظمة' },
      { name: 'أناقة حديثة', icon: '👥', description: 'أناقة حديثة ومتطورة' },
      { name: 'موقع حيوي', icon: '🚗', description: 'موقع حيوي ومتطور' }
    ],
    packages: [
      { id: 'gold', name: 'الباقة الذهبية', price: 14000, description: 'بوليفارد فاخر + ضيافة عصرية + تقنيات حديثة' },
      { id: 'silver', name: 'الباقة الفضية', price: 9500, description: 'قاعة + ضيافة أساسية' },
      { id: 'bronze', name: 'الباقة البرونزية', price: 7000, description: 'قاعة فقط' }
    ],
    reviews: [
      { id: '1', name: 'عبدالعزيز الشراري', rating: 4, date: 'قبل يوم', comment: 'قاعة حديثة ومتطورة' },
      { id: '2', name: 'ليلى الحربي', rating: 5, date: 'قبل 5 أيام', comment: 'أفضل قاعة عصرية في تبوك' }
    ],
    gallery: [
      'https://source.unsplash.com/featured/?boulevard,modern,hall',
      'https://source.unsplash.com/featured/?contemporary,venue',
      'https://source.unsplash.com/featured/?urban,celebration'
    ]
  },
  {
    id: 'tabuk-farah-occasions',
    name: 'فرح للمناسبات',
    address: 'طريق المدينه، تبوك 47319',
    phone: '+966 53 419 8117',
    rating: 4.5,
    category: 'venues',
    price: 9000,
    priceUnit: 'ر.س / ليلة',
    image: 'https://source.unsplash.com/featured/?joy,occasions,celebration',
    position: { lat: 28.3723, lng: 36.5345 },
    distance: '4.1 كم',
    description: 'فرح للمناسبات على طريق المدينة، يملأ قلوبكم فرحاً وسعادة في كل مناسبة.',
    features: [
      { name: 'فرح خالص', icon: '✨', description: 'أجواء فرح خالص وسعادة غامرة' },
      { name: 'إضاءة مفرحة', icon: '💡', description: 'نظام إضاءة مفرح ومبهج' },
      { name: 'فريق مبهج', icon: '👥', description: 'فريق عمل مبهج ومفرح' },
      { name: 'طريق المدينة', icon: '🚗', description: 'موقع مميز على طريق المدينة' }
    ],
    packages: [
      { id: 'gold', name: 'الباقة الذهبية', price: 13500, description: 'فرح كامل + ضيافة مبهجة + تنسيق مفرح' },
      { id: 'silver', name: 'الباقة الفضية', price: 9000, description: 'قاعة + ضيافة أساسية' },
      { id: 'bronze', name: 'الباقة البرونزية', price: 6500, description: 'قاعة فقط' }
    ],
    reviews: [
      { id: '1', name: 'فهد النفيعي', rating: 5, date: 'قبل 3 أيام', comment: 'فرح حقيقي وسعادة لا توصف' },
      { id: '2', name: 'ندى التميمي', rating: 4, date: 'قبل أسبوع', comment: 'مكان مفرح وخدمة ممتازة' }
    ],
    gallery: [
      'https://source.unsplash.com/featured/?joy,occasions,celebration',
      'https://source.unsplash.com/featured/?happiness,party',
      'https://source.unsplash.com/featured/?cheerful,venue'
    ]
  },
  {
    id: 'tabuk-noor-palace',
    name: 'قصر النور للإحتفالات',
    address: 'طريق المدينة، تبوك 47916',
    phone: '+966 50 188 8927',
    rating: 4.5,
    category: 'venues',
    price: 10500,
    priceUnit: 'ر.س / ليلة',
    image: 'https://source.unsplash.com/featured/?light,palace,bright',
    position: { lat: 28.3834, lng: 36.5567 },
    distance: '3.6 كم',
    description: 'قصر النور على طريق المدينة، ينير دربكم بالسعادة والفرح في أجواء قصر مضيء.',
    features: [
      { name: 'نور ساطع', icon: '✨', description: 'إضاءة ساطعة تنير القصر بالكامل' },
      { name: 'قصر مضيء', icon: '💡', description: 'قصر مضيء بالنور والبهجة' },
      { name: 'أجواء مشرقة', icon: '👥', description: 'أجواء مشرقة ومفعمة بالنور' },
      { name: 'إشراق دائم', icon: '🚗', description: 'إشراق دائم في جميع الأوقات' }
    ],
    packages: [
      { id: 'gold', name: 'الباقة الذهبية', price: 15500, description: 'قصر النور الذهبي + ضيافة مضيئة + تنسيق مشرق' },
      { id: 'silver', name: 'الباقة الفضية', price: 10500, description: 'قصر + ضيافة أساسية' },
      { id: 'bronze', name: 'الباقة البرونزية', price: 7500, description: 'قصر فقط' }
    ],
    reviews: [
      { id: '1', name: 'إبراهيم الشمري', rating: 5, date: 'قبل يومين', comment: 'قصر منير وأجواء مشرقة' },
      { id: '2', name: 'سميرة البلوي', rating: 4, date: 'قبل 6 أيام', comment: 'نور وإشراق في كل مكان' }
    ],
    gallery: [
      'https://source.unsplash.com/featured/?light,palace,bright',
      'https://source.unsplash.com/featured/?illuminated,palace',
      'https://source.unsplash.com/featured/?radiant,celebration'
    ]
  },
  {
    id: 'tabuk-ravles-hall',
    name: 'Ravles راڤلز',
    address: 'KAGA3183، 3183 رقم الشارع 63، 7129،، تبوك 47338',
    phone: '+966 53 416 3366',
    rating: 4.8,
    category: 'venues',
    price: 15000,
    priceUnit: 'ر.س / ليلة',
    image: 'https://source.unsplash.com/featured/?luxury,modern,international',
    position: { lat: 28.4123, lng: 36.6012 },
    distance: '2.3 كم',
    description: 'راڤلز، قاعة أفراح عالمية المستوى تجمع بين الفخامة العربية والأناقة العالمية.',
    features: [
      { name: 'مستوى عالمي', icon: '✨', description: 'خدمات ومرافق على مستوى عالمي' },
      { name: 'تصميم دولي', icon: '💡', description: 'تصميم معماري دولي فاخر' },
      { name: 'خدمة راقية', icon: '👥', description: 'خدمة راقية بمعايير عالمية' },
      { name: 'موقع متميز', icon: '🚗', description: 'موقع متميز ومركزي' }
    ],
    packages: [
      { id: 'gold', name: 'الباقة الذهبية', price: 22000, description: 'راڤلز بلاتينيوم + ضيافة عالمية + تنسيق فاخر' },
      { id: 'silver', name: 'الباقة الفضية', price: 15000, description: 'راڤلز + ضيافة راقية' },
      { id: 'bronze', name: 'الباقة البرونزية', price: 11000, description: 'قاعة فقط' }
    ],
    reviews: [
      { id: '1', name: 'خالد العريفي', rating: 5, date: 'قبل يوم', comment: 'مستوى عالمي حقيقي وخدمة استثنائية' },
      { id: '2', name: 'رغد الأحمد', rating: 5, date: 'قبل 3 أيام', comment: 'أفضل قاعة أفراح في تبوك بلا منازع' }
    ],
    gallery: [
      'https://source.unsplash.com/featured/?luxury,modern,international',
      'https://source.unsplash.com/featured/?world,class,venue',
      'https://source.unsplash.com/featured/?premium,celebration'
    ]
  },
  {
    id: 'tabuk-salam-hall',
    name: 'قاعة السلام للإحتفالات تبوك',
    address: 'طريق المدينة إشارة الفحص الدوري 5 تقاطع يسار، تبوك 47331',
    phone: '+966 50 125 3566',
    rating: 4.1,
    category: 'venues',
    price: 8400,
    priceUnit: 'ر.س / ليلة',
    image: 'https://source.unsplash.com/featured/?peace,harmony,celebration',
    position: { lat: 28.3745, lng: 36.5389 },
    distance: '4.4 كم',
    description: 'قاعة السلام تنشر أجواء السلام والهدوء في احتفالاتكم على طريق المدينة.',
    features: [
      { name: 'أجواء سلام', icon: '✨', description: 'أجواء هادئة مفعمة بالسلام' },
      { name: 'هدوء مريح', icon: '💡', description: 'بيئة هادئة ومريحة للنفس' },
      { name: 'سكينة تامة', icon: '👥', description: 'سكينة وطمأنينة في الخدمة' },
      { name: 'موقع هادئ', icon: '🚗', description: 'موقع هادئ ومناسب' }
    ],
    packages: [
      { id: 'gold', name: 'الباقة الذهبية', price: 12500, description: 'قاعة السلام + ضيافة هادئة + تنسيق مريح' },
      { id: 'silver', name: 'الباقة الفضية', price: 8400, description: 'قاعة + ضيافة أساسية' },
      { id: 'bronze', name: 'الباقة البرونزية', price: 5800, description: 'قاعة فقط' }
    ],
    reviews: [
      { id: '1', name: 'عامر العنزي', rating: 4, date: 'قبل 4 أيام', comment: 'أجواء هادئة ومريحة للجميع' },
      { id: '2', name: 'خديجة الشراري', rating: 4, date: 'قبل أسبوع', comment: 'سلام وطمأنينة في كل التفاصيل' }
    ],
    gallery: [
      'https://source.unsplash.com/featured/?peace,harmony,celebration',
      'https://source.unsplash.com/featured/?serene,venue',
      'https://source.unsplash.com/featured/?tranquil,hall'
    ]
  }
];

export const getAllTabukVenues = (): VenueData[] => {
  return tabukWeddingHalls;
};

export const getVenueById = (id: string): VenueData | undefined => {
  return tabukWeddingHalls.find(venue => venue.id === id);
};
