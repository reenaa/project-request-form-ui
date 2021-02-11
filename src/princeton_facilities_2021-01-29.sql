# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.21)
# Database: princeton_facilities
# Generation Time: 2021-01-29 07:28:44 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table project_request
# ------------------------------------------------------------

LOCK TABLES `project_request` WRITE;
/*!40000 ALTER TABLE `project_request` DISABLE KEYS */;

INSERT INTO `project_request` (`id`, `first_name`, `last_name`, `phone`, `net_id`, `manager_first_name`, `manager_last_name`, `manager_net_id`, `project_location_campus`, `project_location_building`, `project_location_floor`, `project_location_room`, `project_name`, `project_details`, `estimated_budget`, `date_required_by`, `source_of_funding`, `project_type`, `project_priority`, `reason`, `executing_department`, `fiscal_year_start`, `estimated_start_date`, `estimated_end_date`, `attachment`, `create_time`, `update_time`, `user_name`)
VALUES
	(1,'Reena','Alandkar','6096086591','hjkljh','Reenaaaa','Alandkarrrr','vgcfhjk','vbnm','hhj','njjb','uhuyf','khkh','ijbh','1000','2020-04-14','Major Maintenance','Major Maintenance Request for inclusion in Annual Program','An opportunity project','Indoor Air Quality Issues','Princeton Plasma Physics Laboratory Experimental Equipment','2020','2020-03-31','2020-04-19','jhfgfx','2020-12-07 00:42:59','2021-01-29 00:59:18','Reenaa4'),
	(2,'Reena','Alandkar','6096086591','sdf','jkwdae','kafks','ksdf','kjsdfkds','sjdfks','skdfjsdk','kfjdsf','dffsd','jsdfjds','djfsd','0170-04-11','Central Funding (Capital Request)','Furnishings/Interior Finishes','An emergency condition exist','Off-line Building','Office of the University Architect','2020','0185-04-11','0192-04-11','sfd','2020-12-07 00:44:03','2021-01-29 02:26:58','Reenaa4'),
	(3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'safnadskfkdsjgkasdgj','falsdfj sdkfjasldjfgjfgj lkdfdsafjdkjjkafjdaskfjdasj\nakdfsjajsdgk\nkjgkdsfgalksdfg\n;kfaldsf',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2020-12-07 01:06:58','2021-01-29 00:59:27','Reenaa4'),
	(4,'test','test',NULL,'fgdgd','sdfjs','sdfsd','fksdfs',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2020-12-07 01:50:16','2021-01-29 00:59:37','Reenaa4'),
	(5,'Reena','Alandkar',NULL,'vhjvv','bjvh','jbn','bjbh','vbnm','sjdfks','jhiuu','uhuyf','hgfhjkl','jhvhgvnb\nbvnb','1000','0191-04-10','Central Funding (Capital Request)','Major Maintenance Request for Immediate Consideration','Current condition justifies repair/replacement',NULL,NULL,NULL,NULL,NULL,NULL,'2020-12-07 02:21:36','2021-01-29 01:13:43','Reenaa5'),
	(6,'hbjn','bnm,',NULL,'vbn','nvbnvb','nbvbnv','nbn','kjhhv','bnm','jhiuu','hkhjh','uihguy','nbvn','hjk','0177-04-11','Central Funding (Capital Request)','Major Maintenance Request for Immediate Consideration','Capital Plan Priority','Electrical System Upgrade',NULL,NULL,NULL,NULL,NULL,'2020-12-07 02:31:46','2021-01-29 00:59:51','Reenaa5'),
	(7,'Reena','Alandkar','6096086591','dvfvdf',NULL,NULL,NULL,'sdfsfsf','sdfsd','jhiuu','hkhjh','Test Project',NULL,NULL,'0172-04-08','Central Funding (Capital Request)','Furnishings/Interior Finishes','Current condition justifies repair/replacement','Indoor Air Quality Issues','Office of the University Architect',NULL,'0180-04-08','0191-04-08',NULL,'2020-12-07 02:46:36','2021-01-29 02:23:54','Reenaa5'),
	(8,'Reena','Alandkar','6096086591','kmlkn',NULL,NULL,NULL,'mnmm','nm mn','skdfjsdk','sdfsdf','uihguy',NULL,'hjk','2020-11-29','Central Funding (Capital Request)','Major Maintenance Request for inclusion in Annual Program','Regulatory and code requirements','Plumbing System Upgrade','Princeton Plasma Physics Laboratory Administration','2021','2020-12-05','2020-12-23',NULL,'2020-12-07 02:48:52','2021-01-29 02:26:51','Reenaa5'),
	(11,'Reenaa1','Alandkar1','222-222-222','safjsdjf','Reena','Alandkar','safjsdjf','Reena','Alandkar','safjsdjf','safjsdjf','Reena','Alandkar','safjsdjf','2021-12-30','ffsd','sdfsd','sdfsfsd','sdfsrferfg','refrerge','2020','2021-12-30','2021-12-30','sjdfgaerdfja','2020-12-07 03:49:30','2021-01-29 01:00:11','Reenaa5'),
	(12,'Reenaa1','Alandkar1','222-222-222','safjsdjf','Reena','Alandkar','safjsdjf','Reena','Alandkar','safjsdjf','safjsdjf','Reena','Alandkar','safjsdjf','2021-12-30','ffsd','sdfsd','sdfsfsd','sdfsrferfg','refrerge','2020','2021-12-30','2021-12-30','sjdfgaerdfja','2021-01-09 15:39:07','2021-01-29 01:00:20','Reenaa6'),
	(13,'Reenaa1','Alandkar1','222-222-222','safjsdjf','Reena','Alandkar','safjsdjf','Reena','Alandkar','safjsdjf','safjsdjf','Reena','Alandkar','safjsdjf','2021-12-30','ffsd','sdfsd','sdfsfsd','sdfsrferfg','refrerge','2020','2021-12-30','2021-12-30','sjdfgaerdfja','2021-01-18 23:19:36','2021-01-29 01:00:26','Reenaa6'),
	(14,'Reena','Alandkar','6096086591','alan','fasf','sdffd','vgcfhjk','sfdfs','fasd','sdfd','sfddfs','sdfsd','sdfsd','32332','2021-02-04','Central Funding (Capital Request)','Furnishings/Interior Finishes','Regulatory and code requirements','Mechanical System Upgrade','Office of the University Architect','2021','2021-04-07','2021-04-06',NULL,'2021-01-29 01:06:05','2021-01-29 01:06:05','Reenaa5'),
	(15,'Reena','Alandkar','6096086591','hjkljh','asfsdfd','sdcsdfsd','vgcfhjk','kjhhv','sdfsd','dfsdf','jhgug','hgfhjkl','sdfgsgbfg','2332232','2021-01-28','Operating','Major Maintenance Request for inclusion in Annual Program','Regulatory and code requirements','Multi-phase Continuation','Princeton Plasma Physics Laboratory AC Power','2024','2021-01-31','2021-02-27',NULL,'2021-01-29 01:16:57','2021-01-29 01:16:57','Reenaa5');

/*!40000 ALTER TABLE `project_request` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table user_details
# ------------------------------------------------------------

LOCK TABLES `user_details` WRITE;
/*!40000 ALTER TABLE `user_details` DISABLE KEYS */;

INSERT INTO `user_details` (`id`, `user_name`, `password`, `email`, `role`, `create_time`, `update_time`)
VALUES
	(1,'Reenaa4','$2a$10$U.DEySBPS7CaCVQkPY0Itu4Mmammg5dTaNtiYh9jA9vBGCt88H5Y6','reena4@princeton.edu','USER','2021-01-11 01:41:56','2021-01-29 00:55:08'),
	(5,'Reenaa5','$2a$10$230XM8jyhrPT.HZmQvU/SOdzNhRk39RkaJwTgsNCSIWi/Cz9.Oxy.','reena5@princeton.edu','USER','2021-01-11 01:45:51','2021-01-29 00:55:00'),
	(6,'Reenaa6','$2a$10$HM5khCHGZHZhh5vaZ8Zht.nZ6yysNnXMK2PUTxEkKl4AzI9dmiyXG','reena6@princeton.edu','ADMIN','2021-01-12 23:19:54','2021-01-18 23:19:24');

/*!40000 ALTER TABLE `user_details` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
