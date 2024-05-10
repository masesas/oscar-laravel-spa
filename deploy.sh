#!/bin/bash
set -e

echo "Deploying..."

# Enter maintenance mode or return true
# if already is in maintenance mode
(php8.1 artisan down) || true

# Pull the latest version of the app
git pull 

# Install composer dependencies
php8.1 /usr/local/bin/composer install --no-dev --no-interaction --prefer-dist --optimize-autoloader

# Clear the old cache
php8.1 artisan clear-compiled

# Recreate cache
php8.1 artisan optimize

# Compile npm assets
npm run build

# Run database migrations
# php8.1 artisan migrate --force

# Exit maintenance mode
php8.1 artisan up

echo "Deployment finished!"
