import { ComponentType } from 'react';

type HOC<InProps, OutProps> = (component: ComponentType<InProps>) => ComponentType<OutProps>;

export function compose<A, B, C>(
  f: HOC<B, C>,
  g: HOC<A, B>
): HOC<A, C>;

export function compose<A, B, C, D>(
  f: HOC<C, D>,
  g: HOC<B, C>,
  h: HOC<A, B>
): HOC<A, D>;

export function compose(...funcs: Function[]) {
  if (funcs.length === 0) {
    return <T>(arg: T) => arg;
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce((a, b) => (...args: any[]) => a(b(...args)));
}

export default compose; 