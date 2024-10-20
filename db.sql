-- Drop the database if it exists and create a new one
DROP DATABASE IF EXISTS CoffeeShop;
CREATE DATABASE CoffeeShop;

-- Use the new CoffeeShop database
\c CoffeeShop;

-- Create the Orders table with timestamps
CREATE TABLE Orders (
  id SERIAL PRIMARY KEY,
  productID INT DEFAULT NULL,
  quantity INT DEFAULT NULL,
  price DECIMAL(10,2) DEFAULT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert a sample order
INSERT INTO Orders (productID, quantity, price) VALUES
(1, 1, 2.00);

-- Create the Products table with timestamps
CREATE TABLE Products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  category VARCHAR(255) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample products
INSERT INTO Products (name, category, price) VALUES
('Just Java', 'Endless Cup', 2.00),
('Cafe au Lait', 'Single', 2.00),
('Cafe au Lait', 'Double', 3.00),
('Iced Cappuccino', 'Single', 4.75),
('Iced Cappuccino', 'Double', 5.75);
