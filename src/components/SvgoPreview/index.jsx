import React from "react";
import { optimize } from "svgo/dist/svgo.browser.js";
import SvgPreview from '../SvgDemo';
import styles from "./index.module.css";

export default function SvgoPreview(props) {
  const { svg, svgoConfig } = props;

  const optimized = optimize(svg, svgoConfig).data;

  const initialSize = svg.length;
  const optimizedSize = optimized.length;
  const profit = 100 - (optimizedSize * 100) / initialSize;

  const initialUi = Math.round((initialSize / 1024) * 1000) / 1000 + " KiB"
  const optimizedUi = Math.round((optimizedSize / 1024) * 1000) / 1000 + " KiB"
  const directionUi = (profit < 0 ? "+" : "-");
  const profitUi = Math.abs(Math.round(profit * 10) / 10) + "%";

  return (
    <>
      <SvgPreview svg={optimized}/>
      <span className={styles.profit}>
        {initialUi} {directionUi} <span className={styles.highlight}>{profitUi}</span> = {optimizedUi}
      </span>
    </>
  );
}
