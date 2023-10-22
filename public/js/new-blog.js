/////////////////// Create new blog ///////////////////////////////////////////////////////////////////////////////////////////////////////
const newBlogFormHandler = async (event) => {
    event.preventDefault();
    /////////////////// Collect values from the blog form //////////////////////////////////////////////////////////////////////////////////
    const title = document.querySelector('#blog-title').value.trim();
    const content = document.querySelector('#blog-content').value.trim();
    /////////////////// If the title and content exist, post the new blog to the blog API endpoint ////////////////////////////////////////////
    if (title && content) {
        const response = await fetch('/api/blogs', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
        });
        /////////////////// If successful, redirect the browser to the homepage //////////////////////////////////////////////////////////////
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to create blog');
        }
    }
};
/////////////////// Event listener for new blog form submission ////////////////////////////////////////////////////////////////////////////
const newBlogForm = document.querySelector('.new-blog-form');
newBlogForm.addEventListener('submit', newBlogFormHandler);