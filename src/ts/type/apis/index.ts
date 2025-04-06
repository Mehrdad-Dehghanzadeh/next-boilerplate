import type { TAuthApis } from './Auth'
import type { TUsersApi } from './Users'

export type TApis = {
  auth: ReturnType<TAuthApis>
  users: ReturnType<TUsersApi>
}

export type Resource = keyof TApis
