## Create dB script

-- Create the 'users' table
CREATE TABLE users (
user_id SERIAL PRIMARY KEY,
username VARCHAR(50) NOT NULL,
age INT,
city VARCHAR(50)
);

-- Populate the 'users' table with 10 users
INSERT INTO users (username, age, city)
VALUES
('User1', 25, 'City1'),
('User2', 30, 'City2'),
('User3', 22, 'City1'),
('User4', 28, 'City3'),
('User5', 35, 'City2'),
('User6', 26, 'City1'),
('User7', 29, 'City3'),
('User8', 27, 'City2'),
('User9', 31, 'City1'),
('User10', 24, 'City3');

-- Create the 'hobbies' table
CREATE TABLE hobbies (
hobby_id SERIAL PRIMARY KEY,
hobby_name VARCHAR(50) NOT NULL,
description TEXT
);

-- Populate the 'hobbies' table with 20 hobbies
INSERT INTO hobbies (hobby_name, description)
VALUES
('Gardening', 'Enjoy planting flowers and vegetables.'),
('Painting', 'Love creating art with watercolors.'),
('Reading', 'Avid bookworm, read a book a week.'),
('Cooking', 'Passionate about cooking and trying new recipes.'),
('Hiking', 'Explore nature through hiking trails.'),
('Photography', 'Capture moments with a camera.'),
('Swimming', 'Relax by swimming in local pools.'),
('Cycling', 'Bike enthusiast, love long rides.'),
('Music', 'Play multiple musical instruments.'),
('Dancing', 'Dance the night away with salsa.'),
('Traveling', 'Exploring new destinations.'),
('Fishing', 'Enjoy peaceful fishing trips.'),
('Yoga', 'Find inner peace through yoga practice.'),
('Gaming', 'Video game enthusiast.'),
('Sports', 'Participate in various sports activities.'),
('Singing', 'Karaoke champion.'),
('Crafts', 'Create various DIY crafts.'),
('Camping', 'Camping under the stars.'),
('Movies', 'Movie buff, watch every genre.'),
('Volunteering', 'Helping the community.');

-- Create the 'user_hobbies' relational table
CREATE TABLE user_hobbies (
user_id INT,
hobby_id INT,
PRIMARY KEY (user_id, hobby_id),
FOREIGN KEY (user_id) REFERENCES users(user_id),
FOREIGN KEY (hobby_id) REFERENCES hobbies(hobby_id)
);

-- Insert data into the 'user_hobbies' table to establish relationships
INSERT INTO user_hobbies (user_id, hobby_id)
VALUES
(8, 9), -- User8 has the hobby 'Music'
(10, 9); -- User10 also has the hobby 'Music'

-- Query to find users with the hobby 'Music'
SELECT u.username
FROM users u
INNER JOIN user_hobbies uh ON u.user_id = uh.user_id
INNER JOIN hobbies h ON uh.hobby_id = h.hobby_id
WHERE h.hobby_name = 'Music';
