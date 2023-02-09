export function watchRefreshMessages() {
  const wsConnection = new WebSocket('ws://localhost:3000');

  wsConnection.onclose = function (event) {
    setTimeout(watchRefreshMessages, 3000);
  };

  wsConnection.onerror = function (error) {
    console.log('Ошибка ', error);

    setTimeout(watchRefreshMessages, 3000);
  };

  wsConnection.onmessage = function (event) {
    const data = JSON.parse(event.data);
    if (data.needRefresh) {
      location.reload();
    }
  };
}
