import { getPosts } from "@/sanity/utils";

async function PostsPage() {
  const posts = await getPosts();

  return (
    <>
      <h1>Posts</h1>
      <div>
        {posts.map((post) => (
          <div key={post._id}>
            {post.title}
          </div>
        ))}
      </div>
    </>
  );
}

export default PostsPage;