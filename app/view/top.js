/*
 * File: app/view/top.js
 *
 * This file was generated by Sencha Architect version 4.2.0.
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

Ext.define('QuickStart.view.top', {
    extend: 'Ext.Container',
    alias: 'widget.top',

    requires: [
        'QuickStart.view.topViewModel',
        'Ext.Panel',
        'Ext.dataview.DataView',
        'Ext.XTemplate'
    ],

    viewModel: {
        type: 'top'
    },
    itemId: 'top',

    items: [
        {
            xtype: 'panel',
            height: 338,
            title: 'TOP',
            titleAlign: 'center',
            items: [
                {
                    xtype: 'dataview',
                    height: 43,
                    style: {
                        'font-size': '15px'
                    },
                    itemTpl: [
                        '<tpl><div>{Name}さんの現在の保有リーフは {Amount}です。</div></tpl>'
                    ],
                    store: 'LeafStore'
                }
            ]
        }
    ]

});