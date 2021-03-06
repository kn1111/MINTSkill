/*
 * File: app/view/login.js
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

Ext.define('QuickStart.view.login', {
    extend: 'Ext.Container',
    alias: 'widget.login',

    requires: [
        'QuickStart.view.loginViewModel',
        'QuickStart.view.loginViewController',
        'Ext.form.Panel',
        'Ext.Label',
        'Ext.field.Text',
        'Ext.Button'
    ],

    controller: 'login',
    viewModel: {
        type: 'login'
    },

    items: [
        {
            xtype: 'formpanel',
            height: 250,
            margin: '100 0 0 0',
            zIndex: 0,
            items: [
                {
                    xtype: 'label',
                    style: 'font-size: 20px',
                    html: 'ログイン画面',
                    margin: '0 0 0 10',
                    padding: '0 0 10 0'
                },
                {
                    xtype: 'textfield',
                    margin: '0 0 0 10',
                    maxWidth: 300,
                    label: 'ユーザーID'
                },
                {
                    xtype: 'textfield',
                    margin: '0 0 0 10',
                    maxWidth: 300,
                    label: 'パスワード'
                },
                {
                    xtype: 'button',
                    margin: '0 0 0 10',
                    text: 'ログイン',
                    listeners: {
                        tap: 'onButtonTap'
                    }
                }
            ]
        }
    ]

});