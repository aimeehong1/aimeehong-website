import renderProfile from "./Profile.js"
import renderAbout from "./About.js"
import {renderOnenews} from "./News.js"
import {renderProject} from "./Projects.js"

export default function renderMainPage(data) {
  const main = document.querySelector("main");
  main.innerHTML = renderProfile(data);
  main.innerHTML += renderAbout(data);

  const searchNews = document.querySelector("#news.search");
  console.log(searchNews);
  searchNews.addEventListener("input", (e) => {
    console.log(e.currentTarget);
    console.log(e.target);
    console.log(e.target.value);
    const value = e.target.value;

    const filtered = data.news.filter((newsitem) =>
      newsitem.title.toLowerCase().includes(value.toLowerCase()) ||
      newsitem.date.toLowerCase().includes(value.toLowerCase())
    );

    console.log("filtered=", filtered);

    const list = document.querySelector(".newslist");
    console.log("list is", list);
    list.innerHTML = filtered
      .map((newsitem) => renderOnenews(newsitem))
      .join("");
  });
  
  const searchProject = document.querySelector("#projects.search");
  console.log(searchProject);
  searchProject.addEventListener("input", (e) => {
    console.log(e.currentTarget);
    console.log(e.target);
    console.log(e.target.value);
    const value = e.target.value;

    const filtered = data.projects.filter((projectitem) =>
      projectitem.title.toLowerCase().includes(value.toLowerCase()) ||
      projectitem.description.toLowerCase().includes(value.toLowerCase())
    );

    console.log("filtered=", filtered);

    const list = document.querySelector(".projectlist");
    console.log("list is", list);
    list.innerHTML = filtered
      .map((newsitem) => renderProject(newsitem))
      .join("");
  });
}