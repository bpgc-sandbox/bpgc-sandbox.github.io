import spiderbot from '../assets/projects/spiderbot.jpg';
import strikebot from '../assets/projects/strikebot.jpeg';
import trotbot from '../assets/projects/trotbot.jpeg';
import kratos from '../assets/projects/kratosrover.jpeg';

let homeProjects = [
  {
    title: 'SpiderBot',
    description:
      'Spiderbot is a six legged ground robot, commonly known as an hexapod.',
    image: spiderbot,
    summary: {
      brief:
        'Project SpiderBot aims to design and build a six-legged round body Hexapod capable of traversing diverse terrains autonomously.',
      points: [
        'Hexapods are a very versatile legged option since they provide more passive stability during locomotion as compared to a quadruped or biped. They also benefit from a lower impact on the terrain and have greater mobility in surroundings.',
        'The major goal of this project is to study and develop walking gaits, trajectories and controllers for the robot to traverse any kind of terrain in an optimum manner.',
        'The end goal will also include creating a more robust and reliable design for a hexapod.',
      ],
    },
  },
  {
    title: 'Trotbot',
    description:
      'Trotbot is a multipurpose omnidirectional ground robot, designed to serve autonomously in an indoor environment.',
    image: trotbot,
    summary: {
      brief:
        'Trotbot is a ground robot capable of moving independently along X and Y directions, which give it added freedom to navigate indoor constrained environments',
      points: [
        "The robot will be able to autonomously navigate around obstacles and reach waypoints set in and around the environment with the use of onboard sensors and be able to detect it's location.",
        'The current onboard sensors include a RGB and depth camera, 2D-lidar and motor encoders',
        'Trotbot can be used in the real world to deliver packages from one location to another in offices, construction sites etc. It can also be teleoperated to nearby locations using the camera feed.',
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
];

let projects = [
  ...homeProjects,
  {
    title: 'StrikeBot',
    description:
      'Strike bot is a spherical ground robot controlled by an internal pendulum and DC motors',
    image: strikebot,
    summary: {
      brief:
        'Strikebot houses the wirelessly controllable mobile robot chassis and electronics inside a polymer sphere.',
      points: [
        'Strikebot is capable of ground traversal without any risk of damaging the environment as the robot chassis is smooth and spherical',
        'The robot uses a closed loop active damping mechanism to balance and prevent wobbling via feedback from an MPU 6050 IMU.',
        'Further work will be to fabricate modular attachments for the robot to attach sensors and achieve autonomous behaviour.',
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
