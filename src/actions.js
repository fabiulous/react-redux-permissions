import { RRP_ADD_PERMISSION, RRP_REMOVE_PERMISSION, RRP_CLEAR } from "./constants"

export function add(roles = []) {
  return {
    type: RRP_ADD_PERMISSION,
    roles: Array.isArray(roles) ? roles : [roles],
  }
}

export function remove(role) {
  return {
    type: RRP_REMOVE_PERMISSION,
    role,
  }
}

export function clear() {
  return {
    type: RRP_CLEAR,
  }
}
