window.addEventListener("DOMContentLoaded", init);

function init() {
  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#myCanvas")
  });
  
  const width = 960;
  const height = 540;
  renderer.setSize(width, height);
  renderer.setPixelRatio(window.devicePixelRatio);
  
  // Create a scene
  const scene = new THREE.Scene();
  
  // Create a camera
  const camera = new THREE.PerspectiveCamera(
    45, 
    width / height, 
    1, 
    10000
  );
  camera.position.set(0, 0, +1000)
  
  // Create a ellipsoid
  var geometry = new THREE.SphereGeometry( 150, 150, 150, 10 );
  geometry.applyMatrix4( new THREE.Matrix4().makeScale( 1.0, 1.0, 1.5 ) );
  const material = new THREE.MeshNormalMaterial();
  
  // Create a mesh
  const box = new THREE.Mesh(geometry, material);
  scene.add(box);
  
  // Create a direction light
  const light = new THREE.DirectionalLight(0xfafafa);
  light.position.set(1, 1, 1);
  light.intensity = 2.5
  scene.add(light);
  
  renderer.render(scene, camera);

  tick();

  function tick() {
    requestAnimationFrame(tick);

    //box.rotation.x += 0.01;
    box.rotation.y += 0.05;

    renderer.render(scene, camera);
  }
}