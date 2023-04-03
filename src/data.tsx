import React, { ReactElement } from 'react';
import {
  FaBootstrap,
  FaCss3,
  FaHtml5,
  FaReact,
  FaVuejs,
  SiDiscord,
  SiDocker,
  SiElectron,
  SiExpress,
  SiFramer,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGmail,
  SiGulp,
  SiJavascript,
  SiJquery,
  SiLess,
  SiLinux,
  SiMobx,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPostgresql,
  SiPug,
  SiReact,
  SiRedux,
  SiSass,
  SiSequelize,
  SiSqlite,
  SiTelegram,
  SiThreedotjs,
  SiTypescript,
  SiVite,
  SiWebpack,
} from 'react-icons/all';

export type ProjectProps = {
  image: string;
  title: string;
  githubLink?: string;
  link?: string;
  description: string;
  tags: string[];
};

export const projects: ProjectProps[] = [
  {
    githubLink: 'https://github.com/vbersenev72/eng-flashcards',
    title: 'Eng-Flashcards',
    description:
      "Application for learning english language using interactive flashcards",
    image: 'https://i.imgur.com/koxkLqI.jpg',
    tags: [
      'React',
      'Typescript',
      'React-Context',
      'Axios',
    ],
  },
  {
    githubLink: 'https://github.com/vbersenev72/Tic-Tac-Toe-Game',
    title: 'Tic-Tac-Toe',
    description:
      'Project game Tic-Tac-Toe game',
    image: 'https://i.imgur.com/fFl8xfh.jpg',
    tags: [
      'React',
      'Typescript',
    ],
  },
  {
    githubLink: 'https://github.com/vbersenev72/Movie-List',
    title: 'ReactLight-TV',
    description:
      'ReactLight-TV Prototype of an online cinema',
    image: 'https://i.imgur.com/CMvsBE6.jpg',
    tags: [
      'React',
      'Typescript',
      'Axios',
      'Json server',
    ],
   },
];

export type SkillContentProps = {
  title: string;
  icon?: ReactElement;
};

export type SkillProps = {
  title: string;
  content: SkillContentProps[];
};

export const skills: SkillProps[] = [
  {
    title: 'Frontend:',
    content: [
      {
        title: 'HTML',
        icon: <FaHtml5 />,
      },
      {
        title: 'CSS',
        icon: <FaCss3 />,
      },
      {
        title: 'SASS',
        icon: <SiSass />,
      },
      {
        title: 'Javascript',
        icon: <SiJavascript />,
      },
      {
        title: 'Typescript',
        icon: <SiTypescript />,
      },
      {
        title: 'Webpack',
        icon: <SiWebpack />,
      },
      {
        title: 'React-Context',
        icon: <SiReact/>
      },
      {
        title: 'React',
        icon: <FaReact />,
      },

    ],
  },
  {
    title: 'Backend:',
    content: [
      {
        title: 'Express.js',
        icon: <SiExpress/>
      },
      {
        title: 'Node.js',
        icon: <SiNodedotjs/>
      },
      {
        title: 'MongoDB',
        icon: <SiMongodb/>
      },
      {
        title: 'PostgreSQL',
        icon: <SiPostgresql/>
      }
    ],
  },
  {
    title: 'Devops:',
    content: [
      {
        title: 'Git',
        icon: <SiGit />,
      },
      {
        title: 'Github',
        icon: <SiGithub />,
      },
      {
        title: 'Docker',
        icon: <SiDocker />,
      },
      {
        title: 'Linux',
        icon: <SiLinux />,
      },
    ],
  },
];

export type ContactProps = {
  icon: ReactElement;
  text: string;
  link?: string;
};

export const contacts: ContactProps[] = [
  {
    text: '@Vbersenev72',
    icon: <SiGithub />,
    link: 'https://github.com/vbersenev72/',
  },
  {
    text: '@heisenberg_1_3_3_7',
    icon: <SiTelegram />,
    link: 'https://t.me/heisenberg_1_3_3_7',
  },
  {
    text: 'Vbersenev73@gmail.com',
    icon: <SiGmail />,
    link: 'mailto:Vbersenev73@gmail.com',
  },
];
