# Docker Deployment Guide - Allure Industries Landing Page

## Prerequisites
- Docker installed on your system
- Docker Compose installed

## Deployment Steps

### 1. Build and Run with Docker Compose

```bash
# Build and start the container
docker-compose up -d --build

# View logs
docker-compose logs -f

# Stop the container
docker-compose down
```

### 2. Access the Application

Once deployed, the application will be available at:
- **http://localhost:4000**

### 3. Useful Docker Commands

```bash
# Check container status
docker-compose ps

# Restart the container
docker-compose restart

# Stop and remove containers
docker-compose down

# Remove containers and volumes
docker-compose down -v

# Rebuild without cache
docker-compose build --no-cache
docker-compose up -d
```

### 4. Production Deployment

For production deployment on a server:

```bash
# Pull latest code
git pull origin main

# Build and deploy
docker-compose up -d --build

# Check if running
docker-compose ps
```

### 5. Environment Configuration

The application runs on:
- **Internal Container Port**: 80
- **External Host Port**: 4000

To change the external port, modify `docker-compose.yml`:
```yaml
ports:
  - "YOUR_PORT:80"  # Change YOUR_PORT to desired port
```

### 6. Nginx Configuration

The nginx server is configured to:
- Serve static files from `/usr/share/nginx/html`
- Handle client-side routing (SPA)
- Enable gzip compression
- Set security headers
- Cache static assets for 1 year

### 7. Troubleshooting

**Container won't start:**
```bash
docker-compose logs allure-landing
```

**Port already in use:**
```bash
# Check what's using port 4000
netstat -ano | findstr :4000

# Change port in docker-compose.yml
```

**Rebuild after code changes:**
```bash
docker-compose down
docker-compose up -d --build
```

## File Structure

```
allure-landing/
├── Dockerfile              # Docker build configuration
├── docker-compose.yml      # Docker Compose configuration
├── nginx.conf             # Nginx server configuration
├── .dockerignore          # Files to exclude from Docker build
└── src/                   # Source code
```

## Performance Optimization

The Docker setup includes:
- Multi-stage build (reduces image size)
- Nginx with gzip compression
- Static asset caching
- Optimized production build
- Alpine Linux base images (smaller size)

## Security

Security measures implemented:
- Non-root nginx process
- Security headers (X-Frame-Options, X-Content-Type-Options)
- XSS Protection
- Alpine Linux (minimal attack surface)
