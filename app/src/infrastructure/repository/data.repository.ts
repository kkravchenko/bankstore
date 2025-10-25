import { DataApiProvider } from '../api/data-api.provider'
import { Data } from '@/type.dt'
import { User } from '@/domains/user/User'
import { Service } from '@/domains/service/Service'
import { Country } from '@/domains/country/Country'

export class DataRepository {
  private static api: DataApiProvider = DataApiProvider.getInstance()

  static async getLoggedUser(): Promise<User> {
    return await this.api
      .getData()
      .then(
        (data: Data) =>
          new User(
            data?.users.logged.name,
            data?.users.logged.role,
            data?.users.logged.image ?? '/user-default-image.svg'
          )
      )
  }

  static async getSupportUser(): Promise<User> {
    return await this.api
      .getData()
      .then(
        (data: Data) =>
          new User(
            data?.users.support.name,
            data?.users.support.role,
            data?.users.support.image ?? '/user-default-image.svg'
          )
      )
  }

  static async getServiceList(): Promise<Service[]> {
    return await this.api
      .getData()
      .then((data: Data) =>
        data.services.map(
          (service) =>
            new Service(
              service.id,
              service.typeOfService,
              service.price,
              service.serviceDescription,
              service.expTime,
              service.status
            )
        )
      )
  }

  static async getCountriesList(): Promise<Country[]> {
    return await this.api
      .getData()
      .then((data: Data) =>
        data.countries.map(
          (country) => new Country(country.value, country.label, country.select)
        )
      )
  }
}
