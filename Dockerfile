# Базовый образ с nginx
FROM nginx:alpine

# Удаляем дефолтную страницу nginx
RUN rm -rf /usr/share/nginx/html/*

# Копируем собранный Angular проект в папку nginx
COPY dist/product-editor/browser /usr/share/nginx/html

# Копируем свой nginx конфиг (необязательно)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Открываем порт 80
EXPOSE 80