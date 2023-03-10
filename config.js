import "dotenv";

export default {
  odoo: {
    db: 'odoo',
    email: Deno.env.get('ODOO_USER'),
    password: Deno.env.get('ODOO_PASSWORD'),
    endpoint: Deno.env.get('ODOO_ENDPOINT'),
  }
};