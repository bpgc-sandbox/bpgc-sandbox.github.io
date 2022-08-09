import biped from '../assets/projects/biped.min.png';
import modbot from '../assets/projects/modbot.jpeg';
import imitato from '../assets/projects/imitato.min.png';
import kratos from '../assets/projects/kratosrover.jpeg';

let homeProjects = [
  {
    title: 'Biped',
    description:
      'Robots are robotic modules with high stability and degrees of freedom, being developed for the purpose of traversing places where neither humans nor bots with wheels can go.',
    image: biped,
    summary: {
      brief:
        '"Biped Robots" or simply put, "Robotic Human Legs" are robotic modules with high stability and degrees of freedom, being developed for the purpose of traversing places where neither humans nor bots with wheels can go.',
      points: [
        'The bot is in an advanced stage of making. CAD modelling, the manufacturing of links and motors have been completed. Having finished the design of controls system, the team is currently working on its implementation.',
        'The bots have 6 degrees of freedom, with 2 each in the hips, knees and ankles each along with rolling freedom in the ankle. The joints present provide the bot with high levels of stability, freedom anf efficiency while walking.',
        'Their unique feature is that they work like human legs and do not depend on wheels. This gives them an advantage over bots with wheels.',
        'The Biped Robots will have numerous application in fields like geographical surveys and explorations and research.',
      ],
    },
  },
  {
    title: 'Mars Rover, Project Kratos',
    description:
      'Project Kratos is a student team that designs and manufactures autonomous, all-terrain Martian rover with a robotic arm and an onboard laboratory for detecting life.',
    image: kratos,
    summary: {
      brief:
        'The rover is capable of autonomously traversing uneven terrain as experienced in Mars, use its robotic arm to manipulate switches, turn knobs and identify signs of life in rock and soil samples.',
      points: [
        'Two iterations of prototyping the rover with changes in core mechanical design have already been completed. The team is currently working on the third rover prototype with electrical and software enhancements.',
        'The rover is equipped with a 5 DoF robotic arm which is driven by two powerful linear actuators. The roll and pitch motion of the end effector is controlled by a differential gear mechanism. A linearly actuated gripper can control the claw motion. The entire arm is supported by a custom-made inverse kinematics algorithm to facilitate its motion.',
        'The science vertical works on detecting signs of life through custom designed on board science lab, CNN based Machine Learning Model and sensor measurements and application of astrobiology and astrogeology to interpret results of the same.',
        'Yet another part of the team is working to automate the navigation capabilities of the rover using modern perception, localization, object avoidance and path planning algorithms',
      ],
    },
  },
  {
    title: 'Imitato',
    description:
      'BIT Secure is a matchbox-sized handy gadget, which assures the safety and security of personal belongings such as luggage, purses containing valuables and more.',
    image: imitato,
    summary: {
      brief:
        'Imitato Robotics are building Humanoid Robots which can be controlled by humans wearing an exo-suit. The humanoids designed will mimic the actions of human beings and can use human intelligence to perform tasks in new environments.',
      points: [
        'The project addresses the functional limitations of current robots which are either autonomous or are controlled by specific instruction sets to perform selected tasks.',
        "It completely removes the fear of Robotic AI from people's mind.",
        'The project has universal application because of the reach of AI and computers in almost all fields. Organizations that need to access hazardous, fatal or commercially unviable areas for humans are probable buyers of the Humanoid. Government Municipalities, Fire and Traffic departments are current target customers and in the long run the humanoid aims to serve in defence agencies.',
        `The first prototype which served as a proof of the concept was completed in December 2017. The second and final prototype was completed by the end of June'18. Quoting the team members, "Without the Sandbox, we wouldn't have been able to come so far in so little time, from where we started in the journey of our project." The team also pitched their idea in Feasible Technology Innovation contest succesfully and won the prestigious award.`,
      ],
    },
  },
];

let projects = [
  ...homeProjects,
  {
    title: 'Modular Bot',
    description:
      'The project aims to build reconfigurable robots made up of small modules which may have common or distinct functionality based on the application.',
    image: modbot,
    summary: {
      brief:
        'The project aims to build reconfigurable robots made up of small modules which may have common or distinct functionality based on the application.',
      points: [
        'These modules can link to each other, locomote individually or in clusters, move relative to each other, and communicate with each other to form a variety of robots in single or multiple tasks.',
        'The team is trying to achieve three baisc features, namely, Locomotion, Linkage and Movement for which the modules must be able to sense relative positions with respect to each other.',
        'The Modular Robots will have a variety of applications in geological surveys and data collection, geographical exploration and have several other civil, commercial and military applications.',
      ],
    },
  },
];

function compare(a, b) {
  if (a.title < b.title) {
    return -1;
  }
  if (a.title > b.title) {
    return 1;
  }
  return 0;
}

homeProjects.sort(compare);
projects.sort(compare);

export { homeProjects, projects };
