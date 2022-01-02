# О проекте
Это проект для выполнению тестового задания "карточки с лайками с открытого апи". Возможно, сделаю страницу about и там напишу подробнее.

## О сборке
"Чистая" сборка Webpack + TypeScript + React, основные инструменты:
- Webpack,
- TypeScript,
- React,
- Redux,
- Saga,
- React-Router,
- Bootstrap,
- SCSS,
- Axios,
- Jest,
- React Testing Library.

Для соблюдения чистоты кода используются ESLint и Prettier.

Переменные окружения берутся из файла .ENV (использован dotenv-webpack).

## Основные скрипты (yarn или npm ...)
- build - production сборка в dist
- build-n - production сборка с предварительным созданием файла .env на Netlify
- lint - eslint, только ошибки
- fix - eslint, исправление ошибок
- start - запуск дев-сервера, порт 3000
- start-prod - production сборка и запуск сервера express, порт 3030
- test - запуск тестов (Jest + RTL)
- test-c - запуск тестов + coverage + summary

## Деплой
### Netlify
Ветка master привязана на автоматический деплой после пуша на сервис Netlify. Переменные окружения, в этом случае, берутся из ENV сервиса, перед сборкой записываются в файл и при сборке берутся оттуда.

### gh-pages
Для деплоя на gh-pages создана отдельная ветка for-pages. На ней отключен роутер и добавлен пакет gh-pages. Деплой выполняется командой yarn deploy.
