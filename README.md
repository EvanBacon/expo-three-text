# Expo Three.js Text

Example of using text in Expo

expo: https://exp.host/@bacon/3D-text
snack: https://snack.expo.io/@bacon/three-simple-text

Example:

<img src="./demo.gif" width="281" height="500" />

```js
const textMesh = new TextMesh();
textMesh.material = new THREE.MeshPhongMaterial({ color: 0x056ecf });
textMesh.update({
  text: 'Hey There :)',
  font: require('./three_fonts/neue_haas_unica_pro_medium.json'), // This accepts json, THREE.Font, or a uri to remote THREE.Font json
});
```

### Links

[Three.js TextBufferGeometry Docs](https://threejs.org/docs/#api/geometries/TextBufferGeometry)
[Three.js TextGeometry source](https://github.com/mrdoob/three.js/blob/master/src/geometries/TextGeometry.js)
[Web Demo](https://threejs.org/examples/webgl_loader_ttf.html)
[Expo Demo](https://exp.host/@bacon/3D-text)
[Expo Snack](https://snack.expo.io/@bacon/three-simple-text)
