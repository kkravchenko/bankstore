import { SocialItem } from '@/type.dt'
import { JSX } from 'react'

export default ({ item }: { item: SocialItem }): JSX.Element => {
  return (
    <a
      href={item.url}
      target='_blank'
      rel='noopener noreferrer'
      title={item.name}
      className='flex items-center'
    >
      <span className='w-[26px] h-[26px] inline-block'>{item.icon}</span>
    </a>
  )
}
