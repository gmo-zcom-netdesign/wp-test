import {
  Certificate,
  CloudArrowUp,
  CodeBlock,
  Gauge,
  GoogleLogo,
  MagicWand,
  ShieldCheck,
  Wrench,
} from '@phosphor-icons/react'
import { securityItems, tools } from '../data/content.js'

const securityIcons = {
  'basic-scan': ShieldCheck,
  'full-scan': Certificate,
  imunify: Wrench,
  backup: CloudArrowUp,
}

const toolIcons = [CodeBlock, Gauge, Wrench, MagicWand, GoogleLogo, CloudArrowUp]

export function SecurityTools() {
  return (
    <section id="security" className="security-section section">
      <div className="container">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">SECURITY & PERFORMANCE</p>
            <h2>ความปลอดภัยที่คุณวางใจได้</h2>
            <p>ปกป้องเว็บไซต์หลายชั้น พร้อมข้อมูลที่ชัดเจนเมื่อคุณต้องตรวจสอบ</p>
          </div>
          <p className="section-note">ทุกแพ็กเกจมี SSL ฟรีและสำรองข้อมูลอัตโนมัติทุกวัน</p>
        </div>

        <div className="security-grid">
          {securityItems.map((item) => {
            const Icon = securityIcons[item.id]
            return (
              <article className="security-item" key={item.id}>
                <Icon size={30} weight="duotone" aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            )
          })}
        </div>

        <div className="tools-block">
          <div className="tools-heading">
            <p className="eyebrow">TOOLS INCLUDED</p>
            <h2>เครื่องมือพร้อมใช้ ไม่ต้องซื้อเพิ่มหลายต่อ</h2>
          </div>
          <div className="tools-list">
            {tools.map((tool, index) => {
              const Icon = toolIcons[index]
              return (
                <div className="tool-item" key={tool.name}>
                  <span aria-hidden="true"><Icon size={25} weight="duotone" /></span>
                  <div><strong>{tool.name}</strong><small>{tool.description}</small></div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
