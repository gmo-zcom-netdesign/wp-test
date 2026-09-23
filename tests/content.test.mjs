import test from 'node:test'
import assert from 'node:assert/strict'

import {
  benefitsIntro,
  faqs,
  hero,
  navigation,
  outcomes,
  securityItems,
  tools,
} from '../src/data/content.js'

test('navigation targets are unique and point to page sections', () => {
  const hrefs = navigation.map((item) => item.href)

  assert.equal(new Set(hrefs).size, hrefs.length)
  assert.ok(hrefs.every((href) => href.startsWith('#')))
})

test('hero exposes separate browse and purchase actions', () => {
  assert.equal(hero.primaryAction.label, 'ดูแพ็กเกจ')
  assert.equal(hero.primaryAction.href, '#plans')
  assert.equal(hero.promotion.action.label, 'สั่งซื้อเลย')
  assert.equal(hero.promotion.action.href, 'https://wp.z.com/th/cart/')
  assert.notEqual(hero.primaryAction.href, hero.promotion.action.href)
  assert.equal(hero.secondaryAction, undefined)
  assert.equal(hero.promotion.discountLabel, 'ลดสูงสุด 30%')
})

test('hero keeps the original headline in two readable lines', () => {
  assert.deepEqual(hero.titleLines, ['ควบคุม WordPress', 'ได้ง่ายกว่าเดิม'])
  assert.equal(hero.titleLines.join(' '), hero.title)
})

test('hero identifies the product visual as a WordPress control panel', () => {
  assert.equal(hero.visualBadge.label, 'WordPress Control Panel')
  assert.match(hero.visualBadge.logoSrc, /WordPress-logotype-wmark-white\.png$/)
  assert.equal(hero.visualBadge.surface, 'transparent')
})

test('hero highlights the included Elementor Pro benefit accurately', () => {
  assert.equal(hero.salesProof.title, 'ฟรี Elementor Pro')
  assert.match(hero.salesProof.detail, /จำนวนเว็บไซต์ในแต่ละแพ็กเกจ/)
})

test('benefits communicate three distinct WordPress hosting outcomes', () => {
  assert.equal(benefitsIntro.title, 'ครบทั้งความเร็ว ความปลอดภัย และการจัดการ')
  assert.deepEqual(outcomes.map((item) => item.title), [
    'เว็บเร็วขึ้น',
    'ปกป้องทุกวัน',
    'จัดการจากที่เดียว',
  ])
})

test('security content retains the current scan allowances', () => {
  const basic = securityItems.find((item) => item.id === 'basic-scan')
  const full = securityItems.find((item) => item.id === 'full-scan')

  assert.match(basic.description, /1 ครั้งต่อเดือน/)
  assert.match(full.description, /75 บาท/)
})

test('included tools cover the useful current WordPress workflow', () => {
  const names = tools.map((tool) => tool.name)

  for (const name of [
    'Elementor Pro',
    'AccelerateWP',
    'Staging Tool',
    'Extendify AI',
    'Site Kit by Google',
    'Manage CDN',
  ]) {
    assert.ok(names.includes(name), `${name} must be visible`)
  }
})

test('every FAQ has a useful answer', () => {
  assert.ok(faqs.length >= 6)
  assert.ok(faqs.every((item) => item.question && item.answer.length > 24))
})
