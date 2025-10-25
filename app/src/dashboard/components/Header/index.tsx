import { JSX } from 'react'
import Logo from './Logo'
import NavButtons from './NavButtons'
import ActionButtons from './ActionButtons'
import LoggedUser from './LoggedUser'

export default function Header(): JSX.Element {
  return (
    <div className='px-4 py-2 grid grid-cols-[255px_30%_1fr] items-center align-middle'>
      <Logo />
      <NavButtons />
      <div className='flex justify-end items-center gap-8'>
        <ActionButtons />
        <LoggedUser />
      </div>
    </div>
  )
}
