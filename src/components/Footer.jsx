import { ArrowRight, FacebookLogo } from '@phosphor-icons/react'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <img src="/assets/zcom-wordpress.svg" alt="Z.com for WordPress" />
          <p>WordPress Hosting ที่จัดการง่าย ปลอดภัย และมีทีมไทยดูแลคุณตลอด 24 ชั่วโมง</p>
        </div>
        <div className="footer-actions">
          <a href="#plans">ดูแพ็กเกจ <ArrowRight size={17} weight="bold" /></a>
          <a href="https://wp.z.com/th/contact/">ติดต่อเรา</a>
          <a href="https://www.facebook.com/zcomthailand" aria-label="Facebook Z.com Thailand"><FacebookLogo size={22} weight="fill" /></a>
        </div>
      </div>
      <div className="container footer-legal">
        <span>© {new Date().getFullYear()} GMO-Z com (Thailand) Co., Ltd.</span>
        <div>
          <a href="https://cloud.z.com/th/privacy/" target="_blank" rel="noreferrer">นโยบายความเป็นส่วนตัว</a>
          <a href="https://cloud.z.com/th/terms" target="_blank" rel="noreferrer">เงื่อนไขและข้อตกลง</a>
        </div>
      </div>
    </footer>
  )
}
