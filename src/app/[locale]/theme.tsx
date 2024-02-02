'use client'
import { ThemeProvider } from '@mui/material/styles'
import { createTheme } from '@mui/material/styles'
import { CacheProvider } from '@emotion/react'
import { faIR } from '@mui/material/locale'
import createCache from '@emotion/cache'
import rtlPlugin from 'stylis-plugin-rtl'
import { prefixer } from 'stylis'

const theme = createTheme(
  {
    direction: 'rtl'
  },
  faIR
)

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin]
})

export default function Theme({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CacheProvider>
  )
}
