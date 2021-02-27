import { useEffect } from "react";
import PubSub from "pubsub-js";
import gsap from "gsap";

/**
 *
 * @param {*} options 动画元素配置,refs：react ref数组，options：TweenValue动画配置 {refs:[ref1,ref2...],options:{}}
 * eg:{ refs: [refl1, refl2, refl3], options: { x: "-500px", stagger: 0.5 } }
 * @param {*} commonTweenValue 通用动画配置
 * @param {*} message 离场通知FLag ,配合PubSub
 */

export default function useCheckoutAnimate(options, commonTweenValue, message) {
  const getCurrent = (list) => {
    return list.map((el) => el.current);
  };
  useEffect(() => {
    options.forEach((i) => {
      const elementList = getCurrent(i.refs);
      elementList.map((ele) => {
        return gsap.set(ele, {
          x: ele.getBoundingClientRect().x,
          y: ele.getBoundingClientRect().y,
        });
      });
      gsap.from([elementList], {
        ...i.options,
        ...commonTweenValue,
      });
    });
  }, []);

  useEffect(() => {
    const pubsub_token = PubSub.subscribe(message, function () {
      options.forEach((i) => {
        const elementList = getCurrent(i.refs);
        gsap.to([elementList], {
          ...i.options,
          ...commonTweenValue,
        });
      });
    });
    return () => {
      PubSub.unsubscribe(pubsub_token);
    };
  }, [commonTweenValue, message, options]);
}
