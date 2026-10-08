using Microsoft.AspNetCore.Mvc;

namespace ReactApp1.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProjectsController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetProjects()
        {
            return Ok(new[]
            {
                new
                {
                    name = "C++ Ray Tracer",
                    description = "A ray tracer built from scratch in C++."
                },

                new
                {
                    name = "Personal Portfolio",
                    description = "A React and ASP.NET Core portfolio."
                }
            });
        }
    }
}