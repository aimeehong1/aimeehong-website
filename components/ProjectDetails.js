export default function renderProjectDetails(project) {
  const main = document.querySelector("main");
  main.classList.remove("container");
  main.classList.remove("project-container");
  main.innerHTML = `<section class="project-container-page">
          <div class="project-about"> 
            ${renderProjectDetail(project)}
          </div>
          <div class="demonstration">
            ${renderProjectDemo(project)}
          </div>
          <form target="_blank" action=${project.link}>
            <input type="submit" value="GitHub Repo" />
          </form>
        </section>`;
}

export function renderProjectDetail(project) {
  return `<h1>
            ${project.title}
          </h1> 
          <p>${project.full_description}</p>`;
}

export function renderProjectDemo(project) {
  const p = project.materials.find((p) => p.label == "Video");
  if (p) {
    return `<video controls autoplay loop>
              <source
                src=${p.path}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>`;
  }
  else {
    return ``
  }
}