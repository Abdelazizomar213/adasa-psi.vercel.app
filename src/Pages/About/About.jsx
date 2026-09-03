import { Link } from 'react-router'

export default function About() {
  return (
    <main className="about-page py-5" dir="rtl">
      <div className="container">
        {/* قسم الهيدر والتعريف بالمنصة */}
        <div className="row mb-5 align-items-center">
          <div className="col-lg-7">
            <span className="section-label">من نحن</span>
            <h1 className="hero-title mb-3">نكتشف العالم من خلف العدسة</h1>
            <p className="hero-description">
              منصة "عدسة" هي وجهتك الأولى لاكتشاف فنون التصوير الفوتوغرافي، مشاركة الخبرات، والاطلاع على أحدث التقنيات والمعدات لصناعة محتوى بصري احترافي يلهم الجميع ويعزز مهاراتك الفنية.
            </p>
          </div>
          <div className="col-lg-5 mt-4 mt-lg-0">
            <div className="about-highlight p-4 rounded-4 shadow-sm border">
              <h3 className="h5 mb-3 text-white fw-bold">إحصائيات المنصة</h3>
              <div className="about-stats">
                <div>
                  <strong>+1,500</strong>
                  <span>مقال ورؤية فنية</span>
                </div>
                <div>
                  <strong>+25 ألف</strong>
                  <span>مصور محترف</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* قسم القيم والمميزات */}
        <div className="row mb-5">
          <div className="col-12 mb-4">
            <h2 className="h3 fw-bold">قيمنا ورؤيتنا</h2>
            <p className="text-muted">نسعى دائماً لتقديم محتوى عالي الجودة يدعم مجتمع المصورين والمبدعين العرب.</p>
          </div>
          <div className="col-lg-4 mb-3">
            <div className="value-item p-4 rounded-4">
              <h4>الإبداع والاحترافية</h4>
              <p className="small mb-0">نؤمن بأن كل لقطة تحمل قصة فريدة تستحق أن تُروى بأفضل دقة وإضاءة ممكنة.</p>
            </div>
          </div>
          <div className="col-lg-4 mb-3">
            <div className="value-item p-4 rounded-4">
              <h4>مشاركة المعرفة</h4>
              <p className="small mb-0">نحرص على تبادل الخبرات التعليمية والتقنية بين الهواة والمحترفين في الميدان.</p>
            </div>
          </div>
          <div className="col-lg-4 mb-3">
            <div className="value-item p-4 rounded-4">
              <h4>التطوير المستمر</h4>
              <p className="small mb-0">مواكبة أحدث صيحات وأدوات التصوير العالمية وتطبيقاتها العملية في المشاريع.</p>
            </div>
          </div>
        </div>

        {/* فريق العمل والفئات */}
        <div className="row align-items-center p-4 rounded-4 border" style={{ backgroundColor: '#1a1a1e' }}>
          <div className="col-lg-8">
            <h3 className="h4 fw-bold mb-2 text-white">فريق العمل والمساهمون</h3>
            <p className="text-muted mb-3">نخبة من المصورين وصناع المحتوى التقني والفني.</p>
            <div className="team-grid">
              <span className="team-pill">📷 مصورون فوتوغرافيون</span>
              <span className="team-pill">✍️ كتاب محتوى تقني</span>
              <span className="team-pill">🎨 مصممو واجهات UI/UX</span>
              <span className="team-pill">🎬 خبراء مونتاج وإضاءة</span>
            </div>
          </div>
          <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
            <Link to="/blog" className="btn btn-primary px-4 py-2">تصفح المقالات</Link>
          </div>
        </div>
      </div>
    </main>
  )
}