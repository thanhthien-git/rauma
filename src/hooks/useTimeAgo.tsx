import { useEffect, useState } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);
dayjs.locale("en");

export function useTimeAgo(time: Date | string | number, intervalMs = 60000) {
  const [value, setValue] = useState(() => dayjs(time).fromNow());

  useEffect(() => {
    setValue(dayjs(time).fromNow());
    const id = setInterval(() => {
      setValue(dayjs(time).fromNow());
    }, intervalMs);
    return () => clearInterval(id);
  }, [time, intervalMs]);

  return value;
}
