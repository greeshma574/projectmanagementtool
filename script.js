const tasksList = document.getElementById('tasks');
const messagesContainer = document.getElementById('messages');
const newMessageInput = document.getElementById('new-message');
const sendMessageButton = document.getElementById('send-message');

// Sample tasks and messages
const tasks = ['Task 1', 'Task 2', 'Task 3'];
const messages = ['Hello!', 'How are you?', 'Let\'s work on Task 1.'];

// Populate tasks list
tasks.forEach(task => {
  const taskItem = document.createElement('li');
  taskItem.textContent = task;
  tasksList.appendChild(taskItem);
});

// Display messages
messages.forEach(message => {
  const messageElement = document.createElement('div');
  messageElement.textContent = message;
  messagesContainer.appendChild(messageElement);
});

// Send a new message
sendMessageButton.addEventListener('click', () => {
  const newMessage = newMessageInput.value;
  if (newMessage) {
    const messageElement = document.createElement('div');
    messageElement.textContent = newMessage;
    messagesContainer.appendChild(messageElement);
    newMessageInput.value = '';
  }
});
