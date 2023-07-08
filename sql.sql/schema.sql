drop database if exists store;
create database store;

use store;

create table clothes (
    id int not null auto_increment primary key,
    clothes_name varchar(30) not null,
    clothes_price int not null,
    image_url varchar (200)
);

create table furniture (
    id int not null auto_increment primary key,
    furniture_name varchar(30) not null,
    furniture_price int not null,
        image_url varchar (200)

);
create table jewelry (
    id int not null auto_increment primary key,
    jewelry_name varchar(30) not null,
    jewelry_price int not null,
        image_url varchar (200)

);
create table tech (
    id int not null auto_increment primary key,
    tech_name varchar(30) not null,
    tech_price int not null,
        image_url varchar (200)

);
