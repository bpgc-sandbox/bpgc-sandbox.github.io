import ananth from '../assets/students/ananth.jpg';
// import pravin from '../assets/faculty/pravin.min.png';
import pravin from '../assets/faculty/pravin.jpeg';
import indrani from '../assets/faculty/indrani.jpeg';
import yash from '../assets/students/yash.jpeg';
import sakshi from '../assets/students/sakshi.jpeg';
import yelmame from '../assets/students/yelmame.jpeg';

let student = [
  {
    name: 'Ananth Raghav',
    mobile: '+918790176414',
    email: 'f20201797@goa.bits-pilani.ac.in',
    linkedIn: 'https://www.linkedin.com/in/ananth-raghav-2151a9200/',
    image: ananth,
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
  }
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
];

function compare( a, b ) {
  if ( a.name < b.name ){
    return -1;
  }
  if ( a.name > b.name ){
    return 1;
  }
  return 0;
}

student.sort(compare);
faculty.sort(compare);

export {student, faculty};