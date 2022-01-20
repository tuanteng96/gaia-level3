/* eslint-disable */
"use strict";

import { EZSUtil } from "./../../components/util.js";

var EZSLayoutHeader = function() {
    // Private properties
    var _element;
    var _elementForMobile;
    var _object;

    // Private functions
    // Get Height
    var _getHeight = function() {
        var height = 0;

        if (_element) {
            height = EZSUtil.actualHeight(_element) + 1;
        }

        return height;
    }

    // Get Height
    var _getHeightForMobile = function() {
        var height;

        height = EZSUtil.actualHeight(_elementForMobile);

        return height;
    }

    // Public Methods
    return {
        init: function(id, idForMobile) {
            _element = EZSUtil.getById(id);
            _elementForMobile = EZSUtil.getById(idForMobile);

            if (!_element) {
                return;
            }
        },

        isFixed: function() {
            return EZSUtil.hasClass(EZSUtil.getBody(), 'header-fixed')
        },

        isFixedForMobile: function() {
            return EZSUtil.hasClass(EZSUtil.getBody(), 'header-mobile-fixed')
        },

        getElement: function() {
            return _element;
        },

        getElementForMobile: function() {
            return _elementForMobile;
        },

        getHeader: function() {
            return _object;
        },

        getHeight: function() {
            return _getHeight();
        },

        getHeightForMobile: function() {
            return _getHeightForMobile();
        }
    };
}();

// Webpack support
if (typeof module !== 'undefined') {
    // module.exports = EZSLayoutHeader;
}

export default EZSLayoutHeader;