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
 * app/framework/BaseView
 *
 * This is a view base class built on top of the default Backbone.View.
 * As part lifecycle methods, it provides the facility to maintain a set
 * of child views, especially to avoid zombies.
 *
 * To use this view, you should call its `extend` method just like you would
 * extend the normal `Backbone.View`.
 *
 * @author Naresh Bhatia
 */
define(
    [
        'backbone'
    ],
    function(Backbone) {
        'use strict';

        return Backbone.View.extend({

            // Override the constructor to add per-instance configuration
            constructor: function() {
                // Create a per instance children property.
                // It is a map of unique child ids to child views.
                // The child id can be a number or string, e.g. the id of the associated model
                this.children = {};

                // Call super
                Backbone.View.apply(this, arguments);
            },

            addChild: function(id, child) {
                this.children[id] = child;
                return child;
            },

            // Destroys the view and all its children recursively, unbinding their events
            destroy: function() {
                this.destroyChildren();
                this.remove();
            },

            // Destroys all the children of this view recursively, unbinding their events
            destroyChildren: function() {
                var children = this.children;
                for (var id in children) {
                    if (children.hasOwnProperty(id)) {
                        children[id].destroy();
                        // console.log('destroyChild: ' + id);
                        delete children[id];
                    }
                }
            },

            // Destroys the specified child of this view, unbinding its events
            destroyChild: function(id) {
                var children = this.children;
                children[id].destroy();
                delete children[id];
            }
        });
    }
);