import Slide from '@mui/material/Slide'
import { useId, useEffect } from 'react'
import './KStepper.scss'

type Props = {
  children: any
  activeStep: number
  callBackUpdateStep?: () => void
  className?: string
  [key: string]: any
}

export function KStepper({
  children,
  activeStep,
  callBackUpdateStep,
  className = '',
  ...props
}: Readonly<Props>) {
  const selfId = useId()

  useEffect(() => {
    if (callBackUpdateStep) {
      callBackUpdateStep()
    }
  }, [activeStep])

  return (
    <div className={`k-stepper ${className}`} {...props}>
      {children.map((el: any, index: number) => (
        <Slide
          direction={index >= activeStep ? 'left' : 'right'}
          key={`k-stepper-${selfId}-${index}`}
          in={index === activeStep}
          appear={index === activeStep}
        >
          <div
            className={`k-stepper__item ${
              index === activeStep ? 'k-stepper__item--show' : ''
            }`}
          >
            {el}
          </div>
        </Slide>
      ))}
    </div>
  )
}
