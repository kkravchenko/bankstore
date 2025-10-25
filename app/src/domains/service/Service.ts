import { Service as IService } from '@/type.dt'

export class Service implements IService {
  #id: number
  #typeOfService: string
  #price: number
  #serviceDescription: string
  #expTime: string
  #status: 'active' | 'inactive' | 'pending'

  constructor(
    id: number,
    typeOfService: string,
    price: number,
    serviceDescription: string,
    expTime: string,
    status: 'active' | 'inactive' | 'pending'
  ) {
    this.#id = id
    this.#typeOfService = typeOfService
    this.#price = price
    this.#serviceDescription = serviceDescription
    this.#expTime = expTime
    this.#status = status
  }

  get id() {
    return this.#id
  }
  get typeOfService() {
    return this.#typeOfService
  }
  get price() {
    return this.#price
  }
  get serviceDescription() {
    return this.#serviceDescription
  }
  get expTime() {
    return this.#expTime
  }
  get status() {
    return this.#status
  }
}
