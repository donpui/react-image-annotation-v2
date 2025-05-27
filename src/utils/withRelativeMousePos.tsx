import { ComponentType, PureComponent } from 'react';
// import { getOffsetCoordPercentage, OffsetCoordinates } from './offsetCoordinates'; // OffsetCoordinates not exported
import { getOffsetCoordPercentage } from './offsetCoordinates'; // This is actually getMouseRelativeCoordinates
import React from 'react';

export interface RelativeMousePosInjectedProps {
  innerRef: (el: HTMLElement | null) => void;
  onMouseMove: (e: globalThis.MouseEvent) => void;
  onMouseLeave: (e: globalThis.MouseEvent) => void;
  onTouchMove: (e: globalThis.TouchEvent) => void;
  onTouchLeave: (e: globalThis.TouchEvent) => void;
  x: number | null;
  y: number | null;
}

const withRelativeMousePos = <P extends object, K extends string = 'relativeMousePos'>(
  keyAsProp: K = 'relativeMousePos' as K
) => (
  DecoratedComponent: ComponentType<P & { [propKey in K]: RelativeMousePosInjectedProps }>
): ComponentType<P> => {
  type HocState = {
    x: number | null;
    y: number | null;
  };

  type InjectedProps = { [propKey in K]: RelativeMousePosInjectedProps };

  class WithRelativeMousePos extends PureComponent<P, HocState> {
    static displayName: string;
    // this.container is implicitly used by getOffsetCoordPercentage via e.currentTarget
    // It must be the element to which the event listeners are attached.
    private container: HTMLElement | null = null; 

    constructor(props: P) {
      super(props);
      this.state = { x: null, y: null };
    }

    // This innerRef is for the HOC to get a reference to the DOM element.
    // The event handlers (onMouseMove, etc.) will be called on this element (the DecoratedComponent's root).
    // So, e.currentTarget in getOffsetCoordPercentage should be this element.
    _innerRef = (el: HTMLElement | null) => {
      this.container = el;
      // If the DecoratedComponent itself needs a ref, it should handle it separately.
      // Or the HOC could forward a ref using React.forwardRef.
    };

    _onMouseMove = (e: globalThis.MouseEvent) => {
      // getOffsetCoordPercentage uses e.currentTarget internally.
      // Ensure the event object e is correctly passed and its currentTarget is what's expected.
      const xystate = getOffsetCoordPercentage(e);
      this.setState(xystate as HocState);
    };

    _onTouchMove = (e: globalThis.TouchEvent) => {
      if (!this.container || e.targetTouches.length !== 1) return;
      const touch = e.targetTouches[0];
      
      const offsetParent = this.container.offsetParent as HTMLElement;
      if (!offsetParent) return;

      const offsetX = touch.pageX - offsetParent.offsetLeft;
      const offsetY = touch.pageY - offsetParent.offsetTop;

      const containerWidth = (this.container as HTMLImageElement).width; // More specific type if it's always an image
      const containerHeight = (this.container as HTMLImageElement).height;

      if (typeof containerWidth === 'number' && typeof containerHeight === 'number' && containerWidth > 0 && containerHeight > 0) {
        this.setState({
          x: (offsetX / containerWidth) * 100,
          y: (offsetY / containerHeight) * 100,
        });
      } else {
        this.setState({ x: null, y: null });
      }
    };

    _onMouseLeave = (e: globalThis.MouseEvent) => {
      this.setState({ x: null, y: null });
    };

    _onTouchLeave = (e: globalThis.TouchEvent) => {
      this.setState({ x: null, y: null });
    };

    render() {
      // These are the functions and values the DecoratedComponent will receive.
      // The actual event handlers for the DOM element are _onMouseMove etc.
      // The innerRef passed down is this HOC's _innerRef.
      const injected: RelativeMousePosInjectedProps = {
        innerRef: this._innerRef,       // Pass HOC's ref setter
        onMouseMove: this._onMouseMove, // Pass HOC's event handler
        onMouseLeave: this._onMouseLeave,
        onTouchMove: this._onTouchMove,
        onTouchLeave: this._onTouchLeave,
        x: this.state.x,
        y: this.state.y,
      };
      const hocProps = { [keyAsProp]: injected } as InjectedProps;

      // The DecoratedComponent is expected to attach these handlers (e.g. onMouseMove) to its own DOM elements,
      // and call innerRef with its root DOM element.
      return React.createElement(DecoratedComponent, {
        ...this.props as P,
        ...hocProps
      });
    }
  }

  const componentName = DecoratedComponent.displayName || DecoratedComponent.name || 'Component';
  WithRelativeMousePos.displayName = `withRelativeMousePos(${componentName})`;

  return WithRelativeMousePos;
};

export default withRelativeMousePos; 