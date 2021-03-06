/*
 * File: app/view/PopupForm.js
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

Ext.define('QuickStart.view.PopupForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.popupform',

    requires: [
        'QuickStart.view.PopupFormViewModel',
        'QuickStart.view.PopupFormViewController',
        'Ext.field.Text',
        'Ext.Toolbar',
        'Ext.Button'
    ],

    config: {
        floating: true
    },

    controller: 'popupform',
    viewModel: {
        type: 'popupform'
    },
    centered: true,
    modal: true,
    title: '受注確認',

    items: [
        {
            xtype: 'textfield',
            bind: '{quest.name}',
            name: 'name',
            label: '依頼者'
        },
        {
            xtype: 'textfield',
            bind: '{quest.item}',
            name: 'item',
            label: '品目'
        },
        {
            xtype: 'textfield',
            bind: '{quest.reward}',
            name: 'reward',
            label: '報酬'
        },
        {
            xtype: 'toolbar',
            docked: 'bottom',
            items: [
                {
                    xtype: 'button',
                    iconCls: 'x-fa fa-check',
                    text: '受注',
                    listeners: {
                        tap: 'submitUpdate'
                    }
                },
                {
                    xtype: 'button',
                    iconCls: 'x-fa fa-close',
                    text: 'キャンセル',
                    listeners: {
                        tap: 'cancelUpdate'
                    }
                }
            ]
        }
    ]

});