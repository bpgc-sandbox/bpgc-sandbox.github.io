import vimarsh from "../Assets/studentsss/vimarsh.jpeg";
import pranav from "../Assets/studentsss/pranav.webp";
import smrithi from "../Assets/studentsss/smrithi.webp";
import vishnu from "../Assets/studentsss/vishnu.webp";
import aashishkanted from "../Assets/studentsss/aashishkanted.webp";
import arjunputhli from "../Assets/studentsss/arjunputhli.webp";
import ritwik from "../Assets/studentsss/ritwik.webp";
import nitya from "../Assets/studentsss/nitya.jpg";
import arya from "../Assets/studentsss/arya.webp";
import raghav from "../Assets/studentsss/raghav.jpg";
import rajdeep from "../Assets/studentsss/rajdeep.webp";
import samar from "../Assets/studentsss/samar.webp";
import vishnuganti from "../Assets/studentsss/vishnuganti1.webp";
import adarsh from "../Assets/studentsss/adarsh.webp";
import ajinkya from "../Assets/studentsss/ajinkya.webp";
import om from "../Assets/studentsss/om.jpg";
import aniket from "../Assets/students/aniket.jpeg";
import varinder from "../Assets/faculty/varinder1.jpeg";

let student = [
  {
    name: "Om Jaiswal",
    email: "f20220483@goa.bits-pilani.ac.in",
    linkedIn: "https://www.linkedin.com/in/om-jaiswal-b4716a190",
    image: om,
  },
  {
    name: "Aniket Sonawane",
    email: "f20220031@goa.bits-pilani.ac.in",
    linkedIn: "https://www.linkedin.com/in/aniket-sonawane-3a87b9249/",
    image: aniket,
  },
  {
    name: "Ajinkya Deshpande",
    email: "f20220746@goa.bits-pilani.ac.in",
    linkedIn: "https://www.linkedin.com/in/ajinkya-deshpande-6ab13b265",
    image: ajinkya,
  },

  {
    name: "Adarsh Pai",
    email: "f20220698@goa.bits-pilani.ac.in",
    linkedIn: "https://www.linkedin.com/in/adarsh-pai-063050263",
    image: adarsh,
  },

  {
    name: "Arya Kulkarni",
    email: "f20220557@goa.bits-pilani.ac.in",
    linkedIn: "https://www.linkedin.com/in/arya-kulkarni-a68b55251",
    image: arya,
  },
  {
    name: "Raghav Mohan Kumar",
    email: "f20220137@goa.bits-pilani.ac.in",
    linkedIn: "http://www.linkedin.com/in/raghav-mohan-kumar-427557246",
    image: raghav,
  },
  {
    name: "Rajdeep Naha",
    email: "f20221218@goa.bits-pilani.ac.in",
    linkedIn: "https://www.linkedin.com/in/rajdeep-naha-a6a032257",
    image: rajdeep,
  },
  {
    name: "Vimarsh Shah",
    email: "f20221060@goa.bits-pilani.ac.in",
    linkedIn: "https://www.linkedin.com/in/vimarshshah",
    image: vimarsh,
  },
  {
    name: "Pranav Saxena",
    email: "f20220257@goa.bits-pilani.ac.in",
    linkedIn: "https://www.linkedin.com/in/pranav-saxena13",
    image: pranav,
  },
  {
    name: "Samar Jalil Siddiqui",
    email: "f20221135@goa.bita-pilani.ac.in",
    linkedIn: "https://www.linkedin.com/in/samar-jalil-siddiqui-96b852299/",
    image: samar,
  },
  {
    name: "Vishnu Ganti",
    email: "f20220579@goa.bits-pilani.ac.in",
    linkedIn: "https://www.linkedin.com/in/vishnu-ganti-223898258",
    image: vishnuganti,
  },
  {
    name: "Smrithi Lokesh",
    mobile: "+916361694968",
    email: "f20212018@goa.bits-pilani.ac.in",
    linkedIn: "https://www.linkedin.com/in/smrithi-ls-0894b7219",
    image: smrithi,
  },
  {
    name: "Vishnu Vardhan Reddy Peddireddy",
    mobile: "+918790830151",
    email: "f20211199@goa.bits-pilani.ac.in",
    linkedIn:
      "https://www.linkedin.com/in/vishnu-vardhan-reddy-peddireddy-7b4bb2237/",
    image: vishnu,
  },
  {
    name: "Aashish Kanted",
    mobile: "+919840530003",
    email: "f20211912@goa.bits-pilani.ac.in",
    linkedIn: "https://www.linkedin.com/in/aashish-kanted-7a3707225",
    image: aashishkanted,
  },
  {
    name: "Arjun Puthli",
    mobile: "+919594333307",
    email: "f20212249@goa.bits-pilani.ac.in",
    linkedIn: "https://www.linkedin.com/mwlite/in/arjun-puthli-810938189",
    image: arjunputhli,
  },
  {
    name: "Ritwik Sharma",
    mobile: "+919999326476",
    email: "f20220470@goa.bits-pilani.ac.in",
    linkedIn: "https://www.linkedin.com/in/ritwik-sharma-609a38268",
    image: ritwik,
  },
  {
    name: "Nitya Ahuja",
    mobile: "+919606031958",
    email: "f20212293@goa.bits-pilani.ac.in",
    linkedIn: "https://www.linkedin.com/in/nitya-ahuja-516240237/",
    image: nitya,
  },
];

let faculty = [
  {
    image: varinder,
    name: "Dr. Varinder Singh",
    url: "https://www.bits-pilani.ac.in/goa/varinder-singh/",
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
