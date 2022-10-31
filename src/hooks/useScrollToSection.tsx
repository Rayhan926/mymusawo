import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";
import useHeaderHeight from "./useHeaderHeight";
import { gsap } from "gsap";

const useScrollToSection = () => {
  const router = useRouter();
  const { headerHeight } = useHeaderHeight();

  const scrollHandler = useCallback(
    (path?: string) => {
      const hash = (path || router.asPath).split("#")[1];

      const dom = document.querySelector(`[data-id="${hash}"]`);
      if (!dom || typeof window === "undefined") return;

      gsap.to(window, {
        duration: 0.5,
        ease: "linear",
        scrollTo: {
          y: dom,
          offsetY: headerHeight + 20,
        },
      });
    },
    [headerHeight, router.asPath],
  );

  useEffect(() => {
    router.events.on("hashChangeComplete", scrollHandler);

    return () => {
      router.events.off("hashChangeComplete", scrollHandler);
    };
  }, [router.events, scrollHandler]);

  useEffect(() => {
    if (!headerHeight) return;

    setTimeout(() => {
      scrollHandler();
    }, 600);
  }, [headerHeight, scrollHandler]);

  return null;
};

export default useScrollToSection;
