import renderNews from "./News.js"

export default function renderProfile(data) {
  return `<div>
  <section class="profile">
          <img
            class="profile"
            src="${data.profile.photo}"
            alt="Profile Image of Aimee Hong"
          />
          <h1>${data.profile.name}</h1>
          <h3>${data.profile.majors}</h3>
          <p>${data.profile.university}</p>
          <p>${data.profile.address}</p>
          <br />
          <div class="contact">
            <ul>
              ${data.profile.contact.map((c) => renderContact(c)).join("")}
            </ul>
          </div>
        </section>
        ${renderNews(data.news)}</div>`;
}

function renderContact(contact) {
  return `    <li>
                ${contact.name}
                <a href=${contact.href}
                  ><img
                    class="icon"
                    src="${contact.icon_src}"
                    alt=${contact.name + "logo"}
                  />
                  ${contact.value}</a>
              </li>`;
}