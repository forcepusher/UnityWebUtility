const clipboardLibrary = {

    // Class definition.

    $clipboard: {
        initialize: function () {
            // Do something to fix the iOS behavior that prevents clipboard from working
        },

        write: function (text) {

        },

        read: function () {
            return "derp";
        },
    },

    // External C# calls.

    ClipboardInitialize: function () {
        clipboard.initialize();
    },

    ClipboardWrite: function(text) {
        clipboard.write(text);
    },

    ClipboardRead: function() {
        return clipboard.read();
    },
}

autoAddDeps(clipboardLibrary, '$clipboard');
mergeInto(LibraryManager.library, clipboardLibrary);
