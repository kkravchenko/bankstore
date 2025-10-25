import { JSX } from 'react'
import { Button } from '@/presentation/components/Button'

export default (): JSX.Element => (
  <Button
    className='text-[#74727d] pl-[28px] font-semibold bg-[length:16px] bg-[position:left_center] bg-no-repeat text-[12px] cursor-pointer mt-[25px]'
    label='Log out'
    bgImage='/logout.svg'
  />
)
