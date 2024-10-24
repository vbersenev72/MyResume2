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
    githubLink: 'https://github.com/vbersenev72/QM-chess',
    title: 'QM - chess engine',
    description:
      "QuickMove - chess engine. TypeScript core logic",
    image: 'https://img.freepik.com/premium-vector/qm-letter-logo-design-with-circle-shape-qm-circle-cube-shape-logo-design-qm-monogram-busin_629210-928.jpg',
    tags: [
      'Node.js',
      'NoDependecies',
      'chess-engine',
      'Typescript',
    ],
  },
  {
    githubLink: 'https://github.com/vbersenev72/HTTPulse.js',
    title: 'HTTPulse.js',
    description:
      'HTTP Typescript Framework',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT17aug6sTeQ2UAUSnqpeCBtnp59qHC4hWE_w&s',
    tags: [
      'Node.js',
      'Typescript',
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
    title: 'Backend:',
    content: [
      {
        title: 'Express.js',
        icon: <SiExpress/>
      },
      {
        title: 'Nest.js',
        icon: <SiNestjs/>
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
        title: 'Javascript',
        icon: <SiJavascript />,
      },
      {
        title: 'Typescript',
        icon: <SiTypescript />,
      },
      {
        title: 'React',
        icon: <FaReact />,
      },

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
    text: 'Vbersenev72@gmail.com',
    icon: <SiGmail />,
    link: 'mailto:Vbersenev73@gmail.com',
  },
];
