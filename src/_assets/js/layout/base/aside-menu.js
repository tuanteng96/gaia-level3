/* eslint-disable */
"use strict";

import { EZSUtil } from "./../../components/util.js";
import EZSMenu from "./../../components/menu.js";
import EZSLayoutAside from "./aside.js";
import EZSLayoutBrand from "./brand.js";
import EZSLayoutSocial from "./social.js";

var EZSLayoutAsideMenu = function() {
    // Private properties
    var _body;
    var _element;
    var _menuObject;

    // Initialize
    var _init = function() {
        var menuDesktopMode = (EZSUtil.attr(_element, 'data-menu-dropdown') === '1' ? 'dropdown' : 'accordion');
        var scroll;
        if (EZSUtil.attr(_element, 'data-menu-scroll') === '1') {
            scroll = {
                rememberPosition: true, // remember position on page reload
                height: function() { // calculate available scrollable area height
                    var height = parseInt(EZSUtil.getViewPort().height);
                    if (EZSUtil.isBreakpointUp('lg')) {
                        height = height - EZSLayoutBrand.getHeight() - EZSLayoutSocial.getHeight();
                    }

                    height = height - (parseInt(EZSUtil.css(_element, 'marginBottom')) + parseInt(EZSUtil.css(_element, 'marginTop')));

                    return height;
                }
            };
        }

        _menuObject = new EZSMenu(_element, {
            // Vertical scroll
            scroll: scroll,

            // Submenu setup
            submenu: {
                desktop: menuDesktopMode,
                tablet: 'accordion', // menu set to accordion in tablet mode
                mobile: 'accordion' // menu set to accordion in mobile mode
            },

            // Accordion setup
            accordion: {
                expandAll: false // allow having multiple expanded accordions in the menu
            }
        });
    }

    var _initHover = function() {
        // Handle Minimized Aside Hover
        if (EZSUtil.hasClass(_body, 'aside-fixed') && EZSUtil.hasClass(_body, 'aside-minimize-hoverable')) {
            var insideTm;
            var outsideTm;

            // Handle Aside Hover Mode
            EZSUtil.addEvent(_element, 'mouseenter', function(e) {
                e.preventDefault();

                if (EZSUtil.isBreakpointUp('lg') === false) {
                    return;
                }

                if (outsideTm) {
                    clearTimeout(outsideTm);
                    outsideTm = null;
                }

                if (insideTm) {
                    clearTimeout(insideTm);
                    insideTm = null;
                }

                insideTm = setTimeout(function() {
                    if (EZSUtil.hasClass(_body, 'aside-minimize') && EZSUtil.isBreakpointUp('lg')) {
                        // Hover class
                        EZSUtil.addClass(_body, 'aside-minimize-hover');

                        EZSLayoutAsideMenu.getMenu().scrollUpdate();
                        EZSLayoutAsideMenu.getMenu().scrollTop();
                    }
                }, 50);
            });

            EZSUtil.addEvent(EZSLayoutAside.getElement(), 'mouseleave', function(e) {
                e.preventDefault();

                if (EZSUtil.isBreakpointUp('lg') === false) {
                    return;
                }

                if (insideTm) {
                    clearTimeout(insideTm);
                    insideTm = null;
                }

                if (outsideTm) {
                    clearTimeout(outsideTm);
                    outsideTm = null;
                }

                outsideTm = setTimeout(function() {
                    if (EZSUtil.hasClass(_body, 'aside-minimize-hover') && EZSUtil.isBreakpointUp('lg')) {
                        EZSUtil.removeClass(_body, 'aside-minimize-hover');

                        // Hover class
                        EZSLayoutAsideMenu.getMenu().scrollUpdate();
                        EZSLayoutAsideMenu.getMenu().scrollTop();
                    }
                }, 100);
            });
        }
    }

    // Public methods
    return {
        init: function(id) {
            _body = EZSUtil.getBody();
            _element = EZSUtil.getById(id);

            if (!_element) {
                return;
            }

            // Initialize menu
            _init();
            _initHover();
        },

        getElement: function() {
            return _element;
        },

        getMenu: function() {
            return _menuObject;
        },

        pauseDropdownHover: function(time) {
            if (_menuObject) {
                _menuObject.pauseDropdownHover(time);
            }
        },

        closeMobileOffcanvas: function() {
            if (_menuObject && EZSUtil.isMobileDevice()) {
                _menuObject.hide();
            }
        }
    };
}();

export default EZSLayoutAsideMenu;