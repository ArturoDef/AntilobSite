package com.antilob.site.api;

import com.antilob.site.entity.Race;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class ApiController {


    private Environment env;

    private String apiServer ="";

    @Autowired
    public void ApiController( Environment env){
        this.env =  env;
        apiServer = env.getProperty("api.server");
    }

    @RequestMapping("eventList")
    public  String eventList() {
        String url= apiServer+"/api/eventList";
        RestTemplate  restTemplate = new RestTemplate();
        String result = restTemplate.getForObject(url, String.class);
        return result;
    }

    @RequestMapping("lastResultList")
    public  String lastResultList() {
        String url= apiServer+"/api/lastResultList";
        RestTemplate  restTemplate = new RestTemplate();
        String result = restTemplate.getForObject(url, String.class);
        return result;
    }
    @RequestMapping("raceList")
    public  String raceList() {
        String url= apiServer+"/api/raceList";
        RestTemplate  restTemplate = new RestTemplate();
        String result = restTemplate.getForObject(url, String.class);
        return result;
    }

    @RequestMapping("/raceResults/{id}")
    public String ResultList(@PathVariable("id") String number) {
        String url= apiServer+"/api/raceResults/"+number;
        RestTemplate  restTemplate = new RestTemplate();
        String jsonContent = restTemplate.getForObject(url, String.class);
        return jsonContent;
    }

    @RequestMapping("/race/{id}")
    public Race getRace(@PathVariable("id") String number) {
        String url= apiServer+"/api/race/"+number;
        RestTemplate  restTemplate = new RestTemplate();
        Race race = restTemplate.getForObject(url, Race.class);
        return race;
    }

    @RequestMapping("challengeclub")
    public  String challengeclub() {
        String url= apiServer+"/api/challengeclub";
        RestTemplate  restTemplate = new RestTemplate();
        String result = restTemplate.getForObject(url, String.class);
        return result;
    }

    @RequestMapping("/memberResults/{id}")
    public String memberResultList(@PathVariable("id") String number) {
        String url= apiServer+"/api/memberResults/"+number;
        RestTemplate  restTemplate = new RestTemplate();
        String jsonContent = restTemplate.getForObject(url, String.class);
        return jsonContent;
    }

}
