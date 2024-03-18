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
  activeStep = 0,
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
      <div
        className="k-stepper__wrapper"
        style={{ transform: `translateX(${activeStep * 100}%)` }}
      >
        {children.map((el: any, index: number) => (
          <div
            key={`k-stepper-${selfId}-${index}`}
            className={`k-stepper__item ${
              index === activeStep ? 'k-stepper__item--show' : ''
            }`}
          >
            {el}
          </div>
        ))}
      </div>
    </div>
  )
}
