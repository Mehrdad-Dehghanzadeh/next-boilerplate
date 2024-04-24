import { useState, Children } from 'react'
import Tabs, { type TabsProps } from '@mui/material/Tabs'
import Tab, { type TabProps } from '@mui/material/Tab'
import './KTabs.scss'

type PropsType = {
  className?: string
  children: React.ReactNode
  tabsProps?: TabsProps
  tabProps?: TabProps[]
  tabs: string[]
  [key: string]: any
}

export function KTabs({
  className,
  tabsProps = {},
  tabs,
  tabProps,
  children,
  ...props
}: Readonly<PropsType>) {
  const [value, setValue] = useState<number>(0)

  const handleChange = (event: any, index: number) => {
    setValue(index)
  }

  let tabKey: number = 1

  return (
    <div
      className={`k-tabs ${
        tabsProps?.orientation === 'vertical' ? 'k-tabs--vertical' : ''
      } ${className ?? ''}`}
      {...props}
    >
      <Tabs
        className={`k-tabs__tabs`}
        value={value}
        onChange={handleChange}
        {...tabsProps}
      >
        {tabs.map((el, index) => {
          tabKey++

          return (
            <Tab
              className="k-tabs__tab"
              key={`tab-${tabKey}`}
              label={el}
              {...tabProps?.[index]}
            >
              {tabProps?.[index] && tabProps?.[index]?.children}
            </Tab>
          )
        })}
      </Tabs>

      {Children.map(children, (child, index) => (
        <div
          role="tabpanel"
          className={`k-tabs__panel ${value !== index ? 'k-tabs__panel--hidden' : ''}`}
          hidden={value !== index}
        >
          {child}
        </div>
      ))}
    </div>
  )
}
