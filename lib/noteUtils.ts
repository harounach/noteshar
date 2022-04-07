import dayjs from "dayjs";

export const formatNoteDate = (date: string) => {
  return dayjs(Number(date)).format("DD/MM/YYYY");
};
