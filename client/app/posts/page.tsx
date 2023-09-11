import Thumbnail from "@/components/posts/Thumbnail";
import { getPosts, getRecentPosts } from "@/sanity/utils";

// TailwindCSS variables
const root = `max-w-5xl mx-auto my-[5%] py-50`
const h1 = `text-7xl font-extrabold`
const span = `bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800 bg-clip-text text-transparent`
const header = `grid grid-cols-3 gap-3 border-4 border-red-400`
const section = ``;

async function PostsPage() {
  const recent = await getRecentPosts();
  const all = await getPosts();
  return (
    <div className={root}>
      <h1 className={h1}><span className={span}>Posts</span></h1>
      {/* Header */}
      <header className={header}>
        {recent.map((post) => (
          <Thumbnail 
            key={post._id}
            date={post._createdAt}
            description={post.description}
            image={post.image}
            title={post.title}
          />
        ))}
      </header>
      {/* Section 1 */}
      <section className={section}>
        {all.map((post) => (
          <Thumbnail 
            key={post._id}
            date={post._createdAt}
            description={post.description}
            image={post.image}
            title={post.title}
          />
        ))}
      </section>
    </div>
  );
}

export default PostsPage;