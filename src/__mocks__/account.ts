import jwt from 'jsonwebtoken';
import mock from 'src/utils/mock';
import wait from 'src/utils/wait';
import { v4 as uuidv4 } from 'uuid';

const JWT_SECRET = 'devias-top-secret-key';
const JWT_EXPIRES_IN = '2 days';

const users = [
  {
    id: '3e86809283e28b96d2d38537',
    avatar: `${process.env.PUBLIC_URL}/static/images/avatars/avatar_6.png`,
    canHire: false,
    country: 'USA',
    email: 'influencer@influencer.io',
    isPublic: true,
    name: 'Katarina Smith',
    password: 'Password123',
    phone: '+40 777666555',
    role: 'admin',
    state: 'New York',
    tier: 'Influencer'
  },
  {
    id: '5e86809283e28b96d2d38537',
    avatar: `${process.env.PUBLIC_URL}/static/images/avatars/avatar_9.svg`,
    canHire: false,
    country: 'USA',
    email: 'company@telia.io',
    isPublic: true,
    name: 'Klarna',
    password: 'Password123',
    phone: '+40 777666555',
    role: 'admin',
    state: 'New York',
    tier: 'Company',
    about:
      'Klarna was founded in 2005 in Stockholm, Sweden with the aim of making it easier for people to shop online. In the last 15 years, technology has evolved, excited and transformed the world around us, yet our mission remains as relevant as ever, to make paying as simple, safe and above all, smoooth as possible. <br/> <br/> Klarna is now one of Europe’s largest banks and is providing payment solutions for 85 million consumers across more than 200,000 merchants in 17 countries. Klarna offers direct payments, pay after delivery options and instalment plans in a smooth one-click purchase experience that lets consumers pay when and how they prefer to.'
  }
];

mock.onPost('/api/account/login').reply(async config => {
  try {
    await wait(1000);

    const { email, password } = JSON.parse(config.data);
    const user = users.find(_user => _user.email === email);

    if (!user) {
      return [400, { message: 'Please check your email and password' }];
    }

    if (user.password !== password) {
      return [400, { message: 'Invalid password' }];
    }

    const accessToken = jwt.sign({ userId: user.id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN
    });

    return [
      200,
      {
        accessToken,
        user: {
          id: user.id,
          avatar: user.avatar,
          email: user.email,
          name: user.name,
          tier: user.tier,
          about: user.about
        }
      }
    ];
  } catch (err) {
    console.error(err);
    return [500, { message: 'Internal server error' }];
  }
});

mock.onPost('/api/account/register').reply(async config => {
  try {
    await wait(1000);

    const {
      email,
      avatar,
      country,
      phone,
      name,
      password,
      tier,
      about
    } = JSON.parse(config.data);
    let user = users.find(_user => _user.email === email);

    if (user) {
      return [400, { message: 'User already exists' }];
    }

    user = {
      id: uuidv4(),
      avatar,
      canHire: false,
      country,
      email,
      isPublic: true,
      name,
      password,
      phone,
      role: 'admin',
      state: '',
      tier,
      about
    };

    const accessToken = jwt.sign({ userId: user.id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN
    });

    return [
      200,
      {
        accessToken,
        user: {
          id: user.id,
          avatar: user.avatar,
          email: user.email,
          name: user.name,
          tier: user.tier,
          about: user.about
        }
      }
    ];
  } catch (err) {
    console.error(err);
    return [500, { message: 'Internal server error' }];
  }
});

mock.onGet('/api/account/me').reply(config => {
  try {
    const { Authorization } = config.headers;

    if (!Authorization) {
      return [401, { message: 'Authorization token missing' }];
    }

    const accessToken = Authorization.split(' ')[1];
    const { userId } = jwt.verify(accessToken, JWT_SECRET) as any;
    const user = users.find(_user => _user.id === userId);

    if (!user) {
      return [401, { message: 'Invalid authorization token' }];
    }

    return [
      200,
      {
        user: {
          id: user.id,
          avatar: user.avatar,
          email: user.email,
          name: user.name,
          tier: user.tier,
          about: user.about
        }
      }
    ];
  } catch (err) {
    console.error(err);
    return [500, { message: 'Internal server error' }];
  }
});

mock.onGet('/api/account/settings').reply(200, {
  settings: {}
});

mock.onGet('/api/account/subscription').reply(200, {
  subscription: {
    name: 'Premium',
    price: 29,
    currency: 'SEK',
    proposalsLeft: 12,
    templatesLeft: 5,
    invitesLeft: 24,
    adsLeft: 10,
    hasAnalytics: true,
    hasEmailAlerts: true
  }
});
