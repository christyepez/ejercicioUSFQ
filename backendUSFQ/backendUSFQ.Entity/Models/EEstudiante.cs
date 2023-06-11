using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backendUSFQ.Entity.Models
{
    public class EEstudiante
    {
        [Key]
        public int EstudianteId { get; set; }
        [Required]
        public string? Cedula { get; set; }
        [Required]
        public string? Nombre { get; set; }
        [Required]
        public string? Apellido { get; set; }
        [Required]
        public int Edad { get; set; }

       
    }
}
