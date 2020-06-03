import HTMImg from '../images/our-work/howtomedellin01.png';
import HTMIcon from '../images/our-work/Icons02-HTM.png';
import HTEImg from '../images/our-work/how-to-expat01.png';
import HTEIcon from '../images/our-work/Icons02-HTE.png';
import BibusIcon from '../images/our-work/Icons02-BIBUS.png';
import BibusImg from '../images/our-work/bibus01.png';
import PorfolioImg from '../images/our-work/fluidtechnik01.png';
import ProtfolioIcon from '../images/our-work/Icons02-Portfolio.png';

const projects = [
  {
    id: 1,
    title: 'How To Medellin',
    desc:
      'This is a project which includes a database fetched directory and a fully functional real estate listing site.',
    img: HTMImg,
    icon: HTMIcon,
    link: 'https://www.how-to-medellin.com/',
    category: 'web',
  },
  {
    id: 3,
    title: 'How To Expat',
    desc:
      'This projects is for a business that needs a website which is quick to build and with fast loading times.',
    img: HTEImg,
    icon: HTEIcon,
    link: 'https://www.how-to-expat.com/',
    category: 'web',
  },
  {
    id: 5,
    title: 'BIBUS',
    desc:
      'Content writing and online marketing was a crucial part of this business marketing strategy to generate leads.',
    img: BibusImg,
    icon: BibusIcon,
    link: 'https://www.bibus.ch/',
    category: 'marketing',
  },
  {
    id: 7,
    title: 'Product Portfolio',
    desc:
      'This website lists industrial products. It was important to have a clean and modern design to gain the trust of new clients.',
    img: PorfolioImg,
    icon: ProtfolioIcon,
    link: 'blog01.html',
    category: 'web',
  },
  {
    id: 8,
    title: '9',
    desc:
      'This website lists industrial products. It was important to have a clean and modern design to gain the trust of new clients.',
    img: PorfolioImg,
    icon: ProtfolioIcon,
    link: 'blog01.html',
    category: 'design',
  },
];

export const webProjects = projects
  .filter(project => project.category === 'web')
  .slice(0, 3);
export const marketingProjects = projects
  .filter(project => project.category === 'marketing')
  .slice(0, 3);
export const designProjects = projects
  .filter(project => project.category === 'design')
  .slice(0, 3);

export default projects;
