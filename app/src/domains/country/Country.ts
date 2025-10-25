import { Country as ICountry } from '@/type.dt'

export class Country implements ICountry {
  #value: string | number
  #label: string
  #select: boolean

  constructor(value: string | number, label: string, select: boolean = false) {
    this.#value = value
    this.#label = label
    this.#select = select
  }

  get value(): string | number {
    return this.#value
  }

  get label(): string {
    return this.#label
  }

  get select(): boolean {
    return this.#select
  }
}
