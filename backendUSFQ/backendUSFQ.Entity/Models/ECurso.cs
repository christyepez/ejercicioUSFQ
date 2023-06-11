using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backendUSFQ.Entity.Models
{
    public class ECurso
    {
        [Key]
        public int CursoId { get; set; }
        
        [Required]
        public string? NombreCurso { get; set;}
        [Required]
        public int? HoraInicio { get; set; }
        [Required]
        public int? HoraFinal { get; set; }
        [Required]
        public int NumeroCreditos { get; set; }
       // public List<ECurso>? lstcurso { get; set; }



    }
}
