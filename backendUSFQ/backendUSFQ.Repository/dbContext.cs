using backendUSFQ.Entity.Models;
using Microsoft.EntityFrameworkCore;


namespace backendUSFQ.Repository
{
    public class dbContext :DbContext
    {
        public dbContext(DbContextOptions<dbContext> options) : base(options)
        {
        }

        public virtual DbSet<EEstudiante> Estudiante { get; set; } = null!;
        public virtual DbSet<ECurso> Curso { get; set; } = null!;
        public virtual DbSet<EAsignacion> Asignacion { get; set; } = null!;

        public virtual DbSet<EUser> User { get; set; } = null!;

    }
}
