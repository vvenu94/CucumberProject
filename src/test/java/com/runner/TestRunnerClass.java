package com.runner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.libraries.JVMReport;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = { "src\\test\\resources\\Feature" }, glue = {
		"com.stepdefinition" }, monochrome = true, snippets = SnippetType.CAMELCASE, strict = true, plugin = { "pretty",
				"json:src\\test\\resources\\jvm.json" }, dryRun = false, tags = { "@ChildType" })
public class TestRunnerClass {
	@AfterClass
	public static void afterClass() {
		JVMReport.jvmReports(System.getProperty("user.dir") + "\\src\\test\\resources\\jvm.json");

	}

}
