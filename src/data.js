const data = [
  {
    id: 1,
    description: 'Stride Runner Running Shoes For Men ',
    brand: 'REEBOK',
    price: {
      prefix: '₹',
      amount: '997',
    },
    size: [41, 42, 43, 44],
    tags: ['Flip Flops'],
    img: [
      'https://rukminim1.flixcart.com/image/880/1056/kzhbfrk0/shoe/z/w/z/8-ga1553-9-reebok-all-black-original-imagbhfxe7hgwsaj.jpeg?q=50',
      'https://rukminim1.flixcart.com/image/880/1056/kzhbfrk0/shoe/z/s/7/8-ga1553-9-reebok-all-black-original-imagbhfxafkqgb3p.jpeg?q=50',
    ],
  },
  {
    id: 2,
    description: 'Rider-01 White Running Shoes for Men',
    brand: 'ASIAN',
    price: {
      prefix: '₹',
      amount: '1099',
    },
    size: [35, 36, 37, 38],
    tags: ['Snikers'],
    img: [
      'https://rukminim1.flixcart.com/image/880/1056/ki7qw7k0-0/shoe/9/d/t/rider-01cskywht-7-asian-white-original-imafyfxhb5rg6xzx.jpeg?q=50',
      'https://rukminim1.flixcart.com/image/880/1056/ki7qw7k0-0/shoe/d/i/x/rider-01cskywht-7-asian-white-original-imafyfxhs6cpuwhe.jpeg?q=50',
    ],
  },
  {
    id: 3,
    description: 'wndr-13 sports shoes for men',
    brand: 'ASIAN',
    price: {
      prefix: '₹',
      amount: '499',
    },
    size: [35, 36, 42, 43],
    tags: ['Snikers'],
    img: [
      'https://rukminim1.flixcart.com/image/880/1056/jur9nrk0/shoe/k/b/a/wonder-1313-7-asian-grey-orange-original-imaffbmzjc5hmagy.jpeg?q=50',
      'https://rukminim1.flixcart.com/image/880/1056/k01b8280/shoe/x/r/n/wonder11cblkred-wonder13cgryfrz-7-asian-multicolor-original-imaenr72umpytcgz.jpeg?q=50',
    ],
  },
  {
    id: 4,
    description: 'Designer Loafers For Men  (Blue)',
    brand: 'HOTSTYLE',
    price: {
      prefix: '₹',
      amount: '219',
    },
    size: [35, 36],
    tags: ['Lace up sneakers'],
    img: [
      'https://rukminim1.flixcart.com/image/880/1056/kpedle80/shoe/i/e/u/8-boxxyz-8-hotstyle-blue-original-imag3nfehrgzwvrw.jpeg?q=50',
      'https://rukminim1.flixcart.com/image/880/1056/kpedle80/shoe/u/z/6/8-boxxyz-8-hotstyle-blue-original-imag3nfen8vrbcwc.jpeg?q=50',
    ],
  },
  {
    id: 5,
    description: "White Sneaker Men's Sneakers (White)",
    brand: 'Shoes Bank',
    price: {
      prefix: '₹',
      amount: '219',
    },
    size: [40, 41, 44],
    tags: ['Lace up sneakers'],
    img: [
      'https://rukminim1.flixcart.com/image/880/1056/kpedle80/shoe/i/e/u/8-boxxyz-8-hotstyle-blue-original-imag3nfehrgzwvrw.jpeg?q=50',
      'https://rukminim1.flixcart.com/image/880/1056/jmwch3k0/shoe/j/y/n/dg-292-white-blue-patti-10-digitrendzz-white-original-imaf9p37kgmyhjdz.jpeg?q=50',
    ],
  },
  {
    id: 6,
    description: 'Stride Runner Running Shoes For Men ',
    brand: 'REEBOK Again',
    price: {
      prefix: '₹',
      amount: '2000',
    },
    size: [38, 40],
    tags: ['high heels'],
    img: [
      'https://rukminim1.flixcart.com/image/880/1056/kzhbfrk0/shoe/z/w/z/8-ga1553-9-reebok-all-black-original-imagbhfxe7hgwsaj.jpeg?q=50',
      'https://rukminim1.flixcart.com/image/880/1056/kzhbfrk0/shoe/z/s/7/8-ga1553-9-reebok-all-black-original-imagbhfxafkqgb3p.jpeg?q=50',
    ],
  },
  {
    id: 7,
    description: 'Rider-01 White Running Shoes for Men',
    brand: 'India',
    price: {
      prefix: '₹',
      amount: '200',
    },
    size: [30, 42],
    tags: ['Snikers flip'],
    img: [
      'https://rukminim1.flixcart.com/image/880/1056/ki7qw7k0-0/shoe/9/d/t/rider-01cskywht-7-asian-white-original-imafyfxhb5rg6xzx.jpeg?q=50',
      'https://rukminim1.flixcart.com/image/880/1056/ki7qw7k0-0/shoe/d/i/x/rider-01cskywht-7-asian-white-original-imafyfxhs6cpuwhe.jpeg?q=50',
    ],
  },
  {
    id: 8,
    description: 'wndr-13 sports shoes for men',
    brand: 'Tiger',
    price: {
      prefix: '₹',
      amount: '499',
    },
    size: [35],
    tags: ['Snikers'],
    img: [
      'https://rukminim1.flixcart.com/image/880/1056/jur9nrk0/shoe/k/b/a/wonder-1313-7-asian-grey-orange-original-imaffbmzjc5hmagy.jpeg?q=50',
      'https://rukminim1.flixcart.com/image/880/1056/k01b8280/shoe/x/r/n/wonder11cblkred-wonder13cgryfrz-7-asian-multicolor-original-imaenr72umpytcgz.jpeg?q=50',
    ],
  },
  {
    id: 9,
    description: 'Designer Loafers For Men  (Blue)',
    brand: 'HOTSTYLE 2',
    price: {
      prefix: '₹',
      amount: '800',
    },
    size: [35, 36],
    tags: ['Lace up sneakers'],
    img: [
      'https://rukminim1.flixcart.com/image/880/1056/kpedle80/shoe/i/e/u/8-boxxyz-8-hotstyle-blue-original-imag3nfehrgzwvrw.jpeg?q=50',
      'https://rukminim1.flixcart.com/image/880/1056/kpedle80/shoe/u/z/6/8-boxxyz-8-hotstyle-blue-original-imag3nfen8vrbcwc.jpeg?q=50',
    ],
  },
  {
    id: 10,
    description: "White Sneaker Men's Sneakers (White)",
    brand: 'Shoes Bank full',
    price: {
      prefix: '₹',
      amount: '700',
    },
    size: [40, 41, 44],
    tags: ['Snikers flip'],
    img: [
      'https://rukminim1.flixcart.com/image/880/1056/kpedle80/shoe/i/e/u/8-boxxyz-8-hotstyle-blue-original-imag3nfehrgzwvrw.jpeg?q=50',
      'https://rukminim1.flixcart.com/image/880/1056/jmwch3k0/shoe/j/y/n/dg-292-white-blue-patti-10-digitrendzz-white-original-imaf9p37kgmyhjdz.jpeg?q=50',
    ],
  },
];

export default data;
