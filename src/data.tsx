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
    githubLink: 'https://github.com/vbersenev72/stockfishApi',
    title: 'Stockfish 14 UCI-integration',
    description:
      "API for interacting with Stockfish (chess engine)",
    image: 'https://images.chesscomfiles.com/uploads/v1/news/1211845.6d45f501.668x375o.65fd5544dbcd@2x.png',
    tags: [
      'Node.js',
      'Express.js',
      'Typescript',
    ],
  },
  {
    githubLink: 'https://github.com/vbersenev72/HTTPulse.js',
    title: 'HTTPulse.js',
    description:
      'HTTP Typescript Framework (in progress)',
    image: '',
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
