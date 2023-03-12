import { format, subMonths } from "date-fns";

import { getUpToDateMembers as getUpToDateOdooMembers } from "./odoo.js";
import { getUpToDateMembers as getUpToDateFranceMembers } from "./france.js";

const membershipDate = format(subMonths(new Date(), 3), 'yyyy-MM-dd'); // Considered as still a member for 3 months after the end of the current membership

const odooMembers = await getUpToDateOdooMembers(membershipDate);
const franceMembers = await getUpToDateFranceMembers(membershipDate);

console.log('franceMembers', franceMembers);
console.log('odooMembers', odooMembers);
