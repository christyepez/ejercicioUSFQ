using AutoMapper;
using backendUSFQ.Domain.Interfaces;
using backendUSFQ.Entity.Models;
using backendUSFQ.Entity.Models.Dto;
using backendUSFQ.Repository;
using Microsoft.EntityFrameworkCore;

namespace backendUSFQ.Infraestructure.Services
{
    public class AsignacionRepository : IAsignacion
    {
        private readonly dbContext _db;
        private IMapper _mapper;

        public AsignacionRepository(dbContext db, IMapper mapper)
        {
            _db = db;
            _mapper = mapper;
        }
        public async Task<AsignacionDto> CreateUpdateAsignacion(AsignacionDto movimientoDto)
        {
            EAsignacion asignacion = _mapper.Map<AsignacionDto, EAsignacion>(movimientoDto);
            if (asignacion.AsignacionId > 0)
            {
                _db.Asignacion.Update(asignacion);
            }
            else
            {
                await _db.Asignacion.AddAsync(asignacion);
            }
            await _db.SaveChangesAsync();
            return _mapper.Map<EAsignacion, AsignacionDto>(asignacion);
        }

        public async Task<bool> DeleteAsignacion(int id)
        {
            try
            {
                EAsignacion asignacion = await _db.Asignacion.FindAsync(id);
                if (asignacion == null)
                {
                    return false;
                }
                _db.Asignacion.Remove(asignacion);
                await _db.SaveChangesAsync();

                return true;
            }
            catch (Exception)
            {

                return false;
            }
        }

        public async Task<List<AsignacionDto>> GetAsignacion()
        {
            List<EAsignacion> lista = await _db.Asignacion.ToListAsync();

            return _mapper.Map<List<AsignacionDto>>(lista);
        }

        public async Task<AsignacionDto> GetAsignacionById(int id)
        {
            EAsignacion asignacion = await _db.Asignacion.FindAsync(id);

            return _mapper.Map<AsignacionDto>(asignacion);
        }
    }
}
