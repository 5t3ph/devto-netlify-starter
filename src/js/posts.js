const postList = document.querySelector(".posts");

const createPostList = (posts) => {
  const items = posts.map((post) => {
    const { title, url, description, tags } = post;
    return `<li class="card">
					<div class="card__content">
            <a href="${url}" class="card__title h4">${title}</a>
            <p>${description}</p>
						<em class="ink-gray">${tags}</em>
          </div>
        </div>
      </li>`;
  });
  const list = `<ul class="card-wrapper" role="list">${items.join("")}</ul>`;
  postList.innerHTML = list + postList.innerHTML;
  postList.classList.add("loaded");
}

let postsApi = "/.netlify/functions/devto";

// Use local test data if not live site
if(window.location.port) {
  postsApi = "/js/postdata.json";
}

fetch(postsApi, {
  method: "GET",
})
  .then((response) => response.json())
  .then((data) => {
    createPostList(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
