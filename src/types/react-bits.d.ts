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
