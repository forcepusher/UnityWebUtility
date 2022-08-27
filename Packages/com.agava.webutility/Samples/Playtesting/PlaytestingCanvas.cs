using UnityEngine;

namespace Agava.WebUtility.Samples
{
    public class PlaytestingCanvas : MonoBehaviour
    {
        private void Update()
        {
#if !UNITY_WEBGL || UNITY_EDITOR
            return;
#endif

            AudioListener.pause = WebApplication.InBackground;
        }
    }
}
