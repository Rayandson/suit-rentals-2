import prisma from "../db/db.js";

async function insertOne(renter_id: number, suits_ids: number[]) {
    return prisma.rentals.create({
        data: {
            renters: {
              connect: { id: renter_id },
            },
            rentals_suits: {
              create:
                suits_ids.map(suit_id => ({
                suits: {
                  connect: { id: suit_id },
                },
              }))
            },
          },
    })
}

async function findAll() {
    return prisma.rentals.findMany({
        include: {
            renters: true,
            rentals_suits: {
              select: {
                suits: {
                  select: {
                    id: true,
                    color:true,
                    sizes: {
                      select: {
                        size: true
                      }
                    }
                  }
                }
              }
            }
        }
    })
}

async function findRentalsByCPF(cpf) {
  return prisma.rentals.findMany({
    where: {
      renters: {
        cpf: cpf
      }    
    },
    include: {
        renters: true,
        rentals_suits: {
          select: {
            suits: {
              select: {
                id: true,
                color:true,
                sizes: {
                  select: {
                    size: true
                  }
                }
              }
            }
          }
        }
    }
})
}


async function updateRental(id: number) {
    return prisma.rentals.update({
      where: {
        id: id
      },
      data: {
        is_returned: true
      }
    })
}

async function deleteRentalById(id: number) {
  return prisma.rentals.delete({
    where: {
      id: id
    }
  })
} 

export {
    insertOne,
    findAll,
    updateRental,
    deleteRentalById,
    findRentalsByCPF
}