/**
 * persian date validation
 ***********************************/
export function isPersainDate(value: string): boolean {
  return /^[1-4]\d{3}\/((0[1-6]\/((3[0-1])|([1-2][0-9])|(0[1-9])))|((1[0-2]|(0[7-9]))\/(30|31|([1-2][0-9])|(0[1-9]))))$/.test(
    value
  )
}
