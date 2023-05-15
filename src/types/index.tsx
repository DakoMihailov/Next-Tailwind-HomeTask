export type AddInfoType = {
  title: string
  job: string
  name: string
  address: string
  email: string
  phone: string
}

export type EditInfoType = {
  id?: number
  data: {
    title: string
    job: string
    name: string
    address: string
    email: string
    phone: string
  }
}

export type RemoveInfoType = {
  id: number
}
