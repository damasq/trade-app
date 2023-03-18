let attemptsLeft = 3;

export function watchRefreshMessages() {
  const wsConnection = new WebSocket('ws://localhost:3000');

  wsConnection.onclose = function (event) {
    if (attemptsLeft-- > 0) {
      setTimeout(watchRefreshMessages, 3000);
    }
  };

  wsConnection.onerror = function (error) {
    console.log('Ошибка ', error);

    if (attemptsLeft-- > 0) {
      setTimeout(watchRefreshMessages, 3000);
    }
  };

  wsConnection.onmessage = function (event) {
    const data = JSON.parse(event.data);
    if (data.needRefresh) {
      location.reload();
    }
  };
}
