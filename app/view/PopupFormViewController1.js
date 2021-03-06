/*
 * File: app/view/PopupFormViewController1.js
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

Ext.define('QuickStart.view.PopupFormViewController1', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.questcompletepopup',

    onContainerInitialize: function(component, eOpts) {
        var view = this.getView();
        record = view.config.record;

        if(record.acceptance === false ){
            component.hide();
        }
    },

    onContainerInitialize1: function(component, eOpts) {
        var view = this.getView();
        record = view.config.record;

        if(record.acceptance === true ){
            component.hide();
        }
    },

    submit: function(button, e, eOpts) {
        var view = this.getView();
        record = view.config.record;
        var tokenStore = Ext.getStore('UserDataStore');
        var token = tokenStore.getData().items["0"].data.token;
        var queststore = Ext.getStore('QuestStore');
        var obj = {"peers": ["13.113.98.75:7051"],"fcn":"complete","args":[record.number]};
        var authorization = 'Bearer '+token;
        var contractor = record.contractor;
        var compensation = record.compensation;
        //Encode Data
        var data = Ext.JSON.encode(obj);

        //Post Data
        Ext.Ajax.request({
            url : 'http://52.199.251.125:4000/channels/mychannel/chaincodes/skillgroup_cc2', // url : this.getUrl(),
            method : "POST",
            headers: {
                'authorization': authorization,
                'Content-Type': 'application/json'
            },
            params : data,

            useDefaultXhrHeader : false,
            success : function(response) {
                Ext.Ajax.request({
                    url : 'http://52.199.251.125:4000/channels/mychannel/chaincodes/skillgroup_cc2?peer=peer1&fcn=query&args=%5B%22a%22%5D', // url : this.getUrl(),
                    method : "GET",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': authorization
                    },

                    success : function(response) {
                        var jsonData = response.responseText;
                        console.log(jsonData);
                        var loadData = JSON.parse(jsonData);
                        console.log(loadData);
                        queststore.setData(loadData);
                        console.log(queststore);
                        Ext.Msg.alert('Success', contractor+'さんに報酬'+compensation+' leafを払いました。');
                    },
                    failure : function(response) {
                    Ext.Msg.alert('Error', '通信失敗');}
                });


            },
            failure : function(response) {
                Ext.Msg.alert('Error', 'POST Error',function()
                {
                    //action to complete when user clicks ok.
                });

            }});
            view.destroy();
    },

    onButtonInitialize: function(component, eOpts) {
        var view = this.getView();
        record = view.config.record;

        if(record.acceptance === false ){
            component.hide();
        }
    },

    delete: function(button, e, eOpts) {
        var view = this.getView();
        record = view.config.record;
        var tokenStore = Ext.getStore('UserDataStore');
        var token = tokenStore.getData().items["0"].data.token;
        var queststore = Ext.getStore('QuestStore');
        var obj = {"peers": ["13.113.98.75:7051"],"fcn":"delete","args":[record.number]};
        var authorization = 'Bearer '+token;
        //Encode Data
        var data = Ext.JSON.encode(obj);

        //Post Data
        Ext.Ajax.request({
            url : 'http://52.199.251.125:4000/channels/mychannel/chaincodes/skillgroup_cc2', // url : this.getUrl(),
            method : "POST",
            headers: {
                'authorization': authorization,
                'Content-Type': 'application/json'
            },
            params : data,

            useDefaultXhrHeader : false,
            success : function(response) {
                Ext.Ajax.request({
                    url : 'http://52.199.251.125:4000/channels/mychannel/chaincodes/skillgroup_cc2?peer=peer1&fcn=query&args=%5B%22a%22%5D', // url : this.getUrl(),
                    method : "GET",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': authorization
                    },

                    success : function(response) {
                        var jsonData = response.responseText;
                        console.log(jsonData);
                        var loadData = JSON.parse(jsonData);
                        console.log(loadData);
                        queststore.setData(loadData);
                        console.log(queststore);
                        Ext.Msg.alert('Success', 'クエストの依頼を取り消しました。',function()
                        {
                            //action to complete when user clicks ok.
                        });
                    },
                    failure : function(response) {
                        Ext.Msg.alert('Error', '通信失敗',function()
                        {
                            //action to complete when user clicks ok.
                        });}
                    });


                },
                failure : function(response) {
                    Ext.Msg.alert('Error', 'POST Error',function()
                    {
                        //action to complete when user clicks ok.
                    });

                }});
                view.destroy();
    },

    onButtonInitialize1: function(component, eOpts) {
        var view = this.getView();
        record = view.config.record;

        if(record.acceptance === true ){
            component.hide();
        }
    },

    cancel: function(button, e, eOpts) {
        var view = this.getView();
        view.destroy();
    }

});