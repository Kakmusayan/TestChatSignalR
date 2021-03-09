$(function () {

    $('#chatBody').show();
   // Ссылка на автоматически-сгенерированный прокси хаба
    var chat = $.connection.chatHub;
    // Объявление функции, которая хаб вызывает при получении сообщений
    chat.client.addMessage = function (message) {
        // Добавление сообщений на веб-страницу 
        $('#chatroom').append('</b>: ' + htmlEncode(message) + '</p>');
    };  

    // Кодирование тегов
    function htmlEncode(value) {
        var encodedValue = $('<div />').text(value).html();
        return encodedValue;
    }

 }
   


