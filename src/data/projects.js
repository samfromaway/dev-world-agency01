import HTMImg from '../images/our-work/howtomedellin01.png';
import HTMIcon from '../images/our-work/Icons02-HTM.png';
import HTEImg from '../images/our-work/how-to-expat01.png';
import BibusIcon from '../images/our-work/Icons02-BIBUS.png';
import BibusImg from '../images/our-work/bibus01.png';
import MSM from '../images/our-work/msmnet.png';
import PortfolioIcon from '../images/our-work/Icons02-Portfolio.png';
import LiveAbroadImage from '../images/our-work/live-abroad-now.png';
import LiveAbroadIcons from '../images/our-work/live-abroad-icons.png';
import HTEIcon2 from '../images/our-work/hte-icons.png';
import VenturaTravelImg from '../images/our-work/ventura-travel.png';
import VenturaTravelIcons from '../images/our-work/ventura-travel-icon.png';
import SocialSpanishIcons from '../images/our-work/jakeIcons.png';
import LogoIcons from '../images/our-work/logoIcons.png';
import AccountingImg from '../images/our-work/accounting.png';
import AccountingIcon from '../images/our-work/accountingIcon.png';
import JokerLogo from '../images/our-work/JokerLogo.png';
import SocialSpanish from '../images/our-work/socialSpanish.png';

const projects = [
  {
    id: 1,
    title: 'Ventura Travel',
    desc:
      'We support the German company Ventura-Travel to build a complex, multi-brand, multi-language website with a custom CMS/admin. A primary focus is the SEO performance.',
    img: VenturaTravelImg,
    icon: VenturaTravelIcons,
    link: 'https://www.viventura.de/',
    category: 'web',
  },
  {
    id: 2,
    title: 'Accounting App',
    desc: `This is an accounting app for income, expenses and capital. It's built with React.js, Firebase and Material Design. Login is test@test.com - 123456`,
    img: AccountingImg,
    icon: AccountingIcon,
    link: 'https://accounting3-test-env-dev.netlify.app/',
    category: 'web',
  },

  {
    id: 3,
    title: 'Medellin Real Estate',
    desc:
      'This is a website which includes a database fetched CMS and a performant real estate website. The project was completely built by us.',
    img: HTMImg,
    icon: HTMIcon,
    link: 'https://medellin-real-estate.com/',
    category: 'web',
  },
  {
    id: 4,
    title: 'Social Spanish',
    desc:
      'Social Spanish is a website of an online entrepreneur. The goal of the website was to generate more leads, which we achieved with a special quiz.',
    img: SocialSpanish,
    icon: SocialSpanishIcons,
    link: 'https://socialspanish.co/',
    category: 'design',
  },

  {
    id: 5,
    title: 'Joker.Shotz Logo',
    desc: `This is a logo for a car photography business. What's special about the project is that we were able to deliver the logo in under 3 hours.`,
    img: JokerLogo,
    icon: LogoIcons,
    link: 'https://dev-world.agency/JokerShotzLogo01.jpg',
    category: 'design',
  },

  {
    id: 6,
    title: 'MSMNET Security',
    desc:
      'The goal of this project was to create a clear call to action to generate more leads for the client. The website is fully customized and SEO performant.',
    img: MSM,
    icon: PortfolioIcon,
    link: 'https://www.msmnetsecurity.com/',
    category: 'design',
  },
  {
    id: 7,
    title: 'BIBUS',
    desc: `BIBUS is a company selling technical equipment world-wide. Sam wrote SEO compliant product descriptions and restructured the site.`,
    img: BibusImg,
    icon: BibusIcon,
    link: 'https://www.bibus.ch/',
    category: 'marketing',
  },
  {
    id: 8,
    title: 'Live Abroad Now',
    desc:
      'We were able to support Live Abroad Now to get over 3000 subscribers in 4 months. We have been offering support with content management and video editing.',
    img: LiveAbroadImage,
    icon: LiveAbroadIcons,
    link: 'https://liveabroadnow.com/',
    category: 'marketing',
  },
  {
    id: 9,
    title: 'How To Expat',
    desc:
      'With How To Expat we were able to generate more than USD 30k in sales in the first year. We executed a complete marketing plan, based only on organic traffic.',
    img: HTEImg,
    icon: HTEIcon2,
    link: 'https://www.how-to-expat.com/',
    category: 'marketing',
  },
];

export default projects;
