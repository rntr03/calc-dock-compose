# Calculator App with Docker Compose

A simple calculator web app served via Node.js, containerized with Docker and orchestrated using Docker Compose.

## Files
- `calculator.html`: Frontend calculator interface
- `server.js`: Node.js server to serve the HTML
- `Dockerfile`: Docker image definition
- `docker-compose.yml`: Docker Compose configuration

## Docker Compose Practice Steps

1. **Build the Docker image**:
   ```
   docker-compose build
   ```

2. **Start the service**:
   ```
   docker-compose up
   ```
   The app will be available at http://localhost:5000

3. **Run in background** (detached mode):
   ```
   docker-compose up -d
   ```

4. **Stop the service**:
   ```
   docker-compose down
   ```

5. **View logs**:
   ```
   docker-compose logs
   ```

6. **Rebuild and restart** (after code changes):
   ```
   docker-compose up --build
   ```

## Manual Docker Commands (Alternative)
- Build image: `docker build -t calculator .`
- Run container: `docker run -p 5000:5000 calculator`

## GitHub Repository
Pushed to: https://github.com/rntr03/calc-dock-compose