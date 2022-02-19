/* eslint-disable */
"use strict";

import EZSToggle from "./../../components/toggle.js";
import EZSLayoutStickyCard from "./sticky-card.js";
import EZSLayoutHeaderMenu from "./header-menu.js";
import EZSLayoutAsideMenu from "./aside-menu.js";
import { EZSCookie } from "./../../components/cookie.js";
import { EZSUtil } from "./../../components/util.js";

var EZSLayoutAsideToggle = function() {
    // Private properties
    var _body;
    var _element;
    var _toggleObject;

    // Initialize
    var _init = function() {
        if (EZSUtil.isBreakpointDown('lg') === true) {
            EZSUtil.addClass(_body, 'aside-minimize');
        }

        _toggleObject = new EZSToggle(_element, _body, {
            targetState: 'aside-minimize',
            toggleState: 'active',
        });

        _toggleObject.on('toggle', function(toggle) {
            // Update sticky card
            if (typeof EZSLayoutStickyCard !== 'undefined') {
                EZSLayoutStickyCard.update();
            }

            // Pause header menu dropdowns
            if (typeof EZSLayoutHeaderMenu !== 'undefined') {
                EZSLayoutHeaderMenu.pauseDropdownHover(800);
            }

            // Pause aside menu dropdowns
            if (typeof EZSLayoutAsideMenu !== 'undefined') {
                EZSLayoutAsideMenu.pauseDropdownHover(800);
            }
            // Remember state in cookie
            EZSCookie.setCookie('kt_aside_toggle_state', toggle.getState());
            // to set default minimized left aside use this cookie value in your
            // server side code and add "kt-primary--minimize aside-minimize" classes to
            // the body tag in order to initialize the minimized left aside mode during page loading.
        });

        _toggleObject.on('beforeToggle', function(toggle) {
            if (EZSUtil.hasClass(_body, 'aside-minimize') === false && EZSUtil.hasClass(_body, 'aside-minimize-hover')) {
                EZSUtil.removeClass(_body, 'aside-minimize-hover');
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

        getToggle: function() {
            return _toggleObject;
        },

        onToggle: function(handler) {
            if (typeof _toggleObject.element !== 'undefined') {
                _toggleObject.on('toggle', handler);
            }
        }
    };
}();

// Webpack support
if (typeof module !== 'undefined') {
    // module.exports = EZSLayoutAsideToggle;
}

export default EZSLayoutAsideToggle;