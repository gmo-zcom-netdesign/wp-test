import { Gauge, ShieldCheck, StackSimple } from '@phosphor-icons/react'
import { benefitsIntro, outcomes } from '../data/content.js'

const outcomeIcons = {
  speed: Gauge,
  security: ShieldCheck,
  control: StackSimple,
}

export function Benefits() {
  return (
    <section id="benefits" className="benefits-section section">
      <div className="container">
        <div className="benefits-main">
          <div className="section-heading benefits-heading">
            <p className="eyebrow">{benefitsIntro.eyebrow}</p>
            <h2>{benefitsIntro.title}</h2>
            <p>{benefitsIntro.description}</p>
          </div>

          <div className="outcomes-grid">
            {outcomes.map((outcome) => {
              const Icon = outcomeIcons[outcome.id]
              return (
                <article key={outcome.id} className="outcome-item">
                  <span className="icon-circle" aria-hidden="true">
                    <Icon size={26} weight="duotone" />
                  </span>
                  <div>
                    <h3>{outcome.title}</h3>
                    <p>{outcome.description}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
