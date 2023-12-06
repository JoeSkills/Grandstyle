async function searchPosts() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  const response = await fetch('./search.json');
  const data = await response.json();
  const searchResults = data.filter((post) =>
    post.data.title.toLowerCase().includes(searchTerm)
  );

  const resultsContainer = document.getElementById('search-results');
  resultsContainer.innerHTML = '';

  if (searchResults.length === 0) {
    resultsContainer.innerHTML = '<p>Nothing Found</p>';
  } else {
    searchResults.forEach((post) => {
      const postElement = document.createElement('div');
      postElement.classList.add('search-result');

      postElement.innerHTML = `
    <div class="image-wrapper">
    <img src="${post.data.image}"/></div>
     <div class="post-content">
     <h3><a href="${post.url}">${post.data.title}</a></h3>
     <p>${post.data.description}</p>
     <a href="${post.url}" class="read-more-btn">Read More</a>
     </div>
    `;
      resultsContainer.appendChild(postElement);
    });
  }
}
