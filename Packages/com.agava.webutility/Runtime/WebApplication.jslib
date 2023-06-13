const library = {

    // Class definition.

    $webApplication: {
        initialize: function (onInBackgroundChangeCallbackPtr) {
            document.addEventListener("pointerdown", () => {
                window.focus();
            }); // Fix Unity OnApplicationFocus() callback bug in Chrome-based mobile browsers when running in an iFrame.

            document.addEventListener('visibilitychange', function () {
                dynCall('vi', onInBackgroundChangeCallbackPtr, [document.hidden]);
            });
        },

        getInBackground: function () {
            return document.hidden;
        },
    },

    // External C# calls.

    WebApplicationInitialize: function (onInBackgroundChangeCallbackPtr) {
        webApplication.initialize(onInBackgroundChangeCallbackPtr);
    },

    GetWebApplicationInBackground: function () {
        return webApplication.getInBackground();
    },
}

autoAddDeps(library, '$webApplication');
mergeInto(LibraryManager.library, library);
