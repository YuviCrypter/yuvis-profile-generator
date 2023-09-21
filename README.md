---

# yuvis-profile-generator

A Profile Picture Icon Generator library that allows you to create random shapes with customizable colors for your application. Inspired by GitHub's profile picture style but with a unique twist.

## Installation

To get started, you can install the package using npm:

```bash
npm install yuvis-profile-generator
```

## Usage

Import the necessary objects from the library:

```javascript
import { Profile, randomColor, randomValue } from "yuvis-profile-generator";
```

### Profile Component

The `Profile` component is the core of the generator. You can customize your profile picture by passing various parameters as props.

```javascript
<Profile
  length={100}           // Integer value in pixels for the profile's dimensions.
  borderColor={0}        // 0 for a golden border, 1 for a silver border.
  resolution={4}         // Integer representing the resolution of the profile.
  shape={0}              // 0 for a circle profile, 1 for a rhombus shape.
  setValue={setCode}     // A function to change the value of the code. suppose you are using const [code, setCode] = useState("");
  value={"001011010101"} // A string of code containing 1s and 0s to generate the profile pattern.
  color={"red"}          // String value of the color's name or hex code (e.g., "red" or "#3FA").
/>
```

### randomColor

The `randomColor` function generates a random color and returns it as a string, which can be directly used in the `color` prop of the `Profile` component.

```javascript
<Profile color={randomColor()} />
```

### randomValue

The `randomValue` function generates a random code for the `Profile` generator. Ensure that the resolution provided to the `randomValue` function and the `Profile` component are the same.

Example:

```javascript
<Profile resolution={4} value={randomValue(4)} />
```

## Example

Here's a complete example of how to use this library to generate a random profile picture:

```javascript
import React, { useState } from "react";
import { Profile, randomColor, randomValue } from "yuvis-profile-generator";

function App() {
  const [code, setCode] = useState(randomValue(4));

  return (
    <div>
      <h1>Random Profile Picture</h1>
      <Profile
        length={100}
        borderColor={0}
        resolution={4}
        shape={0}
        setValue={setCode}
        value={code}
        color={randomColor()}
      />
    </div>
  );
}

export default App;
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

This library was inspired by GitHub's profile picture style and aims to provide a similar experience with added flexibility.

---
