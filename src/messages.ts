//listing all messages used within the plugin here

/*** the one success message :) ***/

//all good
export const allClear: string = "All icons are good to go! 🚀"

/*** the many error messages possible ***/

//wrong page
export const noIcons: string = "⚠️ No icons detected! Run this plugin from the page containing the components."

//icon frame has fill
export const hasFill: string = " has a fill on the component frame"

//vector is not base/1000
export const wrongColor: string = " is not using base/1000 for the vector fill"

//frame size is not set to 32px
export const wrongFrameSize: string =  " does not have the frame size set to 32 x 32px"

//no export options are configured
export const noExports: string =  " does not have any export settings configured"

//an export option is missing
export const missingExports: string =  " is missing the export option "

//an export is using the wrong suffix
export const wrongSuffix: string =  " is not using the correct export suffix option for "

//an export does not have contents only enabled 
export const contentsOnlyOff: string =  " does not have export option 'Contents Only' enabled for "

//an export is not using the right constraints
export const wrongExportConstraints: string =  " is not using either 1x, 64w or 96w for the export constraint"

//an export is not using the right constraints
export const hasSvgAttribute: string =  " should not have 'include id attribute' enabled under the SVG export option"

//icon has more than one layer
export const tooManyLayers: string =  " has more than one layer in the component"

//icon inner layer is not a vector (frame or group)
export const notVector: string =  " has an inner layer which is a group or frame"

//icon inner layer has the wrong constraints applied
export const wrongConstraints: string =  " is not set to scale both vertically & horizontally"

//icon inner layer has the wrong constraints applied
export const hasAutoLayout: string =  " has autolayout turned on"

//icon has the wrong category name or spelling mistake
export const wrongSpelling: string =  " has the wrong category name is or is mispelled"