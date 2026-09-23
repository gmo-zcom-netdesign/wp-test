import { List, X } from '@phosphor-icons/react'
import { navigation } from '../data/content.js'

export function Header({ menuOpen, onToggleMenu, onCloseMenu }) {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#top" aria-label="Z.com for WordPress หน้าหลัก">
          <img src="/assets/zcom-wordpress.svg" alt="Z.com for WordPress" />
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? 'ปิดเมนู' : 'เปิดเมนู'}
          onClick={onToggleMenu}
        >
          {menuOpen ? <X size={24} /> : <List size={24} />}
        </button>

        <nav
          id="primary-navigation"
          className={`primary-navigation ${menuOpen ? 'is-open' : ''}`}
          aria-label="เมนูหลัก"
        >
          <div className="nav-links">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={onCloseMenu}>
                {item.label}
              </a>
            ))}
          </div>
          <div className="nav-actions">
            <a className="button button-ghost button-small" href="https://wp.z.com/th/signin">
              เข้าสู่ระบบ
            </a>
            <a className="button button-primary button-small" href="#plans" onClick={onCloseMenu}>
              เริ่มเลือกแพ็กเกจ
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
