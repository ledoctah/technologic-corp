import { useCallback, useEffect, useState } from 'react';
import { FiChevronUp } from 'react-icons/fi';

import styles from './scrolltop.module.scss';

export const ScrollTop: React.FC = () => {
  const [isButtonDisplayed, setIsButtonDisplayed] = useState(false);

  const handleScroll = useCallback(() => {
    if (!isButtonDisplayed && window.pageYOffset >= 200) {
      setIsButtonDisplayed(true);
    } else if (isButtonDisplayed && window.pageYOffset < 200) {
      setIsButtonDisplayed(false);
    }
  }, [isButtonDisplayed]);

  function scrollBackToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    window.history.replaceState(null, null, ' ');
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <>
      {isButtonDisplayed && (
        <button
          type="button"
          className={styles.container}
          onClick={scrollBackToTop}
        >
          <FiChevronUp />
        </button>
      )}
    </>
  );
};
