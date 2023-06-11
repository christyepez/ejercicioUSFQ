using backendUSFQ.Entity.Models.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backendUSFQ.Domain.Interfaces
{
    public interface ICurso
    {
        Task<List<CursoDto>> GetCursos();

        Task<CursoDto> GetCursoById(int id);

        Task<CursoDto> CreateUpdateCurso(CursoDto cuentaDto);

        Task<bool> DeleteCurso(int id);
    }
}
