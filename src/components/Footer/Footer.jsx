import { Link } from 'react-router'

export default function Footer() {
  return (
    <footer className="footer" dir="rtl">
      <div className="container py-5">
        <div className="row g-4 align-items-start">
          <div className="col-lg-4">
            <Link className="footer-brand d-flex align-items-center gap-2" to="/">
              <span className="footer-brand-icon">ع</span>
              <span className="fw-bold">عدسة</span>
            </Link>
            <p className="footer-description mt-3">
              مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.
            </p>
            <div className="footer-socials mt-4">
              <a href="https://twitter.com/adasah" target="_blank" rel="noreferrer" aria-label="تويتر">
                <i className="bi bi-twitter-x" />
              </a>
              <a href="https://github.com/adasah" target="_blank" rel="noreferrer" aria-label="غيتهاب">
                <i className="bi bi-github" />
              </a>
              <a href="https://linkedin.com/company/adasah" target="_blank" rel="noreferrer" aria-label="لينكدإن">
                <i className="bi bi-linkedin" />
              </a>
              <a href="https://youtube.com/@adasah" target="_blank" rel="noreferrer" aria-label="يوتيوب">
                <i className="bi bi-youtube" />
              </a>
            </div>
          </div>

          <div className="col-sm-6 col-lg-2">
            <h6 className="footer-title">استكشف</h6>
            <ul className="footer-links">
              <li><Link to="/">الرئيسية</Link></li>
              <li><Link to="/blog">المدونة</Link></li>
              <li><Link to="/about">من نحن</Link></li>
            </ul>
          </div>

          <div className="col-sm-6 col-lg-2">
            <h6 className="footer-title">التصنيفات</h6>
            <ul className="footer-links">
              <li><Link to="/blog?category=إضاءة">إضاءة</Link></li>
              <li><Link to="/blog?category=بورتريه">بورتريه</Link></li>
              <li><Link to="/blog?category=مناظر طبيعية">مناظر طبيعية</Link></li>
              <li><Link to="/blog?category=تقنيات">تقنيات</Link></li>
            </ul>
          </div>

          <div className="col-lg-4">
            <h6 className="footer-title">ابقى على اطلاع</h6>
            <p className="footer-description">اشترك للحصول على أحدث المقالات والتحديثات.</p>
            <Link className="btn btn-light footer-subscribe" to="/blog">
              اشترك
            </Link>
          </div>
        </div>

        <div className="footer-bottom mt-5 pt-4">
          <p className="mb-2">
            © 2026 عدسة. صنع بكل <span className="text-white">♥</span> جميع الحقوق محفوظة.
          </p>
          <div className="footer-legal">
            <Link to="/privacy">سياسة الخصوصية</Link>
            <Link to="/terms">شروط الخدمة</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}