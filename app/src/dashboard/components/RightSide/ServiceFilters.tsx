import { JSX } from 'react'
import { Button } from '@/presentation/components/Button'

interface ServiceFiltersProps {
  services: string[]
}

export default ({ services }: ServiceFiltersProps): JSX.Element => (
  <div className='flex items-center justify-between mt-4 mb-5'>
    <Button
      className='text-[#2735cf] py-[8px] w-[205px] font-bold text-[12px] bg-[#f0f7ff] rounded-[15px] border-[1.5px] border-[#4b4bce] cursor-pointer'
      label='All Services'
    />
    <div className='flex items-center gap-5'>
      {services.map((service, index) => (
        <Button
          key={index}
          className='py-[10px] w-[215px] font-bold text-[12px] text-[#474a52] rounded-[15px] bg-[#f3f4f6] shadow-[0px_1px_1px_rgba(0,0,0,0.15),0px_-1px_9px_rgba(255,255,255,1)] cursor-pointer'
          label={service}
        />
      ))}
    </div>
  </div>
)
