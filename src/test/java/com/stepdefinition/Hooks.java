package com.stepdefinition;


import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import com.libraries.LibGlobal;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;


public class Hooks extends LibGlobal {
	@Before
	public void beforeExe() {
		System.out.println("brwoser launched");

	}
	@After
	public void afterExe(Scenario sc) {
		TakesScreenshot ts=(TakesScreenshot) driver;
		byte[] screenshotAs = ts.getScreenshotAs(OutputType.BYTES);
		sc.embed(screenshotAs, "png/jpeg/jpg");
		quit();

	}
	

}
