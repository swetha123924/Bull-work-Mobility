const express = require("express");
const { Pool } = require("pg");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database:"Bull work mobility",
    password: "password",
    port: 5432,
});

pool.connect()
    .then(() => console.log("✅ Connected to PostgreSQL database"))
    .catch((err) => console.error("❌ DB Connection Error:", err));

// Create tables
pool.query(`
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                username VARCHAR(100) NOT NULL,
                email VARCHAR(100) UNIQUE NOT NULL,
                password TEXT NOT NULL,
                role VARCHAR(20) DEFAULT 'user',
                jwt_token TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `);

    pool.query(`
            CREATE TABLE IF NOT EXISTS blogs (
                id SERIAL PRIMARY KEY,
                title TEXT NOT NULL,
                information TEXT,
                time TEXT,
                image TEXT,
                description TEXT,
                recommended_img1 TEXT,
                recommended_title1 TEXT,
                recommended_des1 TEXT,
                recommended_img2 TEXT,
                recommended_title2 TEXT,
                recommended_des2 TEXT
            );
        `);

         pool.query(`
           CREATE TABLE IF NOT EXISTS products (
                id SERIAL PRIMARY KEY,
                slug VARCHAR(50) UNIQUE NOT NULL,       
                title VARCHAR(100) NOT NULL,
                image TEXT,
                description TEXT,
                features TEXT[],                         
                saving_description TEXT,
                yearly_savings VARCHAR(50),
                seven_year_savings VARCHAR(50),
                related_beast TEXT,
                related_warrior TEXT,
                feature_image TEXT,
                powerup_video TEXT
            );

        `);

        pool.query(`
            CREATE TABLE IF NOT EXISTS press_releases (
                id SERIAL PRIMARY KEY,
                image_url TEXT NOT NULL
            );
        `);

     pool.query(`
            CREATE TABLE IF NOT EXISTS awards (
                id SERIAL PRIMARY KEY,
                image_url TEXT NOT NULL
            );
        `);

         pool.query(`
            CREATE TABLE IF NOT EXISTS orders (
                id SERIAL PRIMARY KEY,
                name VARCHAR(100),
                phone VARCHAR(20),
                email VARCHAR(100),
                address TEXT,
                country VARCHAR(100),
                state VARCHAR(100),
                city VARCHAR(100),
                pincode VARCHAR(20),
                aadhar_number VARCHAR(20),
                pan_number VARCHAR(20),
                selected_product VARCHAR(100),
                message TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `);

        console.log("✅ All tables created or already exist.");

module.exports =  {pool} ;
