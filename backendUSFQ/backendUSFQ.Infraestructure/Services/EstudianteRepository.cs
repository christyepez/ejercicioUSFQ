using AutoMapper;
using backendUSFQ.Domain.Interfaces;
using backendUSFQ.Entity.Models;
using backendUSFQ.Entity.Models.Dto;
using backendUSFQ.Repository;
using Microsoft.EntityFrameworkCore;

namespace backendUSFQ.Infraestructure.Services
{
    public class EstudianteRepository : IEstudiante
    {
        private readonly dbContext _db; 
        private IMapper _mapper;

        public EstudianteRepository(dbContext db, IMapper mapper)
        {
            _db = db;
            _mapper = mapper;
        }

        public async Task<EstudianteDto> CUpdateEstudiante(EstudianteDto clienteDto)
        {
            EEstudiante estudiante= _mapper.Map<EstudianteDto, EEstudiante>(clienteDto);
            if (estudiante.EstudianteId > 0)
            {
                _db.Estudiante.Update(estudiante);
            }
            else
            {
                await _db.Estudiante.AddAsync(estudiante);
            }
            await _db.SaveChangesAsync();
            return _mapper.Map<EEstudiante, EstudianteDto>(estudiante);
        }

        public async Task<bool> DeleteEstudiante(int id)
        {
            try
            {
                EEstudiante estudiante = await _db.Estudiante.FindAsync(id);
                if (estudiante == null)
                {
                    return false;
                }
                _db.Estudiante.Remove(estudiante);
                await _db.SaveChangesAsync();

                return true;
            }
            catch (Exception)
            {

                return false;
            }
        }

        public async Task<EstudianteDto> GetEstudianteById(int id)
        {
            EEstudiante estudiante = await _db.Estudiante.FindAsync(id);

            return _mapper.Map<EstudianteDto>(estudiante);
        }

        public async Task<List<EstudianteDto>> GetEstudiante()
        {
            List<EEstudiante> lista = await _db.Estudiante.ToListAsync();

            return _mapper.Map<List<EstudianteDto>>(lista);
        }
    }
}
