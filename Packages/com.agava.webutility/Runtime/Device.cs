using System.Runtime.InteropServices;

namespace Agava.WebUtility
{
    public static class Device
    {
        public static bool IsMobile;

        [DllImport("__Internal")]
        private static extern bool GetDeviceIsMobile();
    }
}
