using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backendUSFQ.Entity.Models.Dto
{
    public class EstudianteDto
    { 
        public int EstudianteId { get; set; } 
        public string? Cedula { get; set; } 
        public string? Nombre { get; set; } 
        public string? Apellido { get; set; } 
        public int Edad { get; set; }

    }
}
