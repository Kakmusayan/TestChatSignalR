using Microsoft.AspNet.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;


namespace MyChatSignalR.Hubs
{
    public class ChatHub : Hub
    {       
        // Отправка сообщений
        public void Send(string message)
        {
            Clients.All.addMessage(message);
        }       
    }
}