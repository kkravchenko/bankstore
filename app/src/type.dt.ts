import { JSX } from 'react'

export interface User {
  name: string
  role: string
  image?: string
}

export interface Service {
  id: number
  typeOfService: string
  price: number
  serviceDescription: string
  expTime: string
  status: string
}

export interface Data {
  users: {
    logged: User
    support: User
  }
  services: Service[]
  countries: Country[]
}

export interface Menu {
  label: string
  link: string
  icon: JSX.Element
}

export interface SocialItem {
  name: string
  url: string
  icon: JSX.Element
}

export interface Country {
  value: string | number
  label: string
  select?: boolean
}
