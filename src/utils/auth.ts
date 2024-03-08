import { getCookie, hasCookie, setCookie, deleteCookie } from 'cookies-next'
import { jwtDecode } from 'jwt-decode'
import { redirect, useRouter } from 'next/navigation'

export const homePagePath = '/'
export const loginPagePath = '/login'
export const tokenCookieName = 'token'

export function redirectTo(path: string) {
  if (typeof window === 'undefined') {
    redirect(path)
  } else {
    const router = useRouter()
    router.replace(path)
  }
}

export function getToken() {
  return getCookie(tokenCookieName)
}

export function setToken(token: string) {
  return new Promise((resolve, reject) => {
    if (token) {
      const jwtObject: any = jwtDecode(token)
      if (jwtObject?.exp < Date.now() * 1000 && jwtObject?.uuid) {
        setCookie(tokenCookieName, token, {
          sameSite: true,
          expires: new Date(jwtObject.exp),
          path: '/'
        })
        resolve(jwtObject)
      } else {
        reject(new Error('jwt is not valid'))
      }
    } else {
      reject(new Error('token is not jwt'))
    }
  })
}

export function removeToken() {
  deleteCookie(tokenCookieName)
}

export function getUserInfo() {
  const jwt = <string>getCookie(tokenCookieName)
  const { user }: any = jwt ? jwtDecode(jwt) : null
  return user
}

export function hasLogin(): boolean {
  return hasCookie(tokenCookieName) && !!getUserInfo()?.username
}

export function authenticate(): void {
  if (!hasLogin()) {
    redirectTo(homePagePath)
  }
}
