/*
 * File: app.js
 *
 * This file was generated by Sencha Architect version 4.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 6.5.x Modern library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 6.5.x Modern. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

// @require @packageOverrides
Ext.Loader.setConfig({

});


Ext.application({
    models: [
        'User',
        'Quest',
        'Leaf',
        'GroupPerchase'
    ],
    stores: [
        'UserDataStore',
        'QuestStore',
        'LeafStore',
        'MyOrderedQuestStore',
        'AcceptableQuestStore',
        'MyAcceptedQuestStore',
        'GroupPerchase'
    ],
    views: [
        'order',
        'QuestAcceptPopup',
        'QuestCompletePopup',
        'login',
        'top',
        'ordered',
        'accepted',
        'accept',
        'BaseMenu',
        'QuestCancelPopup',
        'Menu',
        'GroupPopup',
        'grouporder',
        'GroupPerchase'
    ],
    controllers: [
        'MyController'
    ],
    name: 'QuickStart',

    requires: [
        'Ext.MessageBox'
    ],

    launch: function() {
        Ext.create('QuickStart.view.login', {fullscreen: true});
    }

});
