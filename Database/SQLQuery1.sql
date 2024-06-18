create database TraSuaPhucLong

create table owner(
	OID varchar (16) not null primary key,
	hoten nvarchar(25) not null,
	ngaysinh datetime not null
	)
create table city(
	managerID varchar(16) not null primary key,
	cityname nvarchar(25) not null,
	branchesamount int not null
	)
create table branch(
	branchID varchar(16) not null primary key,
	amountOfEmployee int not null,
	branchName nvarchar (25) not null,
	managerID int not null
	)
create table Employee(
	employeeId varchar(16) not null primary key,
	roles nvarchar(10) not null,
	ten nvarchar (25) not null,
	birth datetime not null
	)
create table Categories (
	CateID varchar(16) not null primary key,
	typename nvarchar(20) not null
	)
create table ingridients(
	nameI nvarchar(20) not null primary key,
	amount int not null,
	prices int not null,
	)
create table typeofproduct(
	typeID varchar (16) not null primary key,
	typename nvarchar (25) not null
	)
create table products(
	productID varchar (16) not null primary key,
	productname nvarchar (20) not null,
	productprice int not null
	)
create table bill(
	billID varchar(16) not null primary key,
	stuffamount int not null,
	ngayin datetime not null,
	)
create table customer(
	UID varchar (16) not null primary key,
	custommername nvarchar (20) not null,
	customeraddress nvarchar (50) not null,
	phonenumber varchar (10) not null
	)
create table link_categories_ingridients(
	cateID varchar (16) not null,
	nameI varchar (20) not null,
	)
create table storageI (
	brachID varchar (16) not null,
	nameI nvarchar (20) not null,
	amount int not null
	)
create table storageP(
	branchID varchar (16) not null,
	productname nvarchar (20) not null,
	amount int not null
	)
create table 