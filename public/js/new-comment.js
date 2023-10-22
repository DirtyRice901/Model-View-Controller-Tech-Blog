/////////////////// Function to create a new comment //////////////////////////////////////////////////////////////////////////////////////
const newCommentFormHandler = async (event) => {
    event.preventDefault();
    /////////////////// Collect values from the comment form ////////////////////////////////////////////////////////////////////////////////
    const comment_text = document.querySelector('#comment-text').value.trim();
    const blog_id = document.querySelector('#blog_id').value.trim();
    /////////////////// If the comment text exists, post the new comment to the comment API endpoint ////////////////////////////////////////
    if (comment_text) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ comment_text, blog_id }),
            headers: { 'Content-Type': 'application/json' },
        });
        /////////////////// If successful, reload the page ///////////////////////////////////////////////////////////////////////////////////
        if (response.ok) {
            document.location.reload();
        } else {
            alert('Failed to create comment');
        }
    }
};

/////////////////// Event listener for new comment form submission //////////////////////////////////////////////////////////////////////////
const newCommentForm = document.querySelector('.new-comment-form');
newCommentForm.addEventListener('submit', newCommentFormHandler);