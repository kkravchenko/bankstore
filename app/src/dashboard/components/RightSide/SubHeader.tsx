import { JSX } from 'react'
import { Button } from '@/presentation/components/Button'

interface SubHeaderProps {
  subtitle: string
}

export default ({ subtitle }: SubHeaderProps): JSX.Element => (
  <div className='flex items-center justify-between bg-white p-3 rounded-[15px] mt-4'>
    <h2 className='text-[#2c2c2c] font-semibold'>{subtitle}</h2>
    <Button
      className='text-[#2735cf] font-semibold text-[14px] pl-[25px] bg-[length:16px] bg-[position:left_center] bg-no-repeat cursor-pointer'
      bgImage='/arrow-open.svg'
      label='Open'
    />
  </div>
)
