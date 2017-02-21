package com.myselenium.app.bbcradionav.drawer;

import java.util.List;

import org.junit.Assert;

import com.myselenium.app.bbcradionav.util.WebConnector;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

//step layer
public class RadioNavDrawerTest {
	    
	  
	   WebConnector selenium = WebConnector.getInstance();//new WebConnector();
	    
	
	   
    @Given("^I go to \"([^\"]*)\" on \"([^\"]*)\"$")
    public void I_go_to(String URL, String browser){
    	selenium.log("I go to "+URL +" on " +browser);
    	selenium.openBroswer(browser);
    	selenium.navigate(URL);
    	
    }
	
	@Given("^I can see the \"([^\"]*)\"$")
	public void I_can_see_the_radio_nav(String object ){
		selenium.log("I can see the " +object);
		
	}
			
	@When("^I select \"([^\"]*)\" in the radio nav$")
	public void I_select_section_in_the_radio_nav(String object){
		
		selenium.log("I select "+object  +"in the radio nav");
		selenium.click(object);
		
	}
	@And("^I select the all \"([^\"]*)\" link$")
	public void I_select_the_all_categories_link(String object){
		selenium.log("And I select rhe all "+object +"link");
		
	}
	
	@Then("^the \"([^\"]*)\" drawer is \"([^\"]*)\"$")
	public void Then_the_drawer(String object, String oc){
		selenium.log("Then the " +object +" drawer is " +oc);
		selenium.click(object);
	}
	@When("^I select \"([^\"]*)\" in the radio nav \"([^\"]*)\"$")
	public void I_select_section_in_the_radio_nav_again(String object, String ag){
		selenium.log("When I select "+object +"in the radio nav "+ag);
		selenium.click(object);
	}
	@Then("^the \"([^\"]*)\" drawer is \"([^\"]*)\" and the other drawers are \"([^\"]*)\"$")
	public void the_drawer_is_open_and_the_other_drawers_are_closed(String object,String op, String cl){
		selenium.log("Then the "+object +" "+"drawer is "+op + " "+"and the other drawers are "+cl);
		
	}
	@When("^I select \"([^\"]*)\" in the \"([^\"]*)\"$")
	public void I_select_Categories_in_the_radio_nav(String object, String nav){
		selenium.log("When I select "+object +"in the " +nav);
		selenium.click(object);
	}
	@Then("^I can see the following \"([^\"]*)\"$")
	public void I_can_see_the_following(DataTable object){
		/*List<String> names= object.asList(String.class);
		System.out.println("*************************");
		for(int i=0;i<names.size();i++){
			selenium.log("Checking  " + names.get(i));
		}*/
		
		selenium.log("Then I can see the following " +object);
		
	}
	
	@Then("^I am on the all \"([^\"]*)\" page$")
	public void I_am_on_the_all_categories_page(String object){
		selenium.log("Then I am on the all "+object);
		
	}
}
