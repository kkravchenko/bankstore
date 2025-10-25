import { JSX } from 'react'
import SwitchButtons from './SwitchButtons'
import Menu from './Menu'
import Support from './Support'
import FollowUs from './FollowUs'
import Logout from './Logout'

export default function Sidebar(): JSX.Element {
  return (
    <div className='h-full flex flex-col justify-between'>
      <div>
        <SwitchButtons />
        <Menu />
      </div>
      <div className='mb-3'>
        <Support />
        <FollowUs />
        <Logout />
      </div>
    </div>
  )
}
