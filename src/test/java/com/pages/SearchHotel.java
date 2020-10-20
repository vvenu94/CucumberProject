package com.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.libraries.LibGlobal;

public class SearchHotel extends LibGlobal {
	public SearchHotel() {
		PageFactory.initElements(driver, this);
	}

	@FindBy(id = "location")
	private WebElement location;
	@FindBy(id = "hotels")
	private WebElement hotel;
	
	@FindBy(id = "room_type")
	private WebElement roomType;
	
	@FindBy(id = "room_nos")
	private WebElement noOfRooms;
	
	@FindBy(id = "datepick_in")
	private WebElement chechIn;
	
	@FindBy(id = "datepick_out")
	private WebElement checkOut;
	
	@FindBy(id = "adult_room")
	private WebElement noOfAdult;
	
	@FindBy(id = "child_room")
	private WebElement noOfChild;
	
	@FindBy(id = "Submit")
	private WebElement btnsubmit;
	

	public WebElement getBtnSubmit() {
		return btnsubmit;
	}

	public WebElement getLocation() {
		return location;
	}

	public WebElement getHotel() {
		return hotel;
	}

	public WebElement getRoomType() {
		return roomType;
	}

	public WebElement getNoOfRooms() {
		return noOfRooms;
	}

	public WebElement getChechIn() {
		return chechIn;
	}

	public WebElement getCheckOut() {
		return checkOut;
	}

	public WebElement getNoOfAdult() {
		return noOfAdult;
	}

	public WebElement getNoOfChild() {
		return noOfChild;
	}
	public void searchHotelPage(String location, String hotel, String roomType, String noOfRooms,
			String checkInDate, String checkOutDate, String adultPerRoom, String childPerRoom) {
		selectByVisibleText(getLocation(), location);
		selectByVisibleText(getHotel(), hotel);
		selectByVisibleText(getRoomType(), roomType);
		selectByVisibleText(getNoOfRooms(), noOfRooms);
		type(getChechIn(), checkInDate);
		type(getCheckOut(), checkOutDate);
		selectByVisibleText(getNoOfAdult(), adultPerRoom);
		selectByVisibleText(getNoOfChild(), childPerRoom);
		btnClick(getBtnSubmit());
		
	}
	}


