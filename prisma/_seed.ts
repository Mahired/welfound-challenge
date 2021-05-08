import client from './client';

async function seedShortList() {
  await client.shortlist.create({
    // TODO: Insert ShortList seed data here
  });

  console.info('- Shortlist Seeded');
}

async function main() {
  await seedShortList();
}

main()
  .catch((e) => {
    console.error(e, 'Seeding failed');
  })
  .finally(async () => {
    await client.$disconnect();
  });
