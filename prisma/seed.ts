import prisma from "../src/db/db.js";

async function main() {
    await prisma.sizes.createMany({
        data: [{size: "P"},{size: "M"},{size: "G"}]
    })
}

main()
.then(() => console.log("Registered"))
.catch(e => {
    console.log(e);
    process.exit(1)
})
.finally(async () => {
    await prisma.$disconnect();
})