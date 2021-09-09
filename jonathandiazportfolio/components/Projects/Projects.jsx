import React from 'react'
import styles from './ProjectsStyles.module.css';
import { projects } from '../../constants/constants';
import ProjectCard from '../ProjectCard/ProjectCard';

const Projects = () => {
    return (
        <div id='projects' className={styles.projectsWrapper}>
            <h1>Projects</h1>
            <div className={styles.underline}></div>
           <div className={styles.projectCards}>
           {projects.map((project, i) => (
                <ProjectCard key={i} projectName={project.title} projectTags={project.tags} projectVisit={project.visit} projectDescription={project.description} projectImage={project.image}/>
            ))}
           </div>

        </div>
    )
}

export default Projects
