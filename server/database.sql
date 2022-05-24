CREATE DATABASE perndelivery;

CREATE TABLE delivery (
	client_id SERIAL PRIMARY KEY,
	posting_date DATE NOT NULL,
	
	client_name VARCHAR(255),
	delivery_distance NOT NULL
);



