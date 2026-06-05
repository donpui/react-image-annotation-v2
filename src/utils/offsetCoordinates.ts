const getMouseRelativeCoordinates = (e: MouseEvent, targetElement?: HTMLElement): { x: number; y: number } => {
    // nativeEvent.offsetX gives inconsistent results when dragging
    // up and to the left rather than the more natural down and to the
    // right. The reason could be browser implementation (it is still experimental)
    // or it could be that nativeEvent offsets are based on target rather than
    // currentTarget.
    // To keep consistent behavior of the selector use the bounding client rect.
    const element = targetElement || e.currentTarget as HTMLElement;
    
    if (!element || typeof element.getBoundingClientRect !== 'function') {
      return { x: 0, y: 0 }; // Return a default or handle error appropriately
    }

    const rect = element.getBoundingClientRect();
    const offsetX = e.clientX - rect.x;
    const offsetY = e.clientY - rect.y;

    return {
        x: offsetX / rect.width * 100,
        y: offsetY / rect.height * 100
    };
}

const clamp = (a: number, b: number, i: number): number => Math.max(a, Math.min(b, i))
const getTouchRelativeCoordinates = (e: TouchEvent): { x: number; y: number } => {
  if (!e.currentTarget || typeof (e.currentTarget as HTMLElement).getBoundingClientRect !== 'function') {
    return { x: 0, y: 0 }; // Return a default or handle error appropriately
  }
  const touch = e.targetTouches[0]

  const boundingRect = (e.currentTarget as HTMLElement).getBoundingClientRect()
  // https://idiallo.com/javascript/element-postion
  // https://stackoverflow.com/questions/25630035/javascript-getboundingclientrect-changes-while-scrolling
  const offsetX = touch.pageX - boundingRect.left
  const offsetY = touch.pageY - (boundingRect.top + window.scrollY)

  return {
    x: clamp(0, 100, (offsetX / boundingRect.width) * 100),
    y: clamp(0, 100, (offsetY / boundingRect.height) * 100)
  }
}

const getCoordPercentage = (e: MouseEvent | TouchEvent, targetElement?: HTMLElement): { x: number | null; y?: number } => {
  if (isTouchEvent(e)) {
    if (isValidTouchEvent(e)) {
      isTouchMoveEvent(e) && e.preventDefault()
      return getTouchRelativeCoordinates(e as TouchEvent)
    } else {
      return {
        x: null
      }
    }
  } else {
    return getMouseRelativeCoordinates(e as MouseEvent, targetElement)
  }
}

const isTouchEvent = (e: MouseEvent | TouchEvent): e is TouchEvent => (e as TouchEvent).targetTouches !== undefined
const isValidTouchEvent = (e: TouchEvent): boolean => e.targetTouches.length === 1
const isTouchMoveEvent = (e: TouchEvent): boolean => e.type === 'touchmove'

export { getMouseRelativeCoordinates as getOffsetCoordPercentage, getCoordPercentage }; 