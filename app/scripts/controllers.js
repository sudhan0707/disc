/**
 * Equinix - Responsive Main Theme
 * Copyright 2015 
 *
 */

/**
 * MainCtrl - controller
 */
function MainCtrl() {
	
	this.report =  {
		title: 'Current Vs Predicted Revenue - IBX / Risk Profile View',
		periodMonth: ['6M', 'select'],
		metro: ['Silicon Valley','select'] ,
		currentMonth: ['Jan 2015','select']
	};

    this.helloText = 'Welcome in SeedProject';
    this.descriptionText = 'It is an application skeleton for a typical AngularJS web app. You can use it to quickly bootstrap your angular webapp projects and dev environment for these projects.';

};


angular
    .module('disc')
    .controller('MainCtrl', MainCtrl);