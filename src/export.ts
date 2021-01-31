//export checks

//import stuff
import * as msg from "./messages"

//the required formats needed for export
const formatReqs = [
    {format: "PNG", suffix: "@1", contentsOnly: true, constraint: {type: "SCALE", value: 1}},
    {format: "PNG", suffix: "@2", contentsOnly: true, constraint: {type: "WIDTH", value: 64}},
    {format: "PNG", suffix: "@3", contentsOnly: true, constraint: {type: "WIDTH", value: 96}},
    {format: "SVG", suffix: "", contentsOnly: true, svgIdAttribute: false}
]

var pass = {pass: true, message: ""}

//checks the export settings for the icon
export function checkExports(icon){

    var iconExports = icon.exportSettings

    //check if there are any export settings enabled for the icon
    if (iconExports.length === 0) {
        return {pass: false, message: msg.noExports}
    }
    else{
        //check that all correct exports are used
        for (var i in formatReqs) {
            var index = iconExports.findIndex(e => e.format === formatReqs[i].format && e.suffix === formatReqs[i].suffix)
            if (index === -1){
                return {pass: false, message: msg.missingExports + formatReqs[i].format + " " + formatReqs[i].suffix}
            }
            else {
                var check = checkExportSetting(iconExports[index], formatReqs[i])
                
                //if one of the conditions failed, exit the function and report
                if (check.pass === false){
                    return check
                }
            }
        }
        return pass
    }
}

//check that each export setting is configured correctly
function checkExportSetting(exportSetting, formatReq){

    //check that all the parameters line up as expected
    if (exportSetting.format === "PNG") {
        if (exportSetting.suffix != formatReq.suffix) {
            return {pass: false, message: msg.wrongSuffix + "PNG "+ formatReq.suffix}
        }
        else if (exportSetting.contentsOnly != formatReq.contentsOnly){
            return {pass: false, message: msg.contentsOnlyOff + "PNG "+ formatReq.suffix}
        }
        else if (exportSetting.constraint.type != formatReq.constraint.type || exportSetting.constraint.value != formatReq.constraint.value ){
            return {pass: false, message: msg.wrongExportConstraints}
        }
        else {
            return pass
        }
    }
    //SVG checks
    else{
        if (exportSetting.suffix != formatReq.suffix) {
            return {pass: false, message: msg.wrongSuffix + "SVG"}
        }
        else if (exportSetting.contentsOnly != formatReq.contentsOnly){
            return {pass: false, message: msg.contentsOnlyOff + "SVG"}
        }
        else if (exportSetting.svgIdAttribute != formatReq.svgIdAttribute){
            return {pass: false, message: msg.hasSvgAttribute}
        }
        else {
            return pass
        }
    }
}

