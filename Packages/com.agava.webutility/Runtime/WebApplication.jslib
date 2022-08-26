const library = {

    // Class definition.
  
    $webApplication: {
        getInBackground: function () {
            return document.hidden;
          },
    },

    // External C# calls.

    GetWebApplicationInBackground: function () {
        webApplication.getInBackground();
    },
}

autoAddDeps(library, '$webApplication');
mergeInto(LibraryManager.library, library);
