import React from 'react';
import Link from 'next/link';
import style from './ProjectCardStyles.module.css';
import { projects } from '../../constants/constants';


const ProjectCard = ({ image, projectName, projectDescription, projectTags, projectVisit }) => {
    return (

        <div className={style.projectCardWrapper}>
            <img src='https://www.globalcosmeticsnews.com/wp-content/uploads/2019/01/amazon-625x352.jpg' />
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
