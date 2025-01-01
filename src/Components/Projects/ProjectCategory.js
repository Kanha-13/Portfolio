import React from 'react'
import { PROJECT_CATEGORIES } from './constants';
import ProjectCategoryCard from './ProjectCategoryCard';
import './project.css'
const ProjectCategory = ({onclick}) => {
  return (
    <div style={{ minHeight: "50vh", flexWrap: "wrap", display: "flex", justifyContent: "space-evenly", height: "100%", width: "100%" }}>
      {PROJECT_CATEGORIES.map((cat, index) => {
        return <ProjectCategoryCard key={index + cat.title + "in-project-list"} onclick={onclick} {...cat} />
      })}
    </div>
  )
}

export default ProjectCategory;
