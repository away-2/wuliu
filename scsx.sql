/*
 Navicat Premium Data Transfer

 Source Server         : mysql8(3306)
 Source Server Type    : MySQL
 Source Server Version : 80031 (8.0.31)
 Source Host           : localhost:3306
 Source Schema         : scsx

 Target Server Type    : MySQL
 Target Server Version : 80031 (8.0.31)
 File Encoding         : 65001

 Date: 20/09/2023 20:54:59
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for inwarehouse
-- ----------------------------
DROP TABLE IF EXISTS `inwarehouse`;
CREATE TABLE `inwarehouse`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `weight` int NULL DEFAULT NULL,
  `s_name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL,
  `s_phone` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL,
  `s_address` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL,
  `r_name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL,
  `r_phone` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL,
  `r_address` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL,
  `price` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 14 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of inwarehouse
-- ----------------------------
INSERT INTO `inwarehouse` VALUES (13, 1, '急急急', '15555555555', '黑龙江省-哈尔滨市-道里区', '九九九', '15555555555', '北京市-市辖区-东城区', 6);

-- ----------------------------
-- Table structure for logistics
-- ----------------------------
DROP TABLE IF EXISTS `logistics`;
CREATE TABLE `logistics`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL,
  `price` decimal(10, 2) NULL DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 14 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of logistics
-- ----------------------------
INSERT INTO `logistics` VALUES (2, '顺丰速运', 6.00, '北京');
INSERT INTO `logistics` VALUES (3, '中通快递1', 7.00, '石家庄');
INSERT INTO `logistics` VALUES (4, '中远海运', 5.00, '北京');
INSERT INTO `logistics` VALUES (5, '中铁快运', 6.00, '北京');
INSERT INTO `logistics` VALUES (6, '佳吉快运', 7.00, '北京');
INSERT INTO `logistics` VALUES (7, '运城物流', 5.00, '上海');
INSERT INTO `logistics` VALUES (8, '德邦', 6.00, '上海');
INSERT INTO `logistics` VALUES (9, '中国储运', 7.00, '广州');
INSERT INTO `logistics` VALUES (10, '安德智联', 6.00, '上海');
INSERT INTO `logistics` VALUES (11, '宝供物流', 6.00, '深圳');
INSERT INTO `logistics` VALUES (12, '海丰SITC', 5.00, '广州');
INSERT INTO `logistics` VALUES (13, '锦城', 4.00, '深圳');

-- ----------------------------
-- Table structure for outwarehouse_copy1
-- ----------------------------
DROP TABLE IF EXISTS `outwarehouse_copy1`;
CREATE TABLE `outwarehouse_copy1`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `weight` int NULL DEFAULT NULL,
  `s_name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL,
  `s_phone` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL,
  `s_address` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL,
  `r_name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL,
  `r_phone` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL,
  `r_address` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL,
  `price` int NULL DEFAULT NULL,
  `isservice` int NULL DEFAULT NULL COMMENT '是否送达 0 是未送达 1是已送达',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 14 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of outwarehouse_copy1
-- ----------------------------
INSERT INTO `outwarehouse_copy1` VALUES (13, 1, '急急急', '15555555555', '黑龙江省-哈尔滨市-道里区', '九九九', '15555555555', '北京市-市辖区-东城区', 6, 0);

-- ----------------------------
-- Table structure for sending
-- ----------------------------
DROP TABLE IF EXISTS `sending`;
CREATE TABLE `sending`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `s_name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL COMMENT '寄件人姓名',
  `s_phone` varchar(11) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL COMMENT '寄件人联系方式',
  `s_address` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL COMMENT '寄件人地址 ',
  `r_name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL COMMENT '收件人姓名',
  `r_phone` varchar(11) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL COMMENT '收件人电话',
  `r_address` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL COMMENT '收件人地址',
  `type` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL COMMENT '货物种类',
  `weight` int NULL DEFAULT NULL COMMENT '货物重量',
  `price` decimal(10, 2) NULL DEFAULT NULL COMMENT '货物价格',
  `isservice` int(1) UNSIGNED ZEROFILL NULL DEFAULT NULL COMMENT '是否送达 0 是未送达 1是已送达',
  `user_id` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 14 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sending
-- ----------------------------
INSERT INTO `sending` VALUES (13, '急急急', '15555555555', '黑龙江省-哈尔滨市-道里区', '九九九', '15555555555', '北京市-市辖区-东城区', '木材', 1, 6.00, 0, 7);

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `loginName` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `loginPwd` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `limits` int(1) UNSIGNED ZEROFILL NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 'admin', '123456', 1);
INSERT INTO `user` VALUES (2, 'test', '123456', 0);
INSERT INTO `user` VALUES (7, 'test1', '123', 0);
INSERT INTO `user` VALUES (8, 'test1', '123', 0);

SET FOREIGN_KEY_CHECKS = 1;
