# Vercel Environment Variables Setup Script
# Run this after your initial deployment to set up environment variables

Write-Host "Setting up Vercel environment variables..." -ForegroundColor Green

# Set production environment variables
vercel env add NODE_ENV production production
vercel env add SESSION_SECRET "<your-session-secret>" production
vercel env add POSTGRES_USER "<your-postgres-user>" production
vercel env add POSTGRES_PASSWORD "<your-postgres-password>" production
vercel env add POSTGRES_DB "<your-postgres-db>" production
vercel env add POSTGRES_HOST "<your-postgres-host>" production
vercel env add POSTGRES_PORT "<your-postgres-port>" production
vercel env add REDIS_USERNAME "<your-redis-username>" production
vercel env add REDIS_PASSWORD "<your-redis-password>" production
vercel env add REDIS_HOST "<your-redis-host>" production
vercel env add REDIS_PORT "<your-redis-port>" production
vercel env add REDIS_TLS "false" production

Write-Host "Environment variables setup complete!" -ForegroundColor Green
Write-Host "Now run: vercel --prod" -ForegroundColor Yellow