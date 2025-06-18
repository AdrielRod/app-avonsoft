export function getCurrentDate() {
  const date = new Date(new Date().toUTCString());

  const milliseconds = Date.UTC(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
  );

  const localTime = new Date(milliseconds);

  return localTime;
}
