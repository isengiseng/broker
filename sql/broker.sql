USE [master]
GO
/****** Object:  Database [BROKER]    Script Date: 4/9/2018 1:33:39 PM ******/
CREATE DATABASE [BROKER]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'BROKER', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.SQLEXPRESS\MSSQL\DATA\BROKER.mdf' , SIZE = 3264KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'BROKER_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.SQLEXPRESS\MSSQL\DATA\BROKER_log.ldf' , SIZE = 816KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
ALTER DATABASE [BROKER] SET COMPATIBILITY_LEVEL = 120
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [BROKER].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [BROKER] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [BROKER] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [BROKER] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [BROKER] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [BROKER] SET ARITHABORT OFF 
GO
ALTER DATABASE [BROKER] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [BROKER] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [BROKER] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [BROKER] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [BROKER] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [BROKER] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [BROKER] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [BROKER] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [BROKER] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [BROKER] SET  DISABLE_BROKER 
GO
ALTER DATABASE [BROKER] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [BROKER] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [BROKER] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [BROKER] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [BROKER] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [BROKER] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [BROKER] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [BROKER] SET RECOVERY FULL 
GO
ALTER DATABASE [BROKER] SET  MULTI_USER 
GO
ALTER DATABASE [BROKER] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [BROKER] SET DB_CHAINING OFF 
GO
ALTER DATABASE [BROKER] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [BROKER] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [BROKER] SET DELAYED_DURABILITY = DISABLED 
GO
USE [BROKER]
GO
/****** Object:  Table [dbo].[AUTH_API]    Script Date: 4/9/2018 1:33:39 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[AUTH_API](
	[KODEH2H] [varchar](250) NOT NULL,
	[USERNAME] [varchar](50) NOT NULL,
	[PASSWORD] [varchar](50) NOT NULL,
	[LAST_ACCESS] [datetime] NULL,
	[DATE_CREATED] [datetime] NULL,
	[DATE_MODIFIED] [datetime] NULL,
 CONSTRAINT [PK_AUTH_API] PRIMARY KEY CLUSTERED 
(
	[USERNAME] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[AUTH_SERVER]    Script Date: 4/9/2018 1:33:39 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[AUTH_SERVER](
	[USERNAME] [varchar](50) NOT NULL,
	[PASSWORD] [varchar](50) NOT NULL,
	[LAST_ACCESS] [datetime] NULL,
	[DATE_CREATED] [datetime] NULL,
	[DATE_MODIFIED] [datetime] NULL,
 CONSTRAINT [PK_AUTH_SERVER] PRIMARY KEY CLUSTERED 
(
	[USERNAME] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[CEK_KOMUNIKASI]    Script Date: 4/9/2018 1:33:39 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[CEK_KOMUNIKASI](
	[KODEH2H] [varchar](max) NOT NULL,
	[USERNAME] [varchar](max) NOT NULL,
	[PASSWORD] [varchar](max) NOT NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[PK_POST]    Script Date: 4/9/2018 1:33:39 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[PK_POST](
	[KODEH2H] [varchar](max) NOT NULL,
	[USERNAME] [varchar](max) NOT NULL,
	[PASSWORD] [varchar](max) NOT NULL,
	[CAB] [varchar](max) NULL,
	[PK] [varchar](30) NOT NULL,
	[NOREK] [varchar](max) NULL,
	[NAMA] [varchar](max) NULL,
	[LAHIR] [varchar](max) NULL,
	[BUKA] [varchar](max) NULL,
	[TEMPO] [varchar](max) NULL,
	[PLAN] [varchar](max) NULL,
	[AMOUNT] [numeric](18, 3) NULL,
	[ID_NO] [varchar](max) NULL,
	[KTP] [varchar](max) NULL,
	[RATE] [numeric](3, 3) NULL,
	[SEX] [varchar](1) NULL,
	[RATE_ASURANSI] [numeric](6, 3) NULL,
	[DATE_CREATED] [datetime] NULL,
	[DATE_MODIFIED] [datetime] NULL,
 CONSTRAINT [PK_POST_PK] PRIMARY KEY CLUSTERED 
(
	[PK] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  View [dbo].[last_data]    Script Date: 4/9/2018 1:33:39 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE   VIEW [dbo].[last_data] as SELECT TOP 1 * FROM PK_POST ORDER BY NO DESC

GO
INSERT [dbo].[AUTH_API] ([KODEH2H], [USERNAME], [PASSWORD], [LAST_ACCESS], [DATE_CREATED], [DATE_MODIFIED]) VALUES (N'633e18b8cf68b8e2d1d5fbc6ab30deaf06b0e', N'brk', N'986AE684AAD2FFD0BB7257DEDA7882BF', CAST(N'2018-04-04 06:35:41.147' AS DateTime), CAST(N'2018-04-04 06:35:41.147' AS DateTime), CAST(N'2018-04-04 06:35:41.147' AS DateTime))
INSERT [dbo].[AUTH_SERVER] ([USERNAME], [PASSWORD], [LAST_ACCESS], [DATE_CREATED], [DATE_MODIFIED]) VALUES (N'reza', N'BB98B1D0B523D5E783F931550D7702B6', NULL, NULL, NULL)
INSERT [dbo].[PK_POST] ([KODEH2H], [USERNAME], [PASSWORD], [CAB], [PK], [NOREK], [NAMA], [LAHIR], [BUKA], [TEMPO], [PLAN], [AMOUNT], [ID_NO], [KTP], [RATE], [SEX], [RATE_ASURANSI], [DATE_CREATED], [DATE_MODIFIED]) VALUES (N'633e18b8cf68b8e2d1d5fbc6ab30deaf06b0e', N'brk', N'986ae684aad2ffd0bb7257deda7882bf', N'102', N'110.3.10.2018.102', N'101xxxxx', N'Hxxxx', N'19641025', N'20180307', N'72', N'321', CAST(180000000.000 AS Numeric(18, 3)), N'2', N'140404651xxxxxxx', CAST(0.123 AS Numeric(3, 3)), N'P', CAST(0.000 AS Numeric(6, 3)), CAST(N'2018-03-21 08:38:07.227' AS DateTime), CAST(N'2018-03-21 08:38:07.227' AS DateTime))
INSERT [dbo].[PK_POST] ([KODEH2H], [USERNAME], [PASSWORD], [CAB], [PK], [NOREK], [NAMA], [LAHIR], [BUKA], [TEMPO], [PLAN], [AMOUNT], [ID_NO], [KTP], [RATE], [SEX], [RATE_ASURANSI], [DATE_CREATED], [DATE_MODIFIED]) VALUES (N'633e18b8cf68b8e2d1d5fbc6ab30deaf06b0e', N'brk', N'986ae684aad2ffd0bb7257deda7882bf', N'107', N'xxxx', N'1018300000', N'TEST BROKER', N'19930421', N'20180316', N'75', N'326', CAST(100000000.000 AS Numeric(18, 3)), N'15', N'1471xxxxxxxxxx18', CAST(0.080 AS Numeric(3, 3)), N'P', CAST(0.000 AS Numeric(6, 3)), CAST(N'2018-03-22 04:10:40.970' AS DateTime), CAST(N'2018-03-22 04:10:40.970' AS DateTime))
INSERT [dbo].[PK_POST] ([KODEH2H], [USERNAME], [PASSWORD], [CAB], [PK], [NOREK], [NAMA], [LAHIR], [BUKA], [TEMPO], [PLAN], [AMOUNT], [ID_NO], [KTP], [RATE], [SEX], [RATE_ASURANSI], [DATE_CREATED], [DATE_MODIFIED]) VALUES (N'633e18b8cf68b8e2d1d5fbc6ab30deaf06b0e', N'brk', N'986ae684aad2ffd0bb7257deda7882bf', N'106', N'xxxx1', N'1018300020', N'TEST BROKER', N'19791222', N'20180316', N'120', N'321', CAST(100000000.000 AS Numeric(18, 3)), N'2', N'1471xxxxxxxxxxx', CAST(0.105 AS Numeric(3, 3)), N'P', CAST(0.000 AS Numeric(6, 3)), CAST(N'2018-03-22 02:19:08.917' AS DateTime), CAST(N'2018-03-22 02:19:08.917' AS DateTime))
USE [master]
GO
ALTER DATABASE [BROKER] SET  READ_WRITE 
GO
