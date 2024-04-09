let login = prompt("Enter your message");
let message = (login == 'Employee')?'Hello':
    (login == 'director' ? 'Greeting':
        (login == '' ?'No login':''));
alert(message);