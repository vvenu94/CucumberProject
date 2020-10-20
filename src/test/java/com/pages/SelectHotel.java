package com.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.libraries.LibGlobal;

public class SelectHotel extends LibGlobal {
	public SelectHotel() {
		PageFactory.initElements(driver, this);
	}

	@FindBy(id = "radiobutton_0")
	private WebElement radioButton;

	@FindBy(id = "continue")
	private WebElement btnContinue;

	public WebElement getRadioButton() {
		return radioButton;
	}

	public WebElement getBtnContinue() {
		return btnContinue;
	}
public void selectHotelPage() {
	btnClick(getRadioButton());
	btnClick(getBtnContinue());

}
}
