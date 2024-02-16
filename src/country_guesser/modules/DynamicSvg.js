import { Image } from "grommet";
import React, { useEffect, useState } from "react";
import { ReactComponent as DefaultSvg } from "../countries/loading.svg";

export function DynamicSvg({ svgName, failed, ...props }) {
  const [dynamicSvg, setDynamicSvg] = useState(null);

  useEffect(() => {
    const loadSvg = async () => {
      try {
        const dynamicSvgModule = await import(
          `../countries/${svgName}/vector.svg`
        );
        console.info(dynamicSvgModule);
        setDynamicSvg(() => dynamicSvgModule.default);
      } catch (error) {
        console.error(error);
        setDynamicSvg(DefaultSvg);
        failed();
      }
    };

    loadSvg();
  }, [svgName]);

  return (
    <div>
      {dynamicSvg === null ? <DefaultSvg {...props}/> : <Image src={dynamicSvg} {...props}/>}
    </div>
  );
}
