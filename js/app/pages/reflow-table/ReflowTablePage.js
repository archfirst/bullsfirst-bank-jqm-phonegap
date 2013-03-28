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
 * app/pages/reflow-table/ReflowTablePage
 *
 * @author Naresh Bhatia
 */
define(
    [
        'app/domain/Repository',
        'app/framework/BaseView',
        'app/pages/reflow-table/TransactionView'
    ],
    function(Repository, BaseView, TransactionView) {
        'use strict';

        return BaseView.extend({
            initialize: function() {
                this.collection.bind('sync', this.render, this);

                $('#reflow-table-page').on('pageshow', function() {
                    Repository.fetchTransactions(1);
                });
            },

            render: function() {
                this.destroyChildren();

                var $table = this.$el.find('.jsTransactionsTable');
                var $tbody = this.$el.find('.jsTransactionsTable tbody');

                this.collection.each(function(model) {
                    var transactionView = new TransactionView({model: model});
                    this.addChild(model.id, transactionView);
                    $tbody.append(transactionView.render().$el);
                }, this);

                // NOT WORKING: http://forum.jquery.com/topic/table-s-refresh-method-is-not-working
                // $table.table('refresh');

                return this;
            }
        });
    }
);