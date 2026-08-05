import { Link } from 'react-router'

export default function NotFound() {
  return (
    <main className="container py-5" dir="rtl">
      <div className="empty-state">
        <h1>الصفحة غير موجودة</h1>
        <p>قد تكون الصفحة التي تبحث عنها قد تم نقلها أو حذفها.</p>
        <Link className="btn btn-primary mt-3" to="/">
          العودة إلى الصفحة الرئيسية
        </Link>
      </div>
    </main>
  )
}