type EmptyString = ''
type NumberString = `${number}`
type TObject<T = any> = object & Record<string, T>
type TArray<T = any> = T[]
