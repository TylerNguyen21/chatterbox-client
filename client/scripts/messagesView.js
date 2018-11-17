var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

    App.fetch(MessagesView.renderMessage);
    // MessagesView.$chats.on('submit');
  },

  renderMessage: function(message) {
    MessagesView.$chats.prepend(`<p>${message.username}: 
      ${message.text} 
    </p>`);
  }

};
