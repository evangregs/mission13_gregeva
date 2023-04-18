using Microsoft.EntityFrameworkCore;

namespace banzaPi.Data
{
    public class MovieDbContext : DbContext
    {
        public MovieDbContext (DbContextOptions<MovieDbContext> options) : base(options) { }
        public DbSet<JoelHiltonMovieCollection> Movies { get; set; }
    }
}
