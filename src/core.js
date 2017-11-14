export const checkVisibility = (roles, allowed, except) => {
  if (except.length > 0 && except.every(elem => roles.indexOf(elem) > -1)) {
    return false
  }
  if (allowed.length > 0) {
    if (allowed.every(elem => roles.indexOf(elem) > -1)) {
      return true
    }
    return false
  }
  return true
}

export default {
  checkVisibility,
}
