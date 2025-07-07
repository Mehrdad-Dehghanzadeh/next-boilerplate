/**
 * Check Element exist
 * ***********************************/
export const isElement = (el: HTMLElement): boolean => {
  return el && el.nodeType === Node.ELEMENT_NODE
}

/**
 * Adding class to element
 * ***********************************/
export const addClass = (el: HTMLElement, className: string): void => {
  if (className && isElement(el)) {
    el.classList.add(className)
  }
}

/**
 * Remove class from element
 * ***********************************/
export const removeClass = (el: HTMLElement, className: string): void => {
  if (className && isElement(el)) {
    el.classList.remove(className)
  }
}

/**
 * Remove class from element
 * ***********************************/
export const toggleClass = (el: HTMLElement, className: string): void => {
  if (className && isElement(el)) {
    el.classList.toggle(className)
  }
}

/**
 * Find object in html string by Id
 * ***********************************/
export const findInHtmlString = (htmlString: string, id: string): string => {
  const virtualDom = document.createElement('body')
  virtualDom.innerHTML = htmlString
  const result = virtualDom.querySelector(`#${id}`)

  return result ? result.innerHTML : ''
}

/**
 * Is hidden
 * ***********************************/
export const isHidden = (el: HTMLElement): boolean => {
  return el.offsetParent === null
}

/*
 * add Class name with other class
 ************************************/
export function classes(className: string, otherClass: string = ''): string {
  return `${className}${otherClass && ' ' + otherClass}`
}

/**
 * add conditional class
 ********************************/
export function conditionalClass(classes: TData<boolean | null | undefined>): string {
  let val: string = ''
  for (const prop in classes) {
    if (classes[prop]) {
      val += val.length ? ' ' + prop : prop
    }
  }

  return val
}

export function classList(list: (TData<boolean | null | undefined> | string)[]) {
  let val = ''

  for (const item of list) {
    if (typeof item === 'string') {
      val += val.length ? ' ' + item : item
      continue
    }

    if (typeof item === 'object') {
      val += val.length ? ' ' + conditionalClass(item) : conditionalClass(item)
    }
  }

  return val
}
