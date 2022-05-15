FROM php:8.0-apache

# Install dependencies (php-ext and apache related)
RUN apt-get update && apt-get install -y \
    apt-utils zip unzip curl \
    nano vim git \
    libzip-dev \
    cron \
    libpng-dev libxpm-dev \
    apache2 libapache2-mod-wsgi-py3 && \
    a2enmod rewrite && \
    docker-php-ext-install pdo_mysql &&\
    docker-php-ext-install bcmath &&\
    docker-php-ext-install mysqli &&\
    docker-php-ext-configure zip && \
    docker-php-ext-install zip && \
    docker-php-ext-install exif && \
    apt-get install -y \
    libwebp-dev \
    libjpeg62-turbo-dev \ 
    libfreetype6-dev 

# Configure docker-php
RUN docker-php-ext-configure gd \
    --with-webp \
    --with-jpeg \
    --with-xpm \
    --with-freetype && \
    docker-php-ext-install -j$(nproc) gd && \
    docker-php-ext-enable gd && \
    rm -rf /tmp/* 

# Set working directory
WORKDIR /var/www/html/ 

# Install composer
RUN php -r "copy('https://getcomposer.org/installer','composer-setup.php');" \
    && php composer-setup.php \
    && php -r "unlink('composer-setup.php');"

# Copy contents to www/html
COPY . /var/www/html/    

# Install composer
RUN php composer.phar install

# Set permissions and use default.conf as apache2 config
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache /var/www/html/public

COPY default.conf /etc/apache2/sites-enabled/000-default.conf

# Expose on port 80 (Standard apache2 port)
EXPOSE 80

# Enable and rewrite Headers
RUN a2enmod rewrite headers

# Copy, set permissions and run script
COPY start.sh /usr/local/bin/start

RUN chmod u+x /usr/local/bin/start

CMD [ "/usr/local/bin/start" ]
