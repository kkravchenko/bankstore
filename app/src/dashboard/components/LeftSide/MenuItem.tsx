import { JSX } from 'react'
import Link from 'next/link'
import { Menu } from '@/type.dt'

export default ({ item }: { item: Menu }): JSX.Element => {
  return (
    <li>
      <Link
        href={item.link}
        title={item.label}
        className='flex items-center gap-2 text-[13px] text-[#949394] pt-5 font-medium hover:text-[#19349b] transition-colors duration-200'
      >
        {item.icon}
        {item.label}
      </Link>
    </li>
  )
}
