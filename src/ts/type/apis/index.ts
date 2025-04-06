import type { TAuthApis } from './Auth'
import type { TUsersApi } from './Users'

export type TApis = {
  auth: ReturnType<TAuthApis>
  users: ReturnType<TUsersApi>
}

export type UsersApiMethods = keyof ReturnType<TUsersApi>

export type AuthApiMethods = keyof ReturnType<TAuthApis>

export type ApiMethods = UsersApiMethods | AuthApiMethods

export type ApiResources = keyof TApis
