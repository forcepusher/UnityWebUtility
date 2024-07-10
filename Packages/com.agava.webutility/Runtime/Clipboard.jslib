const clipboardLibrary = {

    // Class definition.

    $clipboard: {
        initialize: function () {
            
        },
    },

    // External C# calls.

    ClipboardInitialize: function () {
        clipboard.initialize();
    },
}

autoAddDeps(clipboardLibrary, '$clipboard');
mergeInto(LibraryManager.library, clipboardLibrary);
