/*!elementor - v3.17.0 - 08-11-2023*/
(self["webpackChunkelementor"] = self["webpackChunkelementor"] || []).push([
    ["lightbox"], {
        "../assets/dev/js/frontend/utils/icons/e-icons.js":
            /*!********************************************************!*\
            !*** ../assets/dev/js/frontend/utils/icons/e-icons.js ***!
            \********************************************************/
            ((__unused_webpack_module, exports, __webpack_require__) => {
                "use strict";
                var _interopRequireDefault = __webpack_require__( /*!@babel/runtime/helpers/interopRequireDefault*/ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
                Object.defineProperty(exports, "__esModule", ({
                    value: true
                }));
                exports.zoomOutBold = exports.zoomInBold = exports.twitter = exports.shareArrow = exports.pinterest = exports.loading = exports.frameMinimize = exports.frameExpand = exports.facebook = exports.downloadBold = exports.close = exports.chevronRight = exports.chevronLeft = void 0;
                var _manager = _interopRequireDefault(__webpack_require__( /*!./manager*/ "../assets/dev/js/frontend/utils/icons/manager.js"));
                const iconsManager = new _manager.default('eicon');
                const chevronLeft = {
                    get element() {
                        const svgData = {
                            path: 'M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z',
                            width: 1000,
                            height: 1000
                        };
                        return iconsManager.createSvgElement('chevron-left', svgData);
                    }
                };
                exports.chevronLeft = chevronLeft;
                const chevronRight = {
                    get element() {
                        const svgData = {
                            path: 'M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z',
                            width: 1000,
                            height: 1000
                        };
                        return iconsManager.createSvgElement('chevron-right', svgData);
                    }
                };
                exports.chevronRight = chevronRight;
                const close = {
                    get element() {
                        const svgData = {
                            path: 'M742 167L500 408 258 167C246 154 233 150 217 150 196 150 179 158 167 167 154 179 150 196 150 212 150 229 154 242 171 254L408 500 167 742C138 771 138 800 167 829 196 858 225 858 254 829L496 587 738 829C750 842 767 846 783 846 800 846 817 842 829 829 842 817 846 804 846 783 846 767 842 750 829 737L588 500 833 258C863 229 863 200 833 171 804 137 775 137 742 167Z',
                            width: 1000,
                            height: 1000
                        };
                        return iconsManager.createSvgElement('close', svgData);
                    }
                };
                exports.close = close;
                const downloadBold = {
                    get element() {
                        const svgData = {
                            path: 'M572 42H428C405 42 385 61 385 85V385H228C197 385 180 424 203 447L475 719C489 732 511 732 524 719L797 447C819 424 803 385 771 385H614V85C615 61 595 42 572 42ZM958 915V715C958 691 939 672 915 672H653L565 760C529 796 471 796 435 760L347 672H85C61 672 42 691 42 715V915C42 939 61 958 85 958H915C939 958 958 939 958 915ZM736 873C736 853 720 837 700 837 681 837 665 853 665 873 665 892 681 908 700 908 720 908 736 892 736 873ZM815 837C835 837 851 853 851 873 851 892 835 908 815 908 795 908 779 892 779 873 779 853 795 837 815 837Z',
                            width: 1000,
                            height: 1000
                        };
                        return iconsManager.createSvgElement('download-bold', svgData);
                    }
                };
                exports.downloadBold = downloadBold;
                const facebook = {
                    get element() {
                        const svgData = {
                            path: 'M858 42H142C88 42 42 87 42 142V863C42 913 88 958 142 958H421V646H292V500H421V387C421 258 496 192 613 192 667 192 725 200 725 200V325H663C600 325 579 362 579 404V500H721L700 646H583V958H863C917 958 963 913 963 858V142C958 87 913 42 858 42L858 42Z',
                            width: 1000,
                            height: 1000
                        };
                        return iconsManager.createSvgElement('facebook', svgData);
                    }
                };
                exports.facebook = facebook;
                const frameExpand = {
                    get element() {
                        const svgData = {
                            path: 'M863 583C890 583 914 605 916 632L917 637V863L916 868C914 893 893 914 868 916L863 917H638L632 916C607 914 586 893 584 868L583 863 584 857C586 832 607 811 632 809L638 808H808V637L809 632C811 605 835 583 863 583ZM138 583C165 583 189 605 191 632L192 637V808H363C390 808 414 830 416 857L417 863C417 890 395 914 368 916L363 917H138C110 917 86 895 84 868L83 863V637C83 607 108 583 138 583ZM863 83C890 83 914 105 916 132L917 137V362C917 392 893 417 863 417 835 417 811 395 809 368L808 362V192H638C610 192 586 170 584 143L583 137C583 110 605 86 632 84L638 83H863ZM363 83L368 84C393 86 414 107 416 132L417 137 416 143C414 168 393 189 368 191L363 192H192V362L191 368C189 395 165 417 138 417S86 395 84 368L83 362V137L84 132C86 107 107 86 132 84L138 83H363Z',
                            width: 1000,
                            height: 1000
                        };
                        return iconsManager.createSvgElement('frame-expand', svgData);
                    }
                };
                exports.frameExpand = frameExpand;
                const frameMinimize = {
                    get element() {
                        const svgData = {
                            path: 'M363 583C392 583 413 604 417 633L417 637V863C417 892 392 917 363 917 333 917 313 896 308 867L308 863V692H138C108 692 88 671 83 642L83 637C83 608 104 587 133 583L138 583H363ZM638 583C608 583 588 604 583 633L583 637V863C583 892 608 917 638 917 667 917 688 896 692 867L692 863V692H863C892 692 913 671 917 642L917 637C917 608 896 587 867 583L863 583H638ZM363 417C392 417 413 396 417 367L417 362V137C417 108 392 83 363 83 333 83 313 104 308 133L308 137V308H138C108 308 88 329 83 358L83 362C83 392 104 412 133 417L138 417H363ZM638 417C608 417 588 396 583 367L583 362V137C583 108 608 83 638 83 667 83 688 104 692 133L692 137V308H863C892 308 913 329 917 358L917 362C917 392 896 412 867 417L863 417H638Z',
                            width: 1000,
                            height: 1000
                        };
                        return iconsManager.createSvgElement('frame-minimize', svgData);
                    }
                };
                exports.frameMinimize = frameMinimize;
                const loading = {
                    get element() {
                        const svgData = {
                            path: 'M500 975V858C696 858 858 696 858 500S696 142 500 142 142 304 142 500H25C25 237 238 25 500 25S975 237 975 500 763 975 500 975Z',
                            width: 1000,
                            height: 1000
                        };
                        return iconsManager.createSvgElement('loading', svgData);
                    }
                };
                exports.loading = loading;
                const pinterest = {
                    get element() {
                        const svgData = {
                            path: 'M950 496C950 746 746 950 496 950 450 950 404 942 363 929 379 900 408 850 421 808 425 787 450 700 450 700 467 729 508 754 554 754 692 754 792 629 792 471 792 321 671 208 513 208 317 208 213 342 213 483 213 550 250 633 304 658 313 662 317 662 321 654 321 650 329 617 333 604 333 600 333 596 329 592 313 567 296 525 296 487 288 387 367 292 496 292 608 292 688 367 688 475 688 600 625 683 546 683 500 683 467 646 479 600 492 546 517 487 517 450 517 417 500 387 458 387 413 387 375 433 375 496 375 537 388 562 388 562S342 754 333 787C325 825 329 883 333 917 163 854 42 687 42 496 42 246 246 42 496 42S950 246 950 496Z',
                            width: 1000,
                            height: 1000
                        };
                        return iconsManager.createSvgElement('pinterest', svgData);
                    }
                };
                exports.pinterest = pinterest;
                const shareArrow = {
                    get element() {
                        const svgData = {
                            path: 'M946 383L667 133C642 112 604 129 604 162V292C238 296 71 637 42 812 238 587 363 521 604 517V658C604 692 642 708 667 687L946 442C963 425 963 400 946 383Z',
                            width: 1000,
                            height: 1000
                        };
                        return iconsManager.createSvgElement('share-arrow', svgData);
                    }
                };
                exports.shareArrow = shareArrow;
                const twitter = {
                    get element() {
                        const svgData = {
                            path: 'M863 312C863 321 863 329 863 337 863 587 675 871 329 871 221 871 125 842 42 787 58 787 71 792 88 792 175 792 254 762 321 712 238 712 171 658 146 583 158 583 171 587 183 587 200 587 217 583 233 579 146 562 83 487 83 396V387C108 400 138 408 167 412 117 379 83 321 83 254 83 221 92 187 108 158 200 271 342 346 496 354 492 342 492 325 492 312 492 208 575 125 679 125 733 125 783 146 817 183 858 175 900 158 938 137 925 179 896 217 854 242 892 237 929 229 963 212 933 250 900 283 863 312Z',
                            width: 1000,
                            height: 1000
                        };
                        return iconsManager.createSvgElement('twitter', svgData);
                    }
                };
                exports.twitter = twitter;
                const zoomInBold = {
                    get element() {
                        const svgData = {
                            path: 'M388 383V312C388 283 413 258 442 258 471 258 496 283 496 312V383H567C596 383 621 408 621 437S596 492 567 492H496V562C496 592 471 617 442 617 413 617 388 592 388 562V492H317C288 492 263 467 263 437S288 383 317 383H388ZM654 733C592 779 517 804 438 804 233 804 71 642 71 437S233 71 438 71 804 233 804 437C804 521 779 596 733 654L896 817C917 837 917 871 896 892 875 913 842 913 821 892L654 733ZM438 696C579 696 696 579 696 437S579 179 438 179 179 296 179 437 296 696 438 696Z',
                            width: 1000,
                            height: 1000
                        };
                        return iconsManager.createSvgElement('zoom-in-bold', svgData);
                    }
                };
                exports.zoomInBold = zoomInBold;
                const zoomOutBold = {
                    get element() {
                        const svgData = {
                            path: 'M750 683L946 879C963 896 963 929 946 946 929 963 896 967 879 946L683 750C617 804 533 833 438 833 221 833 42 654 42 437S221 42 438 42 833 221 833 437C833 529 800 612 750 683ZM296 392H575C600 392 621 412 621 442 621 467 600 487 575 487H296C271 487 250 467 250 442 250 412 271 392 296 392ZM438 737C604 737 738 604 738 437S604 137 438 137 138 271 138 437 271 737 438 737Z',
                            width: 1000,
                            height: 1000
                        };
                        return iconsManager.createSvgElement('zoom-out-bold', svgData);
                    }
                };
                exports.zoomOutBold = zoomOutBold;
            }),
        "../assets/dev/js/frontend/utils/icons/manager.js":
            /*!********************************************************!*\
            !*** ../assets/dev/js/frontend/utils/icons/manager.js ***!
            \********************************************************/
            ((__unused_webpack_module, exports, __webpack_require__) => {
                "use strict";
                var _interopRequireDefault = __webpack_require__( /*!@babel/runtime/helpers/interopRequireDefault*/ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
                Object.defineProperty(exports, "__esModule", ({
                    value: true
                }));
                exports["default"] = void 0;
                var _defineProperty2 = _interopRequireDefault(__webpack_require__( /*!@babel/runtime/helpers/defineProperty*/ "../node_modules/@babel/runtime/helpers/defineProperty.js"));
                class IconsManager {
                    constructor(elementsPrefix) {
                        this.prefix = `${elementsPrefix}-`;
                        this.createSvgSymbolsContainer();
                    }
                    createSvgElement(name, _ref) {
                        let {
                            path,
                            width,
                            height
                        } = _ref;
                        const iconName = this.prefix + name,
                            iconSelector = '#' + this.prefix + name;
                        if (!IconsManager.iconsUsageList.includes(iconName)) {
                            if (!IconsManager.symbolsContainer.querySelector(iconSelector)) {
                                const symbol = this.createSymbolElement({
                                    id: iconName,
                                    path,
                                    width,
                                    height
                                });
                                IconsManager.symbolsContainer.appendChild(symbol);
                            }
                            IconsManager.iconsUsageList.push(iconName);
                        }
                        return this.createSvgIconElement({
                            iconName,
                            iconSelector
                        });
                    }
                    createSvgNode(tag, _ref2) {
                        let {
                            props = {}, attrs = {}
                        } = _ref2;
                        const node = document.createElementNS('http://www.w3.org/2000/svg', tag);
                        Object.keys(props).map(key => node[key] = props[key]);
                        Object.keys(attrs).map(key => node.setAttributeNS(null, key, attrs[key]));
                        return node;
                    }
                    createSvgIconElement(_ref3) {
                        let {
                            iconName,
                            iconSelector
                        } = _ref3;
                        return this.createSvgNode('svg', {
                            props: {
                                innerHTML: '<use xlink:href="' + iconSelector + '" />'
                            },
                            attrs: {
                                class: 'e-font-icon-svg e-' + iconName
                            }
                        });
                    }
                    createSvgSymbolsContainer() {
                        if (!IconsManager.symbolsContainer) {
                            const symbolsContainerId = 'e-font-icon-svg-symbols';
                            IconsManager.symbolsContainer = document.getElementById(symbolsContainerId);
                            if (!IconsManager.symbolsContainer) {
                                IconsManager.symbolsContainer = this.createSvgNode('svg', {
                                    attrs: {
                                        style: 'display: none;',
                                        class: symbolsContainerId
                                    }
                                });
                                document.body.appendChild(IconsManager.symbolsContainer);
                            }
                        }
                    }
                    createSymbolElement(_ref4) {
                        let {
                            id,
                            path,
                            width,
                            height
                        } = _ref4;
                        return this.createSvgNode('symbol', {
                            props: {
                                innerHTML: '<path d="' + path + '"></path>',
                                id
                            },
                            attrs: {
                                viewBox: '0 0 ' + width + ' ' + height
                            }
                        });
                    }
                }
                exports["default"] = IconsManager;
                (0, _defineProperty2.default)(IconsManager, "symbolsContainer", void 0);
                (0, _defineProperty2.default)(IconsManager, "iconsUsageList", []);
            }),
        "../assets/dev/js/frontend/utils/lightbox/lightbox.js":
            /*!************************************************************!*\
            !*** ../assets/dev/js/frontend/utils/lightbox/lightbox.js ***!
            \************************************************************/
            ((module, __unused_webpack_exports, __webpack_require__) => {
                "use strict";
                var _interopRequireDefault = __webpack_require__( /*!@babel/runtime/helpers/interopRequireDefault*/ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
                var _screenfull = _interopRequireDefault(__webpack_require__( /*!./screenfull*/ "../assets/dev/js/frontend/utils/lightbox/screenfull.js"));
                var _eIcons = __webpack_require__( /*!@elementor/e-icons*/ "../assets/dev/js/frontend/utils/icons/e-icons.js");
                module.exports = elementorModules.ViewModule.extend({
                    oldAnimation: null,
                    swiper: null,
                    player: null,
                    isFontIconSvgExperiment: elementorFrontend.config.experimentalFeatures.e_font_icon_svg,
                    getDefaultSettings() {
                        return {
                            classes: {
                                item: 'elementor-lightbox-item',
                                image: 'elementor-lightbox-image',
                                videoContainer: 'elementor-video-container',
                                videoWrapper: 'elementor-video-wrapper',
                                playButton: 'elementor-custom-embed-play',
                                playButtonIcon: 'fa',
                                playing: 'elementor-playing',
                                hidden: 'elementor-hidden',
                                invisible: 'elementor-invisible',
                                preventClose: 'elementor-lightbox-prevent-close',
                                slideshow: {
                                    container: elementorFrontend.config.swiperClass,
                                    slidesWrapper: 'swiper-wrapper',
                                    prevButton: 'elementor-swiper-button elementor-swiper-button-prev',
                                    nextButton: 'elementor-swiper-button elementor-swiper-button-next',
                                    prevButtonIcon: 'eicon-chevron-left',
                                    nextButtonIcon: 'eicon-chevron-right',
                                    slide: 'swiper-slide',
                                    header: 'elementor-slideshow__header',
                                    footer: 'elementor-slideshow__footer',
                                    title: 'elementor-slideshow__title',
                                    description: 'elementor-slideshow__description',
                                    counter: 'elementor-slideshow__counter',
                                    iconExpand: 'eicon-frame-expand',
                                    iconShrink: 'eicon-frame-minimize',
                                    iconZoomIn: 'eicon-zoom-in-bold',
                                    iconZoomOut: 'eicon-zoom-out-bold',
                                    iconShare: 'eicon-share-arrow',
                                    shareMenu: 'elementor-slideshow__share-menu',
                                    shareLinks: 'elementor-slideshow__share-links',
                                    hideUiVisibility: 'elementor-slideshow--ui-hidden',
                                    shareMode: 'elementor-slideshow--share-mode',
                                    fullscreenMode: 'elementor-slideshow--fullscreen-mode',
                                    zoomMode: 'elementor-slideshow--zoom-mode'
                                }
                            },
                            selectors: {
                                image: '.elementor-lightbox-image',
                                links: 'a, [data-elementor-lightbox]',
                                slideshow: {
                                    activeSlide: '.swiper-slide-active',
                                    prevSlide: '.swiper-slide-prev',
                                    nextSlide: '.swiper-slide-next'
                                }
                            },
                            modalOptions: {
                                id: 'elementor-lightbox',
                                entranceAnimation: 'zoomIn',
                                videoAspectRatio: 169,
                                position: {
                                    enable: false
                                }
                            }
                        };
                    },
                    getModal() {
                        if (!module.exports.modal) {
                            this.initModal();
                        }
                        return module.exports.modal;
                    },
                    initModal() {
                        const closeIcon = {};
                        if (this.isFontIconSvgExperiment) {
                            closeIcon.iconElement = _eIcons.close.element;
                        } else {
                            closeIcon.iconClass = 'eicon-close';
                        }
                        const modal = module.exports.modal = elementorFrontend.getDialogsManager().createWidget('lightbox', {
                            className: 'elementor-lightbox',
                            closeButton: true,
                            closeButtonOptions: { ...closeIcon,
                                attributes: {
                                    role: 'button',
                                    tabindex: 0,
                                    'aria-label': elementorFrontend.config.i18n.close + ' (Esc)'
                                }
                            },
                            selectors: {
                                preventClose: '.' + this.getSettings('classes.preventClose')
                            },
                            hide: {
                                onClick: true
                            }
                        });
                        modal.on('hide', function() {
                            modal.setMessage('');
                        });
                    },
                    showModal(options) {
                        if (options.url && !options.url.startsWith('http')) {
                            return;
                        }
                        this.elements.$closeButton = this.getModal().getElements('closeButton');
                        this.$buttons = this.elements.$closeButton;
                        this.focusedButton = null;
                        const self = this,
                            defaultOptions = self.getDefaultSettings().modalOptions;
                        self.id = options.id;
                        self.setSettings('modalOptions', jQuery.extend(defaultOptions, options.modalOptions));
                        const modal = self.getModal();
                        modal.setID(self.getSettings('modalOptions.id'));
                        modal.onShow = function() {
                            DialogsManager.getWidgetType('lightbox').prototype.onShow.apply(modal, arguments);
                            self.setEntranceAnimation();
                        };
                        modal.onHide = function() {
                            DialogsManager.getWidgetType('lightbox').prototype.onHide.apply(modal, arguments);
                            modal.getElements('message').removeClass('animated');
                            if (_screenfull.default.isFullscreen) {
                                self.deactivateFullscreen();
                            }
                            self.unbindHotKeys();
                        };
                        switch (options.type) {
                            case 'video':
                                self.setVideoContent(options);
                                break;
                            case 'image':
                                {
                                    const slides = [{
                                        image: options.url,
                                        index: 0,
                                        title: options.title,
                                        description: options.description,
                                        hash: options.hash
                                    }];options.slideshow = {
                                        slides,
                                        swiper: {
                                            loop: false,
                                            pagination: false
                                        }
                                    };self.setSlideshowContent(options.slideshow);
                                    break;
                                }
                            case 'slideshow':
                                self.setSlideshowContent(options.slideshow);
                                break;
                            default:
                                self.setHTMLContent(options.html);
                        }
                        modal.show();
                    },
                    createLightbox(element) {
                        let lightboxData = {};
                        if (element.dataset.elementorLightbox) {
                            lightboxData = JSON.parse(element.dataset.elementorLightbox);
                        }
                        if (lightboxData.type && 'slideshow' !== lightboxData.type) {
                            this.showModal(lightboxData);
                            return;
                        }
                        if (!element.dataset.elementorLightboxSlideshow) {
                            const slideshowID = 'single-img';
                            this.showModal({
                                type: 'image',
                                id: slideshowID,
                                url: element.href,
                                hash: element.getAttribute('data-e-action-hash'),
                                title: element.dataset.elementorLightboxTitle,
                                description: element.dataset.elementorLightboxDescription,
                                modalOptions: {
                                    id: 'elementor-lightbox-slideshow-' + slideshowID
                                }
                            });
                            return;
                        }
                        const initialSlideURL = element.dataset.elementorLightboxVideo || element.href;
                        this.openSlideshow(element.dataset.elementorLightboxSlideshow, initialSlideURL);
                    },
                    setHTMLContent(html) {
                        if (window.elementorCommon) {
                            elementorDevTools.deprecation.deprecated('elementorFrontend.utils.lightbox.setHTMLContent()', '3.1.4');
                        }
                        this.getModal().setMessage(html);
                    },
                    setVideoContent(options) {
                        const $ = jQuery;
                        let $videoElement;
                        if ('hosted' === options.videoType) {
                            const videoParams = $.extend({
                                src: options.url,
                                autoplay: ''
                            }, options.videoParams);
                            $videoElement = $('<video>', videoParams);
                        } else {
                            let apiProvider;
                            if (-1 !== options.url.indexOf('vimeo.com')) {
                                apiProvider = elementorFrontend.utils.vimeo;
                            } else if (options.url.match(/^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com|youtube-nocookie\.com)/)) {
                                apiProvider = elementorFrontend.utils.youtube;
                            } else {
                                return;
                            }
                            $videoElement = $('<iframe>', {
                                src: apiProvider.getAutoplayURL(options.url),
                                allowfullscreen: 1
                            });
                        }
                        const classes = this.getSettings('classes'),
                            aspectRatio = this.getRatioDictionry(this.getSettings('modalOptions.videoAspectRatio')),
                            $videoContainer = $('<div>', {
                                class: `${classes.videoContainer} ${classes.preventClose}`
                            }),
                            $videoWrapper = $('<div>', {
                                class: `${classes.videoWrapper} elementor-video-${this.getRatioType(aspectRatio)}`,
                                style: '--video-aspect-ratio: ' + aspectRatio
                            });
                        $videoWrapper.append($videoElement);
                        $videoContainer.append($videoWrapper);
                        const modal = this.getModal();
                        modal.setMessage($videoContainer);
                        const onHideMethod = modal.onHide;
                        modal.onHide = function() {
                            onHideMethod();
                            this.$buttons = jQuery();
                            this.focusedButton = null;
                            modal.getElements('message').removeClass('elementor-video-wrapper');
                        };
                    },
                    getRatioDictionry(ratio) {
                        const aspectRatiosDictionary = {
                            219: 2.33333,
                            169: 1.77777,
                            43: 1.33333,
                            32: 1.5,
                            11: 1,
                            916: 0.5625
                        };
                        return aspectRatiosDictionary[ratio] || ratio;
                    },
                    getRatioType(ratio) {
                        let type = '';
                        if (1 === ratio) {
                            type = 'square';
                        } else {
                            type = ratio < 1 ? 'portrait' : 'landscape';
                        }
                        return type;
                    },
                    getShareLinks() {
                        const {
                            i18n
                        } = elementorFrontend.config, socialNetworks = {
                            facebook: {
                                label: i18n.shareOnFacebook,
                                iconElement: _eIcons.facebook
                            },
                            twitter: {
                                label: i18n.shareOnTwitter,
                                iconElement: _eIcons.twitter
                            },
                            pinterest: {
                                label: i18n.pinIt,
                                iconElement: _eIcons.pinterest
                            }
                        }, $ = jQuery, classes = this.getSettings('classes'), selectors = this.getSettings('selectors'), $linkList = $('<div>', {
                            class: classes.slideshow.shareLinks
                        }), $activeSlide = this.getSlide('active'), $image = $activeSlide.find(selectors.image), videoUrl = $activeSlide.data('elementor-slideshow-video');
                        let itemUrl;
                        if (videoUrl) {
                            itemUrl = videoUrl;
                        } else {
                            itemUrl = $image.attr('src');
                        }
                        $.each(socialNetworks, (key, data) => {
                            const networkLabel = data.label,
                                $link = $('<a>', {
                                    href: this.createShareLink(key, itemUrl, $activeSlide.attr('data-e-action-hash')),
                                    target: '_blank'
                                }).text(networkLabel),
                                $socialNetworkIconElement = this.isFontIconSvgExperiment ? $(data.iconElement.element) : $('<i>', {
                                    class: 'eicon-' + key,
                                    'aria-hidden': 'true'
                                });
                            $link.prepend($socialNetworkIconElement);
                            $linkList.append($link);
                        });
                        if (!videoUrl) {
                            const $downloadIcon = this.isFontIconSvgExperiment ? $(_eIcons.downloadBold.element) : $('<i>', {
                                class: 'eicon-download-bold'
                            });
                            $downloadIcon.attr('aria-label', i18n.download);
                            $linkList.append($('<a>', {
                                href: itemUrl,
                                download: ''
                            }).text(i18n.downloadImage).prepend($downloadIcon));
                        }
                        return $linkList;
                    },
                    createShareLink(networkName, itemUrl) {
                        let hash = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                        const options = {};
                        if ('pinterest' === networkName) {
                            options.image = encodeURIComponent(itemUrl);
                        } else {
                            options.url = encodeURIComponent(location.href.replace(/#.*/, '') + hash);
                        }
                        return ShareLink.getNetworkLink(networkName, options);
                    },
                    getSlideshowHeader() {
                        const {
                            i18n
                        } = elementorFrontend.config, $ = jQuery, showCounter = 'yes' === elementorFrontend.getKitSettings('lightbox_enable_counter'), showFullscreen = 'yes' === elementorFrontend.getKitSettings('lightbox_enable_fullscreen'), showZoom = 'yes' === elementorFrontend.getKitSettings('lightbox_enable_zoom'), showShare = 'yes' === elementorFrontend.getKitSettings('lightbox_enable_share'), classes = this.getSettings('classes'), slideshowClasses = classes.slideshow, elements = this.elements;
                        if (!(showCounter || showFullscreen || showZoom || showShare)) {
                            return;
                        }
                        elements.$header = $('<header>', {
                            class: slideshowClasses.header + ' ' + classes.preventClose
                        });
                        if (showShare) {
                            const iconElement = this.isFontIconSvgExperiment ? _eIcons.shareArrow.element : '<i>';
                            elements.$iconShare = $(iconElement, {
                                class: slideshowClasses.iconShare,
                                role: 'button',
                                tabindex: 0,
                                'aria-label': i18n.share,
                                'aria-expanded': false
                            }).append($('<span>'));
                            const $shareLinks = $('<div>');
                            $shareLinks.on('click', e => {
                                e.stopPropagation();
                            });
                            elements.$shareMenu = $('<div>', {
                                class: slideshowClasses.shareMenu
                            }).append($shareLinks);
                            elements.$iconShare.add(elements.$shareMenu).on('click', this.toggleShareMenu);
                            elements.$header.append(elements.$iconShare, elements.$shareMenu);
                            this.$buttons = this.$buttons.add(elements.$iconShare);
                        }
                        if (showZoom) {
                            const iconElement = this.isFontIconSvgExperiment ? _eIcons.zoomInBold.element : '<i>',
                                showZoomElements = [],
                                showZoomAttrs = {
                                    role: 'switch',
                                    tabindex: 0,
                                    'aria-checked': false,
                                    'aria-label': i18n.zoom
                                },
                                zoomAttrs = { ...showZoomAttrs
                                };
                            if (!this.isFontIconSvgExperiment) {
                                zoomAttrs.class = slideshowClasses.iconZoomIn;
                            }
                            elements.$iconZoom = $(iconElement).attr(zoomAttrs).on('click', this.toggleZoomMode);
                            showZoomElements.push(elements.$iconZoom);
                            if (this.isFontIconSvgExperiment) {
                                elements.$iconZoomOut = $(_eIcons.zoomOutBold.element).attr(showZoomAttrs).addClass(classes.hidden).on('click', this.toggleZoomMode);
                                showZoomElements.push(elements.$iconZoomOut);
                            }
                            elements.$header.append(showZoomElements);
                            this.$buttons = this.$buttons.add(showZoomElements);
                        }
                        if (showFullscreen) {
                            const iconElement = this.isFontIconSvgExperiment ? _eIcons.frameExpand.element : '<i>',
                                fullScreenElements = [],
                                fullScreenAttrs = {
                                    role: 'switch',
                                    tabindex: 0,
                                    'aria-checked': false,
                                    'aria-label': i18n.fullscreen
                                },
                                expandAttrs = { ...fullScreenAttrs
                                };
                            if (!this.isFontIconSvgExperiment) {
                                expandAttrs.class = slideshowClasses.iconExpand;
                            }
                            elements.$iconExpand = $(iconElement).append($('<span>'), $('<span>')).attr(expandAttrs).on('click', this.toggleFullscreen);
                            fullScreenElements.push(elements.$iconExpand);
                            if (this.isFontIconSvgExperiment) {
                                elements.$iconMinimize = $(_eIcons.frameMinimize.element).attr(fullScreenAttrs).addClass(classes.hidden).on('click', this.toggleFullscreen);
                                fullScreenElements.push(elements.$iconMinimize);
                            }
                            elements.$header.append(fullScreenElements);
                            this.$buttons = this.$buttons.add(fullScreenElements);
                        }
                        if (showCounter) {
                            elements.$counter = $('<span>', {
                                class: slideshowClasses.counter
                            });
                            elements.$header.append(elements.$counter);
                        }
                        return elements.$header;
                    },
                    toggleFullscreen() {
                        if (_screenfull.default.isFullscreen) {
                            this.deactivateFullscreen();
                        } else if (_screenfull.default.isEnabled) {
                            this.activateFullscreen();
                        }
                    },
                    toggleZoomMode() {
                        if (1 !== this.swiper.zoom.scale) {
                            this.deactivateZoom();
                        } else {
                            this.activateZoom();
                        }
                    },
                    toggleShareMenu() {
                        if (this.shareMode) {
                            this.deactivateShareMode();
                        } else {
                            this.elements.$shareMenu.html(this.getShareLinks());
                            this.activateShareMode();
                        }
                    },
                    activateShareMode() {
                        const classes = this.getSettings('classes');
                        this.elements.$container.addClass(classes.slideshow.shareMode);
                        this.elements.$iconShare.attr('aria-expanded', true);
                        this.swiper.detachEvents();
                        this.$originalButtons = this.$buttons;
                        this.$buttons = this.elements.$iconShare.add(this.elements.$shareMenu.find('a'));
                        this.shareMode = true;
                    },
                    deactivateShareMode() {
                        const classes = this.getSettings('classes');
                        this.elements.$container.removeClass(classes.slideshow.shareMode);
                        this.elements.$iconShare.attr('aria-expanded', false);
                        this.swiper.attachEvents();
                        this.$buttons = this.$originalButtons;
                        this.shareMode = false;
                    },
                    activateFullscreen() {
                        const classes = this.getSettings('classes');
                        _screenfull.default.request(this.elements.$container.parents('.dialog-widget')[0]);
                        if (this.isFontIconSvgExperiment) {
                            this.elements.$iconExpand.addClass(classes.hidden).attr('aria-checked', 'false');
                            this.elements.$iconMinimize.removeClass(classes.hidden).attr('aria-checked', 'true');
                        } else {
                            this.elements.$iconExpand.removeClass(classes.slideshow.iconExpand).addClass(classes.slideshow.iconShrink).attr('aria-checked', 'true');
                        }
                        this.elements.$container.addClass(classes.slideshow.fullscreenMode);
                    },
                    deactivateFullscreen() {
                        const classes = this.getSettings('classes');
                        _screenfull.default.exit();
                        if (this.isFontIconSvgExperiment) {
                            this.elements.$iconExpand.removeClass(classes.hidden).attr('aria-checked', 'true');
                            this.elements.$iconMinimize.addClass(classes.hidden).attr('aria-checked', 'false');
                        } else {
                            this.elements.$iconExpand.removeClass(classes.slideshow.iconShrink).addClass(classes.slideshow.iconExpand).attr('aria-checked', 'false');
                        }
                        this.elements.$container.removeClass(classes.slideshow.fullscreenMode);
                    },
                    activateZoom() {
                        const swiper = this.swiper,
                            elements = this.elements,
                            classes = this.getSettings('classes');
                        swiper.zoom.in();
                        swiper.allowSlideNext = false;
                        swiper.allowSlidePrev = false;
                        swiper.allowTouchMove = false;
                        elements.$container.addClass(classes.slideshow.zoomMode);
                        if (this.isFontIconSvgExperiment) {
                            elements.$iconZoom.addClass(classes.hidden).attr('aria-checked', 'false');
                            elements.$iconZoomOut.removeClass(classes.hidden).attr('aria-checked', 'true');
                        } else {
                            elements.$iconZoom.removeClass(classes.slideshow.iconZoomIn).addClass(classes.slideshow.iconZoomOut);
                        }
                    },
                    deactivateZoom() {
                        const swiper = this.swiper,
                            elements = this.elements,
                            classes = this.getSettings('classes');
                        swiper.zoom.out();
                        swiper.allowSlideNext = true;
                        swiper.allowSlidePrev = true;
                        swiper.allowTouchMove = true;
                        elements.$container.removeClass(classes.slideshow.zoomMode);
                        if (this.isFontIconSvgExperiment) {
                            elements.$iconZoom.removeClass(classes.hidden).attr('aria-checked', 'true');
                            elements.$iconZoomOut.addClass(classes.hidden).attr('aria-checked', 'false');
                        } else {
                            elements.$iconZoom.removeClass(classes.slideshow.iconZoomOut).addClass(classes.slideshow.iconZoomIn);
                        }
                    },
                    getSlideshowFooter() {
                        const $ = jQuery,
                            classes = this.getSettings('classes'),
                            $footer = $('<footer>', {
                                class: classes.slideshow.footer + ' ' + classes.preventClose
                            }),
                            $title = $('<div>', {
                                class: classes.slideshow.title
                            }),
                            $description = $('<div>', {
                                class: classes.slideshow.description
                            });
                        $footer.append($title, $description);
                        return $footer;
                    },
                    setSlideshowContent(options) {
                        const {
                            i18n
                        } = elementorFrontend.config, $ = jQuery, isSingleSlide = 1 === options.slides.length, hasTitle = '' !== elementorFrontend.getKitSettings('lightbox_title_src'), hasDescription = '' !== elementorFrontend.getKitSettings('lightbox_description_src'), showFooter = hasTitle || hasDescription, classes = this.getSettings('classes'), slideshowClasses = classes.slideshow, $container = $('<div>', {
                            class: slideshowClasses.container
                        }), $slidesWrapper = $('<div>', {
                            class: slideshowClasses.slidesWrapper
                        });
                        let $prevButton, $nextButton;
                        options.slides.forEach(slide => {
                            let slideClass = slideshowClasses.slide + ' ' + classes.item;
                            if (slide.video) {
                                slideClass += ' ' + classes.video;
                            }
                            const $slide = $('<div>', {
                                class: slideClass
                            });
                            if (slide.video) {
                                $slide.attr('data-elementor-slideshow-video', slide.video);
                                const playVideoLoadingElement = this.isFontIconSvgExperiment ? _eIcons.loading.element : '<i>',
                                    $playIcon = $('<div>', {
                                        class: classes.playButton
                                    }).html($(playVideoLoadingElement).attr('aria-label', i18n.playVideo).addClass(classes.playButtonIcon));
                                $slide.append($playIcon);
                            } else {
                                const $zoomContainer = $('<div>', {
                                        class: 'swiper-zoom-container'
                                    }),
                                    $slidePlaceholder = $('<div class="swiper-lazy-preloader"></div>'),
                                    imageAttributes = {
                                        'data-src': slide.image,
                                        class: classes.image + ' ' + classes.preventClose + ' swiper-lazy'
                                    };
                                if (slide.title) {
                                    imageAttributes['data-title'] = slide.title;
                                    imageAttributes.alt = slide.title;
                                }
                                if (slide.description) {
                                    imageAttributes['data-description'] = slide.description;
                                    imageAttributes.alt += ' - ' + slide.description;
                                }
                                const $slideImage = $('<img>', imageAttributes);
                                $zoomContainer.append([$slideImage, $slidePlaceholder]);
                                $slide.append($zoomContainer);
                            }
                            if (slide.hash) {
                                $slide.attr('data-e-action-hash', slide.hash);
                            }
                            $slidesWrapper.append($slide);
                        });
                        this.elements.$container = $container;
                        this.elements.$header = this.getSlideshowHeader();
                        $container.prepend(this.elements.$header).append($slidesWrapper);
                        if (!isSingleSlide) {
                            const $prevButtonIcon = this.isFontIconSvgExperiment ? $(_eIcons.chevronLeft.element) : $('<i>', {
                                    class: slideshowClasses.prevButtonIcon,
                                    'aria-hidden': 'true'
                                }),
                                $nextButtonIcon = this.isFontIconSvgExperiment ? $(_eIcons.chevronRight.element) : $('<i>', {
                                    class: slideshowClasses.nextButtonIcon,
                                    'aria-hidden': 'true'
                                }),
                                $prevButtonLabel = $('<span>', {
                                    class: 'screen-reader-text'
                                }).html(i18n.previous),
                                $nextButtonLabel = $('<span>', {
                                    class: 'screen-reader-text'
                                }).html(i18n.next);
                            $prevButton = $('<div>', {
                                class: slideshowClasses.prevButton + ' ' + classes.preventClose
                            }).append($prevButtonIcon, $prevButtonLabel);
                            $nextButton = $('<div>', {
                                class: slideshowClasses.nextButton + ' ' + classes.preventClose
                            }).append($nextButtonIcon, $nextButtonLabel);
                            $container.append($nextButton, $prevButton);
                            this.$buttons = this.$buttons.add($nextButton).add($prevButton);
                        }
                        if (showFooter) {
                            this.elements.$footer = this.getSlideshowFooter();
                            $container.append(this.elements.$footer);
                        }
                        this.setSettings('hideUiTimeout', '');
                        $container.on('click mousemove keypress', this.showLightboxUi);
                        const modal = this.getModal();
                        modal.setMessage($container);
                        const onShowMethod = modal.onShow;
                        modal.onShow = async () => {
                            onShowMethod();
                            const swiperOptions = {
                                pagination: {
                                    el: '.' + slideshowClasses.counter,
                                    type: 'fraction'
                                },
                                on: {
                                    slideChangeTransitionEnd: this.onSlideChange
                                },
                                lazy: {
                                    loadPrevNext: true
                                },
                                zoom: true,
                                spaceBetween: 100,
                                grabCursor: true,
                                runCallbacksOnInit: false,
                                loop: true,
                                keyboard: true,
                                handleElementorBreakpoints: true
                            };
                            if (!isSingleSlide) {
                                swiperOptions.navigation = {
                                    prevEl: $prevButton[0],
                                    nextEl: $nextButton[0]
                                };
                            }
                            if (options.swiper) {
                                $.extend(swiperOptions, options.swiper);
                            }
                            const Swiper = elementorFrontend.utils.swiper;
                            this.swiper = await new Swiper($container, swiperOptions);
                            $container.data('swiper', this.swiper);
                            this.playSlideVideo();
                            if (showFooter) {
                                this.updateFooterText();
                            }
                            this.bindHotKeys();
                            this.makeButtonsAccessible();
                        };
                    },
                    makeButtonsAccessible() {
                        this.$buttons.attr('tabindex', 0).on('keypress', event => {
                            const ENTER_KEY = 13,
                                SPACE_KEY = 32;
                            if (ENTER_KEY === event.which || SPACE_KEY === event.which) {
                                jQuery(event.currentTarget).trigger('click');
                            }
                        });
                    },
                    showLightboxUi() {
                        const slideshowClasses = this.getSettings('classes').slideshow;
                        this.elements.$container.removeClass(slideshowClasses.hideUiVisibility);
                        clearTimeout(this.getSettings('hideUiTimeout'));
                        this.setSettings('hideUiTimeout', setTimeout(() => {
                            if (!this.shareMode) {
                                this.elements.$container.addClass(slideshowClasses.hideUiVisibility);
                            }
                        }, 3500));
                    },
                    bindHotKeys() {
                        this.getModal().getElements('window').on('keydown', this.activeKeyDown);
                    },
                    unbindHotKeys() {
                        this.getModal().getElements('window').off('keydown', this.activeKeyDown);
                    },
                    activeKeyDown(event) {
                        this.showLightboxUi();
                        const TAB_KEY = 9;
                        if (event.which === TAB_KEY) {
                            const $buttons = this.$buttons;
                            let focusedButton, isFirst = false,
                                isLast = false;
                            $buttons.each(index => {
                                const item = $buttons[index];
                                if (jQuery(item).is(':focus')) {
                                    focusedButton = item;
                                    isFirst = 0 === index;
                                    isLast = $buttons.length - 1 === index;
                                    return false;
                                }
                            });
                            if (event.shiftKey) {
                                if (isFirst) {
                                    event.preventDefault();
                                    $buttons.last().trigger('focus');
                                }
                            } else if (isLast || !focusedButton) {
                                event.preventDefault();
                                $buttons.first().trigger('focus');
                            }
                        }
                    },
                    getSlide(slideState) {
                        return jQuery(this.swiper.slides).filter(this.getSettings('selectors.slideshow.' + slideState + 'Slide'));
                    },
                    updateFooterText() {
                        if (!this.elements.$footer) {
                            return;
                        }
                        const classes = this.getSettings('classes'),
                            $activeSlide = this.getSlide('active'),
                            $image = $activeSlide.find('.elementor-lightbox-image'),
                            titleText = $image.data('title'),
                            descriptionText = $image.data('description'),
                            $title = this.elements.$footer.find('.' + classes.slideshow.title),
                            $description = this.elements.$footer.find('.' + classes.slideshow.description);
                        $title.text(titleText || '');
                        $description.text(descriptionText || '');
                    },
                    playSlideVideo() {
                        const $activeSlide = this.getSlide('active'),
                            videoURL = $activeSlide.data('elementor-slideshow-video');
                        if (!videoURL) {
                            return;
                        }
                        const classes = this.getSettings('classes'),
                            aspectRatio = this.getRatioDictionry(this.getSettings('modalOptions.videoAspectRatio')),
                            $videoContainer = jQuery('<div>', {
                                class: classes.videoContainer + ' ' + classes.invisible
                            }),
                            $videoWrapper = jQuery('<div>', {
                                class: `${classes.videoWrapper} elementor-video-${this.getRatioType(aspectRatio)}`,
                                style: '--video-aspect-ratio: ' + aspectRatio
                            }),
                            $playIcon = $activeSlide.children('.' + classes.playButton);
                        let videoType, apiProvider;
                        $videoContainer.append($videoWrapper);
                        $activeSlide.append($videoContainer);
                        if (-1 !== videoURL.indexOf('vimeo.com')) {
                            videoType = 'vimeo';
                            apiProvider = elementorFrontend.utils.vimeo;
                        } else if (videoURL.match(/^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com)/)) {
                            videoType = 'youtube';
                            apiProvider = elementorFrontend.utils.youtube;
                        }
                        const videoID = apiProvider.getVideoIDFromURL(videoURL);
                        apiProvider.onApiReady(apiObject => {
                            if ('youtube' === videoType) {
                                this.prepareYTVideo(apiObject, videoID, $videoContainer, $videoWrapper, $playIcon);
                            } else if ('vimeo' === videoType) {
                                this.prepareVimeoVideo(apiObject, videoURL, $videoContainer, $videoWrapper, $playIcon);
                            }
                        });
                        $playIcon.addClass(classes.playing).removeClass(classes.hidden);
                    },
                    prepareYTVideo(YT, videoID, $videoContainer, $videoWrapper, $playIcon) {
                        const classes = this.getSettings('classes'),
                            $videoPlaceholderElement = jQuery('<div>');
                        let startStateCode = YT.PlayerState.PLAYING;
                        $videoWrapper.append($videoPlaceholderElement);
                        if (window.chrome) {
                            startStateCode = YT.PlayerState.UNSTARTED;
                        }
                        $videoContainer.addClass('elementor-loading' + ' ' + classes.invisible);
                        this.player = new YT.Player($videoPlaceholderElement[0], {
                            videoId: videoID,
                            events: {
                                onReady: () => {
                                    $playIcon.addClass(classes.hidden);
                                    $videoContainer.removeClass(classes.invisible);
                                    this.player.playVideo();
                                },
                                onStateChange: event => {
                                    if (event.data === startStateCode) {
                                        $videoContainer.removeClass('elementor-loading' + ' ' + classes.invisible);
                                    }
                                }
                            },
                            playerVars: {
                                controls: 0,
                                rel: 0
                            }
                        });
                    },
                    prepareVimeoVideo(Vimeo, videoURL, $videoContainer, $videoWrapper, $playIcon) {
                        const classes = this.getSettings('classes'),
                            vimeoOptions = {
                                url: videoURL,
                                autoplay: true,
                                transparent: false,
                                playsinline: false
                            };
                        this.player = new Vimeo.Player($videoWrapper, vimeoOptions);
                        this.player.ready().then(() => {
                            $playIcon.addClass(classes.hidden);
                            $videoContainer.removeClass(classes.invisible);
                        });
                    },
                    setEntranceAnimation(animation) {
                        animation = animation || elementorFrontend.getCurrentDeviceSetting(this.getSettings('modalOptions'), 'entranceAnimation');
                        const $widgetMessage = this.getModal().getElements('message');
                        if (this.oldAnimation) {
                            $widgetMessage.removeClass(this.oldAnimation);
                        }
                        this.oldAnimation = animation;
                        if (animation) {
                            $widgetMessage.addClass('animated ' + animation);
                        }
                    },
                    openSlideshow(slideshowID, initialSlideURL) {
                        const $allSlideshowLinks = jQuery(this.getSettings('selectors.links')).filter((index, element) => {
                            const $element = jQuery(element);
                            return slideshowID === element.dataset.elementorLightboxSlideshow && !$element.parent('.swiper-slide-duplicate').length && !$element.parents('.slick-cloned').length;
                        });
                        const slides = [];
                        let initialSlideIndex = 0;
                        $allSlideshowLinks.each(function() {
                            const slideVideo = this.dataset.elementorLightboxVideo;
                            let slideIndex = this.dataset.elementorLightboxIndex;
                            if (undefined === slideIndex) {
                                slideIndex = $allSlideshowLinks.index(this);
                            }
                            if (initialSlideURL === this.href || slideVideo && initialSlideURL === slideVideo) {
                                initialSlideIndex = slideIndex;
                            }
                            const slideData = {
                                image: this.href,
                                index: slideIndex,
                                title: this.dataset.elementorLightboxTitle,
                                description: this.dataset.elementorLightboxDescription,
                                hash: this.getAttribute('data-e-action-hash')
                            };
                            if (slideVideo) {
                                slideData.video = slideVideo;
                            }
                            slides.push(slideData);
                        });
                        slides.sort((a, b) => a.index - b.index);
                        this.showModal({
                            type: 'slideshow',
                            id: slideshowID,
                            modalOptions: {
                                id: 'elementor-lightbox-slideshow-' + slideshowID
                            },
                            slideshow: {
                                slides,
                                swiper: {
                                    initialSlide: +initialSlideIndex
                                }
                            }
                        });
                    },
                    onSlideChange() {
                        this.getSlide('prev').add(this.getSlide('next')).add(this.getSlide('active')).find('.' + this.getSettings('classes.videoWrapper')).remove();
                        this.playSlideVideo();
                        this.updateFooterText();
                    }
                });
            }),
        "../assets/dev/js/frontend/utils/lightbox/screenfull.js":
            /*!**************************************************************!*\
            !*** ../assets/dev/js/frontend/utils/lightbox/screenfull.js ***!
            \**************************************************************/
            ((module) => {
                "use strict";
                (function() {
                    'use strict';
                    var document = typeof window !== 'undefined' && typeof window.document !== 'undefined' ? window.document : {};
                    var isCommonjs = true && module.exports;
                    var fn = function() {
                        var val;
                        var fnMap = [
                            ['requestFullscreen', 'exitFullscreen', 'fullscreenElement', 'fullscreenEnabled', 'fullscreenchange', 'fullscreenerror'],
                            ['webkitRequestFullscreen', 'webkitExitFullscreen', 'webkitFullscreenElement', 'webkitFullscreenEnabled', 'webkitfullscreenchange', 'webkitfullscreenerror'],
                            ['webkitRequestFullScreen', 'webkitCancelFullScreen', 'webkitCurrentFullScreenElement', 'webkitCancelFullScreen', 'webkitfullscreenchange', 'webkitfullscreenerror'],
                            ['mozRequestFullScreen', 'mozCancelFullScreen', 'mozFullScreenElement', 'mozFullScreenEnabled', 'mozfullscreenchange', 'mozfullscreenerror'],
                            ['msRequestFullscreen', 'msExitFullscreen', 'msFullscreenElement', 'msFullscreenEnabled', 'MSFullscreenChange', 'MSFullscreenError']
                        ];
                        var i = 0;
                        var l = fnMap.length;
                        var ret = {};
                        for (; i < l; i++) {
                            val = fnMap[i];
                            if (val && val[1] in document) {
                                var valLength = val.length;
                                for (i = 0; i < valLength; i++) {
                                    ret[fnMap[0][i]] = val[i];
                                }
                                return ret;
                            }
                        }
                        return false;
                    }();
                    var eventNameMap = {
                        change: fn.fullscreenchange,
                        error: fn.fullscreenerror
                    };
                    var screenfull = {
                        request(element) {
                            return new Promise(function(resolve, reject) {
                                var onFullScreenEntered = function() {
                                    this.off('change', onFullScreenEntered);
                                    resolve();
                                }.bind(this);
                                this.on('change', onFullScreenEntered);
                                element = element || document.documentElement;
                                Promise.resolve(element[fn.requestFullscreen]()).catch(reject);
                            }.bind(this));
                        },
                        exit() {
                            return new Promise(function(resolve, reject) {
                                if (!this.isFullscreen) {
                                    resolve();
                                    return;
                                }
                                var onFullScreenExit = function() {
                                    this.off('change', onFullScreenExit);
                                    resolve();
                                }.bind(this);
                                this.on('change', onFullScreenExit);
                                Promise.resolve(document[fn.exitFullscreen]()).catch(reject);
                            }.bind(this));
                        },
                        toggle(element) {
                            return this.isFullscreen ? this.exit() : this.request(element);
                        },
                        onchange(callback) {
                            this.on('change', callback);
                        },
                        onerror(callback) {
                            this.on('error', callback);
                        },
                        on(event, callback) {
                            var eventName = eventNameMap[event];
                            if (eventName) {
                                document.addEventListener(eventName, callback, false);
                            }
                        },
                        off(event, callback) {
                            var eventName = eventNameMap[event];
                            if (eventName) {
                                document.removeEventListener(eventName, callback, false);
                            }
                        },
                        raw: fn
                    };
                    if (!fn) {
                        if (isCommonjs) {
                            module.exports = {
                                isEnabled: false
                            };
                        } else {
                            window.screenfull = {
                                isEnabled: false
                            };
                        }
                        return;
                    }
                    Object.defineProperties(screenfull, {
                        isFullscreen: {
                            get() {
                                return Boolean(document[fn.fullscreenElement]);
                            }
                        },
                        element: {
                            enumerable: true,
                            get() {
                                return document[fn.fullscreenElement];
                            }
                        },
                        isEnabled: {
                            enumerable: true,
                            get() {
                                return Boolean(document[fn.fullscreenEnabled]);
                            }
                        }
                    });
                    if (isCommonjs) {
                        module.exports = screenfull;
                    } else {
                        window.screenfull = screenfull;
                    }
                })();
            }),
        "../node_modules/@babel/runtime/helpers/defineProperty.js":
            /*!****************************************************************!*\
            !*** ../node_modules/@babel/runtime/helpers/defineProperty.js ***!
            \****************************************************************/
            ((module, __unused_webpack_exports, __webpack_require__) => {
                var toPropertyKey = __webpack_require__( /*!./toPropertyKey.js*/ "../node_modules/@babel/runtime/helpers/toPropertyKey.js");

                function _defineProperty(obj, key, value) {
                    key = toPropertyKey(key);
                    if (key in obj) {
                        Object.defineProperty(obj, key, {
                            value: value,
                            enumerable: true,
                            configurable: true,
                            writable: true
                        });
                    } else {
                        obj[key] = value;
                    }
                    return obj;
                }
                module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;
            }),
        "../node_modules/@babel/runtime/helpers/toPrimitive.js":
            /*!*************************************************************!*\
            !*** ../node_modules/@babel/runtime/helpers/toPrimitive.js ***!
            \*************************************************************/
            ((module, __unused_webpack_exports, __webpack_require__) => {
                var _typeof = (__webpack_require__( /*!./typeof.js*/ "../node_modules/@babel/runtime/helpers/typeof.js")["default"]);

                function _toPrimitive(input, hint) {
                    if (_typeof(input) !== "object" || input === null) return input;
                    var prim = input[Symbol.toPrimitive];
                    if (prim !== undefined) {
                        var res = prim.call(input, hint || "default");
                        if (_typeof(res) !== "object") return res;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return (hint === "string" ? String : Number)(input);
                }
                module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;
            }),
        "../node_modules/@babel/runtime/helpers/toPropertyKey.js":
            /*!***************************************************************!*\
            !*** ../node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
            \***************************************************************/
            ((module, __unused_webpack_exports, __webpack_require__) => {
                var _typeof = (__webpack_require__( /*!./typeof.js*/ "../node_modules/@babel/runtime/helpers/typeof.js")["default"]);
                var toPrimitive = __webpack_require__( /*!./toPrimitive.js*/ "../node_modules/@babel/runtime/helpers/toPrimitive.js");

                function _toPropertyKey(arg) {
                    var key = toPrimitive(arg, "string");
                    return _typeof(key) === "symbol" ? key : String(key);
                }
                module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;
            }),
        "../node_modules/@babel/runtime/helpers/typeof.js":
            /*!********************************************************!*\
            !*** ../node_modules/@babel/runtime/helpers/typeof.js ***!
            \********************************************************/
            ((module) => {
                function _typeof(obj) {
                    "@babel/helpers - typeof";
                    return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
                        return typeof obj;
                    } : function(obj) {
                        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                    }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
                }
                module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
            })
    }
]);