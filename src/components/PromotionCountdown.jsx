import { useEffect, useState } from 'react'
import { ArrowRight, ClockCountdown, Tag } from '@phosphor-icons/react'
import { hero } from '../data/content.js'
import { getCountdownParts } from '../lib/countdown.js'

const units = [
  ['days', 'วัน'],
  ['hours', 'ชม.'],
  ['minutes', 'นาที'],
  ['seconds', 'วินาที'],
]

function getCurrentCountdown() {
  return getCountdownParts(new Date(), hero.promotion.endsAt)
}

export function PromotionCountdown() {
  const [countdown, setCountdown] = useState(getCurrentCountdown)

  useEffect(() => {
    if (countdown.expired) return undefined

    const timer = window.setInterval(() => setCountdown(getCurrentCountdown()), 1000)
    return () => window.clearInterval(timer)
  }, [countdown.expired])

  return (
    <aside className="hero-promotion" aria-label={`${hero.promotion.discountLabel} สิ้นสุดวันที่ 30 กันยายน 2026`}>
      <div className="promotion-offer">
        <span className="promotion-icon" aria-hidden="true"><Tag size={26} weight="fill" /></span>
        <div>
          <small>{hero.promotion.label}</small>
          <strong>{hero.promotion.discountLabel}</strong>
        </div>
      </div>

      <div className="promotion-divider" aria-hidden="true" />

      <div className="countdown-wrap">
        <span className="countdown-title"><ClockCountdown size={24} weight="duotone" />เหลือเวลาอีก</span>
        {countdown.expired ? (
          <strong className="promotion-ended">สิ้นสุดโปรโมชั่น</strong>
        ) : (
          <div className="countdown" aria-label={`${countdown.days} วัน ${countdown.hours} ชั่วโมง ${countdown.minutes} นาที ${countdown.seconds} วินาที`}>
            {units.map(([key, label]) => (
              <span className="countdown-unit" key={key}>
                <strong>{String(countdown[key]).padStart(2, '0')}</strong>
                <small>{label}</small>
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="promotion-action">
        <a className="button button-primary" href={hero.promotion.action.href}>
          {hero.promotion.action.label}
          <ArrowRight size={20} weight="bold" aria-hidden="true" />
        </a>
      </div>
    </aside>
  )
}
