import { JSX } from 'react'
import { Button } from '@/presentation/components/Button'

export default function ActionButtons(): JSX.Element {
  return (
    <>
      <Button
        className='bg-[#335ff7] rounded-[20px] h-[35px] pl-[44px] pr-[30px] font-semibold bg-[length:15px] bg-[position:24px_center] bg-no-repeat text-[13px] cursor-pointer'
        bgImage='/calendar.svg'
        label='Book a Call'
      />
      <div className='flex items-center gap-4'>
        <Button
          className='p-3 bg-[length:22px] bg-center bg-no-repeat cursor-pointer'
          bgImage='/email.svg'
        />
        <Button
          className='p-3 bg-[length:22px] bg-center bg-no-repeat cursor-pointer relative'
          bgImage='/bell.svg'
        >
          <span className='w-1 h-1 block bg-[#f84566] rounded-full absolute top-[2px] right-[3px]'></span>
        </Button>
      </div>
    </>
  )
}
