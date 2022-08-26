using System.Collections;
using NUnit.Framework;
using UnityEngine;
using UnityEngine.TestTools;

namespace Agava.WebUtility.Tests
{
    public class WebApplicationTests
    {
        [Test]
        public void ShouldReturnNotInBackground()
        {
            Assert.IsFalse(WebApplication.InBackground);
        }
    }
}
