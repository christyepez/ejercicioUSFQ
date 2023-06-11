 
using AutoMapper;
using backendUSFQ.Entity.Models;
using backendUSFQ.Entity.Models.Dto;

public class MappingConfig
{


    public static MapperConfiguration RegisterMaps()
    {
        var mappingConfig = new MapperConfiguration(config =>
        {
            config.CreateMap<EstudianteDto, EEstudiante>();
            config.CreateMap<EEstudiante, EstudianteDto>();

            config.CreateMap<CursoDto, ECurso>();
            config.CreateMap<ECurso, CursoDto>();


            config.CreateMap<AsignacionDto, EAsignacion>();
            config.CreateMap<EAsignacion, AsignacionDto>();

            config.CreateMap<UserDto, EUser>();
            config.CreateMap<EUser, UserDto>();

        });

        return mappingConfig;
    }
}