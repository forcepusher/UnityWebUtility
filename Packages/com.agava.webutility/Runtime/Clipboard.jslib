const clipboardLibrary = {

  // Class definition.

  $clipboard: {
    initialize: function () {
      // Do something to fix the iOS behavior that prevents clipboard from working
    },

    write: function (text, successCallbackPtr, errorCallbackPtr) {
      navigator.clipboard.writeText(text);
    },

    read: function (successCallbackPtr, errorCallbackPtr) {
      //navigator.clipboard.readText();
    },

    allocateUnmanagedString: function (string) {
      const stringBufferSize = lengthBytesUTF8(string) + 1;
      const stringBufferPtr = _malloc(stringBufferSize);
      stringToUTF8(string, stringBufferPtr, stringBufferSize);
      return stringBufferPtr;
    },
  },

  // External C# calls.

  ClipboardInitialize: function () {
    clipboard.initialize();
  },

  ClipboardWrite: function (textPtr, successCallbackPtr, errorCallbackPtr) {
    const text = UTF8ToString(textPtr);

    clipboard.write(text, successCallbackPtr, errorCallbackPtr);
  },

  ClipboardRead: function (successCallbackPtr, errorCallbackPtr) {
    return clipboard.read(successCallbackPtr, errorCallbackPtr);
  },
}

autoAddDeps(clipboardLibrary, '$clipboard');
mergeInto(LibraryManager.library, clipboardLibrary);
