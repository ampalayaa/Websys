document.addEventListener("DOMContentLoaded", function () {
    const blogContainer = document.getElementById("blog-post");

    fetch("https://dev.to/api/articles?per_page=15") // Fetch more articles to get enough with images
        .then(response => response.json())
        .then(posts => {
            const filteredPosts = posts.filter(post => post.cover_image); // Keep only posts with images

            if (filteredPosts.length < 5) {
                console.warn("Not enough posts with images. Showing available ones.");
            }

            const firstFivePosts = filteredPosts.slice(0, 6); // Get up to 5 posts

            // Save shown blog IDs for the "See More" page
            localStorage.setItem("shownBlogs", JSON.stringify(firstFivePosts.map(post => post.id)));

            firstFivePosts.forEach(post => {
                const postHTML = `
                    <div class="card">
                        <img src="${post.cover_image}" alt="${post.title}" class="card-img">
                        <div class="card-body">
                            <h3 class="card-title">${post.title}</h3>
                            <p class="card-text">${post.description || "No description available."}</p>
                            <a href="${post.url}" target="_blank" class="btn">Read More</a>
                        </div>
                    </div>    
                `;
                blogContainer.innerHTML += postHTML;
            });
        })
        .catch(error => console.error("Error fetching blog posts:", error));
});
