import { Button } from '@/presentation/components/Button'
import { Service } from '@/type.dt'

interface ServicesProps {
  services: Service[]
}

interface TableHeaderProps {
  field: string
  text: string
  width: string
  classes?: string
  format?: any
}

export default ({ services }: ServicesProps) => {
  const tableHeader: TableHeaderProps[] = [
    {
      field: 'id',
      text: '№',
      width: '5%',
      classes: 'text-center',
    },
    {
      field: 'typeOfService',
      text: 'Type of Service',
      width: '18%',
      classes: 'p-1',
    },
    {
      field: 'price',
      text: 'Price',
      width: '6%',
      format: (value: string) => <>${Number(value).toLocaleString('en-US')}</>,
    },
    {
      field: 'serviceDescription',
      text: 'Service Description',
      width: '23%',
      classes: 'p-3',
    },
    {
      field: 'expTime',
      text: 'Exp. Time',
      width: '9%',
      classes: 'border-l border-r border-[#cacacc]  p-3',
      format: (value: string) => (
        <span
          className='pr-[1px]'
          dangerouslySetInnerHTML={{ __html: value }}
        ></span>
      ),
    },
    {
      field: 'status',

      text: 'Status',
      width: '12%',
      classes: 'border-r border-[#cacacc] text-center p-[7px]',
      format: (value: string) => (
        <span className='bg-[#e7e8ed] py-2 px-3 font-bold text[15px] text-[#7d808a] rounded-[40px] block'>
          {value}
        </span>
      ),
    },
    {
      field: '*',
      text: 'Actions',
      width: '*',
      classes: 'text-center p-2',
      format: (value: string) => (
        <div className='flex items-center gap-4 justify-end'>
          <a
            href='#'
            className='text-[#181c4c] grid grid-cols-[25px_1fr] items-center gap-1 font-bold text-[14.5px]'
          >
            <svg viewBox='0 0 24 24' fill='none'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M5.41442 6H3.75V4.5H6.58558L7.33558 7.5H18.935L17.2321 15.1627L16.5 15.75H8.25L7.51786 15.1627L6.02 8.42233L5.41442 6ZM7.68496 9L8.85163 14.25H15.8984L17.065 9H7.68496ZM10.5 18C10.5 18.8284 9.82843 19.5 9 19.5C8.17157 19.5 7.5 18.8284 7.5 18C7.5 17.1716 8.17157 16.5 9 16.5C9.82843 16.5 10.5 17.1716 10.5 18ZM15 19.5C15.8284 19.5 16.5 18.8284 16.5 18C16.5 17.1716 15.8284 16.5 15 16.5C14.1716 16.5 13.5 17.1716 13.5 18C13.5 18.8284 14.1716 19.5 15 19.5Z'
                fill='currentColor'
              />
            </svg>
            <span>Put in cart</span>
          </a>
          <Button
            className='text-white font-bold text-[14px] bg-[#305dff] rounded-[20px] py-2 px-10 cursor-pointer'
            label='Apply'
          />
        </div>
      ),
    },
  ]

  return (
    <div className='bg-white rounded-[15px]'>
      <table className='w-full border-collapse'>
        <thead>
          <tr>
            {tableHeader.map((h: TableHeaderProps) => (
              <td
                key={h.field}
                width={h.width}
                className={`border-b border-[#cacacc] ${
                  h?.classes ? h.classes : ''
                }`}
              >
                <span className='font-bold text-[13px]'>{h.text}</span>
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {services.map((s: Service) => (
            <tr key={s.id}>
              {tableHeader.map((h: TableHeaderProps) => (
                <td
                  className={`border-b border-[#cacacc] py-2 ${
                    h?.classes ? h.classes : ''
                  }`}
                  key={h.field}
                >
                  <span className='text-[13px]'>
                    {h?.format
                      ? h.format((s as any)[h.field])
                      : (s as any)[h.field]}
                  </span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
