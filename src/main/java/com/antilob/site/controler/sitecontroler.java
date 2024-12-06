package com.antilob.site.controler;

import com.antilob.site.entity.Member;
import com.antilob.site.entity.Race;
import com.antilob.site.system.ApplicationProperties;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.client.RestTemplate;

import java.util.Map;

@Controller
@RequestMapping("/")
public class sitecontroler {

    @Autowired
    ApplicationProperties applicationProperties;
    // Home page
    @RequestMapping("")
    public String Home() {
        return "home";
    }

    // List of race with links to the resuls
    @RequestMapping("raceresults")
    public String RaceResults(Model model) {
        System.out.println(" ***** raceresults");
        String page = "racesresults.html::pagecontent";
        model.addAttribute("page", page);
        return "page";
    }

    // Results of race
    @RequestMapping("raceresult/{id}")
    public String RaceResult(@PathVariable("id") String number, Model model) {
        System.out.println(" ***** raceresult id = "+number);
        String page = "raceResult.html::pagecontent";
        model.addAttribute("page", page);
        model.addAttribute("raceId", number);

        String url= "http://localhost:9002/api/race/"+number;
        RestTemplate restTemplate = new RestTemplate();
        Race race = (Race) restTemplate.getForObject(url, Race.class);

         url= "http://localhost:9002/api/nbrParticipantsAll/"+number;

        RestTemplate restTemplate2 = new RestTemplate();
        String json = restTemplate.getForObject(url, String.class);
        ObjectMapper mapper = new ObjectMapper();
        Map<String, Integer> map = restTemplate.getForObject(url, Map.class);
        Integer nbrParticipants = map.get("nbrParticipantsAll");


        model.addAttribute("raceLocation", race.getLocation());
        model.addAttribute("nbrParticipants", race.getNbrparticipants());
        model.addAttribute("nbrClub", nbrParticipants);

        return "page";
    }

    @RequestMapping("challengerules")
    public String challengerules( Model model) {
        String page = "challengerules.html::pagecontent";
        model.addAttribute("page", page);
        return "page";
    }
    @RequestMapping("presentation")
    public String presentation( Model model) {
        String page = "presentation.html::pagecontent";
        model.addAttribute("page", page);
        return "page";
    }

    @RequestMapping("challengeclub")
    public String challengeclub( Model model) {
        String page = "challengeclub.html::pagecontent";
        model.addAttribute("page", page);
        return "page";
    }
    @RequestMapping("memberResults/{id}")
    public String memberResults(@PathVariable("id") String number, Model model) {
        System.out.println(" ***** Member result id = "+number);
        String page = "memberResults.html::pagecontent";
        model.addAttribute("page", page);
        model.addAttribute("raceId", number);

        String url= "http://localhost:9002/api/member/"+number;
        RestTemplate restTemplate = new RestTemplate();
        Member member = (Member) restTemplate.getForObject(url, Member.class);

        model.addAttribute("memberId", member.getId());
        model.addAttribute("firstname", member.getFirstname());
        model.addAttribute("lastname", member.getLastname());
        return "page";
    }
    @RequestMapping("system/ApplicationProperties")
    @ResponseBody
    public String memberResults() {
        applicationProperties.logApplicationProperties();
        return "Consult the log please";
    }
}
