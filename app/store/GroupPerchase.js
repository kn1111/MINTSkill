/*
 * File: app/store/GroupPerchase.js
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

Ext.define('QuickStart.store.GroupPerchase', {
    extend: 'Ext.data.Store',

    requires: [
        'QuickStart.model.GroupPerchase'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'GroupPerchaseStore',
            model: 'QuickStart.model.GroupPerchase',
            data: [
                {
                    number: 'eum',
                    requester: 'nobis',
                    wish: 'voluptas',
                    price: 'quam',
                    contractores: [
                        'nihil',
                        'aaaa',
                        'b'
                    ],
                    fund: 'aut',
                    complete: false,
                    numberOfContractors: 'iste'
                },
                {
                    number: 'dolorem',
                    requester: 'est',
                    wish: 'commodi',
                    price: 'delectus',
                    contractores: 'eius',
                    fund: 'ratione',
                    complete: true,
                    numberOfContractors: 'modi'
                },
                {
                    number: 'voluptatibus',
                    requester: 'nihil',
                    wish: 'fugiat',
                    price: 'est',
                    contractores: 'animi',
                    fund: 'vel',
                    complete: true,
                    numberOfContractors: 'sit'
                },
                {
                    number: 'perferendis',
                    requester: 'aut',
                    wish: 'labore',
                    price: 'vel',
                    contractores: 'minus',
                    fund: 'totam',
                    complete: false,
                    numberOfContractors: 'modi'
                },
                {
                    number: 'alias',
                    requester: 'quae',
                    wish: 'aut',
                    price: 'est',
                    contractores: 'quis',
                    fund: 'repellendus',
                    complete: true,
                    numberOfContractors: 'beatae'
                },
                {
                    number: 'voluptates',
                    requester: 'nostrum',
                    wish: 'inventore',
                    price: 'eos',
                    contractores: 'ut',
                    fund: 'accusantium',
                    complete: false,
                    numberOfContractors: 'qui'
                },
                {
                    number: 'labore',
                    requester: 'earum',
                    wish: 'sit',
                    price: 'quia',
                    contractores: 'eligendi',
                    fund: 'eum',
                    complete: true,
                    numberOfContractors: 'qui'
                },
                {
                    number: 'sint',
                    requester: 'autem',
                    wish: 'et',
                    price: 'quisquam',
                    contractores: 'est',
                    fund: 'quis',
                    complete: false,
                    numberOfContractors: 'ipsum'
                },
                {
                    number: 'et',
                    requester: 'consequatur',
                    wish: 'aut',
                    price: 'explicabo',
                    contractores: 'nemo',
                    fund: 'id',
                    complete: false,
                    numberOfContractors: 'nihil'
                },
                {
                    number: 'qui',
                    requester: 'sit',
                    wish: 'et',
                    price: 'dolores',
                    contractores: 'aut',
                    fund: 'provident',
                    complete: true,
                    numberOfContractors: 'harum'
                },
                {
                    number: 'similique',
                    requester: 'sequi',
                    wish: 'illo',
                    price: 'voluptates',
                    contractores: 'labore',
                    fund: 'iure',
                    complete: false,
                    numberOfContractors: 'aut'
                },
                {
                    number: 'impedit',
                    requester: 'qui',
                    wish: 'maiores',
                    price: 'iure',
                    contractores: 'dolor',
                    fund: 'aliquid',
                    complete: true,
                    numberOfContractors: 'molestias'
                },
                {
                    number: 'recusandae',
                    requester: 'commodi',
                    wish: 'delectus',
                    price: 'excepturi',
                    contractores: 'at',
                    fund: 'et',
                    complete: true,
                    numberOfContractors: 'molestiae'
                },
                {
                    number: 'sapiente',
                    requester: 'aut',
                    wish: 'facere',
                    price: 'eum',
                    contractores: 'earum',
                    fund: 'non',
                    complete: false,
                    numberOfContractors: 'dolorem'
                },
                {
                    number: 'molestiae',
                    requester: 'laborum',
                    wish: 'eius',
                    price: 'eaque',
                    contractores: 'velit',
                    fund: 'fugiat',
                    complete: true,
                    numberOfContractors: 'doloribus'
                },
                {
                    number: 'saepe',
                    requester: 'vel',
                    wish: 'voluptatum',
                    price: 'eveniet',
                    contractores: 'aspernatur',
                    fund: 'expedita',
                    complete: false,
                    numberOfContractors: 'omnis'
                },
                {
                    number: 'quo',
                    requester: 'et',
                    wish: 'tenetur',
                    price: 'expedita',
                    contractores: 'sapiente',
                    fund: 'placeat',
                    complete: true,
                    numberOfContractors: 'molestiae'
                },
                {
                    number: 'architecto',
                    requester: 'velit',
                    wish: 'et',
                    price: 'non',
                    contractores: 'eius',
                    fund: 'nesciunt',
                    complete: true,
                    numberOfContractors: 'deserunt'
                },
                {
                    number: 'veritatis',
                    requester: 'quis',
                    wish: 'omnis',
                    price: 'nisi',
                    contractores: 'deleniti',
                    fund: 'consectetur',
                    complete: false,
                    numberOfContractors: 'officiis'
                },
                {
                    number: 'culpa',
                    requester: 'perferendis',
                    wish: 'iste',
                    price: 'qui',
                    contractores: 'molestiae',
                    fund: 'ut',
                    complete: true,
                    numberOfContractors: 'consequuntur'
                },
                {
                    number: 'doloremque',
                    requester: 'nisi',
                    wish: 'voluptas',
                    price: 'occaecati',
                    contractores: 'sapiente',
                    fund: 'ut',
                    complete: false,
                    numberOfContractors: 'explicabo'
                },
                {
                    number: 'id',
                    requester: 'atque',
                    wish: 'distinctio',
                    price: 'doloribus',
                    contractores: 'est',
                    fund: 'commodi',
                    complete: false,
                    numberOfContractors: 'consectetur'
                },
                {
                    number: 'quo',
                    requester: 'ullam',
                    wish: 'rem',
                    price: 'eveniet',
                    contractores: 'quae',
                    fund: 'numquam',
                    complete: false,
                    numberOfContractors: 'consequuntur'
                },
                {
                    number: 'omnis',
                    requester: 'harum',
                    wish: 'eos',
                    price: 'numquam',
                    contractores: 'beatae',
                    fund: 'sunt',
                    complete: false,
                    numberOfContractors: 'dolorem'
                },
                {
                    number: 'hic',
                    requester: 'tempore',
                    wish: 'dolores',
                    price: 'non',
                    contractores: 'dolorum',
                    fund: 'enim',
                    complete: false,
                    numberOfContractors: 'nesciunt'
                },
                {
                    number: 'blanditiis',
                    requester: 'et',
                    wish: 'dolorem',
                    price: 'quasi',
                    contractores: 'mollitia',
                    fund: 'vero',
                    complete: true,
                    numberOfContractors: 'esse'
                },
                {
                    number: 'consequatur',
                    requester: 'dolorum',
                    wish: 'voluptatem',
                    price: 'adipisci',
                    contractores: 'rerum',
                    fund: 'omnis',
                    complete: true,
                    numberOfContractors: 'et'
                },
                {
                    number: 'pariatur',
                    requester: 'tempora',
                    wish: 'est',
                    price: 'qui',
                    contractores: 'nihil',
                    fund: 'placeat',
                    complete: true,
                    numberOfContractors: 'eos'
                },
                {
                    number: 'dolorem',
                    requester: 'minima',
                    wish: 'modi',
                    price: 'et',
                    contractores: 'eius',
                    fund: 'animi',
                    complete: false,
                    numberOfContractors: 'dignissimos'
                },
                {
                    number: 'dolor',
                    requester: 'laboriosam',
                    wish: 'ut',
                    price: 'omnis',
                    contractores: 'atque',
                    fund: 'assumenda',
                    complete: false,
                    numberOfContractors: 'perspiciatis'
                }
            ]
        }, cfg)]);
    }
});