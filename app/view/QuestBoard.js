/*
 * File: app/view/QuestBoard.js
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

Ext.define('QuickStart.view.QuestBoard', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.questboard',

    requires: [
        'QuickStart.view.QuestBoardViewModel',
        'QuickStart.view.QuestBoardViewController',
        'Ext.grid.Grid',
        'Ext.grid.column.Column'
    ],

    controller: 'questboard',
    viewModel: {
        type: 'questboard'
    },

    items: [
        {
            xtype: 'grid',
            iconCls: 'x-fa fa-leaf',
            height: '100%',
            store: 'QuestStore',
            grouped: true,
            title: 'クエスト一覧',
            columns: [
                {
                    xtype: 'gridcolumn',
                    flex: 1,
                    width: 100,
                    dataIndex: 'name',
                    text: '依頼者'
                },
                {
                    xtype: 'gridcolumn',
                    flex: 1,
                    width: 100,
                    dataIndex: 'item',
                    text: '品目'
                },
                {
                    xtype: 'gridcolumn',
                    flex: 1,
                    width: 100,
                    dataIndex: 'reward',
                    text: '報酬'
                }
            ],
            listeners: {
                itemtap: 'onPopupForm'
            }
        },
        {
            xtype: 'grid',
            iconCls: 'x-fa fa-tasks',
            height: '100%',
            width: '100%',
            store: 'QuestStore',
            title: '受注済みクエスト一覧',
            columns: [
                {
                    xtype: 'gridcolumn',
                    flex: 1,
                    width: 100,
                    dataIndex: 'name',
                    text: '依頼者'
                },
                {
                    xtype: 'gridcolumn',
                    flex: 1,
                    width: 100,
                    dataIndex: 'reward',
                    text: '報酬'
                },
                {
                    xtype: 'gridcolumn',
                    flex: 1,
                    width: 100,
                    dataIndex: 'item',
                    text: '品目'
                }
            ]
        }
    ]

});