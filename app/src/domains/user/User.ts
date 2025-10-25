import { User as IUser } from '@/type.dt'

export class User implements IUser {
  #name: string
  #role: string
  #image: string

  constructor(name: string, role: string, image: string) {
    this.#name = name
    this.#role = role
    this.#image = image
  }

  get name() {
    return this.#name
  }
  get role() {
    return this.#role
  }
  get image() {
    return this.#image
  }
}
