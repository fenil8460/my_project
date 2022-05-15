#!/bin/bash
#setup php and composer
php composer.phar dump-autoload
#change permissions to dir and files
chown -R root:www-data /var/www/html
chmod -R 777 /var/www/html
#create prodenvironment.txt file in public to check if it is in production
touch ./public/prodenvironment.txt
#remove extra files in www/html
rm Dockerfile docker-compose.yml default.conf start.sh .gitlab-ci.yml
#serve laravel after migrating and setting passport keys
php artisan passport:install || true
php artisan migrate
php artisan config:cache
#start cron and apache2
service cron start 
exec apachectl -D FOREGROUND
