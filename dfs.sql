SET NAMES UTF8;
DROP DATABASE IF EXISTS dfs;
CREATE DATABASE dfs CHARSET=UTF8;
USE dfs;

/**用户信息表**/
CREATE TABLE dfs_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32)
);
INSERT INTO dfs_user VALUES
(1, 'andrea', '123456'),
(2, 'lucy', '123456');

/**产品信息表**/
CREATE TABLE dfs_product(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  pname VARCHAR(64),
  price FLOAT(8,2),
  pic VARCHAR(32),
  supplier VARCHAR(108)
);
INSERT INTO dfs_product VALUES
(1,'深海大虾200g 虾类 海鲜水产烧烤食材',16.80,'img/fruits/2.jpg','送渔郎旗舰店'),
(2,'裴顿庄园童子鸡1kg 新鲜冷冻鸡肉',16.80,'img/fruits/110.jpg','厚助农业旗舰店'),
(3,'章鱼足270g 深海八爪鱼足 海鲜冻品冷链配送',11.80,'img/fruits/140.jpg','送渔郎旗舰店'),
(4,'越南巴沙鱼柳280g 去皮进口水产 海鲜鱼肉',9.90,'img/fruits/19.jpg','送渔郎旗舰店'),
(5,'东海小黄鱼400g（10-12条） 鱼肉整鱼海鲜水产',9.90,'img/fruits/100.jpg','送渔郎旗舰店'),
(6,'阿拉斯加黄金鲽400g 整鱼进口海鲜水产',19.90,'img/fruits/150.jpg','送渔郎旗舰店'),
(7,'欧式三文鱼排250g 2片装原味冷冻海鲜',38.90,'img/fruits/11.jpg','厚助农业旗舰店'),
(8,'姐妹厨房急鲜封琵琶腿1000g 冷冻小鸡腿',22.00,'img/fruits/120.jpg','送渔郎旗舰店'),
(9,'新奇士美国夏橙12个 160g以上/个',58.00,'img/fruits/1.jpg','桃本桃旗舰店'),
(10,'佳沛新西兰阳光金奇异果4个 114~134g/个',33.00,'img/fruits/3.jpg','佳沛阳光旗舰店'),
(11,'美国红蛇果4个 约190g/个 新鲜苹果进口',19.00,'img/fruits/4.jpg','送渔郎旗舰店'),
(12,'四川安岳黄柠檬4个约75g/个 新鲜水果',8.80,'img/fruits/222.jpg','送渔郎旗舰店'),
(13,'山东大樱桃1磅454g果径约26-28mm 本地樱桃',19.90,'img/fruits/26.jpg','送渔郎旗舰店'),
(14,'陕西精品红富士1kg 80-85mm 苹果 水果',15.80,'img/fruits/14.jpg','送渔郎旗舰店'),
(15,'海南小台农芒果1kg 海南特产芒果 水果',14.80,'img/fruits/333.jpg','送渔郎旗舰店'),
(16,'越南红心火龙果1kg 大果约450g个 新鲜水果',19.90,'img/fruits/444.jpg','送渔郎旗舰店'),
(17,'新西兰去骨小牛腿肉块500g 进口新鲜牛肉',26.80,'img/fruits/7.jpg','送渔郎旗舰店'),
(18,'澳洲谷饲牛脊骨肉骨段700g 煲汤食材 牛骨',19.90,'img/fruits/13.jpg','送渔郎旗舰店'),
(19,'澳洲精选S级牛腩块500g 进口牛肉块',28.00,'img/fruits/15.jpg','送渔郎旗舰店'),
(20,'澳洲腱子心1kg牛腱 新鲜冷冻牛肉 品质生鲜',53.80,'img/fruits/12.jpg','送渔郎旗舰店'),
(21,'丹麦皇冠谷饲猪肋排400g 非小排猪肉 猪排',24.60,'img/fruits/24.jpg','送渔郎旗舰店'),
(22,'丹麦皇冠谷饲五花肉400g 带皮带骨正宗猪肉',28.60,'img/fruits/28.jpg','送渔郎旗舰店'),
(23,'巴西公牛牛腩块500g 进口牛肉 新鲜牛腩',38.90,'img/fruits/23.jpg','送渔郎旗舰店'),
(24,'360手机 N4 全网通 4GB+32GB 阳光白 移动联通电信4G手机 双卡双待',999.00,'img/fruits/19.jpg','送渔郎旗舰店'),
(25,'小米 Max 全网通 标准版 3GB内存 32GB ROM 金色 移动联通电信4G手机',1299.00,'img/fruits/19.jpg','送渔郎旗舰店'),
(26,'华为 P9 全网通 4GB+64GB版 金色 移动联通电信4G手机 双卡双待 后置1200万',3688.00,'img/fruits/19.jpg','送渔郎旗舰店'),
(27,'乐视（Le）乐2（X620）32GB 原力金 移动联通电信4G手机 双卡双待 5.5英寸',988.00,'img/fruits/19.jpg','送渔郎旗舰店'),
(28,'努比亚(nubia)【3+64GB】小牛5 Z11mini 黑色 移动联通电信4G手机',1299.00,'img/fruits/19.jpg','送渔郎旗舰店'),
(29,'乐视（Le）乐2Pro 32GB 金色 移动联通电信4G手机 双卡双待 5.5英寸In-Cell屏',1399.00,'img/fruits/19.jpg','送渔郎旗舰店'),
(30,'华为 Mate 8 3GB+32GB版 玫瑰金 移动联通电信4G手机 双卡双待 麒麟950芯片',2799.00,'img/fruits/19.jpg','送渔郎旗舰店'),
(31,'小米 4c 标准版 全网通 白色 移动联通电信4G手机 双卡双待 高通骁龙808畅销机',799.00,'img/fruits/19.jpg','送渔郎旗舰店'),
(32,'vivo X7 全网通 4GB+64GB 移动联通电信4G手机 双卡双待 星空灰 vivox7',2498.00,'img/fruits/19.jpg','送渔郎旗舰店'),
(33,'联想 乐檬3 （K32C36）16GB 金色 移动4G手机 双卡双待 刀锋致敬经典',599.00,'img/fruits/19.jpg','送渔郎旗舰店'),
(34,'华为 荣耀 畅玩4X 晨曦金 移动联通电信4G手机 双卡双待 5.5英寸大屏看片利器',749.00,'img/fruits/19.jpg','送渔郎旗舰店'),
(35,'三星 Galaxy On5（G5500）金色 移动联通4G手机 真皮质感后盖，2600毫安大容量',699.00,'img/fruits/19.jpg','送渔郎旗舰店'),
(36,'OPPO A37 2GB+16GB内存版 玫瑰金 全网通4G手机 双卡双待 【赠品任你选】',1299.00,'img/fruits/19.jpg','送渔郎旗舰店');

/**购物车表**/
CREATE TABLE dfs_cart(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  userId INT
);
INSERT INTO dfs_cart VALUES
(100, 10);

/**购物车详情表**/
CREATE TABLE dfs_cart_detail(
  did INT PRIMARY KEY AUTO_INCREMENT,
  cartId INT,
  productId INT,
  count INT
);
INSERT INTO dfs_cart_detail VALUES
(NULL, 100, 8, 2),
(NULL, 100, 15, 1),
(NULL, 100, 27, 3);