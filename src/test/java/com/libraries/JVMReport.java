package com.libraries;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class JVMReport {
	public static void jvmReports(String jsonFile) {
		File directory = new File("C:\\Users\\venugopal\\eclipse-workspace\\BlueAir\\src\\test\\resources\\jvm");
		Configuration configuration = new Configuration(directory, "Adactin-Automation");
		configuration.addClassifications("os", "Windows 10");
		configuration.addClassifications("browser_Name", "chrome");
		configuration.addClassifications("browser_Version", "86");
		configuration.addClassifications("Sprint", "45");
		List<String> jsonFiles = new ArrayList<String>();
		jsonFiles.add(jsonFile);
		ReportBuilder reportBuilder = new ReportBuilder(jsonFiles, configuration);
		reportBuilder.generateReports();

	}

}
