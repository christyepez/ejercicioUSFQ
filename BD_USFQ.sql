USE [master]
GO
/****** Object:  Database [DB_USFQ2]    Script Date: 9/6/2023 20:19:51 ******/
CREATE DATABASE [DB_USFQ2]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'DB_USFQ2', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SERVERDB\MSSQL\DATA\DB_USFQ2.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'DB_USFQ2_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SERVERDB\MSSQL\DATA\DB_USFQ2_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [DB_USFQ2] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [DB_USFQ2].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [DB_USFQ2] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [DB_USFQ2] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [DB_USFQ2] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [DB_USFQ2] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [DB_USFQ2] SET ARITHABORT OFF 
GO
ALTER DATABASE [DB_USFQ2] SET AUTO_CLOSE ON 
GO
ALTER DATABASE [DB_USFQ2] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [DB_USFQ2] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [DB_USFQ2] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [DB_USFQ2] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [DB_USFQ2] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [DB_USFQ2] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [DB_USFQ2] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [DB_USFQ2] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [DB_USFQ2] SET  ENABLE_BROKER 
GO
ALTER DATABASE [DB_USFQ2] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [DB_USFQ2] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [DB_USFQ2] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [DB_USFQ2] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [DB_USFQ2] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [DB_USFQ2] SET READ_COMMITTED_SNAPSHOT ON 
GO
ALTER DATABASE [DB_USFQ2] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [DB_USFQ2] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [DB_USFQ2] SET  MULTI_USER 
GO
ALTER DATABASE [DB_USFQ2] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [DB_USFQ2] SET DB_CHAINING OFF 
GO
ALTER DATABASE [DB_USFQ2] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [DB_USFQ2] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [DB_USFQ2] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [DB_USFQ2] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
ALTER DATABASE [DB_USFQ2] SET QUERY_STORE = OFF
GO
USE [DB_USFQ2]
GO
/****** Object:  User [cyepez]    Script Date: 9/6/2023 20:19:51 ******/
CREATE USER [cyepez] FOR LOGIN [cyepez] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  Table [dbo].[Estudiante]    Script Date: 9/6/2023 20:19:51 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Estudiante](
	[EstudianteId] [int] IDENTITY(1,1) NOT NULL,
	[Cedula] [nvarchar](max) NOT NULL,
	[Nombre] [nvarchar](max) NOT NULL,
	[Apellido] [nvarchar](max) NOT NULL,
	[Edad] [int] NOT NULL,
 CONSTRAINT [PK_Estudiante] PRIMARY KEY CLUSTERED 
(
	[EstudianteId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Asignacion]    Script Date: 9/6/2023 20:19:51 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Asignacion](
	[AsignacionId] [int] IDENTITY(1,1) NOT NULL,
	[fechaRegistro] [datetime2](7) NOT NULL,
	[ID_ESTUDIANTE] [int] NOT NULL,
	[ID_CURSO] [int] NOT NULL,
 CONSTRAINT [PK_Asignacion] PRIMARY KEY CLUSTERED 
(
	[AsignacionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Curso]    Script Date: 9/6/2023 20:19:51 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Curso](
	[CursoId] [int] IDENTITY(1,1) NOT NULL,
	[NombreCurso] [nvarchar](max) NOT NULL,
	[HoraInicio] [int] NOT NULL,
	[HoraFinal] [int] NOT NULL,
	[NumeroCreditos] [int] NOT NULL,
	[ECursoCursoId] [int] NULL,
 CONSTRAINT [PK_Curso] PRIMARY KEY CLUSTERED 
(
	[CursoId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  View [dbo].[vw_reporteCursosEstudiantes]    Script Date: 9/6/2023 20:19:51 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[vw_reporteCursosEstudiantes]
AS
SELECT        dbo.Asignacion.AsignacionId, dbo.Asignacion.fechaRegistro, dbo.Asignacion.ID_ESTUDIANTE, dbo.Asignacion.ID_CURSO, dbo.Curso.CursoId, dbo.Curso.NombreCurso, dbo.Curso.HoraInicio, dbo.Curso.HoraFinal, 
                         dbo.Curso.NumeroCreditos, dbo.Curso.ECursoCursoId, dbo.Estudiante.EstudianteId, dbo.Estudiante.Cedula, dbo.Estudiante.Nombre, dbo.Estudiante.Apellido, dbo.Estudiante.Edad
FROM            dbo.Asignacion INNER JOIN
                         dbo.Curso ON dbo.Asignacion.ID_CURSO = dbo.Curso.CursoId INNER JOIN
                         dbo.Estudiante ON dbo.Asignacion.ID_ESTUDIANTE = dbo.Estudiante.EstudianteId
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 9/6/2023 20:19:51 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[User]    Script Date: 9/6/2023 20:19:51 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[User](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserName] [nvarchar](max) NULL,
	[PasswordHash] [varbinary](max) NULL,
	[PasswordSalt] [varbinary](max) NULL,
 CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20230607201916_USFQ-ini', N'7.0.5')
GO
SET IDENTITY_INSERT [dbo].[Asignacion] ON 

INSERT [dbo].[Asignacion] ([AsignacionId], [fechaRegistro], [ID_ESTUDIANTE], [ID_CURSO]) VALUES (3, CAST(N'2023-06-10T00:19:53.9930000' AS DateTime2), 3, 1)
INSERT [dbo].[Asignacion] ([AsignacionId], [fechaRegistro], [ID_ESTUDIANTE], [ID_CURSO]) VALUES (4, CAST(N'2023-06-09T00:00:00.0000000' AS DateTime2), 1, 1)
INSERT [dbo].[Asignacion] ([AsignacionId], [fechaRegistro], [ID_ESTUDIANTE], [ID_CURSO]) VALUES (5, CAST(N'2023-06-08T00:00:00.0000000' AS DateTime2), 1, 1)
INSERT [dbo].[Asignacion] ([AsignacionId], [fechaRegistro], [ID_ESTUDIANTE], [ID_CURSO]) VALUES (6, CAST(N'2023-06-08T00:00:00.0000000' AS DateTime2), 1, 2)
INSERT [dbo].[Asignacion] ([AsignacionId], [fechaRegistro], [ID_ESTUDIANTE], [ID_CURSO]) VALUES (7, CAST(N'2023-06-07T00:00:00.0000000' AS DateTime2), 5, 2)
SET IDENTITY_INSERT [dbo].[Asignacion] OFF
GO
SET IDENTITY_INSERT [dbo].[Curso] ON 

INSERT [dbo].[Curso] ([CursoId], [NombreCurso], [HoraInicio], [HoraFinal], [NumeroCreditos], [ECursoCursoId]) VALUES (1, N'Matematicas', 8, 9, 4, NULL)
INSERT [dbo].[Curso] ([CursoId], [NombreCurso], [HoraInicio], [HoraFinal], [NumeroCreditos], [ECursoCursoId]) VALUES (2, N'Lengua', 8, 9, 2, NULL)
SET IDENTITY_INSERT [dbo].[Curso] OFF
GO
SET IDENTITY_INSERT [dbo].[Estudiante] ON 

INSERT [dbo].[Estudiante] ([EstudianteId], [Cedula], [Nombre], [Apellido], [Edad]) VALUES (1, N'1714137369', N'christian A', N'yepez', 43)
INSERT [dbo].[Estudiante] ([EstudianteId], [Cedula], [Nombre], [Apellido], [Edad]) VALUES (2, N'171413739', N'alex', N'Yepez', 43)
INSERT [dbo].[Estudiante] ([EstudianteId], [Cedula], [Nombre], [Apellido], [Edad]) VALUES (3, N'1714137369', N'christian A', N'yepez', 43)
INSERT [dbo].[Estudiante] ([EstudianteId], [Cedula], [Nombre], [Apellido], [Edad]) VALUES (5, N'1714137369', N'Paolo', N'lozano', 20)
SET IDENTITY_INSERT [dbo].[Estudiante] OFF
GO
SET IDENTITY_INSERT [dbo].[User] ON 

INSERT [dbo].[User] ([Id], [UserName], [PasswordHash], [PasswordSalt]) VALUES (4, N'cyepez25', 0x1EC648B7FFC5635D3FEA05B1ED78EF8A95B1AD27E23C52FAC05F42918A5CD3A1E4350FECB783575F6CACED517F760DADEE89DA18B5A8101850D7B249DEDBAC47, 0x780D7C3725625F5018477C5F16A61493C1E0DB4228D9698AB83DC2AF36A4487DEE73F2ED7A2A93F8892357C12F54E5FE67B29F5FED625ED9F62459DD460E82D5C93E2A7CC804CFD6A2A4B3D32F428DBF5B62FB39EB223C168FD6FA306E4B95F23714F0CE2B88DE9A58C5BD13F8731FFA5A1846B010989112DB09EB702144CF98)
SET IDENTITY_INSERT [dbo].[User] OFF
GO
/****** Object:  Index [IX_Asignacion_ID_CURSO]    Script Date: 9/6/2023 20:19:51 ******/
CREATE NONCLUSTERED INDEX [IX_Asignacion_ID_CURSO] ON [dbo].[Asignacion]
(
	[ID_CURSO] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Asignacion_ID_ESTUDIANTE]    Script Date: 9/6/2023 20:19:51 ******/
CREATE NONCLUSTERED INDEX [IX_Asignacion_ID_ESTUDIANTE] ON [dbo].[Asignacion]
(
	[ID_ESTUDIANTE] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Curso_ECursoCursoId]    Script Date: 9/6/2023 20:19:51 ******/
CREATE NONCLUSTERED INDEX [IX_Curso_ECursoCursoId] ON [dbo].[Curso]
(
	[ECursoCursoId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Asignacion]  WITH CHECK ADD  CONSTRAINT [FK_Asignacion_Curso_ID_CURSO] FOREIGN KEY([ID_CURSO])
REFERENCES [dbo].[Curso] ([CursoId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Asignacion] CHECK CONSTRAINT [FK_Asignacion_Curso_ID_CURSO]
GO
ALTER TABLE [dbo].[Asignacion]  WITH CHECK ADD  CONSTRAINT [FK_Asignacion_Estudiante_ID_ESTUDIANTE] FOREIGN KEY([ID_ESTUDIANTE])
REFERENCES [dbo].[Estudiante] ([EstudianteId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Asignacion] CHECK CONSTRAINT [FK_Asignacion_Estudiante_ID_ESTUDIANTE]
GO
ALTER TABLE [dbo].[Curso]  WITH CHECK ADD  CONSTRAINT [FK_Curso_Curso_ECursoCursoId] FOREIGN KEY([ECursoCursoId])
REFERENCES [dbo].[Curso] ([CursoId])
GO
ALTER TABLE [dbo].[Curso] CHECK CONSTRAINT [FK_Curso_Curso_ECursoCursoId]
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[40] 4[20] 2[20] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1 [50] 4 [25] 3))"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = 0
         Left = 0
      End
      Begin Tables = 
         Begin Table = "Asignacion"
            Begin Extent = 
               Top = 6
               Left = 38
               Bottom = 136
               Right = 209
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "Curso"
            Begin Extent = 
               Top = 6
               Left = 247
               Bottom = 136
               Right = 424
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "Estudiante"
            Begin Extent = 
               Top = 6
               Left = 462
               Bottom = 136
               Right = 632
            End
            DisplayFlags = 280
            TopColumn = 0
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 11
         Column = 1440
         Alias = 900
         Table = 1170
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1350
         SortOrder = 1410
         GroupBy = 1350
         Filter = 1350
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'vw_reporteCursosEstudiantes'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=1 , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'vw_reporteCursosEstudiantes'
GO
USE [master]
GO
ALTER DATABASE [DB_USFQ2] SET  READ_WRITE 
GO
