/*
 * File: app/view/BaseMenu.js
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

Ext.define('QuickStart.view.BaseMenu', {
    extend: 'Ext.Container',
    alias: 'widget.basemenu',

    requires: [
        'QuickStart.view.BaseMenuViewModel',
        'QuickStart.view.BaseMenuViewController',
        'QuickStart.view.order',
        'QuickStart.view.ordered',
        'QuickStart.view.accept',
        'QuickStart.view.accepted',
        'QuickStart.view.top',
        'Ext.TitleBar',
        'Ext.Button',
        'Ext.form.Panel',
        'Ext.grid.Grid'
    ],

    controller: 'basemenu',
    viewModel: {
        type: 'basemenu'
    },

    items: [
        {
            xtype: 'container',
            items: [
                {
                    xtype: 'titlebar',
                    docked: 'top',
                    title: 'DCS MINT',
                    layout: {
                        type: 'hbox',
                        align: 'center'
                    },
                    items: [
                        {
                            xtype: 'button',
                            ui: 'alt',
                            iconCls: 'fa-bars',
                            listeners: {
                                tap: 'onButtonTap'
                            }
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'container',
            activeItem: 4,
            height: '100%',
            itemId: 'maincontents',
            layout: {
                type: 'card',
                animation: false
            },
            items: [
                {
                    xtype: 'order'
                },
                {
                    xtype: 'ordered'
                },
                {
                    xtype: 'accept'
                },
                {
                    xtype: 'accepted'
                },
                {
                    xtype: 'top'
                }
            ]
        }
    ]

});