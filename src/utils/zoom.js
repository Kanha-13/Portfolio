export const zoomoutbg = () => {
  const container = document.getElementById("app-container")
  container.style.transition = 'scale 0.7s ease, filter 0.4s ease-in-out'
  // container.style.backgroundSize = '100%'
  container.style.scale = "1.0"

  const filterContainer = document.getElementById("app-filter")
  filterContainer.style.backdropFilter = 'blur(3px)'

  const body = document.getElementById("home-container")
  body.style.transition = 'scale 0.7s ease-in-out, opacity 0.4s ease-in-out'
  body.style.scale = 0.8
  body.style.opacity = 0
  
  setTimeout(() => {
    body.style.position = 'absolute'
    body.style.zIndex=-1
  }, 400);
}

export const zoominbg = () => {
  const container = document.getElementById("app-container")
  container.style.transition = 'scale 0.7s ease, filter 0.7s ease-in-out'
  container.style.scale = "1.085"

  const filterContainer = document.getElementById("app-filter")
  filterContainer.style.transition = ' backdropFilter 3s ease-in-out'
  filterContainer.style.backdropFilter = 'blur(1px)'

  const body = document.getElementById("home-container")
  body.style.transition = 'scale 0.7s ease-in-out, opacity 0.7s ease-in-out'
  body.style.scale = 1
  body.style.opacity = 1

  body.style.position = 'relative'
  body.style.zIndex=0
}

export const suddenZoomout = () => {
  const container = document.getElementById("app-container")
  container.style.transition = 'scale 0s ease, filter 0s ease-in-out'
  // container.style.backgroundSize = '100%'
  container.style.scale = "1.0"
  
  const filterContainer = document.getElementById("app-filter")
  filterContainer.style.backdropFilter = 'blur(3px)'
  
  const body = document.getElementById("home-container")
  body.style.transition = 'scale 0s ease-in-out, opacity 0s ease-in-out'
  body.style.scale = 0.8
  body.style.opacity = 0
  
  body.style.zIndex=-1
  body.style.position = 'absolute'
}

export const easeInBg = () => {
  const container = document.getElementById("app-container")
  container.style.transition = 'opacity 5s ease-in-out'
  container.style.opacity = 1
}