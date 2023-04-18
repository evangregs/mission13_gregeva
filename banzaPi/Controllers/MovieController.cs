using banzaPi.Data;
using Microsoft.AspNetCore.Mvc;

namespace banzaPi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController : Controller
    {
        private MovieDbContext context;
        public MovieController(MovieDbContext temp) {
            context = temp;
        }
        public IEnumerable<JoelHiltonMovieCollection> Get()
        {
            var x = context.Movies.ToArray();
            //return context.Movies.Where(Edited="Yes").ToArray();
            return context.Movies.ToArray();
        }
    }
}
