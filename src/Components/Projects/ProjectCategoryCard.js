import React from 'react'

const ProjectCategoryCard = ({ title, icon, onclick }) => {
  return (
    <div onClick={() => onclick(title)} className='project-category-card' style={{ position: "relative", cursor: "pointer", overflow: "hidden", display: "flex", margin: 10, justifyContent: "center", flexDirection: "column", height: "25vh", minWidth: "30%", border: "1px solid gray", borderRadius: 10 }}>
      <img src={icon} alt="icon" />
      <div style={{ fontSize: 20, textAlign: "center", marginTop: "40%", zIndex: 1 }}>{title}</div>
    </div>
  )
}

export default ProjectCategoryCard;
