FROM FROM wordpress:php8.0-apache

# Apacheの設定を追加
RUN echo "ServerName homepage-0192.onrender.com" >> /etc/apache2/apache2.conf

# WordPressの設定ファイルをコピー
COPY wordpress/wp-config.php /var/www/html/wp-config.php

# 必要なポートを公開
EXPOSE 80

# Apacheを再起動して設定を反映
CMD ["apache2-foreground"]
