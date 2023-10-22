/////////////////// Get blogID from the endpoint //////////////////////////////////////////////////////////////////////////////////////////
const blogId = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
];

/////////////////// Update blog ///////////////////////////////////////////////////////////////////////////////////////////////////////////
const updateBlogFormHandler = async (event) => {
    event.preventDefault();
    const title = document.querySelector("#blog-title").value.trim();
    const content = document.querySelector("#blog-content").value.trim();
    if (title && content) {
        const response = await fetch(`/api/blogs/${blogId}`, {
            method: "PUT",
            body: JSON.stringify({ title, content }),
            headers: { "Content-Type": "application/json" },
        });
        if (response.ok) {
            document.location.replace("/dashboard");
        } else {
            alert("Failed to update blog");
        }
    }
};

/////////////////// Delete blog ///////////////////////////////////////////////////////////////////////////////////////////////////////////
const deleteBlogFormHandler = async (event) => {
    event.preventDefault();
    const response = await fetch(`/api/blogs/${blogId}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
        document.location.replace("/dashboard");
    } else {
        alert("Failed to delete blog");
    }
};

/////////////////// Add event listeners to update and delete blog buttons ///////////////////////////////////////////////////////////////////
const updateBlogButton = document.querySelector("#update-blog-button");
if (updateBlogButton) {
    updateBlogButton.addEventListener("click", updateBlogFormHandler);
}

const deleteBlogButton = document.querySelector("#delete-blog-button");
if (deleteBlogButton) {
    deleteBlogButton.addEventListener("click", deleteBlogFormHandler);
}