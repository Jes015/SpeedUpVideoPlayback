import { usePlayback } from '@/hooks'
import { SunIcon } from '@radix-ui/react-icons'
import { Slider, TextField } from '@radix-ui/themes'
import { useId } from 'react'

export const Controls = () => {
  const { rate, minRateValue, maxRateValue, updateMaxRateValue, updatePlaybackRate } = usePlayback()

  const sliderId = useId()
  const textFieldId = useId()

  const handleOnInputMaxRate = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMaxRate = Number(event.currentTarget.value)
    console.log(newMaxRate)

    if (isNaN(newMaxRate)) {
      console.error('entry is nan')
    } else {
      updateMaxRateValue(newMaxRate)
    }
  }

  const handleOnInputRate = (values: number[]) => {
    console.log(values)
    const newPlaybackRate = values[0]
    void updatePlaybackRate(newPlaybackRate)
  }

  return (
        <section className='w-full'>
            <div className='w-full'>
                <label className='font-bold drop-shadow-text' id={sliderId}>Rate x{rate}</label>
                <Slider
                    variant='soft'
                    defaultValue={[1]}
                    id={sliderId}
                    step={0.5}
                    min={minRateValue}
                    max={maxRateValue}
                    radius='small'
                    onValueChange={handleOnInputRate}
                />
            </div>
            <div>
                <label className='drop-shadow-text' id={textFieldId}>Max rate value</label>
                <TextField.Root variant="soft">
                    <TextField.Slot>
                        <SunIcon />
                    </TextField.Slot>
                    <TextField.Input defaultValue={maxRateValue} onChange={handleOnInputMaxRate} type='number' min={minRateValue} />
                </TextField.Root>
            </div>
        </section>
  )
}
