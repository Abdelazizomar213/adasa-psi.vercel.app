import { NavLink } from 'react-router'

export default function Navbar() {
  return (
    <header className="navbar-wrapper">
      <nav className="navbar navbar-expand-lg navbar-dark" dir="rtl">
        <div className="container">
          <NavLink className="navbar-brand d-flex align-items-center gap-2" to="/">
            <img
              src="https://adasa-psi.vercel.app/assets/logo-GdqARQRt.png"
              alt="شعار عدسة عالم التصوير الفوتوغرافي"
              className="navbar-logo"
            />
            <span className="fw-bold">عدسة عالم التصوير الفوتوغرافي</span>
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav align-items-lg-center gap-lg-3">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  الرئيسية
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/blog">
                  المدونة
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  من نحن
                </NavLink>
              </li>
            </ul>
            <NavLink className="btn btn-light navbar-cta" to="/blog">
              ابدأ القراءة
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  )
}