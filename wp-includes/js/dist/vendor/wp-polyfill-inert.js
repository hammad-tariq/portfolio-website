(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory() : typeof define === 'function' && define.amd ? define('inert', factory) : (factory());
}(this, (function() {
    'use strict';
    var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    (function() {
        if (typeof window === 'undefined') {
            return;
        }
        var slice = Array.prototype.slice;
        var matches = Element.prototype.matches || Element.prototype.msMatchesSelector;
        var _focusableElementsString = ['a[href]', 'area[href]', 'input:not([disabled])', 'select:not([disabled])', 'textarea:not([disabled])', 'button:not([disabled])', 'details', 'summary', 'iframe', 'object', 'embed', '[contenteditable]'].join(',');
        var InertRoot = function() {
            function InertRoot(rootElement, inertManager) {
                _classCallCheck(this, InertRoot);
                this._inertManager = inertManager;
                this._rootElement = rootElement;
                this._managedNodes = new Set();
                if (this._rootElement.hasAttribute('aria-hidden')) {
                    this._savedAriaHidden = this._rootElement.getAttribute('aria-hidden');
                } else {
                    this._savedAriaHidden = null;
                }
                this._rootElement.setAttribute('aria-hidden', 'true');
                this._makeSubtreeUnfocusable(this._rootElement);
                this._observer = new MutationObserver(this._onMutation.bind(this));
                this._observer.observe(this._rootElement, {
                    attributes: true,
                    childList: true,
                    subtree: true
                });
            }
            _createClass(InertRoot, [{
                key: 'destructor',
                value: function destructor() {
                    this._observer.disconnect();
                    if (this._rootElement) {
                        if (this._savedAriaHidden !== null) {
                            this._rootElement.setAttribute('aria-hidden', this._savedAriaHidden);
                        } else {
                            this._rootElement.removeAttribute('aria-hidden');
                        }
                    }
                    this._managedNodes.forEach(function(inertNode) {
                        this._unmanageNode(inertNode.node);
                    }, this);
                    this._observer = null;
                    this._rootElement = null;
                    this._managedNodes = null;
                    this._inertManager = null;
                }
            }, {
                key: '_makeSubtreeUnfocusable',
                value: function _makeSubtreeUnfocusable(startNode) {
                    var _this2 = this;
                    composedTreeWalk(startNode, function(node) {
                        return _this2._visitNode(node);
                    });
                    var activeElement = document.activeElement;
                    if (!document.body.contains(startNode)) {
                        var node = startNode;
                        var root = undefined;
                        while (node) {
                            if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                                root = node;
                                break;
                            }
                            node = node.parentNode;
                        }
                        if (root) {
                            activeElement = root.activeElement;
                        }
                    }
                    if (startNode.contains(activeElement)) {
                        activeElement.blur();
                        if (activeElement === document.activeElement) {
                            document.body.focus();
                        }
                    }
                }
            }, {
                key: '_visitNode',
                value: function _visitNode(node) {
                    if (node.nodeType !== Node.ELEMENT_NODE) {
                        return;
                    }
                    var element = node;
                    if (element !== this._rootElement && element.hasAttribute('inert')) {
                        this._adoptInertRoot(element);
                    }
                    if (matches.call(element, _focusableElementsString) || element.hasAttribute('tabindex')) {
                        this._manageNode(element);
                    }
                }
            }, {
                key: '_manageNode',
                value: function _manageNode(node) {
                    var inertNode = this._inertManager.register(node, this);
                    this._managedNodes.add(inertNode);
                }
            }, {
                key: '_unmanageNode',
                value: function _unmanageNode(node) {
                    var inertNode = this._inertManager.deregister(node, this);
                    if (inertNode) {
                        this._managedNodes['delete'](inertNode);
                    }
                }
            }, {
                key: '_unmanageSubtree',
                value: function _unmanageSubtree(startNode) {
                    var _this3 = this;
                    composedTreeWalk(startNode, function(node) {
                        return _this3._unmanageNode(node);
                    });
                }
            }, {
                key: '_adoptInertRoot',
                value: function _adoptInertRoot(node) {
                    var inertSubroot = this._inertManager.getInertRoot(node);
                    if (!inertSubroot) {
                        this._inertManager.setInert(node, true);
                        inertSubroot = this._inertManager.getInertRoot(node);
                    }
                    inertSubroot.managedNodes.forEach(function(savedInertNode) {
                        this._manageNode(savedInertNode.node);
                    }, this);
                }
            }, {
                key: '_onMutation',
                value: function _onMutation(records, self) {
                    records.forEach(function(record) {
                        var target = record.target;
                        if (record.type === 'childList') {
                            slice.call(record.addedNodes).forEach(function(node) {
                                this._makeSubtreeUnfocusable(node);
                            }, this);
                            slice.call(record.removedNodes).forEach(function(node) {
                                this._unmanageSubtree(node);
                            }, this);
                        } else if (record.type === 'attributes') {
                            if (record.attributeName === 'tabindex') {
                                this._manageNode(target);
                            } else if (target !== this._rootElement && record.attributeName === 'inert' && target.hasAttribute('inert')) {
                                this._adoptInertRoot(target);
                                var inertSubroot = this._inertManager.getInertRoot(target);
                                this._managedNodes.forEach(function(managedNode) {
                                    if (target.contains(managedNode.node)) {
                                        inertSubroot._manageNode(managedNode.node);
                                    }
                                });
                            }
                        }
                    }, this);
                }
            }, {
                key: 'managedNodes',
                get: function get() {
                    return new Set(this._managedNodes);
                }
            }, {
                key: 'hasSavedAriaHidden',
                get: function get() {
                    return this._savedAriaHidden !== null;
                }
            }, {
                key: 'savedAriaHidden',
                set: function set(ariaHidden) {
                    this._savedAriaHidden = ariaHidden;
                },
                get: function get() {
                    return this._savedAriaHidden;
                }
            }]);
            return InertRoot;
        }();
        var InertNode = function() {
            function InertNode(node, inertRoot) {
                _classCallCheck(this, InertNode);
                this._node = node;
                this._overrodeFocusMethod = false;
                this._inertRoots = new Set([inertRoot]);
                this._savedTabIndex = null;
                this._destroyed = false;
                this.ensureUntabbable();
            }
            _createClass(InertNode, [{
                key: 'destructor',
                value: function destructor() {
                    this._throwIfDestroyed();
                    if (this._node && this._node.nodeType === Node.ELEMENT_NODE) {
                        var element = this._node;
                        if (this._savedTabIndex !== null) {
                            element.setAttribute('tabindex', this._savedTabIndex);
                        } else {
                            element.removeAttribute('tabindex');
                        }
                        if (this._overrodeFocusMethod) {
                            delete element.focus;
                        }
                    }
                    this._node = null;
                    this._inertRoots = null;
                    this._destroyed = true;
                }
            }, {
                key: '_throwIfDestroyed',
                value: function _throwIfDestroyed() {
                    if (this.destroyed) {
                        throw new Error('Trying to access destroyed InertNode');
                    }
                }
            }, {
                key: 'ensureUntabbable',
                value: function ensureUntabbable() {
                    if (this.node.nodeType !== Node.ELEMENT_NODE) {
                        return;
                    }
                    var element = this.node;
                    if (matches.call(element, _focusableElementsString)) {
                        if (element.tabIndex === -1 && this.hasSavedTabIndex) {
                            return;
                        }
                        if (element.hasAttribute('tabindex')) {
                            this._savedTabIndex = element.tabIndex;
                        }
                        element.setAttribute('tabindex', '-1');
                        if (element.nodeType === Node.ELEMENT_NODE) {
                            element.focus = function() {};
                            this._overrodeFocusMethod = true;
                        }
                    } else if (element.hasAttribute('tabindex')) {
                        this._savedTabIndex = element.tabIndex;
                        element.removeAttribute('tabindex');
                    }
                }
            }, {
                key: 'addInertRoot',
                value: function addInertRoot(inertRoot) {
                    this._throwIfDestroyed();
                    this._inertRoots.add(inertRoot);
                }
            }, {
                key: 'removeInertRoot',
                value: function removeInertRoot(inertRoot) {
                    this._throwIfDestroyed();
                    this._inertRoots['delete'](inertRoot);
                    if (this._inertRoots.size === 0) {
                        this.destructor();
                    }
                }
            }, {
                key: 'destroyed',
                get: function get() {
                    return (this._destroyed);
                }
            }, {
                key: 'hasSavedTabIndex',
                get: function get() {
                    return this._savedTabIndex !== null;
                }
            }, {
                key: 'node',
                get: function get() {
                    this._throwIfDestroyed();
                    return this._node;
                }
            }, {
                key: 'savedTabIndex',
                set: function set(tabIndex) {
                    this._throwIfDestroyed();
                    this._savedTabIndex = tabIndex;
                },
                get: function get() {
                    this._throwIfDestroyed();
                    return this._savedTabIndex;
                }
            }]);
            return InertNode;
        }();
        var InertManager = function() {
            function InertManager(document) {
                _classCallCheck(this, InertManager);
                if (!document) {
                    throw new Error('Missing required argument; InertManager needs to wrap a document.');
                }
                this._document = document;
                this._managedNodes = new Map();
                this._inertRoots = new Map();
                this._observer = new MutationObserver(this._watchForInert.bind(this));
                addInertStyle(document.head || document.body || document.documentElement);
                if (document.readyState === 'loading') {
                    document.addEventListener('DOMContentLoaded', this._onDocumentLoaded.bind(this));
                } else {
                    this._onDocumentLoaded();
                }
            }
            _createClass(InertManager, [{
                key: 'setInert',
                value: function setInert(root, inert) {
                    if (inert) {
                        if (this._inertRoots.has(root)) {
                            return;
                        }
                        var inertRoot = new InertRoot(root, this);
                        root.setAttribute('inert', '');
                        this._inertRoots.set(root, inertRoot);
                        if (!this._document.body.contains(root)) {
                            var parent = root.parentNode;
                            while (parent) {
                                if (parent.nodeType === 11) {
                                    addInertStyle(parent);
                                }
                                parent = parent.parentNode;
                            }
                        }
                    } else {
                        if (!this._inertRoots.has(root)) {
                            return;
                        }
                        var _inertRoot = this._inertRoots.get(root);
                        _inertRoot.destructor();
                        this._inertRoots['delete'](root);
                        root.removeAttribute('inert');
                    }
                }
            }, {
                key: 'getInertRoot',
                value: function getInertRoot(element) {
                    return this._inertRoots.get(element);
                }
            }, {
                key: 'register',
                value: function register(node, inertRoot) {
                    var inertNode = this._managedNodes.get(node);
                    if (inertNode !== undefined) {
                        inertNode.addInertRoot(inertRoot);
                    } else {
                        inertNode = new InertNode(node, inertRoot);
                    }
                    this._managedNodes.set(node, inertNode);
                    return inertNode;
                }
            }, {
                key: 'deregister',
                value: function deregister(node, inertRoot) {
                    var inertNode = this._managedNodes.get(node);
                    if (!inertNode) {
                        return null;
                    }
                    inertNode.removeInertRoot(inertRoot);
                    if (inertNode.destroyed) {
                        this._managedNodes['delete'](node);
                    }
                    return inertNode;
                }
            }, {
                key: '_onDocumentLoaded',
                value: function _onDocumentLoaded() {
                    var inertElements = slice.call(this._document.querySelectorAll('[inert]'));
                    inertElements.forEach(function(inertElement) {
                        this.setInert(inertElement, true);
                    }, this);
                    this._observer.observe(this._document.body || this._document.documentElement, {
                        attributes: true,
                        subtree: true,
                        childList: true
                    });
                }
            }, {
                key: '_watchForInert',
                value: function _watchForInert(records, self) {
                    var _this = this;
                    records.forEach(function(record) {
                        switch (record.type) {
                            case 'childList':
                                slice.call(record.addedNodes).forEach(function(node) {
                                    if (node.nodeType !== Node.ELEMENT_NODE) {
                                        return;
                                    }
                                    var inertElements = slice.call(node.querySelectorAll('[inert]'));
                                    if (matches.call(node, '[inert]')) {
                                        inertElements.unshift(node);
                                    }
                                    inertElements.forEach(function(inertElement) {
                                        this.setInert(inertElement, true);
                                    }, _this);
                                }, _this);
                                break;
                            case 'attributes':
                                if (record.attributeName !== 'inert') {
                                    return;
                                }
                                var target = record.target;
                                var inert = target.hasAttribute('inert');
                                _this.setInert(target, inert);
                                break;
                        }
                    }, this);
                }
            }]);
            return InertManager;
        }();

        function composedTreeWalk(node, callback, shadowRootAncestor) {
            if (node.nodeType == Node.ELEMENT_NODE) {
                var element = node;
                if (callback) {
                    callback(element);
                }
                var shadowRoot = element.shadowRoot;
                if (shadowRoot) {
                    composedTreeWalk(shadowRoot, callback, shadowRoot);
                    return;
                }
                if (element.localName == 'content') {
                    var content = element;
                    var distributedNodes = content.getDistributedNodes ? content.getDistributedNodes() : [];
                    for (var i = 0; i < distributedNodes.length; i++) {
                        composedTreeWalk(distributedNodes[i], callback, shadowRootAncestor);
                    }
                    return;
                }
                if (element.localName == 'slot') {
                    var slot = element;
                    var _distributedNodes = slot.assignedNodes ? slot.assignedNodes({
                        flatten: true
                    }) : [];
                    for (var _i = 0; _i < _distributedNodes.length; _i++) {
                        composedTreeWalk(_distributedNodes[_i], callback, shadowRootAncestor);
                    }
                    return;
                }
            }
            var child = node.firstChild;
            while (child != null) {
                composedTreeWalk(child, callback, shadowRootAncestor);
                child = child.nextSibling;
            }
        }

        function addInertStyle(node) {
            if (node.querySelector('style#inert-style, link#inert-style')) {
                return;
            }
            var style = document.createElement('style');
            style.setAttribute('id', 'inert-style');
            style.textContent = '\n' + '[inert] {\n' + '  pointer-events: none;\n' + '  cursor: default;\n' + '}\n' + '\n' + '[inert], [inert] * {\n' + '  -webkit-user-select: none;\n' + '  -moz-user-select: none;\n' + '  -ms-user-select: none;\n' + '  user-select: none;\n' + '}\n';
            node.appendChild(style);
        }
        if (!HTMLElement.prototype.hasOwnProperty('inert')) {
            var inertManager = new InertManager(document);
            Object.defineProperty(HTMLElement.prototype, 'inert', {
                enumerable: true,
                get: function get() {
                    return this.hasAttribute('inert');
                },
                set: function set(inert) {
                    inertManager.setInert(this, inert);
                }
            });
        }
    })();
})));