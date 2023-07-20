-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: empresas
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `usuarios`
--


/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(245) NOT NULL,
  `localidade` varchar(245) NOT NULL,
  `site` varchar(245) NOT NULL,
  `setor` varchar(245) NOT NULL,
  `visao` varchar(1245) NOT NULL,
  `fundador` varchar(245) NOT NULL,
  `anofundacao` varchar(245) NOT NULL,
  `imagem` varchar(245) NOT NULL,
  `valores` varchar(245) NOT NULL,
  `produtos` varchar(245) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Microsoft','Redmond, Washington, EUA','https://www.microsoft.com','Tecnologia da Informação','Empoderar cada pessoa e cada organização no planeta a conquistar mais.','Bill Gates','1975-04-04','https://celiotech.netlify.app/img/microsoft.png','Inovação, Diversidade, Responsabilidade','Windows, Office, Azure, Xbox'),(2,'Apple','Cupertino, Califórnia, EUA','https://www.apple.com','Tecnologia da Informação','Contribuir para o mundo criando ferramentas para a mente que impulsionem a humanidade.','Steve Jobs, Steve Wozniak e Ronald Wayne','1976-04-01','https://celiotech.netlify.app/img/apple.webp','Inovação, Simplicidade, Design','iPhone, Mac, iPad, Apple Watch'),(3,'IBM','Armonk, Nova Iorque, EUA','https://www.ibm.com','Tecnologia da Informação','Ser a organização mais inovadora do mundo na criação de soluções e plataformas cognitivas que transformem indústrias e profissões.','Charles Ranlett Flint','1911-06-16','https://celiotech.netlify.app/img/ibm.webp','Inovação, Confiança, Responsabilidade','IBM Watson, IBM Cloud, IBM Power Systems'),(4,'Google','Mountain View, Califórnia, EUA','https://www.google.com','Tecnologia da Informação','Organizar as informações do mundo e torná-las universalmente acessíveis e úteis.','Larry Page e Sergey Brin','1998-09-04','https://celiotech.netlify.app/img/google.jpg','Foco no usuário, Inovação, Integridade','Google Search, Google Maps, YouTube, Google Cloud'),(6,'Facebook','Menlo Park, Califórnia, EUA','https://www.facebook.com','Tecnologia da Informação','Dar poder às pessoas para construir comunidades e aproximar o mundo.','Mark Zuckerberg','2004-02-04','https://celiotech.netlify.app/img/facebook.webp','Conexão global, Inovação, Liberdade','Facebook, Instagram, WhatsApp, Oculus'),(7,'Samsung','Seul, Coreia do Sul','https://www.samsung.com','Eletrônicos','Inspirar o mundo com inovações tecnológicas, produtos e design que enriquecem a vida das pessoas.','Lee Byung-chul','1938-03-01','https://celiotech.netlify.app/img/facebook.webp','Excelência, Mudança, Integridade','Smartphones, TVs, Eletrodomésticos, Chips'),(8,'Intel','Santa Clara, Califórnia, EUA','https://www.intel.com','Tecnologia da Informação','Utilizar o poder da tecnologia para transformar e enriquecer a vida de cada pessoa no planeta.','Robert Noyce e Gordon Moore','1968-07-18','https://celiotech.netlify.app/img/intel.jpg','Inovação, Colaboração, Responsabilidade','Processadores, Chips, Placas-mãe'),(9,'Oracle','Redwood City, Califórnia, EUA','https://www.oracle.com','Tecnologia da Informação','Ser a empresa de tecnologia mais importante do mundo, fornecendo soluções completas e integradas.','Larry Ellison, Bob Miner e Ed Oates','1977-06-16','https://celiotech.netlify.app/img/oracle.jpg','Inovação, Excelência, Integridade','Oracle Database, Oracle Cloud, Java'),(10,'Cisco','San Jose, Califórnia, EUA','https://www.cisco.com','Tecnologia da Informação','Mudar a forma como as pessoas se conectam, se comunicam e colaboram.','Leonard Bosack e Sandy Lerner','1984-12-10','https://celiotech.netlify.app/img/cisco.jpg','Integridade, Inovação, Sustentabilidade','Roteadores, Switches, Equipamentos de rede'),(42,'Tesla','Palo Alto, Califórnia, EUA','https://www.tesla.com','Automotivo','Criar os carros mais seguros, divertidos e ecologicamente corretos.','Elon Musk, JB Straubel, Martin Eberhard, Marc Tarpenning e Ian Wright','2003-07-01','https://static01.nyt.com/images/2018/09/17/business/17TESLASHORTS01/merlin_143395845_609513d4-74d5-45f9-b12d-5e4d862e8b3f-superJumbo.jpg?quality=75&auto=webp','Inovação, Sustentabilidade, Excelência','Tesla Model S, Tesla Model 3, Tesla Model X, Tesla Model Y'),(43,'SpaceX','Hawthorne, Califórnia, EUA','https://www.spacex.com','Aeroespacial','Tornar a vida multiplanetária, permitindo a colonização de Marte e além.','Elon Musk','2002-03-14','https://sxcontent9668.azureedge.us/cms-assets/assets/Vandy_desktop1_686164ccc7.jpg','Exploração, Inovação, Reutilização','Foguetes Falcon, Cápsula Dragon, Starship');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-17 12:03:16
