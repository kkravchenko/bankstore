import Image from 'next/image'
import { DataRepository } from '@/infrastructure/repository/data.repository'
import { Button } from '@/presentation/components/Button'
import { User } from '@/domains/user/User'

export default async () => {
  const user: User = await DataRepository.getLoggedUser()

  return (
    <>
      {user ? (
        <div className='flex items-center gap-3'>
          <div>
            <div className='font-semibold text-right text-[13px]'>
              {user.name}
            </div>
            <div className='font-semibold text-right text-[10px] text-[#b9b9bb]'>
              {user.role}
            </div>
          </div>
          <Image
            src={user.image}
            alt={user.name}
            width='40'
            height='40'
            className='rounded-full'
          />
          <Button
            className='p-1 bg-[length:12px] bg-center bg-no-repeat cursor-pointer'
            bgImage='/arrow-down.svg'
          />
        </div>
      ) : (
        <></>
      )}
    </>
  )
}
