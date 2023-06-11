import { Icon } from '@x/x'; // Sensitive information hidden.
import LogoutButton from '../LogoutButton';

export const topBarMenuData = [
  {
    id: 'po1',
    title: 'Parent Organization 1',
    url: 'https://www.website1.ca',
  },
  {
    id: 'po2',
    title: 'Parent Organization 2',
    url: 'http://www.website2.ca',
    target: '_blank',
  },
];

export const upperMenuData = [
  {
    id: 'about',
    title: 'About',
    url: '#',
  },
];

export const primaryMenuData = [
  {
    id: 'cultural-safety-and-guiding-principles',
    title: 'Cultural Safety & Guiding Principles',
    url: '/cultural-safety',
  },
  {
    id: 'information-resources',
    title: 'Information Resources',
    url: '/information-resources',
    children: [
      {
        id: 'clinical-guidance',
        title: 'Clinical Care Topic',
        url: '/information-resources/clinical-guidance',
      },
      {
        id: 'forms',
        title: 'Forms',
        url: '/information-resources/forms',
      },
      {
        id: 'tools',
        title: 'Tools',
        url: '/information-resources/tools',
      },
      {
        id: 'calculators',
        title: 'Calculators',
        url: '/information-resources/calculators',
        children: [
          {
            id: 'edd-calculator',
            title: 'Estimated Date of Delivery (EDD) Calculator',
            url: '/information-resources/calculators/edd-calculator',
          },
        ],
      },
      {
        id: 'data-and-research',
        title: 'Data & Research',
        url: '/information-resources/research',
      },
    ],
  },
  {
    id: 'personal-and-professional-development',
    title: 'Personal & Professional Development',
    url: '/personal-and-professional-development',
    children: [
      {
        id: 'education-and-professional-development',
        title: 'Education & Professional Development',
        url: '/education-and-professional-development',
      },
      {
        id: 'self-care-and-growth',
        title: 'Self Care & Growth',
        url: '/self-care-and-growth',
      },
    ],
  },
  {
    id: 'alerts-and-updates',
    title: 'Alerts & Updates',
    url: '/alerts-and-updates',
  },
];

export const mobileExtraMenuData = [
  {
    id: 'clinical-support',
    title: 'Clinical Support',
    url: '/clinical-support',
    linkIcon: (
      <Icon
        name="headset_mic"
        alt="clinical support button icon"
        variant="material"
        role="img"
        size={20}
      />
    ),
  },
  {
    id: 'help-and-faq',
    title: 'Help & FAQ',
    url: '/help-and-faq',
    linkIcon: (
      <Icon name="help_outline" alt="help button icon" variant="material" role="img" size={20} />
    ),
  },
];

export const accountSignedOutData = [
  {
    id: 'about',
    title: 'About',
    url: '/about',
  },
  {
    id: 'sign-in',
    title: 'Sign In',
    url: '/login',
  },
  {
    id: 'register',
    title: 'Register',
    url: '/register',
  },
];

export const accountSignedInData = [
  {
    id: 'about',
    title: 'About',
    url: '/about',
  },
  {
    id: 'my-hub',
    title: 'My Hub',
    url: '/my-hub',
    linkIcon: (
      <Icon name="person_outline" alt="my hub icon" variant="material" role="img" size={20} />
    ),
    children: [
      {
        id: 'my-hub',
        title: 'My Hub Home',
        url: '/my-hub',
      },
      {
        id: 'my-libraries',
        title: 'My Libraries',
        url: '/libraries',
      },
      {
        id: 'my-updates',
        title: 'My Updates',
        url: '/mu-updates',
      },
      {
        id: 'my-report',
        title: 'My Report',
        url: '/my-report',
      },
      {
        id: 'my-network',
        title: 'My Network',
        url: '/my-network',
      },
      {
        id: 'account-profile',
        title: 'Account/Profile',
        url: '/account',
      },
      {
        id: 'logout',
        node: <LogoutButton />,
      },
    ],
  },
];
