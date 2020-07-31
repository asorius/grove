import React from "react"

export default function Underliner({ h = 4, primary }) {
  return (
    <div
      style={{
        position: "absolute",
        height: h,
        width: "35%",
        margin: "0 auto",
        background: `${primary ? "#FFC11E" : "#6a41f2"}`,
        borderRadius: 5,
        left: "50%",
        transform: "translateX(-50%)",
        marginTop: ".5rem",
      }}
    ></div>
  )
}
