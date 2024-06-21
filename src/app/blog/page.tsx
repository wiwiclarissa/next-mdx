import Link from 'next/link';
import { getBlogs } from './_fetcher';

export default async function BlogsPage() {
  const blogs = await getBlogs();
  return (
    <main>
      {blogs.map((blog, i) => (
        <div key={i} style={{ padding: 8 }}>
          <h3>{blog.frontmatter.title}</h3>
          <p>Author: {blog.frontmatter.author}</p>
          <p>{blog.frontmatter.publishDate}</p>
          <Link href={`/blog/${blog.slug}`} style={{ color: 'dodgerblue' }}>
            Read More
          </Link>
        </div>
      ))}
    </main>
  );
}
