# MiniApp Telegram Medic
## Описание
MiniApp Telegram — это простое приложение, разработанное с использованием Django на бэкенде и React на фронтенде. Оно предоставляет интерфейс для взаимодействия с Telegram API.
## Особенности
- 🚀 Быстрая и отзывчивая работа
- 🔒 Безопасная аутентификация
- 🌐 Интуитивно понятный интерфейс

## Статус разработки
| Функциональность            | Статус        |
|-----------------------------|---------------|
| Работа с базой данных       | ✔️ Сделано    |
| Добавление записей          | ✔️ Сделано    |
| Начальный базовый фронтенд  | ✔️ Сделано    |
| Фронтенд под стиль Телеграм | ✔️ Сделано    |
| Профили                     | ✔️ Сделано    |
| Регистрация пользователей   | ✔️ Сделано | 


## Установка
### Требования
- Python 3.8 или выше
- Node.js 14 или выше
- npm 6 или выше
### Установка проекта
1. Клонируйте репозиторий:
   
   <code>git clone https://github.com/hollass/django-react-tg-miniapp-
   
   cd main</code>
   
2. Настройка бэкенда (Django):
   
   <code>pip install -r requirements.txt
   
   python main\manage.py migrate

   python main\manage.py runserver</code>

3. Настройка фронтенда (React):

     <code>cd main/frontend/templates
     
   npm install
      
   npm start</code>

4. Домен.

   Для работы в telegram нужно расшарить сервис в интернет. Если нет домена - com, ru и тд, можно воспользоваться <b>ngrok</b> или <b>localtunnel</b>

   <code>npm install -g localtunnel
   
   lt --subdomain testapp --port 3000</code>

   После этого получаем ссылку на мини-приложение.
   
