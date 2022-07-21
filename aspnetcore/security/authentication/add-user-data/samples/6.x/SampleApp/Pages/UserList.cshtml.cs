using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using WebApp1.Areas.Identity.Data;

namespace WebApp1.Pages
{
    public class UserListModel : PageModel
    {
        public void OnGet()
        {
        }
    }
    public class PageData
    {
        public List<WebApp1User>? LstUsers { get; set; }
    }
}
