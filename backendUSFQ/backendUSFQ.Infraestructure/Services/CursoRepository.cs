using AutoMapper;
using backendUSFQ.Domain.Interfaces;
using backendUSFQ.Entity.Models;
using backendUSFQ.Entity.Models.Dto;
using backendUSFQ.Repository;
using Microsoft.EntityFrameworkCore;

namespace backendUSFQ.Infraestructure.Services
{
    public class CursoRepository : ICurso
    {
        private readonly dbContext _db;
        private IMapper _mapper;

        public CursoRepository(dbContext db, IMapper mapper)
        {
            _db = db;
            _mapper = mapper;
        }

        public async Task<CursoDto> CreateUpdateCurso(CursoDto clienteDto)
        {
            ECurso curso = _mapper.Map<CursoDto, ECurso>(clienteDto);
            if (curso.CursoId > 0)
            {
                _db.Curso.Update(curso);
            }
            else
            {
                await _db.Curso.AddAsync(curso);
            }
            await _db.SaveChangesAsync();
            return _mapper.Map<ECurso, CursoDto>(curso);
        }

        public async Task<bool> DeleteCurso(int id)
        {
            try
            {
                ECurso curso = await _db.Curso.FindAsync(id);
                if (curso == null)
                {
                    return false;
                }
                _db.Curso.Remove(curso);
                await _db.SaveChangesAsync();

                return true;
            }
            catch (Exception)
            {

                return false;
            }
        }

        public async Task<CursoDto> GetCursoById(int id)
        {
            ECurso curso = await _db.Curso.FindAsync(id);

            return _mapper.Map<CursoDto>(curso);
        }

        public async Task<List<CursoDto>> GetCursos()
        {
            List<ECurso> lista = await _db.Curso.ToListAsync();

            return _mapper.Map<List<CursoDto>>(lista);
        }
    }
}
