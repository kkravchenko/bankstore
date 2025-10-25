import { JSX } from 'react'
import { DataRepository } from '@/infrastructure/repository/data.repository'
import Header from './Header'
import SubHeader from './SubHeader'
import ServiceFilters from './ServiceFilters'
import SearchBar from './SearchBar'
import { Country, Service } from '@/type.dt'
import Services from './Services'

export default async (): Promise<JSX.Element> => {
  const countries: Country[] = await DataRepository.getCountriesList()
  const servicesList: Service[] = await DataRepository.getServiceList()
  const services = ['Structure Maintenance', 'Tax Advising', 'Legal Assistance']

  return (
    <div className='h-full py-4 px-5'>
      <Header title='LA For Vertex Finance' />
      <SubHeader subtitle='AI Expert, Country Legislation, Company incorporation' />
      <ServiceFilters services={services} />
      <SearchBar countries={countries} />
      <Services services={servicesList} />
    </div>
  )
}
