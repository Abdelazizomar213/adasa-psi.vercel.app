import { Link } from 'react-router'
import { homeData } from '../../data/homeData'

export default function Home() {
  const { posts, categories, siteInfo } = homeData
  const featuredPosts = posts.filter((post) => post.featured).slice(0, 3)
  const latestPosts = posts.slice(0, 3)

  return (
    <main className="home-page" dir="rtl">
      <section className="hero-section ">
        <div className="container py-5 py-lg-6">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <p className="hero-eyebrow">مرحبا بك في {siteInfo.name}</p>
              <h1 className="hero-title">اكتشف فن التصوير الفوتوغرافي</h1>
              <p className="hero-description">
                انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
              </p>
              <div className="hero-actions">
                <Link className="btn btn-light btn-lg hero-primary" to="/blog">
                  استكشف المقالات
                </Link>
                <Link className="btn btn-outline-light btn-lg" to="/about">
                  اعرف المزيد
                </Link>
              </div>
              <div className="hero-stats mt-4">
                <div>
                  <strong>+50</strong>
                  <span>مقالة</span>
                </div>
                <div>
                  <strong>+10 ألف</strong>
                  <span>قارئ</span>
                </div>
                <div>
                  <strong>4</strong>
                  <span>تصنيفات</span>
                </div>
                <div>
                  <strong>6</strong>
                  <span>كاتب</span>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="hero-card">
                <p className="hero-card-label">مميز</p>
                <h3>{featuredPosts[0]?.title}</h3>
                <p>{featuredPosts[0]?.excerpt}</p>
                <Link className="text-light fw-bold" to={`/blog/${featuredPosts[0]?.slug}`}>
                  اقرأ المقال
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-5">
        <div className="section-heading d-flex justify-content-between align-items-center mb-4">
          <div>
            <p className="section-label">مقالات مختارة</p>
            <h2>محتوى منتقى لبدء رحلة تعلمك</h2>
          </div>
          <Link className="view-all" to="/blog">
            عرض الكل
          </Link>
        </div>
        <div className="row g-4 ">
          {featuredPosts.map((post) => (
            <div className="col-lg-4" key={post.id}>
              <article className="card-post home-card">
                <img src={post.image} alt={post.title} />
                <div className="card-post-body">
                  <div className="card-post-meta">
                    <span className="badge">{post.category}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className="card-post-footer">
                    <div className="author-pill">
                      <img src={post.author.avatar} alt={post.author.name} />
                      <div>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                      </div>
                    </div>
                    <Link to={`/blog/${post.slug}`}>اقرأ المقال</Link>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-5">
        <div className="section-heading mb-4">
          <p className="section-label">التصنيفات</p>
          <h2>استكشف حسب الموضوع</h2>
        </div>
        <div className="row g-4">
          {categories.map((category) => (
            <div className="col-sm-6 col-lg-4" key={category.name}>
              <Link className="category-card home-card" to={`/blog?category=${encodeURIComponent(category.name)}`}>
                <div className={`category-icon ${category.color}`} />
                <div>
                  <h3>{category.name}</h3>
                  <p>{category.count} مقالة</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-5">
        <div className="section-heading d-flex justify-content-between align-items-center mb-4">
          <div>
            <p className="section-label">الأحدث</p>
            <h2>أحدث المقالات</h2>
          </div>
          <Link className="view-all" to="/blog">
            عرض جميع المقالات
          </Link>
        </div>
        <div className="row g-4">
          {latestPosts.map((post) => (
            <div className="col-lg-4" key={post.id}>
              <article className="card-post compact-card home-card">
                <img src={post.image} alt={post.title} />
                <div className="card-post-body">
                  <div className="card-post-meta">
                    <span className="badge">{post.category}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <Link className="read-more" to={`/blog/${post.slug}`}>
                    اقرأ المزيد
                  </Link>
                </div>
              </article>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-5">
        <div className="newsletter-card">
          <div>
            <p className="section-label">اشترك في نشرتنا الإخبارية</p>
            <h2>احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني</h2>
            <p>انضم إلى +10,000 مصور وابدأ رحلتك اليوم.</p>
          </div>
          <div className="newsletter-actions">
            <Link className="btn btn-light btn-lg" to="/blog">
              اشترك الآن
            </Link>
            <div className="newsletter-avatars">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face" alt="" />
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face" alt="" />
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" alt="" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}