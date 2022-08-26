const library = {

    // Class definition.
  
    $webApplication: {
        getInBackground: function () {
            return document.hidden;
          },
    },

    // External C# calls.

    WebApplicationGetInBackground: function () {
        yandexGames.yandexGamesSdkInitialize();
    },
}

autoAddDeps(library, '$webApplication');
mergeInto(LibraryManager.library, library);
