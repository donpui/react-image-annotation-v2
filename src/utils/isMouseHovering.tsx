import React, { ComponentType, PureComponent } from 'react';

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
  type HocState = {
    isHoveringOver: boolean;
  };

  class IsMouseHovering extends PureComponent<P, HocState> {
    static displayName: string;
    private el: HTMLElement | null = null;

    constructor(props: P) {
      super(props);
      this.state = {
        isHoveringOver: false,
      };
    }

    componentDidMount() {
      document.addEventListener('mousemove', this.onMouseMove);
    }

    componentWillUnmount() {
      document.removeEventListener('mousemove', this.onMouseMove);
    }

    onMouseMove = (event: globalThis.MouseEvent) => {
      const elem = this.el;
      const mousePos = { pageX: event.pageX, pageY: event.pageY };
      this.setState({
        isHoveringOver: isMouseOverElement({ elem, e: mousePos }),
      });
    };

    render() {
      const injectedProps = {
        [keyAsProp]: {
          innerRef: (el: HTMLElement | null) => (this.el = el),
          isHoveringOver: this.state.isHoveringOver,
        },
      };
      
      return React.createElement(DecoratedComponent, {
        ...this.props,
        ...injectedProps,
      });
    }
  }

  const componentName = DecoratedComponent.displayName || DecoratedComponent.name || 'Component';
  IsMouseHovering.displayName = `IsMouseHovering(${componentName})`;

  return IsMouseHovering;
};

export default isMouseHovering; 