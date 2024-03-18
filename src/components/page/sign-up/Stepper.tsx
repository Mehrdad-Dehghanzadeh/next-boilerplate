'use client'
import Step1 from './Step1'
import Step2 from './Step2'
import { KStepper } from '@components-kits'
import { useState } from 'react'

export default function SignUpSteppr() {
  const [activeStep, setActiveStep] = useState<number>(0)

  return (
    <KStepper activeStep={activeStep}>
      <Step1 setActiveStep={setActiveStep} />
      <Step2 setActiveStep={setActiveStep} />
    </KStepper>
  )
}
