import { ArrowRight, CheckCircle } from '@phosphor-icons/react'
import { wpSquaredBenefits } from '../data/content.js'

export function WpSquared() {
  return (
    <section id="wp-squared" className="wp-squared section section-dark">
      <div className="container feature-layout">
        <div className="feature-copy">
          <p className="eyebrow eyebrow-light">WP SQUARED CONTROL PANEL</p>
          <h2>ทุกขั้นตอนของ WordPress<br />อยู่ในที่เดียว</h2>
          <p className="feature-lead">
            จัดการเว็บไซต์ อัปเดต สร้าง Staging สำรองข้อมูล และติดตามสถานะ
            โดยไม่ต้องสลับหลายหน้าจอ
          </p>
          <ul className="feature-checklist">
            {wpSquaredBenefits.map((benefit) => (
              <li key={benefit.title}>
                <CheckCircle size={22} weight="fill" aria-hidden="true" />
                <span><strong>{benefit.title}</strong>{benefit.description}</span>
              </li>
            ))}
          </ul>
          <a className="text-link text-link-light" href="#plans">
            เริ่มต้นใช้งาน WP Squared
            <ArrowRight size={18} weight="bold" aria-hidden="true" />
          </a>
        </div>

        <div className="feature-image">
          <img
            src="/assets/wp-squared-sites.png"
            alt="หน้าจอ WP Squared สำหรับจัดการเว็บไซต์ WordPress หลายเว็บไซต์"
          />
        </div>
      </div>
    </section>
  )
}
