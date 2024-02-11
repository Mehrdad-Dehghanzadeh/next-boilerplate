export function isIban(value: string): boolean {
  const iban = value.replace(/ /g, '').toUpperCase()
  let ibancheckdigits = ''
  let leadingZeroes = true
  let cRest: any = ''
  let cOperator: any = ''
  let charAt
  let cChar
  let i
  let p

  if (iban.length < 26) {
    return false
  }

  const ibancheck = iban.substring(4, iban.length) + iban.substring(0, 4)
  for (i = 0; i < ibancheck.length; i++) {
    charAt = ibancheck.charAt(i)
    if (charAt !== '0') {
      leadingZeroes = false
    }
    if (!leadingZeroes) {
      ibancheckdigits += '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(charAt)
    }
  }

  for (p = 0; p < ibancheckdigits.length; p++) {
    cChar = ibancheckdigits.charAt(p)
    cOperator = '' + cRest + '' + cChar
    cRest = cOperator % 97
  }
  return cRest === 1
}
