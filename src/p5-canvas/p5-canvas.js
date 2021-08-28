import React from "react";
import Sketch from "react-p5";

let innerHeight = window.innerHeight - 100;
let innerWidth = window.innerWidth;

let textX = (innerWidth / 2);
let textY = innerHeight / 2;

let points = [];
let angleVelocity = 0.005;

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

let animation = getRandomInt(1, 4);

export default (props) => {

	//#region Noodles
	function setupNoodles(p5) {
		let density = 80;
		let space = innerWidth / density;

		for (let i = 0; i < innerWidth; i += space){
			for (let j = 0; j < innerHeight; j += space){
				let p = p5.createVector(i, j);
				points.push(p);
			}
		}
	}

	function drawNoodles(p5){
		p5.noStroke();
		p5.fill(255);

		for (let i = 0; i < points.length; i++) {

			let angle = p5.map(p5.noise(points[i].x * angleVelocity, points[i].y * angleVelocity),0, 1, 0, 720);

			let r =  p5.map(points[i].x, 0, innerWidth, 50, 255);
			let g =  p5.map(points[i].y, 0, innerHeight, 50, 255);
			let b =  p5.map(points[i].x, 0, innerWidth, 255, 50);

			p5.fill(r, g, b);

			points[i].add(p5.createVector(p5.cos(angle), p5.sin(angle)));

			p5.ellipse(points[i].x, points[i].y, 2);
		}
	}
	//#endregion

	//#region FlowField
	function setupFlowField(p5) {
		p5.angleMode(p5.DEGREES);
		p5.noiseDetail(1);

		// desity: Aumenta a densidade de pontos iniciais na tela
		let density = 100;
		let space = innerWidth / density;

		for (let i = 0; i < innerWidth; i += space){
			for (let j = 0; j < innerHeight; j += space){
				let p = p5.createVector(i + p5.random(-10, 10), j + p5.random(-10, 10));
				points.push(p);
			}
		}
	}

	function drawFlowField(p5, isBall){
		p5.noStroke();

		for (let i = 0; i < points.length; i++) {

			let angle = p5.map(p5.noise(points[i].x * angleVelocity, points[i].y * angleVelocity),0, 1, 0, 720);

			let r =  p5.map(points[i].x, 0, innerWidth, 50, 255);
			let g =  p5.map(points[i].y, 0, innerHeight, 50, 255);
			let b =  p5.map(points[i].x, 0, innerWidth, 255, 50);

			p5.fill(r, g, b);

			points[i].add(p5.createVector(p5.cos(angle), p5.sin(angle)));

			//Propriedade isBall serve apenas para criar um circulo fluido no centro da tela
			if(isBall){
				if(p5.dist(innerWidth / 2, innerHeight / 2, points[i].x, points[i].y) < 400) {
					p5.ellipse(points[i].x, points[i].y, 2);	
				}
			} else {
				p5.ellipse(points[i].x, points[i].y, 2);
			}
		}
	}
	//#endregion

	//#region Name
	function drawName(p5) {
		p5.fill('rgb(0,0,0)');
		p5.textAlign(p5.CENTER);
		p5.textSize(35);
		p5.textFont('Helvetica');
		p5.text('Arthur Hassan', textX, textY);
	}
	//#endregion

	//#region Setup & Drawn
	const setup = (p5, canvasParentRef) => {
		p5.createCanvas(innerWidth, innerHeight).parent(canvasParentRef);
		p5.background('rgb(30, 30, 30)');

		switch (animation) {
			case 1:
				setupFlowField(p5);
				break;
			case 2:
				setupFlowField(p5);
				break;
			case 3:
				setupNoodles(p5);
				break;
			default:
				break;
		}
	};

	const draw = (p5) => {
		switch (animation) {
			case 1:
				drawFlowField(p5, true);
				break;
			case 2:
				drawFlowField(p5);
				break;
			case 3:
				drawNoodles(p5);
				break;
			default:
				break;
		}
		drawName(p5);
	};
	//#endregion

	return <Sketch setup={setup} draw={draw} />;
};