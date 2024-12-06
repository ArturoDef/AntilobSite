package com.antilob.site.entity;


public class Race {

    private long id;

    private String  internalChallenge;

    private String date;

    private String  location;

    private String  country;

    private String  name;

    private int mainRaceid;

    private Challenge challenge;

    private int km;

    private int meter;

    private int nbrparticipants;

    private int nbrclub;

    private int homepage;
    private String url;

    private int memberCount;

    private String distance;

    public String getDate() {
        return date;
    }

    public String getDistance() {
        return distance;
    }

    public void setDistance() {
        this.distance = distance;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getInternalChallenge() {
        return internalChallenge;
    }

    public void setInternalChallenge(String internalChallenge) {
        this.internalChallenge = internalChallenge;
    }


    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public int getMainRaceId() {
        return mainRaceid;
    }

    public void setMainRaceId(int mainRaceId) {
        this.mainRaceid = mainRaceId;
    }

    public int getKm() {
        return km;
    }

    public void setKm(int km) {
        this.km = km;
    }

    public int getMeter() {
        return meter;
    }

    public void setMeter(int meter) {
        this.meter = meter;
    }

    public int getNbrparticipants() {
        return nbrparticipants;
    }

    public void setNbrparticipants(int nbrparticipants) {
        this.nbrparticipants = nbrparticipants;
    }

    public int getNbrclub() {
        return nbrclub;
    }

    public void setNbrclub(int nbrclub) {
        this.nbrclub = nbrclub;
    }

    public int getHomepage() {
        return homepage;
    }

    public void setHomepage(int homepage) {
        this.homepage = homepage;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Challenge getChallenge() {
        return challenge;
    }

    public void setChallenge(Challenge challenge) {
        this.challenge = challenge;
    }
}
