const deviceLibrary = {

  // Class definition.

  $device: {
    getIsMobile: function () {
      const isMobileDevice = navigator.maxTouchPoints > 0 && !!document.createElement('canvas').getContext('webgl')?.getExtension('WEBGL_compressed_texture_astc');
      return isMobileDevice;
    },
  },

  // External C# calls.

  GetDeviceIsMobile: function () {
    return device.getIsMobile();
  },
}

autoAddDeps(deviceLibrary, '$device');
mergeInto(LibraryManager.library, deviceLibrary);
