/*
 * File: app/store/MyAcceptedQuestStore.js
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

Ext.define('QuickStart.store.MyAcceptedQuestStore', {
    extend: 'Ext.data.ChainedStore',

    requires: [
        'Ext.util.Filter'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'MyAcceptedQuestStore',
            source: 'QuestStore',
            filters: {
                filterFn: function(item) {
                    var contractor = item.data.contractor;

                    if( contractor == "a"){
                        return true;
                    }else{
                        return false;
                    }
                }
            }
        }, cfg)]);
    }
});