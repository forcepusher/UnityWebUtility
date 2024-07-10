const library = {

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

autoAddDeps(library, '$clipboard');
mergeInto(LibraryManager.library, library);
