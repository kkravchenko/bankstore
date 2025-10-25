import Image from 'next/image'
import { DataRepository } from '@/infrastructure/repository/data.repository'
import { User } from '@/domains/user/User'
import { Button } from '@/presentation/components/Button'

export default async () => {
  const user: User = await DataRepository.getSupportUser()

  return (
    <div className='p-[1px] mt-[110px] bg-[linear-gradient(to_right,#2e2d3b_0%,#2e2d3b_70%,#bee9da_100%)] rounded-full'>
      <div
        className='bg-[#18101d] h-full rounded-full p-[8px] flex items-center justify-between gap-3'
        style={{ borderImage: 'linear-gradient(to right, #2e2d3b, #d4f8e5) 1' }}
      >
        {user && (
          <div className='flex items-center gap-3 relative'>
            <Image
              src={user.image}
              alt={user.name}
              width='40'
              height='40'
              className='rounded-full'
            />
            <span className='rounded-full w-[10px] h-[10px] block bg-[#29d898] border-[1px] border-[#fff] rounded-full absolute top-[2px] left-[31px]'></span>
            <div>
              <div className='font-semibold text-[13px]'>{user.name}</div>
              <div className='font-semibold text-[10px] text-[#b9b9bb]'>
                {user.role}
              </div>
            </div>
          </div>
        )}
        <div className='p-[1px] bg-[linear-gradient(to_right,#2e2d3b_0%,#2e2d3b_70%,#bee9da_100%)] rounded-full'>
          <div
            className='bg-[#18101d] h-full rounded-full p-[2px] flex items-center gap-1'
            style={{
              borderImage: 'linear-gradient(to right, #2e2d3b, #d4f8e5) 1',
            }}
          >
            <Button
              className=' rounded-full h-[30px] pr-[16px] pl-[30px] font-semibold
              bg-[length:16px] bg-[position:10px_center] bg-no-repeat text-[12px] cursor-pointer'
              bgImage='/stars-icon.svg'
            >
              <span
                style={{
                  background:
                    'linear-gradient(to right, #1e8462 0%, #61caa7 45%, #fff 100%)',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                AI Help
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
