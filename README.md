Инструкция

1. Клонировать проект из GitHub или скачать zip архив.
2. Открыть проект в среде разработки, добавить зависимости по запросу среды.
3. Если сервера с тестовой базой данных нет: открыть терминал в среде и ввести: "npm run testServer", перейти на пункт 5
4. Если сервер с тестовой базой данных есть: в файле "src/api/v1.js" установить соответствующее доменное имя и пути для запросов.
5. В новом терминале ввести команду "npm run buildAndDeploy" для развертывания приложения на локальном сервере.
6. После запуска перейти по отображенному адресу или ввести адрес хостинга приложения в строке браузера.