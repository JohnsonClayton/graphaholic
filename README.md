# graphaholic
3-Dimensional Graphing Web Application

Jose - UI  
Clayton - Graphing  
Brieana - Data data.js  

## Graphing
The below javascript imports the libraries required for the animations. 
```
import * as THREE from './three.module.js';
```
The module `three` is the ThreeJS library used for visualization. It can be installed through the following:
```
$ npm install three
```
This will install the library to `~/.npm` by default (on Linux). I've made a soft-linked file in `graphaholic/js/three.module.js` to point at `~/.npm/.../build/three.module.js`. However, you could just as easily move the file to the local space.

