CREATE TABLE public.delivery
(
    date date NOT NULL,
    client_name character varying(128) NOT NULL,
    quantity integer NOT NULL,
    distance integer NOT NULL
);

INSERT INTO delivery
VALUES
('2022-03-01', 'Client 1', 1, 51),
('2022-03-02', 'Client 2', 2, 665),
('2022-03-03', 'Client 3', 3, 43),
('2022-03-04', 'Client 4', 4, 89),
('2022-03-05', 'Client 5', 5, 71),
('2022-03-06', 'Client 6', 6, 16),
('2022-03-07', 'Client 7', 7, 15),
('2022-03-08', 'Client 8', 8, 96),
('2022-03-09', 'Client 9', 9, 244),
('2022-03-10', 'Client 10', 10, 125),
('2022-03-11', 'Client 11', 13, 333),
('2022-03-12', 'Client 12', 14, 520),
('2022-03-13', 'Client 13', 15, 32),
('2022-03-14', 'Client 14', 16, 11),
('2022-03-15', 'Client 15', 17, 98),
('2022-03-16', 'Client 16', 18, 66),
('2022-03-17', 'Client 17', 19, 13),
('2022-03-18', 'Client 18', 20, 120),
('2022-03-19', 'Client 19', 21, 102),
('2022-03-20', 'Client 20', 22, 103),
('2022-03-21', 'Client 21', 23, 144),
('2022-03-22', 'Client 21', 24, 256),
('2022-03-23', 'Client 22', 25, 32),
('2022-03-24', 'Client 23', 28, 20),
('2022-03-25', 'Client 24', 29, 19),
('2022-03-26', 'Client 25', 30, 5),
('2022-03-27', 'Client 26', 31, 444),
('2022-03-28', 'Client 27', 32, 363),
('2022-03-29', 'Client 28', 33, 257),
('2022-03-30', 'Client 29', 34, 59),
('2022-03-31', 'Client 30', 35, 748),
('2022-04-01', 'Client 31', 36, 22),
('2022-04-02', 'Client 32', 37, 499),
('2022-04-03', 'Client 33', 38, 399),
('2022-04-04', 'Client 34', 12, 201),
('2022-04-05', 'Client 35', 39, 305),
('2022-04-06', 'Client 36', 40, 311),
('2022-04-07', 'Client 37', 41, 493),
('2022-04-08', 'Client 38', 42, 485),
('2022-04-09', 'Client 39', 43, 48),
('2022-04-10', 'Client 40', 44, 2),
('2022-04-11', 'Client 41', 45, 54),
('2022-04-12', 'Client 42', 46, 53),
('2022-04-13', 'Client 43', 47, 73),
('2022-04-14', 'Client 44', 48, 323),
('2022-04-15', 'Client 45', 49, 401),
('2022-04-16', 'Client 46', 50, 408),
('2022-04-17', 'Client 47', 12, 108),
('2022-04-18', 'Client 48', 12, 101),
('2022-04-19', 'Client 49', 12, 100),
('2022-04-20', 'Client 50', 12, 200);