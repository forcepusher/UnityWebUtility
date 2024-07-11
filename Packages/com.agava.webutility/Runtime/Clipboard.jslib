const clipboardLibrary = {

    // Class definition.

    $clipboard: {
        initialize: function () {
            // Do something to fix the iOS behavior that prevents clipboard from working
        },

        write: function (text) {
            navigator.clipboard.writeText(text);
        },

        read: function () {
            //navigator.clipboard.readText();
        },
    },

    // External C# calls.

    ClipboardInitialize: function () {
        clipboard.initialize();
    },

    ClipboardWrite: function(textPtr) {
        const text = UTF8ToString(textPtr);

        clipboard.write(text);
    },

    ClipboardRead: function() {
        return clipboard.read();
    },
}

autoAddDeps(clipboardLibrary, '$clipboard');
mergeInto(LibraryManager.library, clipboardLibrary);
