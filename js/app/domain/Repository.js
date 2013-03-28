/**
 * Copyright 2013 Archfirst
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * app/domain/Repository
 *
 * This is a singleton object that maintains the domain layer of the application.
 * Domain objects in this layer generally live beyond the life of views in the
 * presentation layer. When views are created, they are generally connected to
 * domain objects that are already present in this repository.
 *
 * @author Naresh Bhatia
 */

define(
    [
        'backbone'
    ],
    function(Backbone) {
        'use strict';

        // Module level variables act as singletons
        var _accounts = new Backbone.Collection();
        var _transactions = new Backbone.Collection();

        _accounts.url = 'http://archfirst.org/bullsfirst-bank/rest/accounts';
        _transactions.url = 'http://archfirst.org/bullsfirst-bank/rest/transactions';

        var _repository = {
            getAccounts: function() { return _accounts; },
            getTransactions: function() { return _transactions; },

            fetchAccounts: function() {
                _accounts.fetch();
            },

            fetchTransactions: function(accountId) {
                _transactions.fetch({data: {accountId: accountId}});
            }
        };

        return _repository;
    }
);