import { ChatCircleDots, Clock, EnvelopeSimple, Phone } from '@phosphor-icons/react'
import { supportChannels, testimonial, trustedBrands } from '../data/content.js'

const channelIcons = [ChatCircleDots, Phone, EnvelopeSimple, Clock]

export function SupportTrust() {
  return (
    <section id="support" className="support-section section">
      <div className="container support-grid">
        <div className="support-image-wrap">
          <img
            src="/assets/thai-support-specialist.png"
            alt="เจ้าหน้าที่ Support คนไทยของ Z.com กำลังให้คำปรึกษา"
          />
          <div className="support-status"><span />ทีมไทยพร้อมช่วยเหลือ 24/7</div>
        </div>

        <div className="support-copy">
          <p className="eyebrow">THAI SUPPORT</p>
          <h2>ทีมไทย พร้อมดูแลคุณ</h2>
          <p className="feature-lead">
            สอบถามและรับความช่วยเหลือเรื่องการใช้งาน WordPress Hosting
            ผ่านช่องทางที่สะดวกสำหรับคุณ
          </p>
          <div className="support-channels">
            {supportChannels.map((channel, index) => {
              const Icon = channelIcons[index]
              return <span key={channel}><Icon size={22} weight="duotone" />{channel}</span>
            })}
          </div>
          <blockquote>
            “{testimonial.quote}”
            <cite>{testimonial.company}</cite>
          </blockquote>
        </div>
      </div>

      <div className="container trust-row">
        <p><strong>กว่า 750,000 เว็บไซต์</strong> ไว้วางใจบริการจาก Z.com</p>
        <div className="brand-list" aria-label="แบรนด์ที่ไว้วางใจ Z.com">
          {trustedBrands.map((brand) => <span key={brand}>{brand}</span>)}
        </div>
      </div>
    </section>
  )
}
