import { ArrowRight, Check, X } from '@phosphor-icons/react'
import { plans } from '../data/plans.js'
import { formatBaht, getFeaturedPlans } from '../lib/plans.js'

function PlanCard({ plan, selected, onSelect }) {
  const features = [
    `${plan.websites} เว็บไซต์ WordPress`,
    `พื้นที่ SSD ${plan.storageGb} GB`,
    `Elementor Pro ${plan.elementorLicenses} License`,
    'SSL ฟรี + Backup ทุกวัน',
  ]

  return (
    <article
      className={`plan-card ${plan.recommended ? 'recommended' : ''} ${selected ? 'selected' : ''}`}
    >
      {plan.recommended && <span className="plan-badge">แนะนำสำหรับธุรกิจ</span>}
      <p className="plan-sku">{plan.sku}</p>
      <h3>{plan.name}</h3>
      <p className="plan-fit">{plan.fit}</p>
      <div className="plan-price">
        <span>{formatBaht(plan.annualPrice)}</span>
        <small>บาท/ปี</small>
      </div>
      <p className="monthly-price">เฉลี่ย {formatBaht(plan.monthlyEquivalent)} บาท/เดือน</p>
      <ul>
        {features.map((feature) => (
          <li key={feature}>
            <Check size={18} weight="bold" aria-hidden="true" />
            {feature}
          </li>
        ))}
      </ul>
      <button
        className={`button ${plan.recommended ? 'button-primary' : 'button-outline'} plan-button`}
        type="button"
        aria-pressed={selected}
        onClick={() => onSelect(plan.id)}
      >
        {selected ? 'เลือกแล้ว' : 'เลือกแพ็กเกจ'}
      </button>
    </article>
  )
}

function PlanComparison({ selectedPlanId, onSelectPlan, onClose }) {
  return (
    <div className="comparison-panel" id="plan-comparison" aria-label="เปรียบเทียบทุกแพ็กเกจ">
      <div className="comparison-heading">
        <div>
          <p className="eyebrow">รายละเอียดครบทั้ง 5 แพ็กเกจ</p>
          <h3>เปรียบเทียบแพ็กเกจ</h3>
        </div>
        <button className="icon-button" type="button" onClick={onClose} aria-label="ปิดตารางเปรียบเทียบ">
          <X size={22} />
        </button>
      </div>

      <div className="comparison-table-wrap">
        <table className="comparison-table">
          <thead>
            <tr>
              <th scope="col">แพ็กเกจ</th>
              {plans.map((plan) => (
                <th key={plan.id} scope="col" className={selectedPlanId === plan.id ? 'is-selected' : ''}>
                  {plan.sku}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">ราคา/ปี</th>
              {plans.map((plan) => (
                <td key={plan.id}>{formatBaht(plan.annualPrice)} บาท</td>
              ))}
            </tr>
            <tr>
              <th scope="row">เว็บไซต์</th>
              {plans.map((plan) => (
                <td key={plan.id}>{plan.websites}</td>
              ))}
            </tr>
            <tr>
              <th scope="row">พื้นที่ SSD</th>
              {plans.map((plan) => (
                <td key={plan.id}>{plan.storageGb} GB</td>
              ))}
            </tr>
            <tr>
              <th scope="row">ฐานข้อมูล</th>
              {plans.map((plan) => (
                <td key={plan.id}>{plan.databases}</td>
              ))}
            </tr>
            <tr>
              <th scope="row">Elementor Pro</th>
              {plans.map((plan) => (
                <td key={plan.id}>{plan.elementorLicenses} License</td>
              ))}
            </tr>
            <tr className="comparison-actions">
              <th scope="row">เลือก</th>
              {plans.map((plan) => (
                <td key={plan.id}>
                  <button
                    type="button"
                    className="text-button"
                    onClick={() => onSelectPlan(plan.id)}
                  >
                    {selectedPlanId === plan.id ? 'เลือกแล้ว' : 'เลือก'}
                  </button>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export function Plans({ selectedPlanId, onSelectPlan, compareOpen, onToggleCompare }) {
  const selectedPlan = plans.find((plan) => plan.id === selectedPlanId)

  return (
    <section id="plans" className="plans-section section">
      <div className="container">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">WORDPRESS HOSTING PLANS</p>
            <h2>แพ็กเกจยอดนิยม สำหรับเว็บไซต์ของคุณ</h2>
            <p>เลือกจากจำนวนเว็บไซต์และพื้นที่ที่ต้องใช้ อัปเกรดภายหลังได้</p>
          </div>
          <button
            className="link-button"
            type="button"
            aria-expanded={compareOpen}
            aria-controls="plan-comparison"
            onClick={onToggleCompare}
          >
            {compareOpen ? 'ซ่อนรายละเอียด' : 'ดูแพ็กเกจทั้งหมด'}
            <ArrowRight size={18} weight="bold" aria-hidden="true" />
          </button>
        </div>

        <div className="plans-grid">
          {getFeaturedPlans().map((plan) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              selected={selectedPlanId === plan.id}
              onSelect={onSelectPlan}
            />
          ))}
        </div>

        <div className="plan-selection-status" aria-live="polite">
          แพ็กเกจที่เลือก: <strong>{selectedPlan?.sku}</strong> — {selectedPlan?.fit}
          <a href="https://wp.z.com/th/cart/">สั่งซื้อบริการ</a>
        </div>

        {compareOpen && (
          <PlanComparison
            selectedPlanId={selectedPlanId}
            onSelectPlan={onSelectPlan}
            onClose={onToggleCompare}
          />
        )}
      </div>
    </section>
  )
}
