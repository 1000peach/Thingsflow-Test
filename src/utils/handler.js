export const getFormattedInfo = (createdAt) => {
  const YMD = createdAt.split("T")[0];
  const formattedData = YMD.split("-");

  return `${formattedData[0]}년 ${formattedData[1]}월 ${formattedData[2]}일`;
};
