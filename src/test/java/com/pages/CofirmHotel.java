package com.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.libraries.LibGlobal;

public class CofirmHotel extends LibGlobal {
	public CofirmHotel() {
		PageFactory.initElements(driver, this);
	}

	@FindBy(id = "order_no")
	private WebElement orderNo;

	public WebElement getOrderNo() {
		return orderNo;
	}
public String orderNo() {
	String orderNo = getAttribute(getOrderNo());
	return orderNo;
}
}
