## «CRUD TypeORM»

### Описание проекта:

CRUD по взаимодействию с пользователями и реляционной базой данных PostgreSQL по средствам платформы TypeORM и фреймворка Express.

### Стек технологий:
<img src="https://img.shields.io/badge/typescript-FFFFFF?style=for-the-badge&logo=typescript&logoColor=3178C6"/><img src="https://img.shields.io/badge/node.js-FFFFFF?style=for-the-badge&logo=node.js&logoColor=5FA04E"/><img src="https://img.shields.io/badge/express-FFFFFF?style=for-the-badge&logo=express&logoColor=000000"/><img src="https://img.shields.io/badge/typeorm-FFFFFF?style=for-the-badge&logo=typeorm&logoColor=FE0803"/><img src="https://img.shields.io/badge/PostgreSQL-FFFFFF?style=for-the-badge&logo=PostgreSQL&logoColor=4169E1"/>

### Как запустить проект:

##### Клонировать репозиторий и перейти в него в командной строке:

```
git clone https://github.com/Excellent-84/crud_typeorm.git
cd crud_typeorm
```

##### Создать файл .env и указать необходимые токены по примеру .env.example:
```
touch .env
```

##### Запустить проект:

```
npm run start
```

### Примеры запросов к API с помощью Postman:

##### Добавление пользователя в базу данных:

Во вкладке Body выбрать x-www-form-urlencoded.
В поле key указать name и age.
В поле value указать их значения.

Метод POST к эндпоинту   http://127.0.0.1:3000/users

Пример ответа:

```
{
    "id": 21,
    "name": "John",
    "age": 30
}
```

##### Получение списка пользователей:

Метод GET к эндпоинту   http://127.0.0.1:3000/users

Пример ответа:

```
[
    {
        "id": 1,
        "name": "John",
        "age": 30
    },
    {
        "id": 2,
        "name": "Jane",
        "age": 25
    },
    ...
]
```

##### Получение пользователя по 'id':

Метод GET к эндпоинту   http://127.0.0.1:3000/users/13

Пример ответа:

```
{
    "id": 13,
    "name": "John",
    "age": 30
}
```

##### Обновление данных пользователя:

Во вкладке Body выбрать x-www-form-urlencoded.
В поле key указать name и age.
В поле value указать их новые значения.

Метод PUT к эндпоинту   http://127.0.0.1:3000/users/21

Пример ответа:

```
{
    "id": 21,
    "name": "John Doe",
    "age": 30
}
```

##### Удаление пользователя из базы данных:

Метод DELETE к эндпоинту   http://127.0.0.1:3000/users/13



#### Автор: [Горин Евгений](https://github.com/Excellent-84)