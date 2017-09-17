/*
 * File: app/view/QuestCancelPopup.js
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

Ext.define('QuickStart.view.QuestCancelPopup', {
    extend: 'Ext.form.Panel',
    alias: 'widget.questcancelpopup',

    requires: [
        'QuickStart.view.QuestAcceptPopupViewModel1',
        'QuickStart.view.QuestAcceptPopupViewController1',
        'Ext.field.Text',
        'Ext.Toolbar',
        'Ext.Button'
    ],

    config: {
        floating: true
    },

    controller: 'questcancelpopup',
    viewModel: {
        type: 'questcancelpopup'
    },
    centered: true,
    modal: true,
    title: '受注確認',

    items: [
        {
            xtype: 'container',
            height: 27,
            html: '以下のクエストの受注を取り消ししますか？',
            margin: 10
        },
        {
            xtype: 'textfield',
            bind: '{quest.requester}',
            name: 'name',
            margin: '0 10 0 10',
            label: '依頼者',
            clearable: false,
            editable: false
        },
        {
            xtype: 'textfield',
            bind: '{quest.missionContent}',
            name: 'item',
            margin: '0 10 0 10',
            label: '依頼内容',
            clearable: false,
            editable: false
        },
        {
            xtype: 'textfield',
            bind: '{quest.compensation}',
            name: 'reward',
            margin: '0 10 0 10',
            label: '報酬',
            clearable: false,
            editable: false
        },
        {
            xtype: 'toolbar',
            docked: 'bottom',
            items: [
                {
                    xtype: 'button',
                    iconCls: 'x-fa fa-check',
                    text: '受注取り消し',
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