-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3300
-- Tempo de geração: 14/12/2024 às 01:52
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `api_usuarios`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `idade` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `usuarios`
--

INSERT INTO `usuarios` (`id`, `nome`, `email`, `idade`) VALUES
(10, 'Davi', 'luizdavi@gmail.com', 22),
(11, 'Davi', 'luizdavi@gmail.com', 25),
(12, 'Davi', 'luizdagergrevi@gmail.com', 26),
(13, 'Davi', 'lusxasdrhrthasizdavi@gmail.com', 22),
(14, 'Davi', 'lusxasdjtjasizdavi@gmail.com', 23),
(15, 'Davi', 'luizdsefwavi@gmail.com', 25),
(16, 'Davi', 'luizdavgbhthtri@gmail.com', 28),
(17, 'Davi', 'lusxasdvsdvsdasizdavi@gmail.com', 25),
(18, 'Davi', 'lusxadcddasizdavi@gmail.com', 26),
(19, 'Davi', 'luizdgnfgnavi@gmail.com', 22),
(20, 'Davi', 'luizdfbdfbdavi@gmail.com', 12),
(21, 'Davi', 'lusxasdgnfgnfasizdavi@gmail.com', 30),
(22, 'Davi', 'lusxasdasizdavi@gmail.com', 55),
(23, 'Davi', 'luizdavi@gmail.com', 55),
(24, 'Davi', 'luizdavi@gmail.com', 66),
(25, 'Davi', 'luizdavi@gmail.com', 552),
(26, 'Davi', 'lusxasdasizdavi@gmail.com', 55),
(27, 'Davi', 'luizdavi@gmail.com', 55);

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
