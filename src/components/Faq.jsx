import { CaretDown } from '@phosphor-icons/react'
import { faqs } from '../data/content.js'

export function Faq() {
  return (
    <section className="faq-section section" aria-labelledby="faq-title">
      <div className="container faq-layout">
        <div className="faq-intro">
          <p className="eyebrow">FAQ</p>
          <h2 id="faq-title">คำถามที่พบบ่อย</h2>
          <p>ข้อมูลสำคัญก่อนเริ่มใช้งาน หากยังไม่แน่ใจ ทีมงานช่วยแนะนำแพ็กเกจให้คุณได้</p>
          <a className="button button-outline" href="https://wp.z.com/th/contact/">ติดต่อทีมงาน</a>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details key={faq.question} open={index === 0}>
              <summary>{faq.question}<CaretDown size={20} weight="bold" aria-hidden="true" /></summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
