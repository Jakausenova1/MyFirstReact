let State = {
  ChatPage: {
    dialogs: [
      { id: 1, name: "Алтынай" },
      { id: 2, name: "Анна" },
      { id: 3, name: "Жибек" },
      { id: 4, name: "Саша" },
      { id: 5, name: "Мээрим" },
      { id: 6, name: "Женя" },
    ],
    messages: [
      { id: 1, message: "Здравствуйте" },
      { id: 2, message: "Хотела заказать смузи" },
      { id: 3, message: "Есть ли у вас доставка?" },
      { id: 4, message: "Привет" },
      { id: 5, message: "Hi" },
    ],
  },
};

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
  };
  State.ChatPage.messages.push(newPost);
};

export default State;
