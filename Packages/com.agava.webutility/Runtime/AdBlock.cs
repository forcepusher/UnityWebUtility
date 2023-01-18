using System.Runtime.InteropServices;

namespace Agava.WebUtility
{
    public static class AdBlock
    {
        public static bool Enabled => GetAdBlockEnabled();

        [DllImport("__Internal")]
        private static extern bool GetAdBlockEnabled();
    }
}
