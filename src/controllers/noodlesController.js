let points = [];
let angleVelocity = 0.005;

export let setupNoodles = function (p5, canvasWidth, canvasHeight) {
    let density = 80;
    let space = canvasWidth / density;

    for (let i = 0; i < canvasWidth; i += space){
        for (let j = 0; j < canvasHeight; j += space){
            let p = p5.createVector(i, j);
            points.push(p);
        }
    }
};

export let drawNoodles = function (p5, canvasWidth, canvasHeight){
    p5.noStroke();
    p5.fill(255);

    for (let i = 0; i < points.length; i++) {

        let angle = p5.map(p5.noise(points[i].x * angleVelocity, points[i].y * angleVelocity),0, 1, 0, 720);

        let r =  p5.map(points[i].x, 0, canvasWidth, 50, 255);
        let g =  p5.map(points[i].y, 0, canvasHeight, 50, 255);
        let b =  p5.map(points[i].x, 0, canvasWidth, 255, 50);

        p5.fill(r, g, b);

        points[i].add(p5.createVector(p5.cos(angle), p5.sin(angle)));

        p5.ellipse(points[i].x, points[i].y, 2);
    }
};
