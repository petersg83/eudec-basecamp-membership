import "dotenv";

export default {
  odoo: {
    db: 'odoo',
    email: Deno.env.get('ODOO_USER'),
    password: Deno.env.get('ODOO_PASSWORD'),
    endpoint: Deno.env.get('ODOO_ENDPOINT'),
  },
  france: {
    db: Deno.env.get('FRANCE_MYSQL_DB'),
    user: Deno.env.get('FRANCE_MYSQL_USER'),
    password: Deno.env.get('FRANCE_MYSQL_PASSWORD'),
    host: Deno.env.get('FRANCE_MYSQL_HOST'),
  }
};