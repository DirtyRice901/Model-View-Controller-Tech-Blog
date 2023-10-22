/////////////////// DELETE BLOG ///////////////////////////////////////////////////////////////////////////////////////////////////////////
const deleteBlog = async (blogId) => {
    const response = await fetch(`/api/blogs/${blogId}`, {   // fetch request to delete blog ///////////////////////////////////////////
        method: 'DELETE', 
        headers: {  
            'Content-Type': 'application/json'      
        }
    });
    if (response.ok) {    // if response is ok, reload page //////////////////////////////////////////////////////////////////////////////
        document.location.reload();
    } else {            // else alert user of failure ///////////////////////////////////////////////////////////////////////////////////
        alert("Failed to delete blog");
    }
};
/////////////////// function to handle delete blog button click ///////////////////////////////////////////////////////////////////////////
const deleteBlogHandler = (event) => { 
    if (event.target.matches(".delete-blog")) {
        const blogId = event.target.getAttribute("data-id");
        deleteBlog(blogId);
    }
};
/////////////////// add event listener to document for delete blog button ////////////////////////////////////////////////////////////////////
document.addEventListener("click", deleteBlogHandler); 