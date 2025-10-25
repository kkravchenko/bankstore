import { JSX } from 'react'
import { Button } from '@/presentation/components/Button'

interface HeaderProps {
  title: string
}

export default ({ title }: HeaderProps): JSX.Element => (
  <div className='flex items-center justify-between'>
    <h1 className='text-[#0c0c0c] font-bold text-[24px]'>{title}</h1>
    <div className='flex items-center gap-3'>
      <Button
        className='rounded-[20px] border-[1.5px] border-[#4b4bce] text-[#2735cf] font-bold h-[37px] px-[60px] text-[13px] bg-[length:16px] bg-[position:158px_center] bg-no-repeat cursor-pointer'
        bgImage='/close.svg'
        label='Vertex Finance'
      />
      <Button
        className='rounded-[20px] border-[1.5px] border-[#21af7a] bg-[#21af7a] text-white font-semibold h-[37px] px-[60px] w-[212px] bg-[length:21px] bg-[position:68px_center] bg-no-repeat text-[13px] cursor-pointer'
        bgImage='/cart-icon.svg'
        label='Cart'
      />
    </div>
  </div>
)
