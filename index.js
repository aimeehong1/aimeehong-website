import renderNav from "/components/Nav.js";
import renderMainPage from "./components/MainPage.js";
import renderProjectPage from "./components/ProjectPage.js";
import renderProjectDetails from "./components/ProjectDetails.js";

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get("project");
    const page = projectId == null ? "main" : "project-detail";
    console.log(projectId);
    if (page === "main") {
      renderNav();
      renderMainPage(data);
    } else {
      if (projectId == "projects") {
        renderNav();
        renderProjectPage(data);
      } else {
        renderNav();
        const p = data.projects.find((p) => p.id == projectId);
        renderProjectDetails(p);
      }
    }
  });
