import React, { useState, useEffect } from 'react';

var randomColor = function randomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0").toUpperCase();
};
var codeValue = "";
function Profile(_ref) {
  var _ref$length = _ref.length,
    length = _ref$length === void 0 ? 256 : _ref$length,
    borderColor = _ref.borderColor,
    _ref$resolution = _ref.resolution,
    resolution = _ref$resolution === void 0 ? 3 : _ref$resolution,
    _ref$shape = _ref.shape,
    shape = _ref$shape === void 0 ? 0 : _ref$shape,
    setValue = _ref.setValue,
    value = _ref.value,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? "white" : _ref$color;
  var _useState = useState([]),
    grids = _useState[0],
    setGrid = _useState[1];
  function generate() {
    var grids = [];
    var valueLength = 0;
    var values = factoriallike();
    function factoriallike() {
      for (var i = resolution; i >= 1; i--) {
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
    for (var i = 1; i <= resolution; i++) {
      var row = [];
      for (var j = 1; j <= resolution; j++) {
        row.push(0);
      }
      grids.push(row);
    }

    //for diagonals
    for (var _i = 0; _i < resolution; _i++) {
      grids[_i][_i] = values[_i];
    }

    //for left side
    var k = resolution;
    for (var _i2 = 1; _i2 < resolution; _i2++) {
      for (var _j = 0; _j < _i2; _j++) {
        grids[_i2][_j] = values[k];
        k++;
      }
    }

    //for right side
    k = resolution;
    for (var _i3 = 1; _i3 < resolution; _i3++) {
      for (var _j2 = 0; _j2 < _i3; _j2++) {
        grids[_j2][_i3] = values[k];
        k++;
      }
    }
    setGrid(grids);
    if (setValue != undefined) {
      setValue(values);
    }
  }
  function generateRandom() {
    var grids = [];
    var valueLength = 0;
    var values = factoriallike();
    codeValue = values;
    function factoriallike() {
      var temp = "";
      for (var i = resolution; i >= 1; i--) {
        valueLength += i;
      }
      for (var _i4 = 0; _i4 < valueLength; _i4++) {
        var num = (1 + parseInt(Math.random() * 100)) % 2;
        temp += num.toString();
      }
      return temp;
    }
    for (var i = 1; i <= resolution; i++) {
      var row = [];
      for (var j = 1; j <= resolution; j++) {
        row.push(0);
      }
      grids.push(row);
    }

    //for diagonals
    for (var _i5 = 0; _i5 < resolution; _i5++) {
      grids[_i5][_i5] = values[_i5];
    }

    //for left side
    var k = resolution;
    for (var _i6 = 1; _i6 < resolution; _i6++) {
      for (var _j3 = 0; _j3 < _i6; _j3++) {
        grids[_i6][_j3] = values[k];
        k++;
      }
    }

    //for right side
    k = resolution;
    for (var _i7 = 1; _i7 < resolution; _i7++) {
      for (var _j4 = 0; _j4 < _i7; _j4++) {
        grids[_j4][_i7] = values[k];
        k++;
      }
    }
    setGrid(grids);
    // setValues(values);
    if (setValue != undefined) {
      setValue(values);
    }
  }
  useEffect(function () {
    if (resolution == undefined) {
      resolution = 3;
    }
    generateRandom();
  }, [resolution]);
  useEffect(function () {
    if (value != undefined) {
      generate();
    } else {
      generateRandom();
    }
  }, [value]);
  return /*#__PURE__*/React.createElement("div", {
    // className={styles.logo}
    style: {
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
        transform: "rotate(45deg) scale(0.9)"
      }
    }
    // onClick={() => generateRandom()}
  }, /*#__PURE__*/React.createElement("div", {
    // className={styles.logo_border}
    style: {
      padding: borderColor != 2 ? "2%" : 0,
      borderRadius: shape == 0 ? "50%" : 0,
      backgroundImage: (typeof borderColor !== undefined ? borderColor : 0) === 0 ? "linear-gradient(-45deg,#996515, gold, #996515, gold,#996515)" : "linear-gradient(-45deg,darkgray, white, darkgray, white,darkgray)",
      height: "100%",
      width: "100%",
      position: "absolute",
      zIndex: "-1"
    }
  }), /*#__PURE__*/React.createElement("div", {
    // className={styles.withBg}
    style: {
      padding: length / Math.sqrt(2) / ((parseInt(resolution) + 1) * 2) + "px",
      display: "flex",
      position: "relative",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    // className={styles.logo_bg}
    style: {
      boxShadow: borderColor != 2 && length >= 150 ? "inset 0 0 10px white" : "none",
      backgroundColor: color ? color : "white",
      borderRadius: shape == 0 ? "50%" : 0,
      height: "100%",
      width: "100%",
      position: "absolute",
      filter: "saturate(0.7) invert(1)",
      backgroundImage: "linear-gradient(-45deg,rgba(255, 255, 255, 0.4),rgba(0, 0, 0, 0.3))"
    }
  }), /*#__PURE__*/React.createElement("div", {
    // className={styles.logo_inner}
    style: shape == 0 ? {
      padding: 0.2071 * length / Math.sqrt(2) + "px"
    } : {}
  }, grids.map(function (row, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i
      // className={styles.row}
      ,
      style: {
        display: "flex"
      }
    }, row.map(function (item, j) {
      return /*#__PURE__*/React.createElement("div", {
        key: j
        // className={styles.item}
        ,
        style: item == 1 ? {
          height: length / Math.sqrt(2) / (parseInt(resolution) + 1) + "px",
          backgroundColor: color ? color : "white",
          boxShadow: "0 0 10px " + (color ? color : "white"),
          opacity: "1",
          transform: "scale(1)",
          aspectRatio: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition: "all 1.4s"
        } : {
          height: length / Math.sqrt(2) / (parseInt(resolution) + 1) + "px",
          background: "transparent",
          opacity: "0",
          transform: "scale(0)",
          aspectRatio: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition: "all 1.4s"
        }
      });
    }));
  }))));
}

export { Profile, codeValue, randomColor };
//# sourceMappingURL=index.module.js.map
