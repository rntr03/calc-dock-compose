# Docker Compose Calculator Lab

## Project structure
- `Frontend/`
  - `calculator.html` (UI)  
  - `Dockerfile` (nginx image)
- `Backend/`
  - `server.js` (Express API)
  - `package.json`
  - `Dockerfile` (Node image)
- `docker-compose.yml`

## What this demo does
1. Frontend served from Nginx container (port 8080)
2. Backend served from Node/Express container (port 5000)
3. Frontend calls backend endpoint:`/calculate` to get sum
4. Backend returns JSON result using CORS headers (via `cors` middleware) to permit cross-origin page access.

## Commands

1. Build containers:
   - `docker-compose build`
2. Start services:
   - `docker-compose up -d`
3. Verify running:
   - `docker-compose ps`
4. Test:
   - Open `http://localhost:8080`
   - Enter numbers, click Add, result displayed
5. Stop:
   - `docker-compose down`

## CORS explanation
- Browser enforces same-origin policy.
- Frontend (localhost:8080) vs backend (localhost:5000) is cross-origin.
- Backend uses `cors()` so it returns `Access-Control-Allow-Origin: *` and other headers, enabling requests from frontend.

## Backup and cleanup
- `docker-compose down --rmi all --volumes`