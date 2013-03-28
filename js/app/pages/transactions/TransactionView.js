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
 * app/pages/transactions/TransactionView
 *
 * @author Naresh Bhatia
 */
define(
    [
        'app/framework/BaseView',
        'handlebars',
        'text!app/pages/transactions/TransactionTemplate.html'
    ],
    function(BaseView, Handlebars, TransactionTemplate) {
        'use strict';

        var _template = Handlebars.compile(TransactionTemplate);

        return BaseView.extend({
            tagName: 'tr',

            render: function() {
                var transaction = this.model.toJSON();
                this.$el.html(_template(transaction));
                return this;
            }
        });
    }
);