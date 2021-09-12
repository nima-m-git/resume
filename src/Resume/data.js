import { format, isToday } from 'date-fns';

import selection from './selection';

const dateFormat = 'MMM yyyy';

class SimpleModel {
  constructor(raw) {
    for (let key in raw) {
      this[key] = raw[key];
    }
  }
}

class Experience extends SimpleModel {
  get timeRange() {
    const { startDate, endDate } = this;
    const isCurrent = isToday(endDate);

    return [
      format(startDate, dateFormat),
      isCurrent ? 'Current' : format(endDate, dateFormat),
    ]
      .filter(Boolean)
      .join(' ~ ');
  }
}

export const professionalExperience = [
  {
    companyName: 'Q4',
    jobTitle: 'FrontEnd Developer',
    location: 'Toronto, ON',
    startDate: new Date(2021, 0, 1),
    endDate: new Date(),
    description: '',
    responsibilities: [
      'Built and designed Investor and Corporate websites for publically traded companies',
      'Analyzed, provided suggestions, and implemented innovative solutions for issues and improvements related to: UX/UI design, process automation, accessibility features, code structure, refactored widgets and stylesheets, onboarding process, CMS documentation',
    ],
  },
  {
    companyName: 'Freelance',
    jobTitle: 'Full Stack Software Developer',
    startDate: new Date(2020, 2, 1),
    endDate: new Date(),
    description: '',
    responsibilities: [
      'Built, designed, and tested a range of websites and applications, covering frontend and backend components as required',
      'Optimizing UI/IX performance, loading times, SEO optomization, component modularity and reusability',
    ],
  },
  {
    companyName: 'Discotoast Studios',
    jobTitle: 'Digital Media',
    location: 'Toronto, ON',
    startDate: new Date(2018, 8, 1),
    endDate: new Date(2019, 4, 1),
    description: '',
    responsibilities: [
      'Increased data processing efficiency by automating manual tasks with VBA & Python',
      'UX/UI tested websites functionality across various platforms, user types, and protocols',
      'Produced wireframes and sitemaps for web design, managed content with WordPress',
    ],
  },

  // {
  //   companyName: 'Alfatec Machine Inc',
  //   jobTitle: 'Digital Marketing & Sales Representative',
  //   location: 'Dorval, QC',
  //   startDate: new Date(2019, 3, 1),
  //   endDate: new Date(),
  //   description: '',
  //   responsibilities: [
  //     'Building Web Scraper Tool to collect potential client leads with Python (bs4)',
  //     'Built Database to organize and maintain client information with PostgreSQL',
  //   ],
  // },
].map((w) => new Experience(w));

class Education extends Experience {
  get completedOn() {
    return format(this.endDate, dateFormat);
  }

  get timeRange() {
    const { startDate, endDate } = this;
    const isCurrent = isToday(endDate);

    if (!startDate) return format(endDate, dateFormat);

    return [
      format(startDate, dateFormat),
      isCurrent ? 'Current' : format(endDate, dateFormat),
    ]
      .filter(Boolean)
      .join(' ~ ');
  }
}

export const education = [
  // {
  //   title: 'Technology Studies',
  //   specialty:
  //     'Software Development - Front and Back End, Programming, Automation, Testing, UI/UX Design, Cloud Computing, Data Analysis',
  //   location: 'Self taught',
  //   startDate: new Date(2019, 1, 1),
  //   endDate: new Date(),
  //   // description: 'Frontend (React, Javascript, HTML, CSS)',
  // },
  {
    title: 'Specialized Honours Bachelor of Science Chemistry',
    specialty: 'Pharmaceutical and Biological',
    location: 'York University, Toronto',
    endDate: new Date(2017, 3, 1),
    description: 'Research Assistant – Department of Life Sciences',
  },
].map((educationItem) => new Education(educationItem));

class SampleProject extends SimpleModel {}

export const sampleProjects = selection.map(
  (sample) => new SampleProject(sample)
);

export const skillsGroup = [
  [
    'Javascript',
    'React',
    'Sass',
    'CSS',
    'HTML',
    'Bootstrap',
    'JQuery',
    'Framer-Motion',
  ],
  ['Node JS', 'Express', 'Mongo DB'],
  ['Python', 'Django', 'PostgreSQL'],
  ['AWS', 'Firebase', 'Git', 'Webpack', 'Postman'],
];
