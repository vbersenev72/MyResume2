import React, { FC, HTMLAttributes } from 'react';
import cl from './ProjectCard.module.scss';
import { ProjectProps } from '@/data';
import { BiLink, FaGithub } from 'react-icons/all';
import MouseHover from '@/components/MouseHover';
import classNames from 'classnames';

interface IProjectCard extends HTMLAttributes<HTMLDivElement> {
  project: ProjectProps;
}

const ProjectCard: FC<IProjectCard> = ({ project, className, ...props }) => {
  return (
    <div {...props} className={classNames(cl.projectContainer, className)}>
      <div
        className={cl.projectImage}
        style={{ backgroundImage: `url(${project.image})` }}
      />
      <div className={cl.projectContent}>
        <div className={cl.projectTitleContainer}>
          <MouseHover>
            <h2 className={cl.projectTitle}>{project.title}</h2>
          </MouseHover>
          <div className={cl.projectLinks}>
            {project.githubLink && (
              <MouseHover text={'Source code'}>
                <a
                  href={project.githubLink}
                  target={'_blank'}
                  rel={'noreferrer'}
                >
                  <FaGithub />
                </a>
              </MouseHover>
            )}
            {project.link && (
              <MouseHover text={'Link'}>
                <a href={project.link} target={'_blank'} rel={'noreferrer'}>
                  <BiLink />
                </a>
              </MouseHover>
            )}
          </div>
        </div>
        <MouseHover>
          <div className={cl.projectDescription}>{project.description}</div>
        </MouseHover>
        <div className={cl.projectTags}>
          {project.tags.map((tag, key) => (
            <span key={key}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
