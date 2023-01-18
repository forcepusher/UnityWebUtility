// class AdblockDetector {
//     constructor() {
//         this.bannerIds = [
//             'AdHeader',
//             'AdContainer',
//             'AD_Top',
//             'homead',
//             'ad-lead'
//         ];
//         this.init();
//     }
//     /**
//      * Init library - add some tags to page with ads ids
//      *
//      * @returns {void} create detector instance
//      * @memberof AdblockDetector
//      */
//     init() {
//         const dataContainer = document.createElement('div');
//         dataContainer.innerHTML = this.generatesBannersString();
//         document.body.appendChild(dataContainer);
//     }
//     /**
//      * Check enabling adblock
//      *
//      * @returns {Boolean} Status adblock enabling
//      * @memberof AdblockDetector
//      */
//     detect() {
//         return !this.bannerIds.every(bannerId => this.checkVisibility(bannerId));
//     }
//     /**
//      * Generate all ads blocks from ids dictionary
//      *
//      * @returns {String} Ads blocks
//      * @private
//      * @memberof AdblockDetector
//      */
//     generatesBannersString() {
//         return this
//             .bannerIds
//             .map(bannerId => `<div id="${bannerId}"></div>`)
//             .join('');
//     }
//     /**
//      * Check visibility by banner id
//      *
//      * @param {Number} bannerId
//      * @returns {HTMLElement|null} Return banners if adblock is not enabled
//      * @private
//      * @memberof AdblockDetector
//      */
//     checkVisibility(bannerId) {
//         const el = document.querySelector(`#${bannerId}`);
//         if (el)
//             return el.offsetParent;
//         return null;
//     }
// }

const library = {
    
    // Class definition.

    $adBlock: {
        fakeAdBannerIds: [
            'AdHeader',
            'AdContainer',
            'AD_Top',
            'homead',
            'ad-lead'
        ],

        getEnabled: function () {
            return !adBlock.fakeAdBannerIds.every(function(fakeAdBannerId) {
                const fakeAdBannerDiv = document.querySelector('#' + fakeAdBannerId);
                if (fakeAdBannerDiv) { return fakeAdBannerDiv.offsetParent; }

                return null;
            });
        },

        initialize: function () {
            const fakeAdContainer = document.createElement('div');
            fakeAdContainer.innerHTML = adBlock.fakeAdBannerIds.map(function(fakeAdBannerId) {
                return '<div id=' + fakeAdBannerId + '></div>'
            }).join('');
            document.body.appendChild(fakeAdContainer);
        },
    },

    // External C# calls.

    GetAdBlockEnabled: function () {
        return adBlock.getEnabled();
    },

    AdBlockInitialize: function () {
        adBlock.initialize();
    },
}

autoAddDeps(library, '$adBlock');
mergeInto(LibraryManager.library, library);
