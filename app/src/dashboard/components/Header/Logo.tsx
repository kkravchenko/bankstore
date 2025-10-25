import Link from 'next/link'
import Image from 'next/image'

export default () => {
  return (
    <Link
      href='/'
      title='BankStore Dashboard'
      className='flex flex-col justify-center'
    >
      <Image src='/logo.svg' alt='Logo' width={50} height={50} />
      <span className='h-[9px] mt-[-9px]'>
        <span className='text-[11px] text-white'>Bank</span>
        <span className='text-[11px] text-[#305dff]'>Store</span>
      </span>
    </Link>
  )
}
