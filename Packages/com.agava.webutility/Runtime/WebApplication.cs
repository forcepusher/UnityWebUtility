using System.Runtime.InteropServices;

namespace Agava.WebUtility
{
    public static class WebApplication
    {
        public static bool InBackground => GetWebApplicationInBackground();

        [DllImport("__Internal")]
        private static extern bool GetWebApplicationInBackground();
    }
}
