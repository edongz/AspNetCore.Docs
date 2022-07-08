using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace WebApp1.Pages
{
    [Authorize(Policy = "RequireAdministratorRole")]
    public class NeedAdminModel : PageModel
    {
        public void OnGet()
        {
            ViewData["Title"] = "需要管理员权限";
        }
    }
}
