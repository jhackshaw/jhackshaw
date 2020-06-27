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

export const useActiveHash = (itemIds: string[]) => {
  const [activeHash, setActiveHash] = useState(``);

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
      observer.observe(document.getElementById(id) as Element);
    });

    return () => {
      itemIds.forEach(id => {
        observer.unobserve(document.getElementById(id) as Element);
      });
    };
  }, []);

  return `#${activeHash}`;
};
