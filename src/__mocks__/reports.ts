import { colors } from '@material-ui/core';
import moment from 'moment';
import { CampaignMock } from 'src/types/campaignmock';
import {
  CustomerActivity,
  Order,
  Product,
  Project,
  Referral,
  Task
} from 'src/types/reports';
import mock from 'src/utils/mock';

mock.onGet('/api/campaigns').reply(() => {
  const campaigns: CampaignMock[] = [
    {
      campaignTitle: 'Dagens Näthandel',
      campaignUrl: 'www.klarna.se/payment',
      campaignDescription:
        'Skapa engagemang genom ett quiz där besökarna får kunskap/information om den skandinaviska b2b-näthandeln. Vi vill också att få målgruppen att ladda ner <a href="#">rapporten</a>.',
      hashtags: [
        '#bring',
        '#företagsleverans',
        '#logistik',
        '#näthandel',
        '#snabbaleveranser '
      ],
      influencerText:
        '<strong>TESTA DINA KUNSKAPER OM DAGENS NÄTHANDEL!</strong> Spela Brings quiz! Se hur mycket du kan om näthandel och onlineshopping!  P.S Jag fick 27 rätt av 30…slå det om du kan! Ladda ner rapporten som skandinavisk näthandel här: <a href="#">www.bring.se/rapport2020</a>',
      companyName: 'Bring',
      roleTags: ['VD', 'E-commerce manager', 'Logistikchef', 'IT-ansvarig'],
      files: ['test'],
      startDate: moment().toDate().getTime(),
      endDate: moment().add(14, 'days').toDate().getTime()
    },
    {
      campaignTitle: 'Dagens Näthandel',
      campaignUrl: 'www.klarna.se/payment',
      campaignDescription:
        'Skapa engagemang genom ett quiz där besökarna får kunskap/information om den skandinaviska b2b-näthandeln. Vi vill också att få målgruppen att ladda ner <a href="#">rapporten</a>.',
      hashtags: [
        '#bring',
        '#företagsleverans',
        '#logistik',
        '#näthandel',
        '#snabbaleveranser '
      ],
      influencerText:
        '<strong>TESTA DINA KUNSKAPER OM DAGENS NÄTHANDEL!</strong> Spela Brings quiz! Se hur mycket du kan om näthandel och onlineshopping!  P.S Jag fick 27 rätt av 30…slå det om du kan! Ladda ner rapporten som skandinavisk näthandel här: <a href="#">www.bring.se/rapport2020</a>',
      companyName: 'Bring',
      roleTags: ['VD', 'E-commerce manager', 'Logistikchef', 'IT-ansvarig'],
      files: ['test'],
      startDate: moment().toDate().getTime(),
      endDate: moment().add(14, 'days').toDate().getTime()
    }
  ];
  return [200, { campaigns }];
});

mock.onGet('/api/reports/customer-activity').reply(() => {
  const activities: CustomerActivity[] = [
    {
      id: '5e89140bcc768199d1e0dc49',
      createdAt: moment().subtract(3, 'hours').toDate().getTime(),
      customer: {
        id: '5e887a62195cc5aef7e8ca5d',
        avatar: `${process.env.PUBLIC_URL}/static/images/avatars/avatar_2.png`,
        name: 'Ekaterina Tankova'
      },
      description: 'Influencer',
      type: 'register'
    },
    {
      id: '5e891411b0290b175166cd32',
      createdAt: moment().subtract(6, 'hours').toDate().getTime(),
      customer: {
        id: '5e887ac47eed253091be10cb',
        name: 'Adrian Stefan',
        avatar: `${process.env.PUBLIC_URL}/static/images/avatars/avatar_3.png`
      },
      description: 'Influencer',
      type: 'payment'
    },
    // {
    //   id: '5e89141633dc5e52c923ef27',
    //   createdAt: moment().subtract(5, 'hours').toDate().getTime(),
    //   customer: {
    //     id: '5e887b209c28ac3dd97f6db5',
    //     name: 'Alex Richardson',
    //     avatar: `${process.env.PUBLIC_URL}/static/images/avatars/avatar_4.png`
    //   },
    //   description: 'Influencer',
    //   type: 'ticket_create'
    // },
    // {
    //   id: '5e89141bd975c7f33aee9f4b',
    //   createdAt: moment().subtract(7, 'hours').toDate().getTime(),
    //   customer: {
    //     id: '5e887b7602bdbc4dbb234b27',
    //     name: 'Anje Keizer',
    //     avatar: `${process.env.PUBLIC_URL}/static/images/avatars/avatar_5.png`
    //   },
    //   description: 'Influencer',
    //   type: 'payment'
    // },
    {
      id: '5e891421d7945778863cf9ca',
      createdAt: moment().subtract(9, 'hours').toDate().getTime(),
      customer: {
        id: '5e86809283e28b96d2d38537',
        name: 'Katarina Smith',
        avatar: `${process.env.PUBLIC_URL}/static/images/avatars/avatar_6.png`
      },
      description: 'Influencer',
      type: 'payment'
    }
  ];

  return [200, { activities }];
});

mock.onGet('/api/reports/earnings').reply(200, {
  earnings: {
    datasets: [
      {
        data: [15500, 3350, 2880],
        backgroundColor: ['#3d72eb', '#4b9e86', '#b658f5']
      }
    ],
    labels: ['Views', 'Reactions', 'Shares']
  }
});

mock.onGet('/api/reports/earnings2').reply(200, {
  earnings: {
    datasets: [
      {
        data: [3999, 1123, 2355],
        backgroundColor: ['#3d72eb', '#4b9e86', '#b658f5']
      }
    ],
    labels: ['Comments', 'Click through rate', 'Engagement rate']
  }
});

mock.onGet('/api/reports/earnings3').reply(200, {
  earnings: {
    datasets: [
      {
        data: [65, 15, 20],
        backgroundColor: ['#3d72eb', '#4b9e86', '#b658f5']
      }
    ],
    labels: ['Sweden', 'Denmark', 'Norway']
  }
});

mock.onGet('/api/reports/latest-orders').reply(() => {
  const orders: Order[] = [
    {
      id: '5eff2548979e396c1b4b000ba',
      createdAt: moment()
        .subtract(7, 'minutes')
        .subtract(10, 'seconds')
        .toDate()
        .getTime(),
      customer: {
        email: 'ekaterina@devias.io',
        name: 'Volvo'
      },
      currency: 'SEK',
      items: 8,
      number: 'CEO, Project Manager, Agile Coach, Engineer...',
      status: 'pending',
      totalAmount: 524.0,
      roles: ['Project Manager', 'Agile Coach', 'Engineer']
    },
    {
      id: '5eff254e46b7523a166e7d7af',
      createdAt: moment()
        .subtract(2, 'hours')
        .subtract(12, 'minutes')
        .subtract(50, 'seconds')
        .toDate()
        .getTime(),
      customer: {
        email: 'HIQ',
        name: 'HIQ'
      },
      currency: 'SEK',
      items: 7,
      number: 'DEV-1041',
      status: 'complete',
      totalAmount: 693.0,
      roles: ['Project Manager', 'Engineer', 'Consultant']
    },
    {
      id: '5eff2553e1c5531e2e28a9205',
      createdAt: moment()
        .subtract(5, 'hours')
        .subtract(39, 'minutes')
        .subtract(12, 'seconds')
        .toDate()
        .getTime(),
      customer: {
        email: 'alex.richardson@devias.io',
        name: 'TV4'
      },
      currency: 'SEK',
      items: 5,
      number: 'DEV-1040',
      status: 'rejected',
      totalAmount: 215.0,
      roles: ['TV Host', 'Director']
    },
    {
      id: '5eff25590f3e428f013c39a0e',
      createdAt: moment()
        .subtract(5, 'hours')
        .subtract(46, 'minutes')
        .subtract(21, 'seconds')
        .toDate()
        .getTime(),
      customer: {
        email: 'anje.keiser@devias.io',
        name: 'Tele2'
      },
      currency: 'SEK',
      items: 4,
      number: 'DEV-1039',
      status: 'pending',
      totalAmount: 25.0,
      roles: ['Agile Coach', 'Engineer', 'Devops', 'IT-Support']
    },
    {
      id: '5eff255f575499089243805d8',
      createdAt: moment()
        .subtract(8, 'hours')
        .subtract(19, 'minutes')
        .subtract(54, 'seconds')
        .toDate()
        .getTime(),
      customer: {
        name: 'SAAB',
        email: 'clarke.gillebert@devias.io'
      },
      currency: 'SEK',
      items: 2,
      number: 'DEV-1038',
      status: 'complete',
      totalAmount: 535.0,
      roles: ['Engineer']
    },
    {
      id: '5eff256586d416fc5adb96a3a',
      createdAt: moment()
        .subtract(1, 'days')
        .subtract(45, 'minutes')
        .subtract(12, 'seconds')
        .toDate()
        .getTime(),
      customer: {
        email: 'merrile.burgett@devias.io',
        name: 'SAS'
      },
      currency: 'SEK',
      items: 1,
      number: 'DEV-1037',
      status: 'complete',
      totalAmount: 56.0,
      roles: ['Project Manager']
    }
  ];

  return [200, { orders }];
});

mock.onGet('/api/reports/latest-projects').reply(() => {
  const projects: Project[] = [
    {
      id: '5eff24e675e7b3cba23e4be7',
      author: {
        avatar: `${process.env.PUBLIC_URL}/static/images/avatars/avatar_9.svg`,
        name: 'Klarna'
      },
      budget: 10000,
      createdAt: moment()
        .subtract(2, 'hours')
        .subtract(34, 'minutes')
        .subtract(10, 'seconds')
        .toDate()
        .getTime(),
      currency: 'SEK',
      matchScore: '83%',
      technologies: ['angular'],
      title: 'New payment solution'
    },
    {
      id: '5eff24e98e2c9107e95cb827',
      author: {
        avatar: `${process.env.PUBLIC_URL}/static/images/avatars/telia.svg`,
        name: 'Telia'
      },
      budget: 15750,
      createdAt: moment()
        .subtract(60, 'hours')
        .subtract(56, 'minutes')
        .subtract(25, 'seconds')
        .toDate()
        .getTime(),
      currency: 'SEK',
      matchScore: '79%',
      technologies: ['sketch', 'html-css'],
      title: 'Nu blir Sveriges bästa nät 5G'
    },
    {
      id: '5eff24f0d97353e3576d3c26',
      author: {
        avatar: `${process.env.PUBLIC_URL}/static/images/avatars/bring.svg`,
        name: 'Bring'
      },
      budget: 8000,
      createdAt: moment()
        .subtract(3, 'days')
        .subtract(30, 'minutes')
        .subtract(50, 'seconds')
        .toDate()
        .getTime(),
      currency: 'SEK',
      matchScore: '72%',
      technologies: ['react-js'],
      title: 'Testa dina kunskaper om dagens näthandel!'
    }
    // {
    //   id: '5eff24f737bc6b191dd9bf58',
    //   author: {
    //     avatar: `${process.env.PUBLIC_URL}/static/images/avatars/avatar_11.png`,
    //     name: 'Shen Zhi'
    //   },
    //   budget: 12500,
    //   createdAt: moment()
    //     .subtract(4, 'days')
    //     .subtract(4, 'minutes')
    //     .subtract(30, 'seconds')
    //     .toDate()
    //     .getTime(),
    //   currency: 'SEK',
    //   technologies: ['vue-js'],
    //   matchScore: '84%',
    //   title: 'H&M new clothing line'
    // },
    // {
    //   id: '5eff24fb29fc5e37bdab3b2d',
    //   author: {
    //     avatar: `${process.env.PUBLIC_URL}/static/images/avatars/avatar_3.png`,
    //     name: 'Adrian Stefan'
    //   },
    //   budget: 20000,
    //   createdAt: moment()
    //     .subtract(5, 'days')
    //     .subtract(11, 'minutes')
    //     .subtract(6, 'seconds')
    //     .toDate()
    //     .getTime(),
    //   currency: 'SEK',
    //   matchScore: '84%',
    //   technologies: ['angular', 'figma'],
    //   title: 'SAAB new platform'
    // }
  ];

  return [200, { projects }];
});

mock.onGet('/api/reports/latest-tasks').reply(() => {
  const tasks: Task[] = [
    {
      id: '5eff24b501ba5281ddb5378c',
      deadline: moment().add(1, 'days').add(1, 'hour').toDate().getTime(),
      members: [
        {
          avatar: `${process.env.PUBLIC_URL}/static/images/avatars/avatar_2.png`,
          name: 'Ekaterina Tankova'
        },
        {
          avatar: `${process.env.PUBLIC_URL}/static/images/avatars/avatar_3.png`,
          name: 'Adrian Stefan'
        }
      ],
      title: 'Update the API for the project'
    },
    {
      id: '5eff24bb5bb3bd1beeddde78',
      deadline: moment().add(2, 'day').add(1, 'hour').toDate().getTime(),
      members: [
        {
          avatar: `${process.env.PUBLIC_URL}/static/images/avatars/avatar_8.png`,
          name: 'Miller Edwards'
        },
        {
          avatar: `${process.env.PUBLIC_URL}/static/images/avatars/avatar_10.png`,
          name: 'Elliott Stone'
        },
        {
          avatar: `${process.env.PUBLIC_URL}/static/images/avatars/avatar_12.png`,
          name: 'Merrile Burgett'
        }
      ],
      title: 'Redesign the landing page'
    },
    {
      id: '5eff24c019175119993fc1ff',
      deadline: moment().toDate().getTime(),
      members: [
        {
          avatar: `${process.env.PUBLIC_URL}/static/images/avatars/avatar_7.png`,
          name: 'Adam Denisov'
        }
      ],
      title: 'Solve the bug for the showState'
    },
    {
      id: '5eff24c52ce9fdadffa11959',
      deadline: null,
      members: [
        {
          avatar: `${process.env.PUBLIC_URL}/static/images/avatars/avatar_2.png`,
          name: 'Ekaterina Tankova'
        },
        {
          avatar: `${process.env.PUBLIC_URL}/static/images/avatars/avatar_10.png`,
          name: 'Elliott Stone'
        }
      ],
      title: 'Release v1.0 Beta'
    },
    {
      id: '5eff24ca3ffab939b667258b',
      deadline: null,
      members: [
        {
          avatar: `${process.env.PUBLIC_URL}/static/images/avatars/avatar_5.png`,
          name: 'Anje Keizer'
        },
        {
          avatar: `${process.env.PUBLIC_URL}/static/images/avatars/avatar_2.png`,
          name: 'Ekaterina Tankova'
        },
        {
          avatar: `${process.env.PUBLIC_URL}/static/images/avatars/avatar_6.png`,
          name: 'Katarina Smith'
        }
      ],
      title: 'GDPR Compliance'
    },
    {
      id: '5eff24cf8740fc9faca4e463',
      deadline: null,
      members: [
        {
          avatar: `${process.env.PUBLIC_URL}/static/images/avatars/avatar_8.png`,
          name: 'Miller Edwards'
        }
      ],
      title: 'Redesign Landing Page'
    }
  ];

  return [200, { tasks }];
});

mock.onGet('/api/reports/profitable-products').reply(() => {
  const products: Product[] = [
    {
      id: '5eff2512c6f8737d08325676',
      conversionRate: 93,
      currency: 'SEK',
      image: `${process.env.PUBLIC_URL}/static/images/products/product_standard.svg`,
      name: 'Freelancer Basic Subscription',
      price: 5.0,
      subscriptions: 13153
    },
    {
      id: '5eff2516247f9a6fcca9f151',
      conversionRate: 76,
      currency: 'SEK',
      image: `${process.env.PUBLIC_URL}/static/images/products/product_standard.svg`,
      name: 'Freelancer Extra Subscription',
      price: 15.0,
      subscriptions: 10300
    },
    {
      id: '5eff251a3bb9ab7290640f18',
      conversionRate: 60,
      currency: 'SEK',
      image: `${process.env.PUBLIC_URL}/static/images/products/product_premium.svg`,
      name: 'Agency Basic Subscription',
      price: 25.0,
      subscriptions: 5300
    },
    {
      id: '5eff251e297fd17f0dc18a8b',
      conversionRate: 46,
      currency: 'SEK',
      image: `${process.env.PUBLIC_URL}/static/images/products/product_extended.svg`,
      name: 'Enterprise Basic Subscription',
      price: 205.0,
      subscriptions: 1203
    },
    {
      id: '5eff2524ef813f061b3ea39f',
      conversionRate: 41,
      currency: 'SEK',
      image: `${process.env.PUBLIC_URL}/static/images/products/product_extended.svg`,
      name: 'Enterprise Extra Subscription',
      price: 500.0,
      subscriptions: 254
    }
  ];

  return [200, { products }];
});

mock.onGet('/api/reports/top-referrals').reply(() => {
  const referrals: Referral[] = [
    {
      color: colors.blueGrey['700'],
      initials: 'GT',
      name: 'GitHub',
      value: 53032
    },
    {
      color: colors.cyan['500'],
      initials: 'TW',
      name: 'Twitter',
      value: 39551
    },
    {
      color: colors.indigo[600],
      initials: 'HN',
      name: 'Hacker News',
      value: 23150
    },
    {
      color: colors.red['500'],
      initials: 'SO',
      name: 'Stack Overflow',
      value: 14093
    },
    {
      color: colors.orange['900'],
      initials: 'RD',
      name: 'Reddit.com',
      value: 7251
    },
    {
      color: colors.blueGrey['900'],
      initials: 'DE',
      name: 'Dev.to',
      value: 5694
    },
    {
      color: colors.blue['900'],
      initials: 'FB',
      name: 'Facebook',
      value: 3643
    },
    {
      color: colors.blueGrey['900'],
      initials: 'MD',
      name: 'Medium',
      value: 1654
    }
  ];

  return [200, { referrals }];
});
