document.addEventListener("DOMContentLoaded", function () {
    const blogContainer = document.getElementById("blog-post");

    fetch("https://dev.to/api/articles?per_page=5")
        .then(response => response.json())
        .then(posts => {
            posts.forEach(post => {
                const postHTML = `
                    <div class="card mb-4">
                        <div class="card-body">
                            <h3 class="card-title">${post.title}</h3>
                            <p class="card-text">${post.description || "No description available."}</p>
                            <a href="${post.url}" target="_blank" class="btn btn-secondary">Read More</a>
                        </div>
                    </div>    
                `;
                blogContainer.innerHTML += postHTML;
            });
        })
        .catch(error => console.error("Error fetching blog post:", error));
});
