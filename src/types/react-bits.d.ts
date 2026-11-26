declare module "@/components/Dither" {
  import type { ComponentType, CSSProperties } from "react";

  interface DitherProps {
    waveSpeed?: number;
    waveFrequency?: number;
    waveAmplitude?: number;
    waveColor?: [number, number, number];
    backgroundColor?: [number, number, number] | "transparent";
    colorNum?: number;
    pixelSize?: number;
    disableAnimation?: boolean;
    enableMouseInteraction?: boolean;
    mouseRadius?: number;
    ditherMode?:
      | "bayer"
      | "bayer4"
      | "bayer2"
      | "halftone"
      | "lines"
      | "crosshatch"
      | "noise"
      | "none";
    palette?: string[];
    scale?: number;
    contrast?: number;
    brightness?: number;
    mouseEffect?: "erase" | "reveal" | "ripple";
    mouseStrength?: number;
    trail?: number;
    clickRipple?: boolean;
    intro?: boolean;
    dpr?: number;
    className?: string;
    style?: CSSProperties;
  }

  const Dither: ComponentType<DitherProps>;
  export default Dither;
}

declare module "@/components/OrbitImages" {
  import type { ComponentType, ReactNode } from "react";

  interface OrbitImageSource {
    src: string;
    alt?: string;
  }

  interface OrbitImagesProps {
    images?: (string | OrbitImageSource)[];
    altPrefix?: string;
    shape?:
      | "ellipse"
      | "circle"
      | "square"
      | "rectangle"
      | "triangle"
      | "star"
      | "heart"
      | "infinity"
      | "wave"
      | "custom";
    customPath?: string;
    baseWidth?: number;
    radiusX?: number;
    radiusY?: number;
    radius?: number;
    starPoints?: number;
    starInnerRatio?: number;
    rotation?: number;
    duration?: number;
    itemSize?: number;
    direction?: "normal" | "reverse";
    fill?: boolean;
    width?: number | string;
    height?: number | string;
    className?: string;
    showPath?: boolean;
    pathColor?: string;
    pathWidth?: number;
    pathDash?: number;
    easing?: "linear" | "easeIn" | "easeOut" | "easeInOut";
    paused?: boolean;
    depth?: number;
    itemRadius?: number | string;
    shadow?: number;
    hoverScale?: number;
    hoverSpeed?: number;
    draggable?: boolean;
    clickToFront?: boolean;
    onItemClick?: (index: number, source: string) => void;
    alignToPath?: boolean;
    intro?: boolean;
    centerContent?: ReactNode;
  }

  const OrbitImages: ComponentType<OrbitImagesProps>;
  export default OrbitImages;
}
