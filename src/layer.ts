//layer checks

//import stuff
import * as msg from "./messages"

//variables
var pass = {pass: true, message: ""}
var categories = 
['account', 
'action', 
'alert', 
'communication', 
'content', 
'editor', 
'file', 
'logo', 
'navigation', 
'other',
'social',
'status',
'weather']

//check that there isn't more than one layer inside the component
export function checkNum(icon){
    if (icon.children.length === 1) {
        return pass
    }
    else {
        return {pass: false, message: msg.tooManyLayers}
    }
}

//check that the one layer is just a vector (not a group or frame)
export function checkGroups(icon){

    if (icon.children[0].type === "VECTOR"){
        return pass
    }
    else {
        return {pass: false, message: msg.notVector}
    } 
}

//check that the icon is set to scale
export function checkConstraints(icon){
    if (icon.children[0].constraints.horizontal === "SCALE" && icon.children[0].constraints.vertical === "SCALE"){
        return pass
    }
    else {
        return {pass: false, message: msg.wrongConstraints}
    } 
}

//check that the icon does not have autolayout on
export function checkAutoLayout(icon){
    if (icon.layoutMode === "NONE"){
        return pass
    }
    else {
        return {pass: false, message: msg.hasAutoLayout}
    } 
}

//check that the starting name matches one of the pre-defined categories
export function checkSpelling(icon){
    
    //get the category name
    var categoryName = icon.name.split("/")
    categoryName = categoryName[0]

    //check if it matches any of the pre-defined categories
    var index = categories.findIndex(e => e === categoryName)

    if (index != -1){
        return pass
    }
    else {
        return {pass: false, message: msg.wrongSpelling}
    } 
}