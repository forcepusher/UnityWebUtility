const library = {

    // Class definition.
  
    $webApplication: {
        getInBackground: function () {
            return document.hidden;
          },
    },

    // External C# calls.

    GetWebApplicationInBackground: function () {
        return webApplication.getInBackground();
    },
}

autoAddDeps(library, '$webApplication');
mergeInto(LibraryManager.library, library);
