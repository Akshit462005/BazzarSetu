const { Pool } = require('pg');
require('dotenv').config();

const fs = require('fs');
const path = require('path');

async function setupDatabase() {
    const pool = new Pool({
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        host: process.env.POSTGRES_HOST,
        port: parseInt(process.env.POSTGRES_PORT || 5432),
        database: process.env.POSTGRES_DB,
        ssl: { rejectUnauthorized: false } // Enable SSL for Aiven
    });

    try {
        console.log('🔧 Setting up Bazzar Setu database...');
        
        // Read the schema file
        const schemaPath = path.join(__dirname, '..', 'database', 'schema.sql');
        const schema = fs.readFileSync(schemaPath, 'utf8');
        
        // Execute the schema
        await pool.query(schema);
        
        console.log('✅ Database setup completed successfully!');
        console.log('📋 Created tables: users, products, cart, orders, order_items');
        console.log('🔍 Added sample data for testing');
        
        // Test the connection
        const result = await pool.query('SELECT COUNT(*) as user_count FROM users');
        console.log(`👥 Users in database: ${result.rows[0].user_count}`);
        
        await pool.end();
        
    } catch (error) {
        console.error('❌ Database setup failed:', error);
        await pool.end();
        process.exit(1);
    }
}

// Run setup if this file is executed directly
if (require.main === module) {
    setupDatabase();
}

module.exports = { setupDatabase };