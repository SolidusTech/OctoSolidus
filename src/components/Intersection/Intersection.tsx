import React, { useEffect, useRef, useState } from 'react';
import { IIntersectionProps } from './Intersection.types';

import * as S from './styles';

/**
 * Adiciona uma div, quando o scroll chegar na div, executa o efeito para mostrar a div.
 * @param {AnyStyledComponent} className - Pode ser estilizado com StyledComponents.
 */
const Intersection: React.FC<IIntersectionProps> = ({
  children,
  className,
}) => {
  const ref = useRef<HTMLDivElement>(document.createElement('div'));
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer: IntersectionObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting === true) {
          setVisible(true);
        }
      },
      { threshold: 0, rootMargin: '-150px' }
    );

    observer.observe(ref.current);

    // return () => {
    //   if (ref.current) {
    //     // @ts-ignore
    //     observer.unobserve(currentRef);
    //   }
    // };
  }, []);

  return (
    <S.Container className={className} isVisible={visible} ref={ref}>
      {children}
    </S.Container>
  );
};

export default Intersection;
