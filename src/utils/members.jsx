import ananth from '../assets/students/ananth.jpg';
import yash from '../assets/students/yash.jpeg';
import sakshi from '../assets/students/sakshi.jpeg';
import yelmame from '../assets/students/yelmame.jpeg';
import ekansh from '../assets/students/ekansh.jpeg';
import paurush from '../assets/students/paurush.png';
import atharva from '../assets/students/atharva.jpg';
import sahil from '../assets/students/sahil.png';
import laukik from '../assets/students/laukik.jpg';
import ishan from '../assets/students/ishan.jpg';
import tanay from '../assets/students/tanay.jpeg';
import dhruv from '../assets/students/dhruv.jpeg';

// import pravin from '../assets/faculty/pravin.min.png';
import pravin from '../assets/faculty/pravin.jpeg';
import indrani from '../assets/faculty/indrani.jpeg';
import hrishi from '../assets/faculty/hrishi.min.png';
import eskannan from '../assets/faculty/eskannan.jpeg';
import rnbehera from '../assets/faculty/rnbehera.min.png';
import ramprasad from '../assets/faculty/ramprasad.min.png';

let student = [
  {
    name: 'Ananth Raghav',
    mobile: '+918790176414',
    email: 'f20201797@goa.bits-pilani.ac.in',
    linkedIn: 'https://www.linkedin.com/in/ananth-raghav-2151a9200/',
    image: ananth,
  },
  {
    name: 'Ishan Tandon',
    mobile: '+919818860396',
    email: 'f20200521@goa.bits-pilani.ac.in',
    linkedIn: 'https://www.linkedin.com/in/ishan-tandon-3886641a8/',
    image: ishan,
  },
  {
    name: 'Yash Saini',
    mobile: '+917742268889',
    email: 'f20190973@goa.bits-pilani.ac.in',
    linkedIn: 'https://www.linkedin.com/in/yash-saini-8a00b01a6',
    image: yash,
  },
  {
    name: 'Yash Yelmame',
    mobile: '+918623003043',
    email: 'f20201224@goa.bits-pilani.ac.in',
    linkedIn: 'https://www.linkedin.com/in/yash-yelmame-a68165205/',
    image: yelmame,
  },
  {
    name: 'Sakshi Gupta',
    mobile: '+919903830434',
    email: 'f20202036@goa.bits-pilani.ac.in',
    linkedIn: 'https://www.linkedin.com/in/sakshi-gupta-20a715203/',
    image: sakshi,
  },
  {
    name: 'Ekansh Gupta',
    mobile: '+919672930825',
    email: 'f20201952@goa.bits-pilani.ac.in',
    linkedIn: 'https://www.linkedin.com/in/ekansh-gupta14/',
    image: ekansh,
  },
  {
    name: 'Paurush Punyasheel',
    mobile: '+919425647091',
    email: 'f20190184@goa.bits-pilani.ac.in',
    linkedIn: 'https://www.linkedin.com/in/paurush-punyasheel-596179136/',
    image: paurush,
    coordi: true,
  },
  {
    name: 'Laukik B Nakhwa',
    mobile: '+919869193993',
    email: 'f20201932@goa.bits-pilani.ac.in',
    linkedIn: 'https://www.linkedin.com/in/laukik-nakhwa-1191bb205/',
    image: laukik,
  },
  {
    name: 'Dhruv Potdar',
    mobile: '+917045030300',
    email: 'f20201489@goa.bits-pilani.ac.in',
    linkedIn: 'https://www.linkedin.com/in/dhruvpotdar/',
    image: dhruv,
  },
  {
    name: 'Tanay Patni',
    mobile: '+918793131372',
    email: 'f20201745@goa.bits-pilani.ac.in',
    linkedIn: 'https://www.linkedin.com/in/tanay-patni-159219205/',
    image: tanay,
  },
  {
    name: 'Atharva Ghotavadekar',
    mobile: '+919767280239',
    email: 'f20201300@goa.bits-pilani.ac.in',
    linkedIn: 'https://www.linkedin.com/in/atharva-g/',
    image: atharva,
  },
  {
    name: 'Sahil Shingote',
    mobile: '+917038110010',
    email: 'f20201412@goa.bits-pilani.ac.in',
    linkedIn: 'https://www.linkedin.com/in/sahil-shingote-43a0531bb/',
    image: sahil,
  },
];

let faculty = [
  {
    image: pravin,
    name: 'Dr. Pravin Mane',
    url: 'https://universe.bits-pilani.ac.in/goa/pravinmane/profile',
  },
  {
    image: indrani,
    name: 'Dr. Indrani Talukdar',
    url: 'https://universe.bits-pilani.ac.in/goa/indranit/profile',
  },
  {
    image: hrishi,
    name: 'Dr. Hrishikesh Sonalikar',
    url: 'https://universe.bits-pilani.ac.in/goa/Hrishikeshs/profile',
  },
  {
    image: rnbehera,
    name: 'Dr. R N Behera',
    url: 'https://universe.bits-pilani.ac.in/goa/rbehera/profile',
  },
  {
    image: eskannan,
    name: 'Dr. E S Kannan',
    url: 'https://universe.bits-pilani.ac.in/goa/eskannan/profile',
  },
  {
    image: ramprasad,
    name: 'Dr. Ramprasad S Joshi',
    url: 'https://www.bits-pilani.ac.in/goa/rsj/profile',
  },
];

function compare(a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}

student.sort(compare);
// faculty.sort(compare);

export { student, faculty };
