﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using backendUSFQ.Repository;

#nullable disable

namespace backendUSFQ.Repository.Migrations
{
    [DbContext(typeof(dbContext))]
    partial class dbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.5")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("backendUSFQ.Entity.Models.EAsignacion", b =>
                {
                    b.Property<int>("AsignacionId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("AsignacionId"));

                    b.Property<int>("CursoId")
                        .HasColumnType("int")
                        .HasColumnName("ID_CURSO");

                    b.Property<int>("EstudianteId")
                        .HasColumnType("int")
                        .HasColumnName("ID_ESTUDIANTE");

                    b.Property<DateTime>("fechaRegistro")
                        .HasColumnType("datetime2");

                    b.HasKey("AsignacionId");

                    b.HasIndex("CursoId");

                    b.HasIndex("EstudianteId");

                    b.ToTable("Asignacion");
                });

            modelBuilder.Entity("backendUSFQ.Entity.Models.ECurso", b =>
                {
                    b.Property<int>("CursoId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("CursoId"));


                    b.Property<DateTime?>("HoraFinal")
                        .IsRequired()
                        .HasColumnType("int");

                    b.Property<DateTime?>("HoraInicio")
                        .IsRequired()
                        .HasColumnType("int");

                    b.Property<string>("NombreCurso")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("NumeroCreditos")
                        .HasColumnType("int");

                    b.HasKey("CursoId");

                    b.HasIndex("ECursoCursoId");

                    b.ToTable("Curso");
                });

            modelBuilder.Entity("backendUSFQ.Entity.Models.EEstudiante", b =>
                {
                    b.Property<int>("EstudianteId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("EstudianteId"));

                    b.Property<string>("Apellido")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Cedula")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Edad")
                        .HasColumnType("int");

                    b.Property<string>("Nombre")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("EstudianteId");

                    b.ToTable("Estudiante");
                });

            modelBuilder.Entity("backendUSFQ.Entity.Models.EUser", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<byte[]>("PasswordHash")
                        .HasColumnType("varbinary(max)");

                    b.Property<byte[]>("PasswordSalt")
                        .HasColumnType("varbinary(max)");

                    b.Property<string>("UserName")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("User");
                });

            modelBuilder.Entity("backendUSFQ.Entity.Models.EAsignacion", b =>
                {
                    b.HasOne("backendUSFQ.Entity.Models.ECurso", "Curso")
                        .WithMany()
                        .HasForeignKey("CursoId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("backendUSFQ.Entity.Models.EEstudiante", "Estudiante")
                        .WithMany()
                        .HasForeignKey("EstudianteId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Curso");

                    b.Navigation("Estudiante");
                });

            modelBuilder.Entity("backendUSFQ.Entity.Models.ECurso", b =>
                {
                    b.HasOne("backendUSFQ.Entity.Models.ECurso", null)
                        .WithMany("lstcurso")
                        .HasForeignKey("ECursoCursoId");
                });

            modelBuilder.Entity("backendUSFQ.Entity.Models.ECurso", b =>
                {
                    b.Navigation("lstcurso");
                });
#pragma warning restore 612, 618
        }
    }
}
