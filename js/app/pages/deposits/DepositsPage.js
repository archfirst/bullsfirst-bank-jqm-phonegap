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
 * app/pages/deposits/DepositsPage
 *
 * @author Naresh Bhatia
 */
/* global Camera:true */

define(
    [
        'app/framework/AlertUtil',
        'app/framework/BaseView'
    ],
    function(AlertUtil, BaseView) {
        'use strict';

        return BaseView.extend({
            initialize: function() {
                this.$el.find('.jsTakePictureButton').click(function(event) {

                    event.preventDefault();
                    if (!navigator.camera) {
                        AlertUtil.showAlert('Camera API not supported', 'Error');
                        return;
                    }

                    var options = {
                        quality: 50,
                        destinationType: Camera.DestinationType.DATA_URL,
                        sourceType: 1,      // 0:Photo Library, 1=Camera, 2=Saved Photo Album
                        encodingType: 0,    // 0=JPG 1=PNG
                        targetWidth: 300,
                        targetHeight: 300
                    };

                    navigator.camera.getPicture(
                        function(imageData) {
                            $('.jsCheckImage').html('<img src="data:image/jpeg;base64,' + imageData + '" />');
                        },
                        function() {
                            AlertUtil.showAlert('Error taking picture', 'Error');
                        },
                        options);

                    return false;
                });

                this.$el.find('.jsCheckCameraSupportButton').click(function(event) {

                    event.preventDefault();
                    if (navigator.camera) {
                        AlertUtil.showAlert('Camera API is supported', 'Info');
                    }
                    else {
                        AlertUtil.showAlert('Camera API not supported', 'Error');
                    }

                    return false;
                });
            }
        });
    }
);