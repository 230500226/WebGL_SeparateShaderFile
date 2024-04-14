# WebGL_SeparateShaderFile

This project is a simple demonstration of drawing a triangle using WebGL. The main logic of the program is contained in two files: `main.js` and `shader.js`.

## shader.js

In `shader.js`, we define the source code for the vertex and fragment shaders as JavaScript strings. These shaders are used to control the rendering of the triangle on the WebGL canvas.

Here's a brief explanation of what's happening in `shader.js`:

1. **Define the shaders**: We define two constants, `vertexCode` and `fragmentCode`, which hold the source code for the vertex and fragment shaders, respectively. These shaders are written in GLSL (OpenGL Shading Language).

```javascript
const vertexCode = `...`; // vertex shader source code
const fragmentCode = `...`; // fragment shader source code
export {vertexCode, fragmentCode}
```

2. **Import**: In Main.js import the 2 source code strings with
```javascript
import {vertexCode} from './shader.js';
import {fragmentCode} from './shader.js';
```

Now you can use vertexCode and fragmentCode as if you defined these strings within the mainjs file


