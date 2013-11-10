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
 * app/pages/transactions/TransactionsPage
 *
 * @author Naresh Bhatia
 */
define(
    [
        'app/framework/BaseView',
        'app/pages/transactions/TransactionView',
        'iscroll'
    ],
    function(BaseView, TransactionView, Scroller) {
        'use strict';

        return BaseView.extend({
            initialize: function() {
                this.collection.bind('sync', this.render, this);

                // Set up references to page elements
                this.$tableWrapper = this.$el.find('.jsTxTableBodyWrapper');
                this.$header = this.$el.find('header');
                this.$tableHeader = this.$el.find('.table-header');

                // Setup iScroll
                this.scroller = new Scroller(this.$tableWrapper[0], {'hideScrollbar': true});

                // Fit table whenever the page shows
                var self = this;
                $('#transactions-page').on('pageshow', $.proxy(self.fitTable, self));
                $(window).resize($.proxy(self.fitTable, self));
            },

            fitTable: function() {
                // Set the table height
                var winHeight = $(window).height();
                var headerHeight = this.$header.outerHeight(true);
                var tableHeaderHeight = this.$tableHeader.outerHeight(true);
                var fixedSectionsHeight = headerHeight + tableHeaderHeight;
                this.$tableWrapper.height(winHeight - fixedSectionsHeight);

                // Refresh the scroller
                var scroller = this.scroller;
                setTimeout(function() {
                    scroller.refresh();
                }, 0);
            },

            render: function() {
                this.destroyChildren();

                var $tbody = this.$el.find('.jsTxTableBody');

                this.collection.each(function(model) {
                    var transactionView = new TransactionView({model: model});
                    this.addChild(model.id, transactionView);
                    $tbody.append(transactionView.render().$el);
                }, this);

                return this;
            }
        });
    }
);