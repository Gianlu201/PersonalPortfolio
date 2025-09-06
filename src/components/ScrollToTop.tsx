// src/components/ScrollToTop.tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type Props = {
  scrollRef?: React.RefObject<HTMLElement | null>;
  behavior?: ScrollBehavior;
};

export default function ScrollToTop({ scrollRef, behavior = 'auto' }: Props) {
  const { pathname } = useLocation();

  useEffect(() => {
    const el = scrollRef?.current;
    if (el) {
      el.scrollTo({ top: 0, behavior });
    } else {
      window.scrollTo({ top: 0, behavior });
    }
  }, [pathname, scrollRef, behavior]);

  return null;
}
