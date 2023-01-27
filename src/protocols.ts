export type Rental = {
    renter_id: number,
    suits_ids: number[]
}

export type Renter = {
    name: string,
    cpf: string
}

export type Suit = {
    color: string,
    size_id: number
}

export type Size = {
    size: string
}