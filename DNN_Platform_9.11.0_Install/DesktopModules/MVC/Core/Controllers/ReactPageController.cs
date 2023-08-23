using DotNetNuke.Web.Mvc.Framework.Controllers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Core.Modules.Core.Controllers
{
    public class ReactPageController : DnnController
    {
        // GET: ReactPage
        public ActionResult Index()
        {
            return View();
        }
    }
}