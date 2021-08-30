import React from "react";
import Sketch from "react-p5";
import {setupNoodles, drawNoodles} from "../controllers/noodlesController.js"
import {setupFlow, drawFlowField, drawFlowCircle} from "../controllers/flowController.js"
import {getRandomInt} from "../controllers/randomAnimationController"

//Values use to set the size of the canvas on the screen
let canvasHeight = window.innerHeight - 100;
let canvasWidth = window.innerWidth;

//Get a random number equals {min} or less than {max}
let randomAnimation = getRandomInt(1, 4);

// let textX = (canvasWidth / 2);
// let textY = (canvasHeight / 2);

export default function P5canvas(props) {
	/*
	//#region Name
	function drawName(p5) {
		p5.fill('rgb(0,0,0)');
		p5.textAlign(p5.CENTER);
		p5.textSize(35);
		p5.textFont('Helvetica');
		p5.text('Arthur Hassan', textX, textY);
	}
	//#endregion
	*/

	//#region Setup & Drawn
	const setup = (p5, canvasParentRef) => {
		p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef);
		p5.background('rgb(30, 30, 30)');

		switch (randomAnimation) {
			case 1:
				setupFlow(p5, canvasWidth, canvasHeight);
				break;
			case 2:
				setupFlow(p5, canvasWidth, canvasHeight);
				break;
			case 3:
				setupNoodles(p5, canvasWidth, canvasHeight);
				break;
			default:
				break;
		}
	};

	const draw = (p5) => {
		switch (randomAnimation) {
			case 1:
				drawFlowField(p5, canvasWidth, canvasHeight);
				break;
			case 2:
				drawFlowCircle(p5, canvasWidth, canvasHeight);
				break;
			case 3:
				drawNoodles(p5, canvasWidth, canvasHeight);
				break;
			default:
				break;
		}
		//drawName(p5);
	};
	//#endregion

	return <Sketch setup={setup} draw={draw} />;
};