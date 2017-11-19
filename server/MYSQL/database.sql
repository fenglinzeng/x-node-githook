/*
 Navicat Premium Data Transfer

 Source Server         : php_test
 Source Server Type    : MySQL
 Source Server Version : 50535
 Source Host           : 192.168.15.243:3306
 Source Schema         : fework

 Target Server Type    : MySQL
 Target Server Version : 50535
 File Encoding         : 65001

 Date: 16/04/2018 17:08:57
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for githook
-- ----------------------------
DROP TABLE IF EXISTS `githook`;
CREATE TABLE `githook` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '数据id',
  `alias` varchar(10) NOT NULL,
  `path` varchar(100) NOT NULL,
  `update_time` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `create_time` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `is_show` int(11) unsigned NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4;

SET FOREIGN_KEY_CHECKS = 1;