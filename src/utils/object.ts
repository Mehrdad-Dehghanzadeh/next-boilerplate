/**
 *  Deep Freeze Object
 ***********************/
export function deepFreeze<T>(obj: T): Readonly<T> {
  Object.freeze(obj)

  Object.getOwnPropertyNames(obj).forEach(function (prop: string) {
    const objectProp: any = obj[prop as keyof typeof obj]
    if (
      objectProp !== null &&
      (typeof objectProp === 'object' || typeof objectProp === 'function') &&
      !Object.isFrozen(objectProp)
    ) {
      deepFreeze(objectProp)
    }
  })

  return obj
}

/**
 *  Check Object Is Empty
 ***************************/
export function isEmpty(obj: any): boolean {
  return Object.keys(obj).length === 0
}

/**
 *  Convert Object To Array
 ***************************/
export function objectToArray(obj: any) {
  return !isEmpty(obj)
    ? Object.entries(obj).map(([key, value]) => {
        return { [key]: value }
      })
    : []
}

/**
 * Deep Clone Object
 ************************/
export function deepClone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj))
}

/**
 * remove keyof object
 *****************************/
export function omit<T extends object>(obj: T, arr: string[]) {
  const exclude = new Set(arr)
  exclude.forEach((e: string) => delete obj[e as keyof T])
}

/**
 * remove keyof object and clone
 *****************************************/
export function cloneOmit<T extends object>(obj: T, arr: string[]): Partial<T> {
  const value = deepClone(obj)
  omit(value, arr)
  return value
}

/**
 * get value object and subObject in this object
 *******************************************************/
export function getValueObject(obj: any, prop: string): any {
  if (typeof obj === 'undefined' || obj === null) {
    console.error(new Error(`obj undefined or null: ${obj}.${prop}`))
    return undefined
  }

  let _index = prop.indexOf('.')
  if (_index > -1) {
    return getValueObject(obj[prop.substring(0, _index)], prop.substr(_index + 1))
  }

  return obj[prop]
}

/**
 * check input is object
 ************************************************/
export function isObject(obj: unknown): boolean {
  return (typeof obj === 'object' || typeof obj === 'function') && obj !== null
}

/**
 * get value object and subObject in this object such as obj[0].max
 **********************************************************************/
export function getValue(obj: TObject, prop: string) {
  if (isObject(obj) && typeof prop === 'string' && prop) {
    return prop
      .replaceAll('[', '.')
      .replaceAll(']', '')
      .split('.')
      .reduce((field, key) => field?.[key], obj)
  }

  if (!prop) {
    console.error('prop is not valid')
  }

  if (!isObject(obj)) {
    console.error('object is not valid')
  }
}
