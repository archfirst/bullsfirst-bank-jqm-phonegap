# bullsfirst-bank-jqm-phonegap

A mobile front-end for Bullsfirst Bank, based on jQuery Mobile and PhoneGap.

## Technology Stack
* jQuery Mobile
* PhoneGap
* Backbone.js
* RequireJS
* Handlebars
* iScroll

## Features
*	Live connection to the [Bullsfirst Bank Service](https://github.com/archfirst/bullsfirst-bank-service), a RESTful service exposing bank accounts and transactions.
*	Accounts screen: Uses the jQuery Mobile Listview with some custom styling.
*	Transactions screen: Demonstrates a scrolling table with a fixed header. Uses the iScroll plugin to achieve this. Also demonstrates the use of media queries to make the table responsive, adding/removing columns based on the width and orientation of the device.
*	Deposits screen: Use of the native camera API provided by PhoneGap. Also the native notifications dialog (tap on “Check Camera Support”).
*	A side panel with menus – activate by clicking the Menu button on the header bar.
*	Use of jQuery Mobile “Reflow Table” (select from the side panel) – provides a stacked presentation of a table by collapsing its columns.

## Live Demo
*	You can download the Android version of the app to your device from [here](http://archfirst.org/sites/default/files/sources/BfBank.apk). Make sure you allow installation of non-Market applications (Menu > Settings > Applications > Unknown sources).
*	You can view the web version of the app [here](http://archfirst.org/apps/bullsfirst-bank-jqm-phonegap/). The only difference is that it does not support the PhoneGap APIs for camera and native notifications.

## Known Issues
*	See issues list [here](https://github.com/archfirst/bullsfirst-bank-jqm-phonegap/issues).

