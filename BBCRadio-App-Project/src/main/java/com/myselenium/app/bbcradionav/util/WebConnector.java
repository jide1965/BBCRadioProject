package com.myselenium.app.bbcradionav.util;

import java.io.FileInputStream;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;



public class WebConnector {

	//Navigate
	//initialize properties files
	//selenium webdriver layers - to fire selenium commands
   
	
	Logger APPLICATION_LOGS = Logger.getLogger("devpinoyLogger");
	
	
			//Initializing properties file
	Properties OR = null;
	Properties CONFIG = null;
	WebDriver driver=null;
	WebDriver mozilla=null;
	WebDriver chrome=null;
	WebDriver ie=null;
	static WebConnector w;
	
	//
	String browser="Chrome";
	String url = "http://www.bbc.co.uk/radio";
	
	private WebConnector(){
		
		if(OR==null){
			    
			
			
			try{
				//initialize OR
				OR = new Properties();
				FileInputStream fs = new FileInputStream(System.getProperty("user.dir")+"\\src\\main\\java\\com\\myselenium\\app\\bbcradionav\\config\\OR.properties");
				OR.load(fs);
				
				//initialize CONFIG to corresponding env
				CONFIG=new Properties();
			    fs = new FileInputStream(System.getProperty("user.dir")+"\\src\\main\\java\\com\\myselenium\\app\\bbcradionav\\config\\"+OR.getProperty("testEnv")+"_config.properties");
				CONFIG.load(fs);
			}catch(Exception e){
				System.out.println("Error on initializing properties files");
			}
		}
		
	}
	/// ****************Application Independent functions************************ ///
	
	//opening the browser
	public void openBroswer(String browserType){
		log("Opening browser "+browserType);
		if(browserType.equals("Chrome")&& chrome==null){
			System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"//chrome//chromedriver.exe");
			driver =new ChromeDriver();
			chrome=driver;
		}else if(browserType.equals("Chrome")&& chrome==null){
			driver=chrome;
		}/*else if(browserType.equals("Internet Explorer")&& ie==null){
			System.setProperty("webdriver.ie.driver",System.getProperty("user.dir")+"\\IE\\IEDriverServer.exe");
			driver = new InternetExplorerDriver();
			ie=driver;
		}else if(browserType.equals("Internet Explorer")&& ie==null){
			driver=ie;
		}else if(browserType.equals("Mozilla") && mozilla==null){
			System.setProperty("webdriver.gecko.driver",System.getProperty("user.dir")+"\\mozilla\\geckodriver.exe");
			driver = new FirefoxDriver();
			mozilla=driver;
		}else if(browserType.equals("Mozilla") && mozilla!=null){
			driver=mozilla;
		}*/
		
		//max
		driver.manage().window().maximize();
		
		//implicit wait
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			
	}
	//navigate to URL
	public void navigate(String URL){
		log("Naviating to "+CONFIG.getProperty(URL));
		driver.get(CONFIG.getProperty(URL));
	}
	// clicking on any object
		public void click(String objectName){
				log("Clicking on " + objectName);
				driver.findElement(By.xpath(OR.getProperty(objectName))).click();
				driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
				
		}
					
		/// ****************Application dependent functions************************ ///	
		
		
				
		//Logging
		public void log(String msg){
			APPLICATION_LOGS.debug(msg);
		}
		
	
	    //function implementing singleton behavior
	    public static WebConnector getInstance(){
		    if(w==null)
			    w= new WebConnector();
		    return w;
	}
}
