# TableViewer

## Инструкция по конфигурации проекта
После клонирования репозитория необходимо для обоих директорий Frontend и Backend выполнить команду `npm i` в терминале. Далее необходимо разместить CSV файл по пути `./Backend/src/`.

## Инструкция по сборке контейнера
В корневой директории проекта в терминале необходимо выполнить команду `docker compose up --build`. После успешной сборки приложение будет работать по адресу `http://localhost:8085/` или равносильно `http://127.0.0.1:8085/`.

## Инструкция по работе с проектом на локальной машине

### Backend


### Frontend
Сначала вам нужно перейти в папку с Frontend-частью приложения: введите `cd Frontend` в терминале.

1. Чтобы собрать проект в режиме разработки, введите в терминале: `npm run build:dev`, собранный проект появится в папке «build».
2. Чтобы собрать проект для производства, введите в терминале: `npm run build:prod`.
3. Для сборки проекта в режиме *watch-mode* необходимо ввести в терминале: `npm run start`.
4. Для того чтобы проанализировать собранный проект, необходимо указать в терминале параметр: `-- --env analyzer=true`, например, для сборки и запуска проекта в *watch-mode* необходимо ввести: `npm run start -- --env analyzer=true`, если не указать параметр, то по умолчанию будет `analyzer=false`.
5. Чтобы запустить проект в *watch-mode* на определенном порту, нужно указать в терминале параметр `-- --env port=(номер порта)`, например, чтобы собрать и запустить проект на порту 5000 в *watch-mode*, нужно ввести: `npm run start -- --env port=5000`, если не указать параметр, **по умолчанию будет порт 3000**.
