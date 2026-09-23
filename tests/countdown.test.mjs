import test from 'node:test'
import assert from 'node:assert/strict'

import { getCountdownParts } from '../src/lib/countdown.js'

test('returns complete countdown units before the promotion ends', () => {
  const countdown = getCountdownParts(
    '2026-09-29T22:58:29+07:00',
    '2026-09-30T23:59:59+07:00',
  )

  assert.deepEqual(countdown, {
    days: 1,
    hours: 1,
    minutes: 1,
    seconds: 30,
    expired: false,
  })
})

test('never returns negative units after the promotion ends', () => {
  const countdown = getCountdownParts(
    '2026-10-01T00:00:00+07:00',
    '2026-09-30T23:59:59+07:00',
  )

  assert.deepEqual(countdown, {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    expired: true,
  })
})
