//import * as THREE from './three.module.js';

//export function graph() {
function graph() {

  // Example provided from threejs.org
  var scene = new THREE.Scene();
  scene.background = new THREE.Color( 0xffffff );
  var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

  var renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

  var geometry = new THREE.BoxGeometry();
  var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  var cube = new THREE.Mesh( geometry, material );
  scene.add( cube );

  camera.position.z = 5;

  var animate = function () {
    requestAnimationFrame( animate );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render( scene, camera );
  };

  animate();
  console.log('graph function reached!');  

  var Fraction = algebra.Fraction;
  var Expression = algebra.Expression;
  var Equation = algebra.Equation;

  var frac = new Fraction(1, 2);
  console.log(frac.toString());

  frac = frac.add(new Fraction(3, 4));
  console.log(frac.toString());

  frac = frac.subtract(2);
  console.log(frac.toString());

  frac = frac.multiply(new Fraction(4, 3));
  console.log(frac.toString());

  frac = frac.divide(5);
  console.log(frac.toString());

  console.log('CAS tested!');
}

window.onload = function() {
  graph();
};
