#!/bin/bash
set -e

echo "Deploying..."

#set the path to full permission
echo 'oto@git' | sudo -S chmod -R 755 /var/www/otomotives.com/oscar

# Enter maintenance mode or return true
# if already is in maintenance mode
(php8.1 artisan down) || true

# restore any changes
git restore .

# clear untracted files. currently was public files
git clean -f -d

# Pull the latest version of the app
git pull origin master

# Install composer dependencies
php8.1 /usr/local/bin/composer install -q --no-dev --no-interaction --prefer-dist --optimize-autoloader

# Clear the old cache
php8.1 artisan clear-compiled

# Recreate cache
php8.1 artisan optimize

# Install npm dependencies
npm install

# Compile npm assets
npm run build

# Run database migrations
# php8.1 artisan migrate --force

# Exit maintenance mode
php8.1 artisan up

echo "Copy public files... to root folder"
cp -r /var/www/otomotives.com/oscar/public/* /var/www/otomotives.com/oscar/

echo "Deployment finished!"
