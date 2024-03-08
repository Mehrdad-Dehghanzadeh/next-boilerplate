/**
 * phone validation
 * ***********************************/
export function checkPhone(value: string): boolean {
  return /^(0[0-9]{2,4})-([0-9]{4,8})$/g.test(value)
}

/**
 * Mobile validation
 * ***********************************/
export function checkMobile(value: string): boolean {
  return /^(09)[0-9]{9}$/i.test(value)
}
