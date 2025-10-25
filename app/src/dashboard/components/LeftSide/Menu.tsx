import { Menu } from '@/type.dt'
import React, { JSX } from 'react'
import MenuItem from './MenuItem'

export default (): JSX.Element => {
  const menuList: Menu[] = [
    {
      label: 'Companies',
      link: '#',
      icon: (
        <svg viewBox='0 0 24 24' fill='none' className='w-5'>
          <path
            d='M3 8.2C3 7.07989 3 6.51984 3.21799 6.09202C3.40973 5.71569 3.71569 5.40973 4.09202 5.21799C4.51984 5 5.0799 5 6.2 5H9.67452C10.1637 5 10.4083 5 10.6385 5.05526C10.8425 5.10425 11.0376 5.18506 11.2166 5.29472C11.4184 5.4184 11.5914 5.59135 11.9373 5.93726L12.0627 6.06274C12.4086 6.40865 12.5816 6.5816 12.7834 6.70528C12.9624 6.81494 13.1575 6.89575 13.3615 6.94474C13.5917 7 13.8363 7 14.3255 7H17.8C18.9201 7 19.4802 7 19.908 7.21799C20.2843 7.40973 20.5903 7.71569 20.782 8.09202C21 8.51984 21 9.0799 21 10.2V15.8C21 16.9201 21 17.4802 20.782 17.908C20.5903 18.2843 20.2843 18.5903 19.908 18.782C19.4802 19 18.9201 19 17.8 19H6.2C5.07989 19 4.51984 19 4.09202 18.782C3.71569 18.5903 3.40973 18.2843 3.21799 17.908C3 17.4802 3 16.9201 3 15.8V8.2Z'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
            stroke='currentColor'
          />
        </svg>
      ),
    },
    {
      label: 'Requests',
      link: '#',
      icon: (
        <svg
          viewBox='0 0 24 24'
          fill='none'
          className='w-5'
          xmlns='http://www.w3.org/2000/svg'
        >
          {/* Тени (fill c opacity) */}
          <path
            opacity='0.1'
            d='M9 6C9 7.65685 7.65685 9 6 9C4.34315 9 3 7.65685 3 6C3 4.34315 4.34315 3 6 3C7.65685 3 9 4.34315 9 6Z'
            fill='currentColor'
          />
          <path
            opacity='0.1'
            d='M9 18C9 19.6569 7.65685 21 6 21C4.34315 21 3 19.6569 3 18C3 16.3431 4.34315 15 6 15C7.65685 15 9 16.3431 9 18Z'
            fill='currentColor'
          />
          <path
            opacity='0.1'
            d='M21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18C15 16.3431 16.3431 15 18 15C19.6569 15 21 16.3431 21 18Z'
            fill='currentColor'
          />

          {/* Основные линии */}
          <path
            d='M9 6C9 7.65685 7.65685 9 6 9C4.34315 9 3 7.65685 3 6C3 4.34315 4.34315 3 6 3C7.65685 3 9 4.34315 9 6Z'
            stroke='currentColor'
            strokeWidth='1.5'
          />
          <path
            d='M9 18C9 19.6569 7.65685 21 6 21C4.34315 21 3 19.6569 3 18C3 16.3431 4.34315 15 6 15C7.65685 15 9 16.3431 9 18Z'
            stroke='currentColor'
            strokeWidth='1.5'
          />
          <path
            d='M21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18C15 16.3431 16.3431 15 18 15C19.6569 15 21 16.3431 21 18Z'
            stroke='currentColor'
            strokeWidth='1.5'
          />
          <path
            d='M12 6C14.8284 6 16.2426 6 17.1213 6.87868C18 7.75736 18 9.17157 18 12V15'
            stroke='currentColor'
            strokeWidth='1.5'
          />
          <path
            d='M15 3L12.0605 5.93945V5.93945C12.0271 5.97289 12.0271 6.02711 12.0605 6.06055V6.06055L15 9'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M6 15V9'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      ),
    },
    {
      label: 'Account Offers',
      link: '#',
      icon: (
        <svg
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='w-5'
        >
          <path
            d='M3.9889 14.6604L2.46891 13.1404C1.84891 12.5204 1.84891 11.5004 2.46891 10.8804L3.9889 9.36039C4.2489 9.10039 4.4589 8.59038 4.4589 8.23038V6.08036C4.4589 5.20036 5.1789 4.48038 6.0589 4.48038H8.2089C8.5689 4.48038 9.0789 4.27041 9.3389 4.01041L10.8589 2.49039C11.4789 1.87039 12.4989 1.87039 13.1189 2.49039L14.6389 4.01041C14.8989 4.27041 15.4089 4.48038 15.7689 4.48038H17.9189C18.7989 4.48038 19.5189 5.20036 19.5189 6.08036V8.23038C19.5189 8.59038 19.7289 9.10039 19.9889 9.36039L21.5089 10.8804C22.1289 11.5004 22.1289 12.5204 21.5089 13.1404L19.9889 14.6604C19.7289 14.9204 19.5189 15.4304 19.5189 15.7904V17.9403C19.5189 18.8203 18.7989 19.5404 17.9189 19.5404H15.7689C15.4089 19.5404 14.8989 19.7504 14.6389 20.0104L13.1189 21.5304C12.4989 22.1504 11.4789 22.1504 10.8589 21.5304L9.3389 20.0104C9.0789 19.7504 8.5689 19.5404 8.2089 19.5404H6.0589C5.1789 19.5404 4.4589 18.8203 4.4589 17.9403V15.7904C4.4589 15.4204 4.2489 14.9104 3.9889 14.6604Z'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M9 15L15 9'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M14.4945 14.5H14.5035'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M9.49451 9.5H9.50349'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      ),
    },
    {
      label: 'Open Cases',
      link: '#',
      icon: (
        <svg viewBox='0 0 48 48' className='w-5' fill='currentColor'>
          <path d='M0 0h48v48H0z' fill='none' />
          <path
            d='M8,44h32c2.2,0,4-1.8,4-4l0-26h-8.18C34.863,8.334,29.934,4,24,4S13.137,8.334,12.181,14H4l0,26C4,42.2,5.8,44,8,44z M24,8
		c3.719,0,6.845,2.555,7.737,6H16.263C17.155,10.555,20.281,8,24,8z M12,18v4h4v-4h16v4h4v-4h4l0,22L8,40l0-22H12z'
          />
        </svg>
      ),
    },
    {
      label: 'Legal Support',
      link: '#',
      icon: (
        <svg viewBox='0 0 24 24' className='w-5 h-4' fill='none'>
          <path
            d='M10.1992 12C12.9606 12 15.1992 9.76142 15.1992 7C15.1992 4.23858 12.9606 2 10.1992 2C7.43779 2 5.19922 4.23858 5.19922 7C5.19922 9.76142 7.43779 12 10.1992 12Z'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M1 22C1.57038 20.0332 2.74795 18.2971 4.36438 17.0399C5.98081 15.7827 7.95335 15.0687 10 15C14.12 15 17.63 17.91 19 22'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M17.8205 4.44006C18.5822 4.83059 19.1986 5.45518 19.579 6.22205C19.9594 6.98891 20.0838 7.85753 19.9338 8.70032C19.7838 9.5431 19.3674 10.3155 18.7458 10.9041C18.1243 11.4926 17.3302 11.8662 16.4805 11.97'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M17.3203 14.5701C18.6543 14.91 19.8779 15.5883 20.8729 16.5396C21.868 17.4908 22.6007 18.6827 23.0003 20'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      ),
    },
    {
      label: 'Help Center',
      link: '#',
      icon: (
        <svg viewBox='0 0 24 24' fill='none' className='w-5'>
          <circle
            cx='12'
            cy='12'
            r='10'
            stroke='currentColor'
            strokeWidth='1.5'
          />
          <path
            d='M12 17V11'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
          />
          <circle
            cx='1'
            cy='1'
            r='1'
            transform='matrix(1 0 0 -1 11 9)'
            fill='currentColor'
          />
        </svg>
      ),
    },
  ]
  return (
    <ul>
      {menuList.map((item, index) => (
        <React.Fragment key={index}>
          {index === menuList.length - 1 && (
            <hr className='text-[#3f3744] mt-5' />
          )}
          <MenuItem item={item} />
        </React.Fragment>
      ))}
    </ul>
  )
}
