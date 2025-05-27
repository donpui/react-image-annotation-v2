import React, { ComponentType, useState, useEffect, useRef } from 'react';

interface MousePosition {
  pageY: number;
  pageX: number;
}

interface ElementData {
  elem: HTMLElement | null;
  e: MousePosition;
}

const isMouseOverElement = ({ elem, e }: ElementData): boolean => {
  if (!elem || typeof elem.getBoundingClientRect !== 'function') {
    return false;
  }
  const { pageY, pageX } = e;
  const { left, right, bottom, top } = elem.getBoundingClientRect();

  return pageX > left && pageX < right && pageY > top && pageY < bottom;
};

export interface IsMouseHoveringInjectedProps {
  innerRef: (el: HTMLElement | null) => void;
  isHoveringOver: boolean;
}

const isMouseHovering = <P extends object>(
  keyAsProp: string = 'isMouseHovering'
) => (
  DecoratedComponent: ComponentType<P & { [key: string]: IsMouseHoveringInjectedProps }>
): ComponentType<P> => {
  const FunctionalIsMouseHovering: React.FC<P> = (props) => {
    const [isHoveringOver, setIsHoveringOver] = useState<boolean>(false);
    const elRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
      const handleMouseMove = (event: globalThis.MouseEvent) => {
        const elem = elRef.current;
        const mousePos = { pageX: event.pageX, pageY: event.pageY };
        setIsHoveringOver(isMouseOverElement({ elem, e: mousePos }));
      };

      document.addEventListener('mousemove', handleMouseMove);

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
      };
    }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

    const injectedProps = {
      [keyAsProp]: {
        innerRef: (el: HTMLElement | null) => (elRef.current = el),
        isHoveringOver: isHoveringOver,
      },
    };

    return React.createElement(DecoratedComponent, {
      ...props,
      ...injectedProps,
    });
  };

  const componentName = DecoratedComponent.displayName || DecoratedComponent.name || 'Component';
  FunctionalIsMouseHovering.displayName = `IsMouseHovering(${componentName})`;

  return FunctionalIsMouseHovering;
};

export default isMouseHovering; 