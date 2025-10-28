         Project Title: Medicine Reminder Web Application
Description:
•	The Medicine Reminder Web App helps users take their medicines on time by sending reminders through notifications or emails.
•	It allows users to add, edit, and delete medicines, schedule reminder times, and manage their medicine schedules efficiently.
•	The web app is built using Node.js, Express.js, and MySQL, with a simple and user-friendly interface designed using HTML, CSS, and JavaScript.
•	It aims to promote good health and well-being (SDG Goal 3) by helping patients follow their prescribed treatment properly. 
Folder Structure:
•	source_code → Contains all source code files (server, routes, and frontend). 
Database → MySQL database dump or SQL script. 
•	Project_Report→ Complete project report in Word format. 
•	PPT/ → Final viva presentation slides. 
•	Video/ → Demonstration video of the project. 
•	Journal_Paper/ → Journal paper in Word format. 
•	Abstract/ → One-page abstract of the project. 
•	Readme.txt/ → Instructions to run the project. 
Project Documents:
•	Project Report
•	Abstract
Requirements:
•	Node.js (v20 or higher) 
•	npm (Node Package Manager) 
•	MySQL (for database storage) 
•	VS Code or any preferred IDE 
Node Packages Required:
•	express → Web server framework 
•	mysql2 → For connecting Node.js with MySQL database 
•	body-parser → To handle form data 
•	cors → To allow frontend-backend communication 
•	dotenv → For environment variable management 
•	node-cron → To schedule reminder jobs 
•	nodemailer → To send email reminders 

Installation Steps:
1.Navigate to the source code folder:
	cd source_code
2.Initialize Node.js (if not done):
	npm init -y
3.Install required dependencies:
	npm install express mysql2 body-parser cors dotenv node-cron nodemailer
4.Set up the .env file at the project root:
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=medicine_reminder
5.Create and import the database:
	Open MySQL Workbench / phpMyAdmin.
6.Create a database named medicine_reminder.
7.Run this SQL command:
CREATE TABLE medicines (
 id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  time TIME,
  email VARCHAR(100)
);
Execution Steps:
1.Start your MySQL server 
2.Run the Node.js server:
•	node server.js
•	Server running on http://localhost:5000
3.Open your browser and go to:
http://localhost:5000
4.Use the web form to:
•	Add medicine details.
•	Set reminder time.
•	Receive email notification when it’s time.
Notes:
	Ensure that MySQL is running before starting the Node.js server.
	You can modify reminder frequency or message format in server.js.
	Test your email configuration using your Gmail ID and app password in .env.
	Keep the browser tab open for front-end interaction.
Contact:
For any queries or help, contact:
Name : Abinaya AV
Email : abinayaabiabi13@gmail.com
Phone : 9791368587
