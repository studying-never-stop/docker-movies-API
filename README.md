## Agile Software Practice - Assignment 1.

# Movies API Project

## Overview

This project involves setting up a Movies API using Docker and MongoDB, with an emphasis on learning and overcoming various challenges throughout the development process.

## Quick Start

I managed to write the Docker Compose file in a short period, which set up the necessary services for the application. Initially, I was unaware of how to implement automatic seeding for the MongoDB database. However, after some research, I created an `init` folder and a `seed.js` file to handle automatic data seeding upon container initialization.

## Challenges Encountered

One persistent issue I faced was that accessing the `/movies` endpoint returned an empty array (`[]`). This problem hindered my ability to update my Git repository, as I was focused on troubleshooting this error.

### Testing and Learning

To diagnose the problem, I created a separate test application folder to explore various routes and test configurations. While this test folder (including its routes and Dockerfile) was not uploaded to the repository, it proved invaluable in deepening my understanding of Dockerfile requirements and the need for the `build` directive in the Compose file.

### Network Configuration

During this process, I realized that the project's architecture required three networks instead of the two I initially set up, due to the two-to-two connection structure of the services. 

### Resolution

After a week of troubleshooting, I reviewed the requirements video and identified the root cause of my issues: a mismatch in the database names that prevented proper access. I successfully updated my automatic seeding process and uploaded the changes to the repository.

### Data Seeding

While the automatic seeding process generally works, it does not always succeed. I have successfully seeded the database automatically only twice. If the automatic loading fails, please use the following commands to manually seed the data:

docker exec -it mongoDB mongo -u your_username -p your_password --authenticationDatabase admin
load(/docker-entrypoint-initdb.d/seed.js)

### Production Environment

I have also included a production environment version of the project, which does not require data seeding and does not deploy the Express application. This setup is optimized for deployment without unnecessary components.

## Conclusion

Despite the challenges, this project has significantly enhanced my understanding of Docker, MongoDB, and API development. The journey was filled with learning experiences that will guide me in future projects.
