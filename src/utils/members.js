import ananth from '../assets/students/ananth.jpg';
// import pravin from '../assets/faculty/pravin.min.png';
import pravin from '../assets/faculty/pravin.jpeg';

let student = [
  {
    name: 'Ananth Raghav',
    mobile: '+918790176414',
    email: 'f20201797@goa.bits-pilani.ac.in',
    linkedIn: 'https://www.linkedin.com/in/ananth-raghav-2151a9200/',
    image: ananth,
  },
];

let faculty = [
  {
    image: pravin,
    name: 'Dr. Pravine Mane',
    url: 'https://universe.bits-pilani.ac.in/goa/pravinmane/profile',
  },
];

function compare( a, b ) {
  if ( a.title < b.title ){
    return -1;
  }
  if ( a.title > b.title ){
    return 1;
  }
  return 0;
}

student.sort(compare);
faculty.sort(compare);

export {student, faculty};