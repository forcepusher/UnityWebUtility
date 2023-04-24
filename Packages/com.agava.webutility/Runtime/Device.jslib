const library = {
    
    // Class definition.

    $device: {
        getIsMobile: function () {
            return false; // TODO THIS IS TEMPORARY
        },
    },

    // External C# calls.

    GetDeviceIsMobile: function () {
        return device.getIsMobile();
    },
}

autoAddDeps(library, '$device');
mergeInto(LibraryManager.library, library);
