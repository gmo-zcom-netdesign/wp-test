import { featuredPlanIds, plans } from '../data/plans.js'

export function formatBaht(value) {
  return new Intl.NumberFormat('th-TH', {
    maximumFractionDigits: 0,
  }).format(value)
}

export function getPlan(id) {
  return plans.find((plan) => plan.id === id)
}

export function getFeaturedPlans() {
  return featuredPlanIds.map((id) => getPlan(id))
}
