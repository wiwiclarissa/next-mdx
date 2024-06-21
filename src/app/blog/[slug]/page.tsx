import { getBlogBySlug, getAllBlogSlug } from '../_fetcher';

export default async function BlogContentPage({
  params,
}: {
  params: { slug: string };
}) {
  const blog = await getBlogBySlug(params.slug);
  return (
    <div className="prose" style={{ padding: 12 }}>
      <h1>{blog.frontmatter.title}</h1>
      <p style={{ paddingBottom: 24 }}>Author: {blog.frontmatter.author}</p>

      <div>{blog.content}</div>
    </div>
  );
}
