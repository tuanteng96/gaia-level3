/* eslint-disable */
"use strict";

import EZSLayoutHeader from "./header.js";
import EZSCard from "./../../components/card.js";
import { EZSUtil } from "./../../components/util.js";

var EZSLayoutStickyCard = function() {
    // Private properties
    var _element;
    var _object;

    // Private functions
    var _init = function() {
        var offset = 300;

        if (typeof EZSLayoutHeader !== 'undefined') {
            offset = EZSLayoutHeader.getHeight();
        }

        _object = new EZSCard(_element, {
            sticky: {
                offset: offset,
                zIndex: 90,
                position: {
                    top: function() {
                        var pos = 0;
                        var body = EZSUtil.getBody();

                        if (EZSUtil.isBreakpointUp('lg')) {
                            if (typeof EZSLayoutHeader !== 'undefined' && EZSLayoutHeader.isFixed()) {
                                pos = pos + EZSLayoutHeader.getHeight();
                            }
                        } else {
                            if (typeof EZSLayoutHeader !== 'undefined' && EZSLayoutHeader.isFixedForMobile()) {
                                pos = pos + EZSLayoutHeader.getHeightForMobile();
                            }
                        }

                        pos = pos - 1; // remove header border width

                        return pos;
                    },
                    left: function(card) {
                        return EZSUtil.offset(_element).left;
                    },
                    right: function(card) {
                        var body = EZSUtil.getBody();

                        var cardWidth = parseInt(EZSUtil.css(_element, 'width'));
                        var bodyWidth = parseInt(EZSUtil.css(body, 'width'));
                        var cardOffsetLeft = EZSUtil.offset(_element).left;

                        return bodyWidth - cardWidth - cardOffsetLeft;
                    }
                }
            }
        });

        _object.initSticky();

        EZSUtil.addResizeHandler(function() {
            _object.updateSticky();
        });
    }

    // Public methods
    return {
        init: function(id) {
            _element = EZSUtil.getById(id);

            if (!_element) {
                return;
            }

            // Initialize
            _init();
        },

        update: function() {
            if (_object) {
                _object.updateSticky();
            }
        }
    };
}();

// Webpack support
if (typeof module !== 'undefined') {
    // module.exports = EZSLayoutStickyCard;
}

export default EZSLayoutStickyCard;