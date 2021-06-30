import { useEffect, useState } from "react";
import { TOC } from "../queries";

export const getHeadingIds = (tocs: TOC[]): string[] => {
  const idList = [];

  for (const toc of tocs) {
    if (toc.url) {
      idList.push(toc.url.slice(1));
    }
    if (toc.items) {
      idList.push(...getHeadingIds(toc.items));
    }
  }

  return idList;
};

export const useActiveHash = (itemIds: string[]): string => {
  const [activeHash, setActiveHash] = useState(``);
  console.log(itemIds);
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveHash(entry.target.id);
          }
        });
      },
      { rootMargin: `0% 0% -90% 0%` }
    );

    itemIds.forEach(id => {
      const el = document.getElementById(id);
      el && observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return `#${activeHash}`;
};
