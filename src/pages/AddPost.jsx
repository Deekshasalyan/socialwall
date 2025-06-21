import PostForm from "../components/PostForm";

function AddPost({addPost}) {
    return(
        <div>
            <h2>Add a New Post</h2>
            <PostForm addPost={addPost} />
        </div>
    );
}

export default AddPost;
