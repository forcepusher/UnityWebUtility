const library = {
    // Class definition.
  
    inBackgroundChangeCallbackPtr: undefined,

    $webApplication: {
        setInBackgroundChangeCallback: function (callbackPtr) {
            webApplication.inBackgroundChangeCallbackPtr = callbackPtr;

            document.addEventListener('visibilitychange', function () {
                dynCall('vii', callbackPtr, [errorUnmanagedStringPtr]);
            });
        },

        getInBackground: function () {
            return document.hidden;
        },
    },

    // External C# calls.

    SetWebApplicationInBackgroundChangeCallback: function (callbackPtr) {
        webApplication.setInBackgroundChangeCallback(callbackPtr);
    },

    GetWebApplicationInBackground: function () {
        return webApplication.getInBackground();
    },
}

autoAddDeps(library, '$webApplication');
mergeInto(LibraryManager.library, library);
