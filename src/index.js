import { format, subMonths } from 'date-fns';

import { getUpToDateMembers as getUpToDateOdooMembers } from "./odoo.js";
import { getUpToDateMembers as getUpToDateFranceMembers } from "./france.js";
import { getMembers as getBasecampMembers } from "./basecamp.js";

const membershipDate = format(subMonths(new Date(), 3), 'yyyy-MM-dd'); // Considered as still a member for 3 months after the end of the current membership

const odooMembers = await getUpToDateOdooMembers(membershipDate);
const franceMembers = await getUpToDateFranceMembers(membershipDate);
const basecampMembers = await getBasecampMembers();

const upToDateEmailsMap = {};

for (const member of [...odooMembers, ...franceMembers]) {
  member.emails.forEach((email) => {
    upToDateEmailsMap[email] = true;
  });
}

const membersToRemove = basecampMembers.filter((member) => {
  return !member.emails.some(email => upToDateEmailsMap[email]);
});

const membersToKeep = basecampMembers.filter((member) => {
  return member.emails.some(email => upToDateEmailsMap[email]);
});

console.log('membersToRemove', JSON.stringify(membersToRemove, null, 2));
console.log('membersToRemove', membersToRemove.length);
console.log('membersToKeep', JSON.stringify(membersToKeep, null, 2));
console.log('membersToKeep', membersToKeep.length);
