import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);
dayjs.locale("en");

/**
 * Convert a given time to a relative "time ago" string.
 * @param time Date, timestamp, or ISO string
 * @returns e.g., "2 minutes ago"
 */
export const timeAgo = (time: Date | string | number) => {
  return dayjs(time).fromNow();
};

export const toVND = (price: number) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price);
};

export const slugAndId = (productName: string, id: string) => {
  return `${productName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "")}.${id}`;
};
