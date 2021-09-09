import React from 'react';
import Link from 'next/link';
import style from './ProjectCardStyles.module.css';
import { projects } from '../../constants/constants';


const ProjectCard = ({ projectImage, projectName, projectDescription, projectTags, projectVisit }) => {
    return (

        <div className={style.projectCardWrapper}>
            <img src={projectImage} />
            <h2>{projectName}</h2>
            <p>{projectDescription}</p>
      
           <div className={style.projectCardTags}>
           {projectTags.map((tag, i) => <h4 key={i}>{tag}</h4>
            )}
           </div>

            <Link href={projectVisit} >
                <button>Live Site</button>
            </Link>
        </div>


    )
}

export default ProjectCard
