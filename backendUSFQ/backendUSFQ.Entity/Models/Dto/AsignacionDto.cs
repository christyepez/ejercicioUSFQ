using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backendUSFQ.Entity.Models.Dto
{
    public class AsignacionDto
    {
        public int AsignacionId { get; set; }
        public DateTime fechaRegistro { get; set; }
         
        public int EstudianteId { get; set; } 

        public int CursoId { get; set; } 
    }
}
