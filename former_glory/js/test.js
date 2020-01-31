function hide(hideId) {
                document.getElementById(hideId).style.display = "none";
            }
function unHide(unhideId) {
    document.getElementById(unhideId).style.display = "block";
}
function isAcceptableChar(ch) {
    if ((ch >= '0' && ch <= '9') || ch == ' ' || ch == '(' || ch == ')' || ch == '+' || ch == '-' || ch == '^' || ch == '/' || ch == '*' || ch == '=' || ch == 'x' || ch == 'y' || ch == 'z') {
        return true;
    }
        return false;
}  
function inputScrubbing() {
                var allEqs = [document.getElementById('test1').innerHTML,
                            document.getElementById('test2').innerHTML,
                            document.getElementById('test3').innerHTML,
                            document.getElementById('test4').innerHTML];
                //alert(eqPre);
                eqPost= ["","","",""];
                for(var i = 0; i < 4; i+=1) 
                {
                    var eqPre = allEqs[i];
                    console.log(eqPre);
                    
                    var paren = 0;
                    
                    for(var iter=0; iter < eqPre.length; iter++)
                    {
                        switch(eqPre[iter]) {
                            case ('s'):
                                if (iter+1 < eqPre.length) {
                                    switch(eqPre[iter + 1]) {
                                        case ('i'):
                                            if (iter+2 < eqPre.length) {
                                                if (eqPre[iter + 2] == 'n') {
                                                    eqPost[i] += "Math.sin";
                                                    iter += 2;
                                                }
                                            }
                                            break;
                                        case ('e'):
                                            if (iter+2 < eqPre.length) {
                                                if (eqPre[iter + 2] == 'c') {
                                                    eqPost[i] += "Math.sec";
                                                    iter += 2;
                                                }
                                            }
                                            break;
                                        case ('q'):
                                            if (iter+4 < eqPre.length) {
                                                if (eqPre[iter + 2] == 'r'){
                                                        if (iter+2 < eqPre.length) {
                                                            if(eqPre[iter+3] == 't') {
                                                                eqPost[i] += "Math.sqrt";
                                                            }
                                                        }
                                                }
                                            }
                                            break;
                                    }
                                }
                            break;
                            case ('c'):
                                if (iter+1 < eqPre.length) {
                                    switch(eqPre[iter + 1]) {
                                        case ('o'):
                                            if (iter+2 < eqPre.length) {
                                                if (eqPre[iter + 2] == 's') {
                                                    eqPost[i] += "Math.cos";
                                                    iter += 2;
                                                }
                                            }
                                            if (iter+2 < eqPre.length) {
                                                if (eqPre[iter + 2] == 't') {
                                                    eqPost[i] += "Math.cot";
                                                    iter += 2;
                                                }
                                            }
                                            break;
                                        case ('s'):
                                            if (iter+2 < eqPre.length) {
                                                if (eqPre[iter + 2] == 'c') {
                                                    eqPost[i] += "Math.csc";
                                                    iter += 2;
                                                }
                                            }
                                            break;
                                    }
                                }
                            break;
                            case ('l'):
                                if (iter+1 < eqPre.length) {
                                    switch(eqPre[iter+1]) {
                                        case('n'):
                                            eqPost[i] += "Math.log";
                                            iter += 1;
                                        }
                                    }
                            break;
                            case ('t'):
                                if (iter+1 < eqPre.length) {
                                    switch(eqPre[iter + 1]) {
                                        case ('a'):
                                            if (iter+2 < eqPre.length) {
                                                if (eqPre[iter + 2] == 'n') {
                                                    eqPost[i] += "Math.tan";
                                                    iter += 2;
                                                }
                                            }
                                            break;
                                    }
                                }
                            break;
                            case('e'):
                                if (((iter+1) < eqPre.length) && (eqPre[iter + 1])) {
                                    if (eqPre[iter+1] == '^') {
                                        eqPost[i] += "Math.exp(";
                                        iter++;
                                        paren++;
                                    }
                                    else eqPost[i] += "Math.exp(1)";
                                }
                                break;
                            case('π'):
                                eqPost[i] += "Math.pi";
                                break;
                            case('('):
                                paren++;
                            default:
                                //Recognize Exponents
                                if(iter+2 < eqPre.length) {
                                    if (eqPre[iter+1] == '^') {
                                        if (isAcceptableChar(eqPre[iter + 2])) {
                                            eqPost[i] += "Math.pow(" + eqPre[iter] + "," + eqPre[iter + 2] + ")";
                                            iter += 3;
                                        }
                                    }
                                }
                                //Recognize any final characters that aren't really special
                                if (isAcceptableChar(eqPre[iter])) {
                                    //console.log("Space/Number found!");
                                    if (eqPre[iter] == ")") {
                                        paren--;
                                    }
                                    eqPost[i] += eqPre[iter];
                                }
                                
                        }
                    }
                    while(paren > 0) {
                        eqPost[i] += ")";
                        paren--;
                        }
                   console.log(eqPost[i]);
           }
               return eqPost;
            }
function graphMe() {
    var userInput = inputScrubbing();
    var maxi = 10;
    var rate = .2;
    var colors = [0xaef6c7, 0x006daa, 0xb9d6f2, 0xa49e8d];
    //var userInput="Math.sin(x) + Math.cos(y)";

//var CANVAS_WIDTH = 1000;
//var CANVAS_HEIGHT = 600;


            var scene = new THREE.Scene();
			var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
            var canvas = document.getElementById("canvas");
			var renderer = new THREE.WebGLRenderer(canvas);
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );
                
                var scene = new THREE.Scene();
                scene.background = new THREE.Color(0x212922);
                
                var camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000);
                var controls = new THREE.OrbitControls(camera);
                camera.position.set(75,75,75);
                camera.fov = 60;

     //Axes
                var axesHelper = new THREE.AxesHelper(50);
                scene.add(axesHelper);
                
                var border = new THREE.LineBasicMaterial({color:0xdddddd});
                var borderGeometry = new THREE.Geometry();
                var bord = 60;
                borderGeometry.vertices.push(new THREE.Vector3(bord, bord, bord));
                borderGeometry.vertices.push(new THREE.Vector3(-1 * bord, bord, bord));
                borderGeometry.vertices.push(new THREE.Vector3(-1 * bord, -1 * bord, bord));
                borderGeometry.vertices.push(new THREE.Vector3(bord, -1 * bord, bord));
                borderGeometry.vertices.push(new THREE.Vector3(bord, bord, bord));
                
                borderGeometry.vertices.push(new THREE.Vector3(bord, bord, -1 * bord));
                borderGeometry.vertices.push(new THREE.Vector3(bord, -1 * bord, -1 * bord));
                borderGeometry.vertices.push(new THREE.Vector3(bord, -1 * bord, bord));
                borderGeometry.vertices.push(new THREE.Vector3(bord, -1 * bord, -1 * bord));
                
                borderGeometry.vertices.push(new THREE.Vector3(-1 * bord, -1 * bord, -1 * bord));
                borderGeometry.vertices.push(new THREE.Vector3(-1 * bord, bord, -1 * bord));
                borderGeometry.vertices.push(new THREE.Vector3(bord, bord, -1 * bord));
                borderGeometry.vertices.push(new THREE.Vector3(-1 * bord, bord, -1 * bord));
                
                borderGeometry.vertices.push(new THREE.Vector3(-1 * bord, bord, bord));
                borderGeometry.vertices.push(new THREE.Vector3(-1 * bord, -1 * bord, bord));
                borderGeometry.vertices.push(new THREE.Vector3(-1 * bord, -1 * bord, -1 * bord));
                
                var bLine = new THREE.Line(borderGeometry, border);
                scene.add(bLine);
                
                //Geometries
                
                for (var i = 0; i < 4; i+=1)
                {
                    var material = new THREE.PointsMaterial({color:colors[i]});
                    var geometry = new THREE.Geometry();
                    
                    for(var x = -1*maxi; x <= maxi; x += rate) {
                        for(var y = -1 * maxi; y <= maxi; y += rate) {
                            if ((5 * eval(userInput[i]) <= 5* maxi) && (5*eval(userInput[i]) >= -5* maxi)) {
                                var vertex = new THREE.Vector3();
                                
                                vertex.x = 5 * x;
                                vertex.y = 5 * eval(userInput[i]);
                                vertex.z = 5 * y;
                                
                                geometry.vertices.push(vertex);
                            }
                        }
                    }
                    var particles = new THREE.Points(geometry, material);
                    scene.add(particles);
                }
  
    function animate() {
        camera.lookAt(0,0,0);
        controls.update();
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }
    animate();
}
