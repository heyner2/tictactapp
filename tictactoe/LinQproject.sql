USE [master]
GO

/****** Object:  Database [LINQProject]    Script Date: 10/4/2021 02:42:14 ******/
CREATE DATABASE [LINQProject]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'LINQProject', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL13.MSSQLSERVER\MSSQL\DATA\LINQProject.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'LINQProject_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL13.MSSQLSERVER\MSSQL\DATA\LINQProject_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO

IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [LINQProject].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO

ALTER DATABASE [LINQProject] SET ANSI_NULL_DEFAULT OFF 
GO

ALTER DATABASE [LINQProject] SET ANSI_NULLS OFF 
GO

ALTER DATABASE [LINQProject] SET ANSI_PADDING OFF 
GO

ALTER DATABASE [LINQProject] SET ANSI_WARNINGS OFF 
GO

ALTER DATABASE [LINQProject] SET ARITHABORT OFF 
GO

ALTER DATABASE [LINQProject] SET AUTO_CLOSE OFF 
GO

ALTER DATABASE [LINQProject] SET AUTO_SHRINK OFF 
GO

ALTER DATABASE [LINQProject] SET AUTO_UPDATE_STATISTICS ON 
GO

ALTER DATABASE [LINQProject] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO

ALTER DATABASE [LINQProject] SET CURSOR_DEFAULT  GLOBAL 
GO

ALTER DATABASE [LINQProject] SET CONCAT_NULL_YIELDS_NULL OFF 
GO

ALTER DATABASE [LINQProject] SET NUMERIC_ROUNDABORT OFF 
GO

ALTER DATABASE [LINQProject] SET QUOTED_IDENTIFIER OFF 
GO

ALTER DATABASE [LINQProject] SET RECURSIVE_TRIGGERS OFF 
GO

ALTER DATABASE [LINQProject] SET  DISABLE_BROKER 
GO

ALTER DATABASE [LINQProject] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO

ALTER DATABASE [LINQProject] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO

ALTER DATABASE [LINQProject] SET TRUSTWORTHY OFF 
GO

ALTER DATABASE [LINQProject] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO

ALTER DATABASE [LINQProject] SET PARAMETERIZATION SIMPLE 
GO

ALTER DATABASE [LINQProject] SET READ_COMMITTED_SNAPSHOT OFF 
GO

ALTER DATABASE [LINQProject] SET HONOR_BROKER_PRIORITY OFF 
GO

ALTER DATABASE [LINQProject] SET RECOVERY FULL 
GO

ALTER DATABASE [LINQProject] SET  MULTI_USER 
GO

ALTER DATABASE [LINQProject] SET PAGE_VERIFY CHECKSUM  
GO

ALTER DATABASE [LINQProject] SET DB_CHAINING OFF 
GO

ALTER DATABASE [LINQProject] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO

ALTER DATABASE [LINQProject] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO

ALTER DATABASE [LINQProject] SET DELAYED_DURABILITY = DISABLED 
GO

ALTER DATABASE [LINQProject] SET QUERY_STORE = OFF
GO

USE [LINQProject]
GO

ALTER DATABASE SCOPED CONFIGURATION SET LEGACY_CARDINALITY_ESTIMATION = OFF;
GO

ALTER DATABASE SCOPED CONFIGURATION SET MAXDOP = 0;
GO

ALTER DATABASE SCOPED CONFIGURATION SET PARAMETER_SNIFFING = ON;
GO

ALTER DATABASE SCOPED CONFIGURATION SET QUERY_OPTIMIZER_HOTFIXES = OFF;
GO

ALTER DATABASE [LINQProject] SET  READ_WRITE 
GO
