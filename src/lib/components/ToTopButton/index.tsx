import React, { useState, useEffect } from 'react';

import { AnyStyledComponent } from 'styled-components';
import { MdKeyboardArrowUp } from 'react-icons/md';

import * as S from './styles';

interface IToTopButtonProps {
  idElement: string;
  reference: any;
  height: number;
  hoverColor?: string;
  className?: AnyStyledComponent;
}

/**
 * Botão que leva ao topo da página.
 * Coloque um Id em algum elemento que fica no topo da página.
 * Crie uma referencia do elemento em que voce quer que o botao apareça.
 * Coloque este componente em qualquer lugar no código.
 *
 * @param {string} idElement - Id do elemento do topo.
 * @param {any} reference - Referencia do elemento para disparar o botao.
 * @param {number} height - Configuração para aparecer o elemento.
 */
const ToTopButton: React.FC<IToTopButtonProps> = ({
  idElement,
  reference,
  className,
  hoverColor = 'grey',
  height,
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer: IntersectionObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].boundingClientRect.y <= height) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      },
      { threshold: 0 }
    );

    observer.observe(reference.current);

    // return () => {
    //   if (ref.current) {
    //     // @ts-ignore
    //     observer.unobserve(currentRef);
    //   }
    // };
  }, [reference, height]);

  return (
    <S.ToTop
      href={idElement}
      className={className}
      isVisible={visible}
      hoverColor={hoverColor}
    >
      <MdKeyboardArrowUp />
    </S.ToTop>
  );
};

export default ToTopButton;
