import { Service as IService } from '@/type.dt'

export class Service implements IService {
  #id: string
  #typeOfService: string
  #price: string
  #serviceDescription: string
  #expTime: string
  #status: string

  constructor(
    id: string,
    typeOfService: string,
    price: string,
    serviceDescription: string,
    expTime: string,
    status: string
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
