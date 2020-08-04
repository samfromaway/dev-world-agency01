import HTMImg from '../images/our-work/howtomedellin01.png';
import HTMIcon from '../images/our-work/Icons02-HTM.png';
import HTEImg from '../images/our-work/how-to-expat01.png';
import HTEIcon1 from '../images/our-work/Icons02-HTE.png';
import BibusIcon from '../images/our-work/Icons02-BIBUS.png';
import BibusImg from '../images/our-work/bibus01.png';
import MSM from '../images/our-work/msmnet.png';
import PortfolioIcon from '../images/our-work/Icons02-Portfolio.png';
import SilverbackImg from '../images/our-work/traveling-silverback01.png';
import SilverbackIcon from '../images/our-work/weeblyIcon.png';
import HTEIcon2 from '../images/our-work/Icons02-HTE-S.png';
import JakeLifeImg from '../images/our-work/jake-life.png';
import JakeLifeIcons from '../images/our-work/jakeIcons.png';
import LogoIcons from '../images/our-work/logoIcons.png';
import AccountingImg from '../images/our-work/accounting.png';
import AccountingIcon from '../images/our-work/accountingIcon.png';
import JokerLogo from '../images/our-work/JokerLogo.png';
import SocialSpanish from '../images/our-work/socialSpanish.png';

const projects = [
  {
    id: 1,
    title: 'Accounting App',
    desc: `This is an accounting app for income, expenses and capital. It's built with React.js, Firebase and Material Design. Login is test@test.com - 123456`,
    img: AccountingImg,
    icon: AccountingIcon,
    link: 'https://accounting3-test-env-dev.netlify.app/',
    category: 'web',
  },
  {
    id: 2,
    title: 'MSMNET Security',
    desc:
      'The goal of this project was to create a clear call to action to generate more leads for the client. The website is fully customized and performant.',
    img: MSM,
    icon: PortfolioIcon,
    link: 'https://www.msmnetsecurity.com/',
    category: 'web',
  },

  {
    id: 3,
    title: 'How To Medellin',
    desc:
      'This is a website which includes a database fetched directory and a fully functional real estate site, completely built by us.',
    img: HTMImg,
    icon: HTMIcon,
    link: 'https://www.how-to-medellin.com/',
    category: 'web',
  },
  {
    id: 4,
    title: 'Social Spanish',
    desc:
      'Social Spanish is a website of an online entrepreneur. The goal of the website was to generate more leads, which we achieved with a special quiz.',
    img: SocialSpanish,
    icon: JakeLifeIcons,
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
    title: 'Jake | Life Coach',
    desc:
      'We were able to created a personal coach website with a logo, branding and a blog. Important was to keep the design elegant and professional.',
    img: JakeLifeImg,
    icon: JakeLifeIcons,
    link: 'https://lifebyjake.com/',
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
    title: 'How To Expat',
    desc:
      'With How To Expat we were able to generate more than USD 30k in sales in the first year. We executed a complete marketing plan, mostly based on organic traffic.',
    img: HTEImg,
    icon: HTEIcon2,
    link: 'https://www.how-to-expat.com/',
    category: 'marketing',
  },
  {
    id: 9,
    title: 'Silverback',
    desc: `This was the first ever website built in 2015. We got over 32k users in the first year through SEO. It's not active anymore but it holds a special place in our hearts.`,
    img: SilverbackImg,
    icon: SilverbackIcon,
    link: 'https://travelingsilverback.weebly.com',
    category: 'marketing',
  },
];

export default projects;
