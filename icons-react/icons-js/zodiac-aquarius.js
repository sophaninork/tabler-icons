import * as React from "react";

function IconZodiacAquarius({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg className="icon icon-tabler icon-tabler-zodiac-aquarius" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 10l3-3 3 3 3-3 3 3 3-3 3 3" /><path d="M3 17l3-3 3 3 3-3 3 3 3-3 3 3" /></svg>;
}

export default IconZodiacAquarius;