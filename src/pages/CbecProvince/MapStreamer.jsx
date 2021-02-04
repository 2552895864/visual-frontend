import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { useSpring, animated } from "react-spring";
import Pubsub from "pubsub-js";

import cityPositionOfHubei from "./options/streamer";
import styles from "./MapStreamer.module.less";

const getPosition = ({ x, y }) => ({ bottom: `${y}px`, left: `${x}px` });

const StreamerItem = ({ position, height, city, count, isWeak, rank = 9 }) => {
  const [bodyHeight, setBodyHeight] = useState(0);
  const streamerItemClass = classNames(styles.streamerItem, {
    [styles.streamerItemWeak]: isWeak,
  });

  const countAnimation = useSpring({
    from: { num: 0 },
    to: { num: count },
    delay: 1000,
  });
  const rankAnimation = useSpring({
    from: { num: 0 },
    to: { num: rank },
    delay: 1000,
  });
  useEffect(() => {
    let timer = setTimeout(() => {
      setBodyHeight(height);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <div className={streamerItemClass} style={getPosition(position)}>
      <animated.div className={styles.rank}>
        {rankAnimation.num.interpolate((x) => x.toFixed(0))}
      </animated.div>
      <div className={styles.value}>
        <animated.div className={styles.count}>
          {countAnimation.num.interpolate((x) => x.toFixed(0))}
        </animated.div>
        <div className={styles.city}>{city}</div>
      </div>
      <div
        className={styles.streamerBody}
        style={{ height: `${bodyHeight}px` }}
      ></div>
    </div>
  );
};

const MapStreamer = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [cityWeak, setCityWeak] = useState(false);
  // const getPosition = (event) => {
  //   const x = event.clientX - 623;
  //   const y = 700 - (event.clientY - 146);
  //   console.log("y:", y, " x:", x);
  // };

  useEffect(() => {
    let pubsub = Pubsub.subscribe("MapClick", (msg, data) => {
      const { city, show } = data;
      setSelectedCity(city);
      setCityWeak(show);
    });
    return () => {
      Pubsub.unsubscribe(pubsub);
    };
  }, []);
  return (
    <div
      className={styles.mapStreamer}
      // onClick={getPosition}
    >
      {cityPositionOfHubei.map((p) => (
        <StreamerItem
          key={p.city}
          position={p.position}
          city={p.city}
          height={200}
          count={123}
          isWeak={cityWeak && selectedCity !== p.city}
        />
      ))}
    </div>
  );
};

export default MapStreamer;
