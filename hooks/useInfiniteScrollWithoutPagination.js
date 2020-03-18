import { useState, useEffect } from 'react';
import { debounce } from 'src/utils/debounce';

const STORY_INCREMENT = 10;

export const useInfiniteScroll = maxElements => {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(STORY_INCREMENT);

  const handleScroll = debounce(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      loading
    ) {
      return false;
    }

    setLoading(true);
  }, 500);

  useEffect(() => {
    if (!loading) return;

    if (count + STORY_INCREMENT >= maxElements) {
      setCount(maxElements);
    } else {
      setCount(count + STORY_INCREMENT);
    }

    setLoading(false);
  }, [loading]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { count };
};
