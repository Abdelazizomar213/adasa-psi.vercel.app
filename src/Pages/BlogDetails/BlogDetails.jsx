import { Link, useParams } from 'react-router'
import { blogData } from '../../data/blogData'

function formatArabicDate(value) {
  return new Date(value).toLocaleDateString('ar-EG', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

function renderContent(content) {
  return content
    .split('\n\n')
    .filter(Boolean)
    .map((block, index) => {
      if (block.startsWith('## ')) {
        return (
          <h2 className="article-section-title" key={`${block}-${index}`}>
            {block.replace(/^##\s*/, '')}
          </h2>
        )
      }

      return <p key={`${block}-${index}`}>{block}</p>
    })
}

export default function BlogDetails() {
  const { slug } = useParams()
  const post = blogData.posts.find((item) => item.slug === slug)

  if (!post) {
    return (
      <main className="container py-5" dir="rtl">
        <div className="empty-state">
          <h1>المقال غير موجود</h1>
          <p>لم نتمكن من العثور على هذا المقال. يرجى العودة إلى قائمة المدونة.</p>
          <Link className="btn btn-primary mt-3" to="/blog">
            العودة إلى المدونة
          </Link>
        </div>
      </main>
    )
  }

  const relatedPosts = blogData.posts.filter((item) => item.id !== post.id).slice(0, 4)

  return (
    <main className="container py-5" dir="rtl">
      <div className="row g-4">
        <div className="col-lg-8">
          <article className="article-card">
            <img src={post.image} alt={post.title} />
            <div className="article-card-body">
              <div className="card-post-meta">
                <span className="badge">{post.category}</span>
                <span>{formatArabicDate(post.date)}</span>
                <span>{post.readTime}</span>
              </div>
              <h1 className="article-title">{post.title}</h1>
              <p className="article-excerpt">{post.excerpt}</p>
              <div className="article-tags">
                {post.tags.map((tag) => (
                  <span key={tag} className="tag-pill">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="article-content">{renderContent(post.content)}</div>
              <div className="article-callout">
                هذا المقال جزء من سلسلة تعليمية تهدف إلى تبسيط مفاهيم التصوير الفوتوغرافي وتطوير مهاراتكم خطوة بخطوة.
              </div>
              <div className="author-pill mt-4">
                <img src={post.author.avatar} alt={post.author.name} />
                <div>
                  <strong>{post.author.name}</strong>
                  <span>{post.author.role}</span>
                </div>
              </div>
            </div>
          </article>
        </div>
        <div className="col-lg-4">
          <div className="article-sidebar">
            <div className="article-sidebar-card">
              <h3>مقالات ذات صلة</h3>
              <ul className="footer-links">
                {relatedPosts.map((item) => (
                  <li key={item.id}>
                    <Link to={`/blog/${item.slug}`}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="article-sidebar-card">
              <h3>عن المدونة</h3>
              <p>{blogData.siteInfo.description}</p>
              <Link className="read-more" to="/blog">
                استعرض جميع المقالات
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
