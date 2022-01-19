/* eslint-disable */
"use strict";

import { EZSUtil } from "./../../components/util.js";

var EZSLayoutBrand = function() {
    // Private properties
    var _element;

    // Private functions
    var _getHeight = function() {
        var height = 0;

        if (_element) {
            height = EZSUtil.actualHeight(_element);
        }

        return height;
    }

    // Public methods
    return {
        init: function(id) {
            _element = EZSUtil.getById(id);

            if (!_element) {
                return;
            }
        },

        getElement: function() {
            return _element;
        },

        getHeight: function() {
            return _getHeight();
        }
    };
}();

// Webpack support
if (typeof module !== 'undefined') {
    // module.exports = EZSLayoutBrand;
}

export default EZSLayoutBrand;