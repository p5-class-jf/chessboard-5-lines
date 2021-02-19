// -------------------
//  Parameters and UI
// -------------------

const gui = new dat.GUI()
const params = {
    N: 8,
    Download_Image: () => save(),
}
gui.add(params, "N", 0, 50, 1)
gui.add(params, "Download_Image")

// -------------------
//       Drawing
// -------------------

function draw() {
    const N = params.N
    for (let k = 0; k < N*N; ++k) {
        fill((k + (N % 2 ? 0 : floor(k/N) % 2)) % 2 ? "white" : "black")
        rect((k%N) * width / N, floor(k/N) * height / N, width/N, height/N)
    }
}

// -------------------
//    Initialization
// -------------------

function setup() {
    p6_CreateCanvas()
}

function windowResized() {
    p6_ResizeCanvas()
}