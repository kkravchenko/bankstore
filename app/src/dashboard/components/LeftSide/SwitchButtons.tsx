import { JSX } from 'react'
import { Button } from '@/presentation/components/Button'

export default (): JSX.Element => (
  <div className='grid grid-cols-[repeat(2,calc(50%-4px))] items-center gap-2 p-[5px] border-[1.5px] border-[#2e2d3b] rounded-[20px]'>
    <Button
      className='bg-gradient-to-r from-[#e65421] to-[#fa861b] p-1 w-full rounded-[20px] text-white text-[13px] font-semibold cursor-pointer'
      label='Startup'
    />
    <Button
      className='bg-[#202938] p-1 w-full rounded-[20px] text-white text-[13px] font-semibold cursor-pointer'
      label='ID 345'
    />
  </div>
)
