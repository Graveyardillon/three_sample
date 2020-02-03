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
  
  // Create a cube
  const geometry = new THREE.BoxGeometry(500, 500, 500);
  const material = new THREE.MeshStandardMaterial({
    color: 0x0000ff
  });
  
  // Create a mesh
  const box = new THREE.Mesh(geometry, material);
  scene.add(box);
  
  // Create a direction light
  const light = new THREE.DirectionalLight(0xffffff);
  light.position.set(1, 1, 1);
  scene.add(light);
  
  renderer.render(scene, camera);

  tick();

  function tick() {
    requestAnimationFrame(tick);

    // 箱を回転させる
    box.rotation.x += 0.01;
    box.rotation.y += 0.01;

    // レンダリング
    renderer.render(scene, camera);
  }
}