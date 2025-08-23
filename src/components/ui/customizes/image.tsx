import { useCallback, useEffect, useRef, useState } from "react";
import LogoLoader from "../loading/logo-loader";
import clsx from "clsx";

interface IProps {
  url?: string;
  className?: string;
  alt?: string;
}

export default function Image({ url, className, alt }: Readonly<IProps>) {
  const [loading, setLoading] = useState<boolean>(!!url);
  const imgRef = useRef<HTMLImageElement | null>(null);

  const handleLoading = useCallback(() => {
    setLoading(false);
  }, []);
  useEffect(() => {
    if (imgRef.current?.complete) {
      handleLoading();
    }
  }, [url]);

  return (
    <>
      {loading && <LogoLoader />}

      {url ? (
        <img
          ref={imgRef}
          src={url}
          alt={alt ?? ""}
          onLoad={handleLoading}
          className={clsx(
            "w-full h-full object-cover transition-opacity duration-500",
            loading ? "opacity-0" : "opacity-100",
            className
          )}
        />
      ) : (
        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
          No image
        </div>
      )}
    </>
  );
}
