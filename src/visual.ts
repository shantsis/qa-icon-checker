//visual checks

//import stuff
import * as msg from "./messages"

var pass = {pass: true, message: ""}

//check if the top layer has any fill - should be off
export function checkFrameFill(icon){

    //if there's a fill, the length > 0
    if (icon.fills.length == 0) {
        return pass
    }
    else {
        return {pass: false, message: msg.hasFill}
    }
}

//check if the vector uses base/1000 as the fill
export function checkVector(icon) {

    //for testing purposes: "S:a2bf879c682eb11ba11841c88cfbf3ad7b6ddafd,2:0"
    if (icon.children[0].fillStyleId == "S:7d0f6da8463371d6cbdc84a638718c38621e080d,306:59"){
        return pass
    }
    else {
        return {pass: false, message: msg.wrongColor}
    }
}

//check if the frame size is set to 32px
export function checkFrameSize(icon) {

    if (icon.width == 32 && icon.height == 32) {
        return pass
    }
    else {
        return {pass: false, message: msg.wrongFrameSize}
    }
}

