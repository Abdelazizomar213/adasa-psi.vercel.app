import { Link } from 'react-router'

const values = [
  { title: 'الجودة أولاً', text: 'محتوى مدروس ومكتوب بخبرة.' },
  { title: 'تركيز عملي', text: 'أمثلة واقعية يمكنك تطبيقها اليوم.' },
  { title: 'مجتمع', text: 'تعلم مع آلاف المصورين حول العالم.' },
  { title: 'دائماً محدث', text: 'أحدث الاتجاهات وأفضل الممارسات.' },
]

const team = [
  'سالم أحمد', 'محمد علي', 'إبراهيم حسن', 'داود خالد', 'ليث محمود', 'جمال عبدالله',
  'خالد الفيصل', 'نادر سعيد', 'هاني الشمري', 'عمر الراشد', 'فارس العلي', 'سامي الحربي',
]

export default function About() {
  return (
    <main className="about-page" dir="rtl">
      <section className="container py-5">
        <div className="row g-4 align-items-center">
          <div className="col-lg-7">
            <p className="section-label">من نحن</p>
            <h1 className="hero-title">مهمتنا هي الإعلام والإلهام</h1>
            <p className="hero-description">
              مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.
              نحن شغوفون بمشاركة المعرفة ومساعدة المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary btn-lg" to="/blog">
                تصفح المقالات
              </Link>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="hero-card about-highlight">
              <p className="hero-card-label">إحصاءاتنا</p>
              <div className="about-stats">
                <div>
                  <strong>+2 مليون</strong>
                  <span>قارئ شهرياً</span>
                </div>
                <div>
                  <strong>+500</strong>
                  <span>مقالة منشورة</span>
                </div>
                <div>
                  <strong>+50</strong>
                  <span>كاتب خبير</span>
                </div>
                <div>
                  <strong>+15</strong>
                  <span>تصنيف</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-4">
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="card-post">
              <div className="card-post-body">
                <p className="section-label">قيمنا</p>
                <h3>المبادئ التي توجه كل ما نقوم بإنشائه</h3>
                <div className="value-list">
                  {values.map((value) => (
                    <div key={value.title} className="value-item">
                      <h4>{value.title}</h4>
                      <p>{value.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card-post">
              <div className="card-post-body">
                <p className="section-label">فريقنا</p>
                <h3>نحن مجموعة من المصورين والكتاب ذوي الخبرة</h3>
                <div className="team-grid">
                  {team.map((member) => (
                    <span key={member} className="team-pill">{member}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-5">
        <div className="newsletter-card about-contact">
          <div>
            <p className="section-label">تواصل معنا</p>
            <h2>لدينا أسئلة؟ دعنا نتحدث!</h2>
            <p>نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة، أو تريد فقط إلقاء التحية، لا تتردد في التواصل.</p>
          </div>
          <div className="newsletter-actions">
            <Link className="btn btn-primary btn-lg" to="/blog">
              تواصل معنا
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
