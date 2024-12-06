package com.antilob.site.entity;

public class LastResult {
    private String id;


    private String raceName;


    private String location;


    private float distance;


    private int nbrParticipants;


    private String runnerLastname;


    private String runnerFirstname;


    private int place;


    private String time;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    };


    public String getRaceName() {
        return raceName;
    }

    public void setRaceName(String raceName) {
        this.raceName = raceName;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public float getDistance() {
        return distance;
    }

    public void setDistance(float distance) {
        this.distance = distance;
    }

    public int getNbrParticipants() {
        return nbrParticipants;
    }

    public void setNbrParticipants(int nbrParticipants) {
        this.nbrParticipants = nbrParticipants;
    }

    public String getRunnerLastname() {
        return runnerLastname;
    }

    public void setRunnerLastname(String runnerLastname) {
        this.runnerLastname = runnerLastname;
    }

    public String getRunnerFirstname() {
        return runnerFirstname;
    }

    public void setRunnerFirstname(String runnerFirstname) {
        this.runnerFirstname = runnerFirstname;
    }

    public int getPlace() {
        return place;
    }

    public void setPlace(int place) {
        this.place = place;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }
}
