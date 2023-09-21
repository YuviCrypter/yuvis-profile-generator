import React, { useEffect, useState } from "react";

export const randomColor = () => {
  return (
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")
      .toUpperCase()
  );
};

export function randomValue(resolution = 2) {
  let valueLength = 0;

  function factoriallike() {
    let temp = "";
    for (let i = resolution; i >= 1; i--) {
      valueLength += i;
    }

    for (let i = 0; i < valueLength; i++) {
      let num = (1 + parseInt(Math.random() * 100)) % 2;

      temp += num.toString();
    }

    return temp;
  }

  const values = factoriallike();

  return values;
}

export function Profile({
  length = 256,
  borderColor,
  resolution = 3,
  shape = 0,
  setValue,
  value,
  color = "white",
}) {
  const [grids, setGrid] = useState([]);

  function generate() {
    let grids = [];

    let valueLength = 0;
    const values = factoriallike();

    function factoriallike() {
      for (let i = resolution; i >= 1; i--) {
        valueLength += i;
      }
      if (value != undefined && value.length >= valueLength) {
        return value.slice(0, valueLength);
      } else if (value.length == 0) {
        return "0";
      } else {
        return value;
      }
    }

    for (let i = 1; i <= resolution; i++) {
      let row = [];
      for (let j = 1; j <= resolution; j++) {
        row.push(0);
      }
      grids.push(row);
    }

    //for diagonals
    for (let i = 0; i < resolution; i++) {
      grids[i][i] = values[i];
    }

    //for left side
    let k = resolution;
    for (let i = 1; i < resolution; i++) {
      for (let j = 0; j < i; j++) {
        grids[i][j] = values[k];
        k++;
      }
    }

    //for right side
    k = resolution;
    for (let i = 1; i < resolution; i++) {
      for (let j = 0; j < i; j++) {
        grids[j][i] = values[k];
        k++;
      }
    }

    setGrid(grids);
    if (setValue != undefined) {
      setValue(values);
    }
  }

  function generateRandom() {
    let grids = [];

    let valueLength = 0;
    const values = factoriallike();

    function factoriallike() {
      let temp = "";
      for (let i = resolution; i >= 1; i--) {
        valueLength += i;
      }

      for (let i = 0; i < valueLength; i++) {
        let num = (1 + parseInt(Math.random() * 100)) % 2;

        temp += num.toString();
      }

      return temp;
    }

    for (let i = 1; i <= resolution; i++) {
      let row = [];
      for (let j = 1; j <= resolution; j++) {
        row.push(0);
      }
      grids.push(row);
    }

    //for diagonals
    for (let i = 0; i < resolution; i++) {
      grids[i][i] = values[i];
    }

    //for left side
    let k = resolution;
    for (let i = 1; i < resolution; i++) {
      for (let j = 0; j < i; j++) {
        grids[i][j] = values[k];
        k++;
      }
    }

    //for right side
    k = resolution;
    for (let i = 1; i < resolution; i++) {
      for (let j = 0; j < i; j++) {
        grids[j][i] = values[k];
        k++;
      }
    }

    setGrid(grids);
    if (setValue != undefined) {
      setValue(values);
    }
  }

  useEffect(() => {
    if (resolution == undefined) {
      resolution = 3;
    }
    generateRandom();
  }, [resolution]);

  useEffect(() => {
    if (value != undefined) {
      generate();
    } else {
      generateRandom();
    }
  }, [value]);

  return (
    <div
      style={{
        borderRadius: shape == 0 ? "50%" : 0,
        transform: "rotateZ(45deg)",
        width: "fit-content",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0 0 50px 10px rgba(0, 0, 0, 0.4)",
        ":active": {
          transform: "rotate(45deg) scale(0.9)",
        },
      }}
    >
      <div
        style={{
          padding: borderColor != 2 ? "2%" : 0,
          borderRadius: shape == 0 ? "50%" : 0,
          backgroundImage:
            (typeof borderColor !== undefined ? borderColor : 0) === 0
              ? "linear-gradient(-45deg,#996515, gold, #996515, gold,#996515)"
              : "linear-gradient(-45deg,darkgray, white, darkgray, white,darkgray)",

          height: "100%",
          width: "100%",
          position: "absolute",
          zIndex: "-1",
        }}
      ></div>
      <div
        style={{
          padding: `${
            length / Math.sqrt(2) / ((parseInt(resolution) + 1) * 2)
          }px`,

          display: "flex",
          position: "relative",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            boxShadow:
              borderColor != 2 && length >= 150
                ? "inset 0 0 10px white"
                : "none",
            backgroundColor: color ? color : "white",
            borderRadius: shape == 0 ? "50%" : 0,

            height: "100%",
            width: "100%",
            position: "absolute",
            filter: "saturate(0.7) invert(1)",
            backgroundImage:
              "linear-gradient(-45deg,rgba(255, 255, 255, 0.4),rgba(0, 0, 0, 0.3))",
          }}
        ></div>
        <div
          style={
            shape == 0
              ? {
                  padding: `${(0.2071 * length) / Math.sqrt(2)}px`,
                }
              : {}
          }
        >
          {grids.map((row, i) => (
            <div key={i} style={{ display: "flex" }}>
              {row.map((item, j) => (
                <div
                  key={j}
                  style={
                    item == 1
                      ? {
                          height: `${
                            length / Math.sqrt(2) / (parseInt(resolution) + 1)
                          }px`,
                          backgroundColor: color ? color : "white",
                          boxShadow: `0 0 10px ${color ? color : "white"}`,
                          opacity: "1",
                          transform: "scale(1)",

                          aspectRatio: 1,
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          transition: "all 1.4s",
                        }
                      : {
                          height: `${
                            length / Math.sqrt(2) / (parseInt(resolution) + 1)
                          }px`,
                          background: "transparent",
                          opacity: "0",
                          transform: "scale(0)",

                          aspectRatio: 1,
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          transition: "all 1.4s",
                        }
                  }
                ></div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
