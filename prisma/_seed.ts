import client from './client';

async function seedShortList() {
  await client.shortlist.create({
    data: {
      position: 'Developer',
      companyName: 'Crest',
      referral: 'Juhil Somaiya',
      progress: 'Archived',
    },
  });
  console.info('- Shortlist Seeded');

  const job1 = await client.job.create({
    data: {
      title: 'Financial Management Accountant',
      description:
        'Our Company is hiring an experienced Accounting Specialist to join our expanding Financial Operations',
      salary: {
        create: {
          lowRange: 90000,
          highRange: 100000,
        },
      },
      contractType: 'Permanent',
      referralBonus: 1400,
      tag: {
        create: [
          {
            name: 'Adaptability ',
          },
          { name: 'Spreadsheet Proficiency' },
        ],
      },
      company: {
        create: {
          name: 'Welfound',
        },
      },
      location: 'Sydney, AU',
    },
    include: { company: true },
  });

  await client.job.create({
    data: {
      title: 'Accountancy Consultant',
      description:
        'We’re looking for an organized and driven Staff Accountant to join our growing team at our company',
      salary: {
        create: {
          lowRange: 60000,
          highRange: 80000,
        },
      },
      contractType: 'Permanent',
      referralBonus: 1400,
      tag: {
        create: [
          {
            name: 'Management Experience ',
          },
          { name: 'Spreadsheet Proficiency' },
        ],
      },
      company: {
        connect: { id: job1.company.id },
      },
      location: 'Sydney, AU',
    },
  });

  console.info('- Job Seeded');
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
