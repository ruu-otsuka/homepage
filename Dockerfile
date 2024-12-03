FROM wordpress:latest
COPY wordpress/wp-config.php /var/www/html/wp-config.php
EXPOSE 80

