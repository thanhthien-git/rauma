export interface UserAddress {
  name: string
  phone: string
  address: string
  status: boolean
}

export interface AddressProps {
  user: UserAddress[]
}
