import renderProfile from "./Profile.js"
import renderAbout from "./About.js"
import {renderOnenews} from ".News.js"

export default function renderMainPage(data) {
  const main = document.querySelector("main");
  main.innerHTML = renderProfile(data);
  main.innerHTML += renderAbout(data);

//   const search = document.querySelector(".search");
//   console.log(search);
//   search.addEventListener("input", (e) => {
//     console.log(e.currentTarget);
//     console.log(e.target);
//     console.log(e.target.value);
//     const value = e.target.value;

//     const filtered = data.news.filter((newsitem) =>
//       newsitem.title.toLowerCase().includes(value.toLowerCase())
//     );

//     console.log("filtered=", filtered);

//     const list = document.querySelctor(".newslist");
//     console.log(list);
//     list.innerHTML = filtered.map((newsitem) =>
//       renderOnenews(newsitem)).join("");
  // });
}