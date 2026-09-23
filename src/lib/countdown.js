export function getCountdownParts(now, endsAt) {
  const remainingMilliseconds = Math.max(0, new Date(endsAt).getTime() - new Date(now).getTime())
  const totalSeconds = Math.floor(remainingMilliseconds / 1000)

  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
    expired: remainingMilliseconds === 0,
  }
}
