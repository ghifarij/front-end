"use client";

import { useState } from "react";
import { FaCheck, FaLink } from "react-icons/fa6";
import { useCopyToClipboard } from "usehooks-ts";

export default function CopyButton({ link }: { link: string }) {
  const [, copy] = useCopyToClipboard();
  const [copied, setCopied] = useState<boolean>(false);

  return (
    <div className="text-gray-700">
      <button
        onClick={() => {
          copy(link);
          setCopied(true);
          setTimeout(() => setCopied(false), 3000);
        }}
      >
        {copied ? <FaCheck /> : <FaLink />}
      </button>
    </div>
  );
}
