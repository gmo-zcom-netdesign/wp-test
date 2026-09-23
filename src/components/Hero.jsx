import { ArrowRight, CheckCircle } from '@phosphor-icons/react'
import { hero } from '../data/content.js'
import { PromotionCountdown } from './PromotionCountdown.jsx'

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-inner">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="wordpress-badge">
              <img
                src="https://s.w.org/style/images/about/WordPress-logotype-wmark-white.png"
                alt=""
                aria-hidden="true"
              />
              {hero.eyebrow}
            </p>
            <h1 id="hero-title">
              {hero.titleLines.map((line) => <span className="hero-title-line" key={line}>{line}</span>)}
            </h1>
            <p className="hero-description">{hero.description}</p>
            <p className="hero-supporting">
              จัดการเว็บไซต์ Staging Backup และความปลอดภัยได้จากศูนย์กลางเดียว
            </p>
            <div className="hero-sales-proof">
              <CheckCircle size={26} weight="fill" aria-hidden="true" />
              <span>
                <strong>{hero.salesProof.title}</strong>
                <small>{hero.salesProof.detail}</small>
              </span>
            </div>
            <div className="hero-actions">
              <a className="button button-primary" href={hero.primaryAction.href}>
                {hero.primaryAction.label}
                <ArrowRight size={20} weight="bold" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label="ตัวอย่างหน้าจอจัดการ WP Squared">
            <img
              src="/assets/wp-squared-dashboard.png"
              alt="หน้าจอ WP Squared แสดงสถานะ ความปลอดภัย การสำรองข้อมูล และ Staging"
            />
            <span className="wordpress-visual-badge" role="img" aria-label={hero.visualBadge.label}>
              <img src={hero.visualBadge.logoSrc} alt="" aria-hidden="true" />
            </span>
          </div>
        </div>
        <PromotionCountdown />
      </div>
    </section>
  )
}
