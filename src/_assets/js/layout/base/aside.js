/* eslint-disable */
"use strict";

import { EZSUtil } from "./../../components/util.js";
import KTOffcanvas from "./../../components/offcanvas.js";

var EZSLayoutAside = function() {
    // Private properties
    var _body;
    var _element;
    var _offcanvasObject;



    // Private functions
    // Initialize
    var _init = function() {
        var offcanvasClass = EZSUtil.hasClass(_element, 'aside-offcanvas-default') ? 'aside-offcanvas-default' : 'aside';

        // Initialize mobile aside offcanvas
        _offcanvasObject = new KTOffcanvas(_element, {
            baseClass: offcanvasClass,
            overlay: true,
            closeBy: 'kt_aside_close_btn',
            toggleBy: {
                target: 'kt_aside_mobile_toggle',
                state: 'mobile-toggle-active'
            }
        });

    }

    // Public methods
    return {
        init: function(id) {
            _element = EZSUtil.getById(id);
            _body = EZSUtil.getBody();
            if (!_element) {
                return;
            }

            // Initialize
            _init();
        },

        getElement: function() {
            return _element;
        },

        getOffcanvas: function() {
            return _offcanvasObject;
        },

        isFixed: function() {
            return EZSUtil.hasClass(_body, 'aside-fixed');
        },

        isMinimized: function() {
            return (EZSUtil.hasClass(_body, 'aside-fixed') && EZSUtil.hasClass(_body, 'aside-minimize'));
        },

        isHoverable: function() {
            return (EZSUtil.hasClass(_body, 'aside-fixed') && EZSUtil.hasClass(_body, 'aside-minimize-hoverable'));
        }
    };
}();

// Webpack support
if (typeof module !== 'undefined') {
    // module.exports = EZSLayoutAside;
}

export default EZSLayoutAside;