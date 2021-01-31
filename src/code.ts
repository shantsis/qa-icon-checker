//import stuff
import * as msg from "./messages"
import * as visual from "./visual"
import * as exports from "./export"
import * as layer from "./layer"

//run the plugin
main()

function main() {

  //grab what's on the page
  var icons = figma.currentPage.children

  //check if icons are here (should only be main components)
  if (icons[0] === undefined || icons[0].type != "COMPONENT") {
    closePlugin(msg.noIcons)
    return
  }

  for (var icon of icons) {
    
    //template is an exception icon and should be skipped
    if (icon.name != "template") {
      
      //place the status of checks here
      var checks = []
      
      //run the checks
      checks.push(layer.checkGroups(icon))
      if (checks[0].pass === true) {
        checks.push(layer.checkNum(icon))
        checks.push(layer.checkAutoLayout(icon))
        checks.push(layer.checkSpelling(icon)) 
        checks.push(layer.checkConstraints(icon))
        checks.push(visual.checkFrameFill(icon))
        checks.push(visual.checkVector(icon))
        checks.push(visual.checkFrameSize(icon))
        checks.push(exports.checkExports(icon))
      }

      //if any of vars = true, return a msg based on
      var index = checks.findIndex(e => e.pass === false)

      if (index != -1) {
        closePlugin('⚠️ "' + icon.name + '"' + checks[index].message)
        return
      }
    }
  }

  //close the plugin
  closePlugin(msg.allClear)
  return

}

//close the plugin with a message
function closePlugin(message: string) {
  figma.closePlugin(message)
  return
}
