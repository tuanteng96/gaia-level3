/* eslint-disable */
"use strict";

import { EZSUtil } from "./util";

// Component Definition
var EZSToggle = function(toggleElement, targetElement, options) {
    // Main object
    var the = this;
    var init = false;

    // Get element object
    var element = toggleElement;
    var target = targetElement;

    if (!element) {
        return;
    }

    // Default options
    var defaultOptions = {
        targetToggleMode: 'class' // class|attribute
    };

    ////////////////////////////
    // ** Private Methods  ** //
    ////////////////////////////

    var Plugin = {
        /**
         * Construct
         */

        construct: function(options) {
            if (EZSUtil.data(element).has('toggle')) {
                the = EZSUtil.data(element).get('toggle');
            } else {
                // reset menu
                Plugin.init(options);

                // build menu
                Plugin.build();

                EZSUtil.data(element).set('toggle', the);
            }

            return the;
        },

        /**
         * Handles subtoggle click toggle
         */
        init: function(options) {
            the.element = element;
            the.events = [];

            // Merge default and user defined options
            the.options = EZSUtil.deepExtend({}, defaultOptions, options);

            //alert(the.options.target.tagName);
            the.target = target;

            the.targetState = the.options.targetState;
            the.toggleState = the.options.toggleState;

            if (the.options.targetToggleMode == 'class') {
                the.state = EZSUtil.hasClasses(the.target, the.targetState) ? 'on' : 'off';
            } else {
                the.state = EZSUtil.hasAttr(the.target, 'data-' + the.targetState) ? EZSUtil.attr(the.target, 'data-' + the.targetState) : 'off';
            }
        },

        /**
         * Setup toggle
         */
        build: function() {
            EZSUtil.addEvent(element, 'mouseup', Plugin.toggle);
        },

        /**
         * Handles offcanvas click toggle
         */
        toggle: function(e) {
            Plugin.eventTrigger('beforeToggle');

            if (the.state == 'off') {
                Plugin.toggleOn();
            } else {
                Plugin.toggleOff();
            }

            Plugin.eventTrigger('afterToggle');

            e.preventDefault();

            return the;
        },

        /**
         * Handles toggle click toggle
         */
        toggleOn: function() {
            Plugin.eventTrigger('beforeOn');

            if (the.options.targetToggleMode == 'class') {
                EZSUtil.addClass(the.target, the.targetState);
            } else {
                EZSUtil.attr(the.target, 'data-' + the.targetState, 'on');
            }

            if (the.toggleState) {
                EZSUtil.addClass(element, the.toggleState);
            }

            the.state = 'on';

            Plugin.eventTrigger('afterOn');

            Plugin.eventTrigger('toggle');

            return the;
        },

        /**
         * Handles toggle click toggle
         */
        toggleOff: function() {
            Plugin.eventTrigger('beforeOff');

            if (the.options.targetToggleMode == 'class') {
                EZSUtil.removeClass(the.target, the.targetState);
            } else {
                EZSUtil.removeAttr(the.target, 'data-' + the.targetState);
            }

            if (the.toggleState) {
                EZSUtil.removeClass(element, the.toggleState);
            }

            the.state = 'off';

            Plugin.eventTrigger('afterOff');

            Plugin.eventTrigger('toggle');

            return the;
        },

        /**
         * Trigger events
         */
        eventTrigger: function(name) {
            for (var i = 0; i < the.events.length; i++) {
                var event = the.events[i];

                if (event.name == name) {
                    if (event.one == true) {
                        if (event.fired == false) {
                            the.events[i].fired = true;
                            return event.handler.call(this, the);
                        }
                    } else {
                        return event.handler.call(this, the);
                    }
                }
            }
        },

        addEvent: function(name, handler, one) {
            the.events.push({
                name: name,
                handler: handler,
                one: one,
                fired: false
            });

            return the;
        }
    };

    //////////////////////////
    // ** Public Methods ** //
    //////////////////////////

    /**
     * Set default options
     */

    the.setDefaults = function(options) {
        defaultOptions = options;
    };

    /**
     * Get toggle state
     */
    the.getState = function() {
        return the.state;
    };

    /**
     * Toggle
     */
    the.toggle = function() {
        return Plugin.toggle();
    };

    /**
     * Toggle on
     */
    the.toggleOn = function() {
        return Plugin.toggleOn();
    };

    /**
     * Toggle off
     */
    the.toggleOff = function() {
        return Plugin.toggleOff();
    };

    /**
     * Attach event
     * @returns {EZSToggle}
     */
    the.on = function(name, handler) {
        return Plugin.addEvent(name, handler);
    };

    /**
     * Attach event that will be fired once
     * @returns {EZSToggle}
     */
    the.one = function(name, handler) {
        return Plugin.addEvent(name, handler, true);
    };

    // Construct plugin
    Plugin.construct.apply(the, [options]);

    return the;
};

// webpack support
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    // module.exports = EZSToggle;
}

export default EZSToggle;