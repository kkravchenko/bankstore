import { JSX } from 'react'
import { Button } from '@/presentation/components/Button'

export default function NavButtons(): JSX.Element {
  return (
    <div className='flex items-center gap-3'>
      <Button
        className='bg-[#5a3cf3] rounded-full h-[33px] w-[33px] bg-[length:12px] bg-[position:10px_center] bg-no-repeat cursor-pointer'
        bgImage='/arrow-left.svg'
      />
      <Button
        className='rounded-[20px] h-[35px] pl-[40px] pr-[30px] border-[1.5px] border-[#3b2b83] bg-[length:15px] bg-[position:24px_center] bg-no-repeat text-[13px] cursor-pointer'
        bgImage='/lightning.svg'
        label='Fast Track'
      />
    </div>
  )
}
