document.addEventListener("DOMContentLoaded", function () {
    const projects = [
        {
            name: "Student Portal 2.0",
            repo: "ampalayaa/StudentPortal2.0",
            description: "A fully functional student management portal with authentication and database integration."
        },
        {
            name: "B.E Parser",
            repo: "ampalayaa/B.E-Parser",
            description: "A powerful parser for extracting and analyzing structured data efficiently."
        },
        {
            name: "PSU Sphere",
            repo: "Kenjicci/PSUSphere",
            description: "A comprehensive platform for PSU students to collaborate and share resources."
        }
    ];

    const container = document.getElementById("project-boxes");

    projects.forEach(project => {
        let projectHTML = `
            <div class="box">
                <div class="topic">${project.name}</div>
                <p>${project.description}</p>
                <button onclick="window.open('https://github.com/${project.repo}', '_blank')">View Repo</button>
            </div>
        `;

        container.innerHTML += projectHTML;
    });
});
