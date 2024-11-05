Docker Assignment - Agile Software Practice
Name: WuSongyu

Demo: https://youtu.be/5p2O-1nctFs

This repository contains the containerization of the multi-container application illustrated below.

### Database Seeding
I automated the seeding of the application's MongoDB database by creating an init folder and adding a seed.js file, which defines the initial data to populate the movies collection. Using Docker Compose, I configured the MongoDB container to run the seed.js file upon startup, ensuring the collection is seeded automatically. Additionally, I added a volume to persist the database, so that the seeded data remains stored in the database, ensuring consistency of the dataset across deployments.

### Multi-Stack
To support both development and production environments, I configured separate Docker Compose files. 
The development setup includes the Mongo Express interface for easier database management, while the production stack runs with 
optimized performance configurations, omitting Mongo Express for a leaner setup. 
Each environment is equipped with Redis caching and rate-limiting, ensuring that the application functions efficiently under both development and production loads.

