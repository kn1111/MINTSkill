/*
 * File: app/view/acceptViewController.js
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

Ext.define('QuickStart.view.acceptViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.accept',

    onMygridChildtap: function(list, location, eOpts) {


        var record = location.record.data;

        Ext.Viewport.add({
            xtype: 'questacceptpopup',
            width: 400,
            record: record,
            viewModel : {
                data: {
                    quest: record
                }
            }
        });
    }

});