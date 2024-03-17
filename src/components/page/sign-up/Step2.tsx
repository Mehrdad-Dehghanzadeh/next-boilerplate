type Props = {
  setActiveStep: any
}

export default function Step2({ setActiveStep }: Readonly<Props>) {
  return (
    <div>
      <h1 onClick={() => setActiveStep(0)}>step2</h1>
    </div>
  )
}
