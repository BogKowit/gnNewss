export default function formatDateTime(dataTime: string, dataTimeFromRegion: string = "pl") {
  const dateTime = new Date(dataTime);
  const formattedDate = dateTime.toISOString().slice(0, 10);
  
  const formattedTime = dateTime.toLocaleTimeString("pl-PL", {
    hour12: false,
    hour: "numeric",
    minute: "numeric",
  });
  return `${formattedDate} ${formattedTime}`;
}
