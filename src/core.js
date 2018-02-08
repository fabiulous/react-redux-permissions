export const checkVisibility = (roles, allowed, except) => {
  if (except.length > 0 && except.some(elem => roles.indexOf(elem) > -1)) {
    return false
  }
  if (allowed.length > 0) {
    if (allowed.some(elem => roles.indexOf(elem) > -1)) {
      return true
    }
    return false
  }
  return true
}

export default {
  checkVisibility,
}
