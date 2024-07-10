using System.Runtime.InteropServices;
#if UNITY_WEBGL && !UNITY_EDITOR
using UnityEngine;
using UnityEngine.Scripting;

[assembly: AlwaysLinkAssembly]
#endif

namespace Agava.WebUtility
{
    public static class Clipboard
    {
#if UNITY_WEBGL && !UNITY_EDITOR
        [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.SubsystemRegistration)]
#endif
        [System.Diagnostics.CodeAnalysis.SuppressMessage("CodeQuality", "IDE0051:Remove unused private members", Justification = "Unity InitializeOnLoadMethod")]
        private static void Initialize()
        {
            ClipboardInitialize();
        }

        [DllImport("__Internal")]
        private static extern bool ClipboardInitialize();
    }
}
