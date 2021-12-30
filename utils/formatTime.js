function formatTime(createdtime, updatedTime) {
  function format(time) {
    const date = new Date(time);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate() + 1;
    return `${year}/${month}/${day}`;
  }
  const cretedTimeFormated = format(createdtime);
  const updatedTimeFormated = format(updatedTime);

  let edited = cretedTimeFormated !== updatedTimeFormated;
  return updatedTimeFormated;
}
export default formatTime;
