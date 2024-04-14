    const vertexCode = `
    precision mediump float;
    
    attribute vec3 vertexPosition;

    void main() {
    
       gl_Position = vec4(vertexPosition, 1.0);

    }`;

    const fragmentCode = `
    precision mediump float;

    void main() {
        gl_FragColor = vec4(0.8,0,0,1);
    }`;

export {vertexCode, fragmentCode}

