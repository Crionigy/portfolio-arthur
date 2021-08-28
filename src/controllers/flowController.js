let points = [];
let angleVelocity = 0.005;

export let setupFlow = function(p5, canvasWidth, canvasHeight) {
    p5.angleMode(p5.DEGREES);
    p5.noiseDetail(1);

    // density: Aumenta a densidade de pontos iniciais na tela
    let density = 100;
    let space = canvasWidth / density;

    for (let i = 0; i < canvasWidth; i += space){
        for (let j = 0; j < canvasHeight; j += space){
            let p = p5.createVector(i + p5.random(-10, 10), j + p5.random(-10, 10));
            points.push(p);
        }
    }
}

export let drawFlowField = function(p5, canvasWidth, canvasHeight){
    p5.noStroke();

    for (let i = 0; i < points.length; i++) {

        let angle = p5.map(p5.noise(points[i].x * angleVelocity, points[i].y * angleVelocity),0, 1, 0, 720);

        let r =  p5.map(points[i].x, 0, canvasWidth, 50, 255);
        let g =  p5.map(points[i].y, 0, canvasHeight, 50, 255);
        let b =  p5.map(points[i].x, 0, canvasWidth, 255, 50);

        p5.fill(r, g, b);

        points[i].add(p5.createVector(p5.cos(angle), p5.sin(angle)));

        p5.ellipse(points[i].x, points[i].y, 2);
    }
}

export let drawFlowCircle = function(p5, canvasWidth, canvasHeight) {
    p5.noStroke();

    for (let i = 0; i < points.length; i++) {

        let angle = p5.map(p5.noise(points[i].x * angleVelocity, points[i].y * angleVelocity),0, 1, 0, 720);

        let r =  p5.map(points[i].x, 0, canvasWidth, 50, 255);
        let g =  p5.map(points[i].y, 0, canvasHeight, 50, 255);
        let b =  p5.map(points[i].x, 0, canvasWidth, 255, 50);

        p5.fill(r, g, b);

        points[i].add(p5.createVector(p5.cos(angle), p5.sin(angle)));


        if(p5.dist(canvasWidth / 2, canvasHeight / 2, points[i].x, points[i].y) < 400) {
            p5.ellipse(points[i].x, points[i].y, 2);	
        }
    }
}