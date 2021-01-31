# Introduction
This plugin is a quality assurance checker to make sure icons are configured properly for use in Figma and the code integration of the neo design system.

## What Does the Plugin Check?
The plugin checks a number of configurations including:
* color of icon and its frame
* frame size
* constraints applied
* export settings
* proper vector use
* uses category names

# How to Use
To run the plugin,

1. Install the plugin.
2. Open the Icons file and navigate to the page where the components are located.
3. From the menu, File -> Plugins -> QA Tester - Icons.
4. Once the file runs, you should see either a success or error message explaining what to fix.

# Making it Your Own
Create and add your rules by adjusting the variables and checks available.
* code.ts compiles the checks into one places and runs them
* export.ts checks export-related properties
* layer.ts checks the name and layering properties
* messages.ts includes a list of the various error messages
* visual.ts checks the sizing and appearance

