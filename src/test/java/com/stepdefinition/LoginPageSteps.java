package com.stepdefinition;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import com.libraries.LibGlobal;
import com.pages.BookHotel;
import com.pages.CofirmHotel;
import com.pages.Login;
import com.pages.SearchHotel;
import com.pages.SelectHotel;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginPageSteps extends LibGlobal {
	Login login;
	SearchHotel searchHotel;
	SelectHotel selectHotel;
	BookHotel bookHotel;
	CofirmHotel confirmHotel;
		
	@Given("User is on Adactin site")
	public void user_is_on_Adactin_site() {
	   browserLaunch();
	   urlLaunch("http://adactinhotelapp.com/");
	}

	@When("User should enter {string} and {string}")
	public void user_should_enter_and(String userName, String password) {
		login= new Login();
		login.loginpage(userName, password);
	    
	}

	@When("User in search hotel page enter {string},{string},{string},{string},{string},{string},{string}and {string}")
	public void user_in_search_hotel_page_enter_and(String location, String hotel, String roomType, String noOfRooms,
			String checkInDate, String checkOutDate, String adultPerRoom, String childPerRoom) {
		searchHotel=new SearchHotel();
		searchHotel.searchHotelPage(location, hotel, roomType, noOfRooms, checkInDate, checkOutDate, adultPerRoom, childPerRoom);
	}

	@When("User in select hotel page select hotel")
	public void user_in_select_hotel_page_select_hotel() {
		selectHotel=new SelectHotel();
		selectHotel.selectHotelPage();
	  
	}

	@When("User in book hotel page enter {string},{string},{string},{string},{string}, {string},{string}and{string}")
	public void user_in_book_hotel_page_enter_and(String firstName, String lastName, String address, String ccNum,
			String ccType, String ccExpMonth, String ccExpYear, String ccCvv) {
		bookHotel=new BookHotel();
		bookHotel.bookHotelPage(firstName, lastName, address, ccNum, ccType, ccExpMonth, ccExpYear, ccCvv);
	}

	@Then("User should verify url navigated to booking confirmation page and ordernumber generated")
	public void user_should_verify_url_navigated_to_booking_confirmation_page_and_ordernumber_generated() {
		confirmHotel =new CofirmHotel();
		
	 System.out.println(confirmHotel.orderNo());
	 quit();
	}
}
