# graphaholic
3-Dimensional Graphing Web Application

Jose - UI  
Clayton - Graphing  
Brieana - Data data.js  

## Graphing
The below javascript imports the library required for the animations. 
```
<script src='./js/three.min.js'></script>
```
The module `three` is the ThreeJS library (docs found [here](https://threejs.org/docs))used for visualization. It can be installed through the following:
```
$ curl https://threejs.org/build/three.min.js > three.min.js
```
This will install the library to your local environment by default (on Linux). The script may be different through Windows/OSX.

## Computer Algebra System (CAS)
The CAS currently used is `algebra.js`, documentation found [here](http://algebra.js.org/). In `index.html`, it is included via:
```
<script src='./js/algebra.min.js'></script>
```
This may be installed using the following Linux bash script:
```
$ curl http://algebra.js.org/javascripts/algebra-0.2.6.min.js > algebra.min.js
```
