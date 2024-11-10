type EmptyString = ''
type NumberString = `${number}`
type TData<T = any> = object & Record<string, T>
type TList<T = any> = T[]
