import { useEffect, useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router'
import { blogData } from '../../data/blogData'

const POSTS_PER_PAGE = 6

function formatArabicDate(value) {
  return new Date(value).toLocaleDateString('ar-EG', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function Blog() {
  const location = useLocation()
  const [query, setQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const params = new URLSearchParams(location.search)
  const categoryFromUrl = params.get('category') || ''

  const { posts, categories, siteInfo } = blogData

  useEffect(() => {
    setSelectedCategory(categoryFromUrl)
    setCurrentPage(1)
  }, [categoryFromUrl])

  useEffect(() => {
    setCurrentPage(1)
  }, [query, selectedCategory])

  const filteredPosts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    return posts.filter((post) => {
      const matchesCategory = selectedCategory ? post.category === selectedCategory : true
      const matchesQuery = normalizedQuery
        ? `${post.title} ${post.excerpt} ${post.content}`.toLowerCase().includes(normalizedQuery)
        : true

      return matchesCategory && matchesQuery
    })
  }, [posts, query, selectedCategory])

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE))
  const activeCategory = selectedCategory || categoryFromUrl || ''
  const visiblePosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE,
  )

  return (
    <main className="blog-page" dir="rtl">
      <section className="blog-hero">
        <div className="container py-5">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <p className="section-label">مدونتنا</p>
              <h1>استكشف مقالاتنا</h1>
              <p>اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث</p>
              <div className="blog-hero-meta">
                <span className="hero-pill">أحدث المقالات</span>
                <span className="hero-pill">مقالات مختارة</span>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="blog-search-card">
                <label className="form-label" htmlFor="searchPosts">
                  ابحث في المقالات
                </label>
                <input
                  id="searchPosts"
                  className="form-control"
                  placeholder="ابحث عن موضوع أو كلمة"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-5">
        <div className="blog-toolbar">
          <div className="category-pills">
            <button
              className={`pill ${!activeCategory ? 'active' : ''}`}
              onClick={() => {
                setSelectedCategory('')
                setQuery('')
              }}
            >
              جميع المقالات
            </button>
            {categories.map((category) => (
              <button
                key={category.name}
                className={`pill ${activeCategory === category.name ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.name)}
              >
                {category.name}
              </button>
            ))}
          </div>
          <div className="blog-count">عرض {filteredPosts.length} مقالات</div>
        </div>

        <div className="row g-4 mt-3">
          {visiblePosts.length > 0 ? (
            visiblePosts.map((post) => (
              <div className="col-md-6 col-xl-4" key={post.id}>
                <article className="blog-card">
                  <img src={post.image} alt={post.title} />
                  <div className="blog-card-body">
                    <div className="card-post-meta">
                      <span className="badge">{post.category}</span>
                      <span>{formatArabicDate(post.date)}</span>
                    </div>
                    <div className="card-post-meta meta-secondary">
                      <span>{post.readTime}</span>
                    </div>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <div className="blog-card-footer">
                      <div className="author-pill">
                        <img src={post.author.avatar} alt={post.author.name} />
                        <div>
                          <strong>{post.author.name}</strong>
                          <span>{post.author.role}</span>
                        </div>
                      </div>
                      <Link to={`/blog/${post.slug}`}>اقرأ المزيد</Link>
                    </div>
                  </div>
                </article>
              </div>
            ))
          ) : (
            <div className="col-12">
              <div className="empty-state">
                <h3>لا توجد مقالات تطابق البحث الحالي</h3>
                <p>جرب كلمة أخرى أو اختر تصنيفاً مختلفاً.</p>
              </div>
            </div>
          )}
        </div>

        {totalPages > 1 && (
          <div className="pagination-row">
            <button
              className="pagination-nav"
              type="button"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
            >
              السابق
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                className={`pagination-number ${currentPage === index + 1 ? 'active' : ''}`}
                type="button"
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
            <button
              className="pagination-nav"
              type="button"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
            >
              التالي
            </button>
          </div>
        )}
      </section>
    </main>
  )
}