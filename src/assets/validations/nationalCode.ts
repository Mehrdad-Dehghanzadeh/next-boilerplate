/**
 * Real nationalCode validation
 * ***********************************/
export const isRealNationalCode = function (value: string): boolean {
  if (
    !/^\d{10}$/.test(value) ||
    value === '0000000000' ||
    value === '1111111111' ||
    value === '2222222222' ||
    value === '3333333333' ||
    value === '4444444444' ||
    value === '5555555555' ||
    value === '6666666666' ||
    value === '7777777777' ||
    value === '8888888888' ||
    value === '9999999999'
  ) {
    return false
  }
  const check = parseInt(value[9])
  let sum = 0
  let i
  for (i = 0; i < 9; ++i) {
    sum += parseInt(value[i]) * (10 - i)
  }
  sum %= 11
  return (sum < 2 && check === sum) || (sum >= 2 && check + sum === 11)
}

/**
 * legal nationalCode validation
 * ***********************************/
export const isLegalNationalCode = function (value: string): boolean {
  if (value.length !== 11 || parseInt(value, 10) === 0) return false

  if (parseInt(value.substr(3, 6), 10) === 0) return false
  const c = parseInt(value.substr(10, 1), 10)
  const d = parseInt(value.substr(9, 1), 10) + 2
  const z = [29, 27, 23, 19, 17]
  let s = 0
  for (let i = 0; i < 10; i++) s += (d + parseInt(value.substr(i, 1), 10)) * z[i % 5]
  s = s % 11
  if (s === 10) s = 0
  return c === s
}

/**
 * both  nationalCode validation
 * ***********************************/
export const isNationalCode = function (value: string): boolean {
  return isLegalNationalCode(value) || isRealNationalCode(value)
}
