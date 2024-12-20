export default function renderNews(news) {
  return  `<section class="news">
          <h3>News</h3>
          <div class="search" id="news">
            <input type="search" name='news' placeholder="Search News...">
          </div>
          <table class="newslist">
            ${news.map((n) => renderOnenews(n)).join("")}
          </table>
        </section>`;
}

export function renderOnenews(news) {
  return `<tr>
              <td>${news.title}</td>
              <td>${news.date}</td>
          </tr>`;
}