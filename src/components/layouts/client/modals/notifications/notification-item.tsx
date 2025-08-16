import { useTimeAgo } from "@/hooks/useTimeAgo";
import { INotification } from "@/interfaces/INotification";

interface NotificationItemProps {
  props: Readonly<INotification>;
}

export default function NotificationItem({
  props,
}: Readonly<NotificationItemProps>) {
  const { content, time } = props;
  const timeAgo = useTimeAgo(time);

  return (
    <div className="flex items-start gap-3">
      <div className="flex-1">
        <p className="text-sm text-gray-800 leading-relaxed">{content}</p>
        <span className="text-xs text-gray-500 mt-1">{timeAgo}</span>
      </div>
    </div>
  );
}
