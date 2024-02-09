import { useEffect, useState } from "react";

const routePrefixes = ["/Doomsday-algorithm-practice", "/test", "/"];

export default function useRoutePrefix(delimiter) {
  const [prefix, setPrefix] = useState("");

  useEffect(() => {
    let pathname = window.location.pathname;
    for (let i = 0; i < routePrefixes.length; i++) {
      let current = routePrefixes[i];
      if (pathname.startsWith(current)) {
        let delimited = current.endsWith("/");
        if (delimiter && !delimited) {
          current = current + "/";
        }
        else if (delimited && !delimiter) {
          current = current.slice(0, current.length - 1);
        }
        setPrefix(current);
        break;
      }
    }
  }, []);

  return [prefix];
}
