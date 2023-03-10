import { format, subMonths } from "date-fns";

import { getUpToDateMembers } from "./odoo.js";

const membershipDate = format(subMonths(new Date(), 3), 'yyyy-MM-dd');

const odooMembers = await getUpToDateMembers(membershipDate);

