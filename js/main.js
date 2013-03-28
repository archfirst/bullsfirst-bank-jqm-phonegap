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
 * Application Entry Point
 *
 * @author Naresh Bhatia
 */
require(
    [
        'app/domain/Repository',
        'app/framework/HandlebarsUtil',
        'app/pages/accounts/AccountsPage',
        'app/pages/deposits/DepositsPage',
        'app/pages/login/LoginPage',
        'app/pages/reflow-table/ReflowTablePage',
        'app/pages/transactions/TransactionsPage',
        'jquery',
        'jquerymobile'
    ],
    function(Repository, HandlebarsUtil, AccountsPage, DepositsPage, LoginPage, ReflowTablePage, TransactionsPage, $) {
        'use strict';

        // Set default timeout for AJAX requests to 20 seconds
        // This should be done before instantiating the AppRouter,
        // because the initialization sequence fires AJAX requests
        $.ajaxSetup({timeout: 20000});

        // Register Handlebars helpers
        HandlebarsUtil.registerHelpers();

        new LoginPage({
            el: '#login-page'
        });
        new AccountsPage({
            el: '#accounts-page',
            collection: Repository.getAccounts()
        });
        new TransactionsPage({
            el: '#transactions-page',
            collection: Repository.getTransactions()
        });
        new ReflowTablePage({
            el: '#reflow-table-page',
            collection: Repository.getTransactions()
        });
        new DepositsPage({
            el: '#deposits-page'
        });
    }
);