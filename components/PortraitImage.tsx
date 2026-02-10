"use client";

import { useState } from "react";

type Props = { alt: string };

export function PortraitImage({ alt }: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className="w-full h-full bg-neutral-300 flex items-center justify-center text-neutral-500 text-xs"
        aria-hidden
      >
        —
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/portrait.jpg"
      alt={alt}
      className="w-full h-full object-cover"
      onError={() => setFailed(true)}
    />
  );
}
