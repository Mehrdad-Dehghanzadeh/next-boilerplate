import { create } from 'zustand'

type UseAppStore = {
  user: null | object
  setUser: (val: any) => any
}

export default create<UseAppStore>((set) => ({
  user: null,
  setUser: (val: any) => set(() => ({ user: val }))
}))
