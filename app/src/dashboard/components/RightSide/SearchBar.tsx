import { JSX } from 'react'
import Input from '@/presentation/components/Input'
import Select from '@/presentation/components/Select'
import Sort from './Sort'
import { Country } from '@/type.dt'

interface SearchBarProps {
  countries: Country[]
}

export default ({ countries }: SearchBarProps): JSX.Element => (
  <div className='bg-white p-3 my-4 flex items-center justify-between rounded-[15px]'>
    <div className='flex items-center gap-4'>
      <Input
        placeholder='Search by Service title'
        className='w-[280px] bg-[#f0f7ff] h-[36px] px-2 pl-8 font-semibold text-[13px] rounded-[15px] outline-0 bg-[length:16px] bg-[position:8px_center]'
        bgImage='/search.svg'
      />
      <Select
        className='appearance-none w-[280px] h-[36px] px-4  text-[13px] font-semibold text-[#545b62] bg-[#f0f7ff] outline-0 rounded-[15px] border-2 border-[#eaebed] bg-[length:16px] bg-[position:93%_center]'
        bgImage='arrow-select.svg'
        list={countries}
      />
    </div>
    <Sort />
  </div>
)
