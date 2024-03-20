import { useState, useEffect } from "react";

/**
 * Component that determines the screen width of the application
 * @param {string} query css property of screen size
 * @returns {boolean} Returns true if screen width matches the query, false if not
 * @example ReactMediaQuery("(min-width: 1025px)");
 */
function CheckMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
}

export default CheckMediaQuery;
