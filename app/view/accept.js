/*
 * File: app/view/accept.js
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

Ext.define('QuickStart.view.accept', {
    extend: 'Ext.grid.Grid',
    alias: 'widget.accept',

    requires: [
        'QuickStart.view.acceptViewModel',
        'QuickStart.view.acceptViewController',
        'Ext.grid.column.Column'
    ],

    config: {
        iconCls: 'x-fa fa-leaf'
    },

    controller: 'accept',
    viewModel: {
        type: 'accept'
    },
    height: '100%',
    itemId: 'accept',
    store: 'AcceptableQuestStore',
    grouped: true,
    title: '受注可能クエスト一覧',

    columns: [
        {
            xtype: 'gridcolumn',
            flex: 1,
            width: 100,
            dataIndex: 'requester',
            text: '依頼者'
        },
        {
            xtype: 'gridcolumn',
            flex: 1,
            width: 100,
            dataIndex: 'missionContent',
            text: '依頼内容'
        },
        {
            xtype: 'gridcolumn',
            flex: 1,
            width: 100,
            dataIndex: 'compensation',
            text: '報酬'
        }
    ],
    listeners: {
        childtap: 'onMygridChildtap'
    }

});