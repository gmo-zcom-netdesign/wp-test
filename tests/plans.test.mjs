import test from 'node:test'
import assert from 'node:assert/strict'

import { featuredPlanIds, plans } from '../src/data/plans.js'
import {
  formatBaht,
  getFeaturedPlans,
  getPlan,
} from '../src/lib/plans.js'

test('keeps all five public plans in size order', () => {
  assert.deepEqual(
    plans.map((plan) => plan.id),
    ['xs', 's', 'm', 'l', 'xl'],
  )
})

test('features the three plans that cover the primary buyer groups', () => {
  assert.deepEqual(featuredPlanIds, ['s', 'm', 'l'])
  assert.deepEqual(
    getFeaturedPlans().map((plan) => plan.id),
    ['s', 'm', 'l'],
  )
})

test('retains the current public WP-Pro-M price and allowance', () => {
  const plan = getPlan('m')

  assert.equal(plan.annualPrice, 2800)
  assert.equal(plan.monthlyEquivalent, 233)
  assert.equal(plan.websites, 3)
  assert.equal(plan.storageGb, 30)
  assert.equal(plan.elementorLicenses, 3)
})

test('formats Thai baht amounts for display', () => {
  assert.equal(formatBaht(2800), '2,800')
  assert.equal(formatBaht(720), '720')
})
