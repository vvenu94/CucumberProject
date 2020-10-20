package com.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.libraries.LibGlobal;

public class Login extends LibGlobal {
	public Login() {
		PageFactory.initElements(driver, this);
	}

	@FindBy(id = "username")
	private WebElement userName;
	@FindBy(id = "password")
	private WebElement password;
	@FindBy(id = "login")
	private WebElement btnlogin;

	public WebElement getBtnlogin() {
		return btnlogin;
	}

	public WebElement getUserName() {
		return userName;
	}

	public WebElement getPassword() {
		return password;
	}
	
	public void loginpage(String userName,String password) {
		type(getUserName(), userName);
		type(getPassword(),password);
		btnClick(getBtnlogin());

	}

}
