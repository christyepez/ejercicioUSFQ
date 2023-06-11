using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backendUSFQ.Entity.Models.Dto
{
    public class CursoDto
    {
        public int CursoId { get; set; }         
        public string? NombreCurso { get; set; } 
        public int? HoraInicio { get; set; } 
        public int? HoraFinal { get; set; } 
        public int NumeroCreditos { get; set; }
    }
}
