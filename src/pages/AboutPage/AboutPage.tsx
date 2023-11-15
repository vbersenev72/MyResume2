import React from 'react';
import PageContainer from '@/components/PageContainer';
import cl from './AboutPage.module.scss';
import Title from '@/components/Title';
import ProjectCard from '@/components/ProjectCard';
import MouseHover from '@/components/MouseHover';
import { projects, skills } from '@/data';
import Link from '@/components/UI/Link';
import { HiOutlineArrowRight } from 'react-icons/all';

const AboutPage = () => {
  return (
    <PageContainer className={cl.aboutPage}>
      <MouseHover
        className={cl.usernameContainer}
        text={'My name is...'}
        position={'bottom'}
      >
        <Title containerClassName={cl.username}>BERSENEV VLADISLAV</Title>
      </MouseHover>
      <div className={cl.contentContainer}>
        <MouseHover>
          <Title className={cl.title}>About me:</Title>
        </MouseHover>
        <MouseHover>
          <p className={cl.text}>
            I'm a <span>young web developer</span> living in <span>Russia (Tyumen)</span>
            , I devote most of my time to <span>developing</span> commercial
            projects and <span>self-improvement</span>, I have been doing web
            development for about <span>2 years</span>, during this time I tried{' '}
            <span>Web</span> direction, in the Web-development
            area I have quite a lot of experience in writing React + Node.js applications,
            so now I position myself as a <span>Node.js backend developer</span>.
          </p>
        </MouseHover>
      </div>
      <div className={cl.contentContainer}>
        <MouseHover>
          <Title className={cl.title}>Latest projects: </Title>
        </MouseHover>
        <div className={cl.projectsContainer}>
          <ProjectCard project={projects[0]} />
          <MouseHover text={'More projects...'}>
            <Link href={'ProjectsPage'} className={cl.projectsLink}>
              <HiOutlineArrowRight />
            </Link>
          </MouseHover>
        </div>
      </div>
      <div className={cl.contentContainer}>
        <MouseHover>
          <Title className={cl.title}>Skills:</Title>
        </MouseHover>
        <ul className={cl.skills}>
          {skills.map((skill, key) => (
            <li key={key} className={cl.skillContainer}>
              <Title className={cl.title}>{skill.title}</Title>
              <ul className={cl.skillContents}>
                {skill.content.map((skillContent, key) => (
                  <li className={cl.skillContent} key={key}>
                    {skillContent.icon ? skillContent.icon : null}
                    <span>{skillContent.title}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </PageContainer>
  );
};

export default AboutPage;
