# Проект Skyvito

Учебный проект на курсе 'Веб-разработчик' в школе Skypro

## Описание проекта

Сайт онлайн объявлений, аналогичный "Авито".

На сайте можно зарегистрироваться и получить доступ в личный кабинет.

Для незарегистрированного пользователя доступны страницы:

1. Просмотр объявлений
2. Просмотр профиля продавца
3. Просмотр отзывов о товаре

Для зарегистрированного пользователя, дополнительно доступно следующее:

1. Добавить объявление(название, описание, фото, цена)
2. Редактировать уже добавленное объявление
3. Доступ в личный кбинет с возможностью корректировать данные о себе (имя, фамилия, город, телефон, аватар)
4. Возможность оставлять комменатарии

## Использованные технологии

- Typescript
- React
- Styled Components
- RTK Query
- React Router
- React-Hook-Form
- Redux Toolkit

## Библиотеки

- React Image Gallery

## Как запустить проект

Проект состоит из двух частей: фронтенд и бэкенд.

### Фронтенд

1. Клонировать репозиторий

```
git clone https://github.com/JuliaMatsievich/sky-vito
```

2.Установить необходимые зависимости

```
npm install
```

3. Запустить приложение с помощью следующей команды

```
npm run start
```

Проект запустится по адресу: http://localhost:3000

### Бэкенд

Бэкенд часть находится в папке `backend` данного проекта

1. Для запуска бэкенда вам потребуется установить Docker.
2. Скачайте версию для своей операционной системы и запустите.
3. Далее следуйте инструкциям установщика.
4. После установки перезагрузите компьютер.
5. Запустите Docker с помощью ярлыка.
6. Через терминал перейдите в скачанную папку `backend`.
7. Запустите в терминале команду:

```
docker-compose -f docker-compose-backend.yaml up -d
```

9. После первого выполнения команды все образы подтянуться, но могут не запуститься, в этом случае повторно выполните команду:

```
docker-compose -f docker-compose-backend.yaml up -d
```

11. После этого бэкенд и Swagger будут доступны по адресу http://localhost:8090/
12. Чтобы остановить работу бэкенда выполните:docker-compose down
