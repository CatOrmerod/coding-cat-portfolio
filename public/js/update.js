const updateProjectHandler = async (event) => {
  event.preventDefault();

  const projectTitle = document.querySelector("#project-title").value.trim();
  const projectDescription = document
    .querySelector("#project-description")
    .value.trim();
  const projectTools = document.querySelector("#project-tools").value.trim();
  const projectRole = document.querySelector("#project-role").value.trim();
  const projectRepo = document.querySelector("#project-repo").value.trim();
  const projectURL = document.querySelector("#project-url").value.trim();
  const projectPic = document.querySelector("#project-pic").value.trim();
  const projectScreenshot = document
    .querySelector("#project-screenshot")
    .value.trim();

  if (projectTitle) {
    const response = await fetch(`/api/projects/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        projectTitle,
        projectDescription,
        projectTools,
        projectRole,
        projectRepo,
        projectURL,
        projectScreenshot,
        projectPic,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/projects");
    } else {
      alert("Failed to add project");
    }
  }
};

document
  .querySelector("#update-project-form")
  .addEventListener("submit", updateProjectHandler);
