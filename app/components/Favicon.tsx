import { useState } from "react";
import { GlobeIcon } from "lucide-react";
import Image from "next/image";

interface FaviconProps {
  data: any;
  size?: number;
  className?: string;
}

export default function Favicon({
  data,
  size = 16,
  className = "",
}: FaviconProps) {
  const [isErrorFavicon, setIsErrorFavicon] = useState(false);
  const onErrorFavicon = () => {
    setIsErrorFavicon(true);
  };
  const onLoadingCompleteFavicon = () => {
    setIsErrorFavicon(false);
  };
  return (
    <>
      {isErrorFavicon ? (
        <GlobeIcon size={size} className={className}></GlobeIcon>
      ) : (
        <Image
          src={"http://www.google.com/s2/favicons?domain=" + data.link}
          alt="Favicon"
          width={size}
          height={size}
          className={className}
          onLoadingComplete={onLoadingCompleteFavicon}
          onError={onErrorFavicon}
        />
      )}
    </>
  );
}
