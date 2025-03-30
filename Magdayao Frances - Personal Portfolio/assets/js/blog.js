document.addEventListener("DOMContentLoaded", function () {
    const blogContainer = document.getElementById("blog-post");

    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")  // Fixed _limits to _limit
        .then(response => response.json())
        .then(posts => {
            posts.forEach(post => {
                const postHTML = `
                    <div class="card mb-4">
                        <div class="card-body">
                            <h5 class="card-title">${post.title}</h5>
                            <p class="card-text">${post.body}</p>
                            <a href="#" class="btn btn-secondary">Read More</a>
                        </div>
                    </div>    
                `;  // Fixed closing ``
                blogContainer.innerHTML += postHTML;
            });
        })
        .catch(error => console.error("Error fetching blog post:", error));
});
