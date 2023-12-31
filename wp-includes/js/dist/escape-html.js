(function() {
    "use strict";
    var __webpack_require__ = {};
    ! function() {
        __webpack_require__.d = function(exports, definition) {
            for (var key in definition) {
                if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
                    Object.defineProperty(exports, key, {
                        enumerable: true,
                        get: definition[key]
                    });
                }
            }
        };
    }();
    ! function() {
        __webpack_require__.o = function(obj, prop) {
            return Object.prototype.hasOwnProperty.call(obj, prop);
        }
    }();
    ! function() {
        __webpack_require__.r = function(exports) {
            if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                Object.defineProperty(exports, Symbol.toStringTag, {
                    value: 'Module'
                });
            }
            Object.defineProperty(exports, '__esModule', {
                value: true
            });
        };
    }();
    var __webpack_exports__ = {};
    __webpack_require__.r(__webpack_exports__);
    __webpack_require__.d(__webpack_exports__, {
        escapeAmpersand: function() {
            return escapeAmpersand;
        },
        escapeAttribute: function() {
            return escapeAttribute;
        },
        escapeEditableHTML: function() {
            return escapeEditableHTML;
        },
        escapeHTML: function() {
            return escapeHTML;
        },
        escapeLessThan: function() {
            return escapeLessThan;
        },
        escapeQuotationMark: function() {
            return escapeQuotationMark;
        },
        isValidAttributeName: function() {
            return isValidAttributeName;
        }
    });;

    function __unstableEscapeGreaterThan(value) {
        return value.replace(/>/g, '&gt;');
    };
    const REGEXP_INVALID_ATTRIBUTE_NAME = /[\u007F-\u009F "'>/="\uFDD0-\uFDEF]/;

    function escapeAmpersand(value) {
        return value.replace(/&(?!([a-z0-9]+|#[0-9]+|#x[a-f0-9]+);)/gi, '&amp;');
    }

    function escapeQuotationMark(value) {
        return value.replace(/"/g, '&quot;');
    }

    function escapeLessThan(value) {
        return value.replace(/</g, '&lt;');
    }

    function escapeAttribute(value) {
        return __unstableEscapeGreaterThan(escapeQuotationMark(escapeAmpersand(value)));
    }

    function escapeHTML(value) {
        return escapeLessThan(escapeAmpersand(value));
    }

    function escapeEditableHTML(value) {
        return escapeLessThan(value.replace(/&/g, '&amp;'));
    }

    function isValidAttributeName(name) {
        return !REGEXP_INVALID_ATTRIBUTE_NAME.test(name);
    }
    (window.wp = window.wp || {}).escapeHtml = __webpack_exports__;
})();